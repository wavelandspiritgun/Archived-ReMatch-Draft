/* 
   Re.Match - The Constraint-Based Matching Engine
   Simplified FormSubmit Logic for GitHub Pages
*/

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('intake-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    
    const barrierYesBtn = document.getElementById('barrier-yes');
    const barrierNoBtn = document.getElementById('barrier-no');
    const barrierDetailsBox = document.getElementById('barrier-details-box');

    const prefEmailBtn = document.getElementById('pref-email');
    const prefAnonBtn = document.getElementById('pref-anon');
    const contactInfoBox = document.getElementById('contact-info-box');

    // Safety Exit Logic (ESC Key)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            form.reset();
            window.location.href = 'https://www.google.com/search?q=weather';
        }
    });

    // Toggle Barrier Details
    function checkBarrierStatus() {
        if (barrierYesBtn && barrierYesBtn.checked) {
            barrierDetailsBox.classList.remove('hidden');
        } else if (barrierDetailsBox) {
            barrierDetailsBox.classList.add('hidden');
        }
    }

    if (barrierYesBtn && barrierNoBtn) {
        barrierYesBtn.addEventListener('change', checkBarrierStatus);
        barrierNoBtn.addEventListener('change', checkBarrierStatus);
    }

    // Toggle Contact Info
    function checkContactPref() {
        if (prefEmailBtn && prefEmailBtn.checked) {
            contactInfoBox.classList.remove('hidden');
        } else if (contactInfoBox) {
            contactInfoBox.classList.add('hidden');
        }
    }

    if (prefEmailBtn && prefAnonBtn) {
        prefEmailBtn.addEventListener('change', checkContactPref);
        prefAnonBtn.addEventListener('change', checkContactPref);
    }

    // Form Submission (Primary: FormSubmit.co)
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        submitBtn.disabled = true;
        const originalText = submitBtn.querySelector('.btn-text').innerText;
        submitBtn.querySelector('.btn-text').innerText = "Transmitting...";

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        
        // FormSubmit AJAX Endpoint
        const endpoint = "https://formsubmit.co/ajax/EinherjarEndeavorsReMatch@proton.me";

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(object)
            });

            if (response.ok) {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
                // Scroll to top to ensure they see the success message
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const result = await response.json();
                console.error("Transmission Error:", result);
                alert("Problem transmitting: " + (result.message || "Please check your connection and try again."));
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').innerText = originalText;
            }

        } catch (error) {
            console.error("Network error:", error);
            alert("Connection error. Ensure your browser allows cross-site requests.");
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').innerText = originalText;
        }
    });
});