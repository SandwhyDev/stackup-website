const english = {
  homeLabel: 'Stack Up, back to home', navLabel: 'Main navigation', languageLabel: 'Choose language',
  navAbout: 'About the game', navHow: 'How to play', navPrivacy: 'Privacy',
  heroTitle: 'Stack Up — Stack. Perfect. Climb Higher.',
  posterAlt: 'Stack Up poster: blue logo above a bright sky, sunrise, mountains, and a blue block tower.',
  explore: 'Explore the game', taglineLabel: 'Stack Up tagline', tagStack: 'STACK', tagClimb: 'CLIMB HIGHER', tagFocus: 'FOCUS GROWS',
  introEyebrow: 'A RELAXING ARCADE GAME', introTitle: 'Build as high<br /><em>as you can.</em>',
  introP1: 'Take a quick break and test your timing. In Stack Up, every block you place determines how high your tower can climb.',
  introP2: 'Place each block on top of the previous one. A precise landing earns a <strong>Perfect</strong>. A miss makes the next landing area smaller.',
  seeHow: 'See how to play', howEyebrow: 'HOW TO PLAY', stepsTitle: 'Easy to start.<br /><em>Challenging to master.</em>',
  step1Title: 'Stack blocks', step1Body: 'Place each new block on the one below it and watch your tower rise.',
  step2Title: 'Find the perfect fit', step2Body: 'Line it up precisely to earn a Perfect and keep your platform wide.',
  step3Title: 'Keep climbing', step3Body: 'The overhanging part gets cut away. The smaller the platform, the greater the challenge.',
  step4Title: 'Focus grows', step4Body: 'As the tower rises, every placement calls for more attention and more precise timing.',
  closingEyebrow: 'HOW HIGH CAN YOU GO?', closingTitle: 'One more block.<br /><em>One step higher.</em>',
  closingTagline: 'Stack. Perfect. Climb Higher.',
  policyEyebrow: 'STACK UP / PRIVACY', policyHeading: 'Privacy <em>Policy.</em>', policyIntro: 'Privacy information for Stack Up players.', policyToc: 'ON THIS PAGE', privacyFooter: 'Privacy Policy',
  statusTitle: 'Document status', statusBody: 'This page is a draft privacy policy for Stack Up by Hundreapps. The available game description explains the gameplay but does not describe data collection or third-party services. These practices must be confirmed before this policy is used for an app release.',
  dataTitle: 'Data and services', dataBody: 'The developer needs to explain whether Stack Up collects or processes personal data, device data, usage data, or gameplay data. If the app uses analytics, ads, accounts, cloud storage, or other third-party services, this section must identify the services, the data involved, the purpose of processing, and links to their policies.',
  verifyTitle: 'Confirm before release', verify1: 'What data is collected and why.', verify2: 'Whether data is shared with ad, analytics, or other providers.', verify3: 'How long data is retained and how it is protected.', verify4: 'Whether the game is intended for children or has an age restriction.',
  rightsTitle: 'Your rights', rightsBody: 'Once the app’s data practices are confirmed, this section should explain how players can request access to, correction of, or deletion of applicable data, and how to contact the developer with privacy questions. Available rights may vary by location and by the type of data processed.',
  contactTitle: 'Contact', contactHeading: 'Contact and updates', contactBody: 'For privacy questions about Stack Up, contact Hundreapps at <a class="inline-link" href="mailto:hundredapps@gmail.com">hundredapps@gmail.com</a>. An effective date will be added when the final policy is published. If data practices change, this page will be updated to reflect how the app works.',
  backHome: '← Back to home'
};

const original = new Map();
for (const element of document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-aria], [data-i18n-alt]')) {
  if (element.dataset.i18n) original.set(element, element.textContent);
  if (element.dataset.i18nHtml) original.set(element, element.innerHTML);
  if (element.dataset.i18nAria) original.set(element, element.getAttribute('aria-label'));
  if (element.dataset.i18nAlt) original.set(element, element.alt);
}
const originalTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const originalDescription = description.content;

function setLanguage(language) {
  const selected = language === 'en' ? 'en' : 'id';
  document.documentElement.lang = selected;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = selected === 'en' ? english[element.dataset.i18n] : original.get(element);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = selected === 'en' ? english[element.dataset.i18nHtml] : original.get(element);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', selected === 'en' ? english[element.dataset.i18nAria] : original.get(element));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = selected === 'en' ? english[element.dataset.i18nAlt] : original.get(element);
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selected));
  });
  const isPolicy = document.body.classList.contains('policy-page');
  document.title = selected === 'en' ? (isPolicy ? 'Privacy Policy — Stack Up' : 'Stack Up — Stack. Perfect. Climb Higher.') : originalTitle;
  description.content = selected === 'en' ? (isPolicy ? 'Privacy policy information for the Stack Up game.' : 'Stack Up is a relaxing yet challenging block-stacking game. Chase Perfect landings, keep your platform wide, and build as high as you can.') : originalDescription;
  try { localStorage.setItem('stackup-language', selected); } catch (_) { /* Storage may be unavailable. */ }
}

let savedLanguage = 'id';
try { savedLanguage = localStorage.getItem('stackup-language') || 'id'; } catch (_) { /* Use Indonesian. */ }
setLanguage(savedLanguage);
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
