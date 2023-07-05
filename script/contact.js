document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.js-contact')) {
      const formFields = {
        firstName: {
          input: document.querySelector('.js-first-name'),
          errorMessage: document.querySelector('.js-error-message-first-name'),
          validate() {
            if (this.input.value === '') {
              this.input.classList.add('c-input--error');
              this.errorMessage.innerHTML = 'Gelieve uw voornaam in te vullen';
              return false;
            } else {
              this.input.classList.remove('c-input--error');
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
          removeError() {
            this.input.classList.remove('c-input--error');
            this.errorMessage.innerHTML = '';
          },
        },
        lastName: {
          input: document.querySelector('.js-last-name'),
          errorMessage: document.querySelector('.js-error-message-last-name'),
          validate() {
            if (this.input.value === '') {
              this.input.classList.add('c-input--error');
              this.errorMessage.innerHTML =
                'Gelieve uw achternaam in te vullen';
              return false;
            } else {
              this.input.classList.remove('c-input--error');
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
          removeError() {
            this.input.classList.remove('c-input--error');
            this.errorMessage.innerHTML = '';
          },
        },
        telephone: {
          input: document.querySelector('.js-telephone'),
          errorMessage: document.querySelector('.js-error-message-telephone'),
          validate() {
            if (this.input.value === '') {
              this.input.classList.add('c-input--error');
              this.errorMessage.innerHTML =
                'Gelieve uw telefoonnummer in te vullen';
              return false;
            } else {
              this.input.classList.remove('c-input--error');
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
          removeError() {
            this.input.classList.remove('c-input--error');
            this.errorMessage.innerHTML = '';
          },
        },
        email: {
          input: document.querySelector('.js-email'),
          errorMessage: document.querySelector('.js-error-message-email'),
          validate() {
            if (this.input.value === '') {
              this.input.classList.add('c-input--error');
              this.errorMessage.innerHTML =
                'Gelieve uw e-mailadres in te vullen';
              return false;
            } else {
              this.input.classList.remove('c-input--error');
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
          removeError() {
            this.input.classList.remove('c-input--error');
            this.errorMessage.innerHTML = '';
          },
        },
        message: {
          input: document.querySelector('.js-message'),
          errorMessage: document.querySelector('.js-error-message-message'),
          validate() {
            if (this.input.value === '') {
              this.input.classList.add('c-input--error');
              this.errorMessage.innerHTML = 'Gelieve uw bericht in te vullen';
              return false;
            } else {
              this.input.classList.remove('c-input--error');
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
          removeError() {
            this.input.classList.remove('c-input--error');
            this.errorMessage.innerHTML = '';
          },
        },
        privacyDisclaimerCheckbox: {
          input: document.querySelector('.js-privacy-disclaimer-checkbox'),
          errorMessage: document.querySelector(
            '.js-error-message-privacy-disclaimer-checkbox'
          ),
          validate() {
            if (!this.input.checked) {
              this.errorMessage.innerHTML =
                'Gelieve akkoord te gaan met de privacy disclaimer';
              return false;
            } else {
              this.errorMessage.innerHTML = '';
              return true;
            }
          },
        },
      };

      const submitButton = document.querySelector('.js-submit-button');

      const validateForm = () => {
        const fields = Object.values(formFields);
        const validFields = fields.map((field) => field.validate());
        const isFormValid = validFields.every((valid) => valid);

        submitButton.classList.toggle('u-disabled', !isFormValid);
        submitButton.disabled = !isFormValid;

        return isFormValid;
      };

      const removeError = (field) => {
        field.removeError();
        validateForm();
      };

      Object.values(formFields).forEach((field) => {
        field.input.addEventListener('blur', field.validate.bind(field));
        field.input.addEventListener('input', removeError.bind(null, field));
      });

      submitButton.addEventListener('click', validateForm);
      formFields.privacyDisclaimerCheckbox.input.addEventListener(
        'click',
        validateForm
      );
    }
  });
