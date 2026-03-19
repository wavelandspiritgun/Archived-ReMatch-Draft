/* 
   Re.Match - The Constraint-Based Matching Engine
   Simplified Javascript Logic
*/

// Wait for the HTML to fully load before running this code
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Grab all the pieces of the HTML we need to interact with
    const form = document.getElementById('intake-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    
    const barrierYesBtn = document.getElementById('barrier-yes');
    const barrierNoBtn = document.getElementById('barrier-no');
    const barrierDetailsBox = document.getElementById('barrier-details-box');

    // 2. The Logic to show/hide the "Please describe the barriers" box
    function checkBarrierStatus() {
        if (barrierYesBtn.checked === true) {
            // If "Yes" is checked, remove the 'hidden' CSS class to show the box
            barrierDetailsBox.classList.remove('hidden');
        } else {
            // If "No" is checked, add the 'hidden' CSS class back to hide it
            barrierDetailsBox.classList.add('hidden');
        }
    }

    // Tell the radio buttons to run the function above whenever they are clicked
    if (barrierYesBtn && barrierNoBtn) {
        barrierYesBtn.addEventListener('change', checkBarrierStatus);
        barrierNoBtn.addEventListener('change', checkBarrierStatus);
    }

    // 3. The Logic for when the user clicks "Send Secure Intake Form"
    form.addEventListener('submit', async function(event) {
        
        // Stops the browser from refreshing the page (which is what forms normally do)
        event.preventDefault();
        
        // Change the button so they can't click it twice while it's sending
        submitBtn.disabled = true;
        submitBtn.innerText = "Transmitting to Operator...";
        submitBtn.style.backgroundColor = "#94a3b8"; // Make it look gray/disabled

        // Gather all the data the user typed into the form
        const formData = new FormData(form);
        const formspreeEmailURL = form.action; // This gets "https://formspree.io/f/xbdzyvjb" from the HTML

        try {
            // Send the data to Formspree using the Fetch API (a way for browsers to talk to servers)
            const response = await fetch(formspreeEmailURL, {
                method: 'POST', // POST means we are sending data, not getting it
                body: formData, // The actual data
                headers: {
                    'Accept': 'application/json' // Tells Formspree we want a clean background response
                }
            });

            // Check if Formspree said "OK, I got it!"
            if (response.ok === true) {
                // Hide the form entirely
                form.classList.add('hidden');
                // Show the green Success message
                successMessage.classList.remove('hidden');
            } else {
                // If Formspree rejected it (e.g. server down)
                alert("There was a problem transmitting your intake. Please try again.");
                // Reset the button so they can try again
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Secure Intake Form";
                submitBtn.style.backgroundColor = "#3b82f6"; // Back to blue
            }

        } catch (error) {
            // This happens if their internet disconnects entirely while sending
            console.error("Transmission error:", error);
            alert("Connection timed out. Please check your internet or use the email link.");
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Secure Intake Form";
            submitBtn.style.backgroundColor = "#3b82f6"; // Back to blue
        }
    });

});