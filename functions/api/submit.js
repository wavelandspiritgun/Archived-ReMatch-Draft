// functions/api/submit.js
// Cloudflare Pages Function to handle the form POST

export async function onRequestPost(context) {
    try {
        // 1. Retrieve the D1 binding (named 'DB' in Cloudflare settings)
        const { DB } = context.env;
        
        // 2. Parse the incoming JSON body
        const formData = await context.request.json();

        // 3. Extract the key fields we want to index
        const alias = formData.alias || "Unknown Ghost";
        const email = formData.user_email || "";
        const location = formData.location || "N/A";
        const delivery_preference = formData.delivery_pref || "Anonymized";

        // 4. Insert into D1
        // Using 'json_object' if needed, but sqlite JSON column handles strings fine.
        await DB.prepare(`
            INSERT INTO intake_submissions (alias, email, location, delivery_preference, raw_data)
            VALUES (?, ?, ?, ?, ?)
        `)
        .bind(alias, email, location, delivery_preference, JSON.stringify(formData))
        .run();

        // 5. Return success response to the client
        return new Response(JSON.stringify({ success: true, message: "Transmission received." }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error("D1 Error:", err);
        return new Response(JSON.stringify({ success: false, message: "Internal server error: " + err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
