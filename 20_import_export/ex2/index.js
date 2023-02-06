import './index.css';

const cookieConsentButton = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');
const isCookieClick = localStorage.getItem('buttonClicked');

cookieConsentButton.addEventListener('click', function() {
   localStorage.setItem('buttonClicked', 'true');
   cookieConsent.remove();
});

if (isCookieClick === 'true') {
   cookieConsent.remove();
}