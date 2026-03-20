/* 
   Re.Match - The Constraint-Based Matching Engine
   PageClip Professional Intake Logic
*/

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.pageclip-form');
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
            if (form) form.reset();
            window.location.href = 'https://www.google.com/search?q=weather';
        }
    });

    // Toggle Barrier Details
    function checkBarrierStatus() {
        if (barrierYesBtn && barrierYesBtn.checked) {
            if (barrierDetailsBox) barrierDetailsBox.classList.remove('hidden');
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
            if (contactInfoBox) contactInfoBox.classList.remove('hidden');
        } else if (contactInfoBox) {
            contactInfoBox.classList.add('hidden');
        }
    }

    if (prefEmailBtn && prefAnonBtn) {
        prefEmailBtn.addEventListener('change', checkContactPref);
        prefAnonBtn.addEventListener('change', checkContactPref);
    }

    // PageClip AJAX Initialization
    if (form) {
        Pageclip.form(form, {
            onSubmit: function (event) {
                // Change the button text while transmitting
                submitBtn.disabled = true;
                const btnText = submitBtn.querySelector('.btn-text');
                if (btnText) btnText.innerText = "Transmitting...";
                return true; // Return true to continue with the submission
            },
            onResponse: function (error, response) {
                if (!error) {
                    // Mission Success: Hide the form and show the success message
                    form.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Something went wrong
                    console.error("PageClip Error:", error);
                    alert("Transmission Error. Check your internet or try again later.");
                    submitBtn.disabled = false;
                    const btnText = submitBtn.querySelector('.btn-text');
                    if (btnText) btnText.innerText = "Initiate Sequence";
                }
            }
        });
    }
});