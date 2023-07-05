document.addEventListener('DOMContentLoaded', function () {
  let validFirstName = false;
  let validLastName = false;
  let validTelephone = false;
  let validEmail = false;
  let validMessage = false;
  let validPrivacyDisclaimer = false;

  const firstName = document.querySelector('.js-first-name');
  const lastName = document.querySelector('.js-last-name');
  const telephone = document.querySelector('.js-telephone');
  const email = document.querySelector('.js-email');
  const message = document.querySelector('.js-message');
  const privacyDisclaimerCheckbox = document.querySelector(
    '.js-privacy-disclaimer-checkbox'
  );
  const submitButton = document.querySelector('.js-submit-button');

  const checkFirstName = () => {
    console.log('checkFirstName');
    if (firstName.value === '') {
      firstName.classList.add('c-input--error');
      document.querySelector('.js-error-message-first-name').innerHTML =
        'Gelieve uw voornaam in te vullen';
      submitButton.classList.add('u-disabled');
      validFirstName = false;
    } else {
      firstName.classList.remove('c-input--error');
      document.querySelector('.js-error-message-first-name').innerHTML = '';
      validFirstName = true;
    }
  };

  const removeErrorFirstName = () => {
    firstName.classList.remove('c-input--error');
    document.querySelector('.js-error-message-first-name').innerHTML = '';
  };

  const checkLastName = () => {
    console.log('checkLastName');
    if (lastName.value === '') {
      lastName.classList.add('c-input--error');
      document.querySelector('.js-error-message-last-name').innerHTML =
        'Gelieve uw achternaam in te vullen';
      submitButton.classList.add('u-disabled');
      validLastName = false;
    } else {
      lastName.classList.remove('c-input--error');
      document.querySelector('.js-error-message-last-name').innerHTML = '';
      validLastName = true;
    }
  };

  const removeErrorLastName = () => {
    lastName.classList.remove('c-input--error');
    document.querySelector('.js-error-message-last-name').innerHTML = '';
  };

  const checkTelephone = () => {
    console.log('checkTelephone');
    if (telephone.value === '') {
      telephone.classList.add('c-input--error');
      document.querySelector('.js-error-message-telephone').innerHTML =
        'Gelieve uw telefoonnummer in te vullen';
      submitButton.classList.add('u-disabled');
      validTelephone = false;
    } else {
      telephone.classList.remove('c-input--error');
      document.querySelector('.js-error-message-telephone').innerHTML = '';
      validTelephone = true;
    }
  };

  const removeErrorTelephone = () => {
    telephone.classList.remove('c-input--error');
    document.querySelector('.js-error-message-telephone').innerHTML = '';
  };

  const checkEmail = () => {
    console.log('checkEmail');
    if (email.value === '') {
      email.classList.add('c-input--error');
      document.querySelector('.js-error-message-email').innerHTML =
        'Gelieve uw e-mailadres in te vullen';
      submitButton.classList.add('u-disabled');
      validEmail = false;
    } else {
      email.classList.remove('c-input--error');
      document.querySelector('.js-error-message-email').innerHTML = '';
      validEmail = true;
    }
  };

  const removeErrorEmail = () => {
    email.classList.remove('c-input--error');
    document.querySelector('.js-error-message-email').innerHTML = '';
  };

  const checkMessage = () => {
    console.log('checkMessage');
    if (message.value === '') {
      message.classList.add('c-input--error');
      document.querySelector('.js-error-message-message').innerHTML =
        'Gelieve uw bericht in te vullen';
      submitButton.classList.add('u-disabled');
      validMessage = false;
    } else {
      message.classList.remove('c-input--error');
      document.querySelector('.js-error-message-message').innerHTML = '';
      validMessage = true;
    }
  };

  const removeErrorMessage = () => {
    message.classList.remove('c-input--error');
    document.querySelector('.js-error-message-message').innerHTML = '';
  };

  const checkForm = () => {
    console.log('checkForm');

    checkFirstName();
    checkLastName();
    checkTelephone();
    checkEmail();
    checkMessage();

    //Check if privacy disclaimer is checked
    if (privacyDisclaimerCheckbox.checked === false) {
      document.querySelector(
        '.js-error-message-privacy-disclaimer-checkbox'
      ).innerHTML = 'Gelieve akkoord te gaan met de privacy disclaimer';
      validPrivacyDisclaimer = false;
    } else {
      document.querySelector(
        '.js-error-message-privacy-disclaimer-checkbox'
      ).innerHTML = '';
      validPrivacyDisclaimer = true;
    }

    if (
      validFirstName === false ||
      validLastName === false ||
      validTelephone === false ||
      validEmail === false ||
      validMessage === false ||
      validPrivacyDisclaimer === false
    ) {
      submitButton.classList.add('u-disabled');
      console.log('form not valid');
      return false;
    } else {
      submitButton.classList.remove('u-disabled');
      submitButton.removeAttribute('disabled');
      console.log('form valid');
      return true;
    }
  };

  firstName.addEventListener('blur', checkFirstName);
  firstName.addEventListener('input', removeErrorFirstName);
  lastName.addEventListener('blur', checkLastName);
  lastName.addEventListener('input', removeErrorLastName);
  telephone.addEventListener('blur', checkTelephone);
  telephone.addEventListener('input', removeErrorTelephone);
  email.addEventListener('blur', checkEmail);
  email.addEventListener('input', removeErrorEmail);
  message.addEventListener('blur', checkMessage);
  message.addEventListener('input', removeErrorMessage);
  submitButton.addEventListener('click', checkForm);
  privacyDisclaimerCheckbox.addEventListener('click', checkForm);
});
