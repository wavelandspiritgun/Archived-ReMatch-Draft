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

    const prefEmailBtn = document.getElementById('pref-email');
    const prefAnonBtn = document.getElementById('pref-anon');
    const contactInfoBox = document.getElementById('contact-info-box');

    // 1.5 Safety Exit Logic
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            // Wipe the form
            form.reset();
            // Redirect to weather
            window.location.href = 'https://www.google.com/search?q=weather';
        }
    });

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

    // 2.5 Contact Info Logic
    function checkContactPref() {
        if (prefEmailBtn.checked === true) {
            contactInfoBox.classList.remove('hidden');
        } else {
            contactInfoBox.classList.add('hidden');
        }
    }

    if (prefEmailBtn && prefAnonBtn) {
        prefEmailBtn.addEventListener('change', checkContactPref);
        prefAnonBtn.addEventListener('change', checkContactPref);
    }

    // 3. The Logic for when the user clicks "Send Secure Intake Form"
    form.addEventListener('submit', async function(event) {
        
        // Stops the browser from refreshing the page
        event.preventDefault();
        
        // Change the button so they can't click it twice
        submitBtn.disabled = true;
        const originalText = submitBtn.querySelector('.btn-text').innerText;
        submitBtn.querySelector('.btn-text').innerText = "Transmitting...";

        // Gather all the data
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const apiURL = form.action;

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.ok) {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
            } else {
                console.log("Transmission Error:", result);
                alert("Problem transmitting: " + (result.message || "Please try again."));
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').innerText = originalText;
            }

        } catch (error) {
            console.error("Transmission error:", error);
            alert("Connection error. Check your internet.");
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').innerText = originalText;
        }
    });

});