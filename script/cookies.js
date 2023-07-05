// Function to check if the user has already accepted cookies
function hasAcceptedCookies() {
  return localStorage.getItem('cookieAccepted') === 'true';
}

// Function to set the cookie acceptance status
function setCookieAccepted() {
  localStorage.setItem('cookieAccepted', 'true');
}

// Function to show the popup if cookies are not accepted
function showCookiePopup() {
  if (!hasAcceptedCookies()) {
    document.getElementById('cookie-popup').style.display = 'flex';
  }
}

// Function to hide the popup and set the cookie acceptance status
function acceptCookies() {
  document.getElementById('cookie-popup').style.display = 'none';
  setCookieAccepted();
}

document.addEventListener('DOMContentLoaded', function () {
  //Read cookieAccepted from localStorage
  if (hasAcceptedCookies()) {
    document.getElementById('cookie-popup').style.display = 'none';
  }

  // Add event listener to the accept button
  document
    .getElementById('cookie-accept')
    .addEventListener('click', acceptCookies);
});

// Call the showCookiePopup function on page load
window.addEventListener('load', showCookiePopup);
