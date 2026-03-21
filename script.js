/* 
   RE.MATCH - Concrete Blueprint Wizard Logic
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // Safety Exit Protocol (ESC)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const form = document.querySelector('.protocol-wizard');
            if (form) form.reset();
            window.location.href = 'https://www.google.com/search?q=weather+portland';
        }
    });

    // Navigation State
    let currentStep = 1;
    const totalSteps = 4;
    const steps = document.querySelectorAll('.wizard-step');
    const progressIndicators = document.querySelectorAll('.progress-step');

    function updateWizard() {
        steps.forEach((step, index) => {
            step.classList.toggle('hidden', index + 1 !== currentStep);
        });

        progressIndicators.forEach((indicator, index) => {
            const stepNum = index + 1;
            indicator.classList.toggle('active', stepNum === currentStep);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Validation
    function validateStep(stepIndex) {
        const step = steps[stepIndex - 1];
        const requiredFields = step.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--text-error)';
                field.style.backgroundColor = '#fee2e2';
            } else {
                field.style.borderColor = 'var(--border-structural)';
                field.style.backgroundColor = '#ffffff';
            }
        });

        return isValid;
    }

    // Event Listeners
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

    // Dynamic Field Toggles
    const barrierYes = document.getElementById('barrier-yes');
    const barrierNo = document.getElementById('barrier-no');
    const barrierDetails = document.getElementById('barrier_details');

    if (barrierYes && barrierNo) {
        [barrierYes, barrierNo].forEach(el => {
            el.addEventListener('change', () => {
                barrierDetails.classList.toggle('hidden', !barrierYes.checked);
            });
        });
    }

    const prefEmail = document.getElementById('pref-email');
    const prefAnon = document.getElementById('pref-anon');
    const contactBox = document.getElementById('contact-info-box');

    if (prefEmail && prefAnon) {
        [prefEmail, prefAnon].forEach(el => {
            el.addEventListener('change', () => {
                contactBox.classList.toggle('hidden', !prefEmail.checked);
            });
        });
    }

    // PageClip Handlers
    const form = document.querySelector('.protocol-wizard');
    if (form && typeof Pageclip !== 'undefined') {
        Pageclip.form(form, {
            onSubmit: function() {
                if (!validateStep(totalSteps)) return false;
                const btn = document.getElementById('submit-btn');
                btn.disabled = true;
                btn.querySelector('.btn-text').innerText = "STRUCTURING BLUEPRINT...";
                return true;
            },
            onResponse: function(error) {
                if (!error) {
                    form.classList.add('hidden');
                    document.querySelector('.wizard-progress').classList.add('hidden');
                    document.getElementById('success-message').classList.remove('hidden');
                } else {
                    alert("STRUCTURAL ERROR: Transmission failed.");
                    const btn = document.getElementById('submit-btn');
                    btn.disabled = false;
                    btn.querySelector('.btn-text').innerText = "BUILD BLUEPRINT";
                }
            }
        });
    }
});
