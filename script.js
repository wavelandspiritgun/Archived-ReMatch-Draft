/* 
   RE.MATCH - Clinical Archive Overhaul
   Task 4: Wizard Logic & Validation
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Safety Exit Protocol
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const form = document.querySelector('.protocol-wizard');
            if (form) form.reset();
            window.location.href = 'https://www.google.com/search?q=weather';
        }
    });

    // Wizard Navigation State
    let currentStep = 1;
    const totalSteps = 4;
    const steps = document.querySelectorAll('.wizard-step');
    const progressIndicators = document.querySelectorAll('.progress-step');

    function updateWizard() {
        // Update Sections
        steps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
            }
        });

        // Update Progress Bar
        progressIndicators.forEach((indicator, index) => {
            const stepNum = index + 1;
            indicator.classList.remove('active', 'completed');
            if (stepNum === currentStep) {
                indicator.classList.add('active');
            } else if (stepNum < currentStep) {
                indicator.classList.add('completed');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Validate Required Fields for current step
    function validateStep(stepIndex) {
        const step = steps[stepIndex - 1];
        const requiredInputs = step.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--text-error)';
                input.style.backgroundColor = 'var(--bg-error)';
            } else {
                input.style.borderColor = 'var(--border-clinical)';
                input.style.backgroundColor = 'var(--bg-mute)';
            }
        });

        return isValid;
    }

    // Navigation Listeners
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateWizard();
                }
            }
        });
    });

    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateWizard();
            }
        });
    });

    // Form Logic Toggles
    const barrierYesBtn = document.getElementById('barrier-yes');
    const barrierNoBtn = document.getElementById('barrier-no');
    const barrierDetailsBox = document.getElementById('barrier-details-box');

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

    const prefEmailBtn = document.getElementById('pref-email');
    const prefAnonBtn = document.getElementById('pref-anon');
    const contactInfoBox = document.getElementById('contact-info-box');

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

    // PageClip & D1 Dual-Transmission Protocol
    const form = document.querySelector('.protocol-wizard');
    if (form) {
        // We use a manual fetch for D1 redundancy before/during PageClip transmission
        async function transmitToD1(data) {
            try {
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                return response.ok;
            } catch (err) {
                console.error("D1 Transmission Failure:", err);
                return false;
            }
        }

        if (typeof Pageclip !== 'undefined') {
            Pageclip.form(form, {
                onSubmit: function (event) {
                    if (!validateStep(totalSteps)) return false;
                    
                    const submitBtn = document.getElementById('submit-btn');
                    submitBtn.disabled = true;
                    const btnText = submitBtn.querySelector('.btn-text');
                    if (btnText) btnText.innerText = "TRANSMITTING TO ARCHIVE...";

                    // Extract data for D1
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());
                    transmitToD1(data); // Fire and forget D1 backup

                    return true; 
                },
                onResponse: function (error, response) {
                    const submitBtn = document.getElementById('submit-btn');
                    if (!error) {
                        form.classList.add('hidden');
                        document.querySelector('.wizard-progress').classList.add('hidden');
                        document.getElementById('success-message').classList.remove('hidden');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        console.error("Archive Transmission Error:", error);
                        alert("CRITICAL: Transmission Interrupted. Protocol failed to sync.");
                        submitBtn.disabled = false;
                        const btnText = submitBtn.querySelector('.btn-text');
                        if (btnText) btnText.innerText = "RE-INITIATE TRANSMISSION";
                    }
                }
            });
        }
    }
});
