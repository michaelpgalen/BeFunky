
// handle form screen state
let params = (new URL(document.location)).searchParams;
let isBillingIssue = params.get('isBillingIssue');
let isSignedIn = params.get('isSignedIn');
const billingIssueElems = document.querySelectorAll('[isBillingIssue]');
const errorMessage = document.querySelector('.error-message');
const attachmentSection = document.getElementById('attachment-section');

if (isSignedIn === 'false') {
    errorMessage.classList.remove('hidden');
}

let billingFragment = new DocumentFragment();

let billingFields = document.createElement('fieldset');
billingFragment.append(billingFields);
let legend = document.createElement('legend');
legend.innerHTML = "What are the last 4 digits and expiration date of your credit card?*";
billingFields.append(legend);
let divCC = document.createElement('div');
divCC.className = "cc";
billingFields.append(divCC);
let labelCCDigits = document.createElement('label');
labelCCDigits.for = "ccDigits";
divCC.append(labelCCDigits);
let inputCCDigits = document.createElement('input');
inputCCDigits.type = "text";
inputCCDigits.pattern = "[0-9]*";
inputCCDigits.maxlength = "4";
inputCCDigits.id = "ccDigits";
inputCCDigits.name = "ccDigits";
inputCCDigits.placeholder = "****";
inputCCDigits.setAttribute("required", "");
divCC.append(inputCCDigits);
let divCCExpir = document.createElement('div');
divCCExpir.className = "ccExpir";
divCC.append(divCCExpir);
let labelCCExpirMM = document.createElement('label');
labelCCExpirMM.for = "ccExpirMM";
divCCExpir.append(labelCCExpirMM);
let inputCCExpirMM = document.createElement('input');
inputCCExpirMM.type = "tel";
inputCCExpirMM.name = "ccExpirMM";
inputCCExpirMM.id = "ccExpirMM";
inputCCExpirMM.placeholder = "MM";
inputCCExpirMM.pattern = "[0-9]*";
inputCCExpirMM.maxlength = "2";
inputCCExpirMM.setAttribute("required", "");
divCCExpir.append(inputCCExpirMM);
let expirDivider = document.createElement('div');
expirDivider.innerHTML = '/';
expirDivider.className = 'border';
divCCExpir.append(expirDivider);
let labelCCExpirYY = document.createElement('label');
labelCCExpirYY.for = "ccExpirYY";
divCCExpir.append(labelCCExpirYY);
let inputCCExpirYY = document.createElement('input');
inputCCExpirYY.type = "tel";
inputCCExpirYY.name = "ccExpirYY";
inputCCExpirYY.id = "ccExpirYY";
inputCCExpirYY.placeholder = "YY";
inputCCExpirYY.pattern = "[0-9]*";
inputCCExpirYY.maxlength = "2";
inputCCExpirYY.setAttribute("required", "");
divCCExpir.append(inputCCExpirYY);

let labelLastCharge = document.createElement('label');
labelLastCharge.for = "last-charge";
labelLastCharge.innerHTML = "What is the date of your last charge?*";
let inputLastCharge = document.createElement('input');
billingFragment.append(labelLastCharge);
inputLastCharge.type = "date";
inputLastCharge.name = "last-charge";
inputLastCharge.id = "last-charge";
inputLastCharge.setAttribute("required", "");
billingFragment.append(inputLastCharge);

if (isBillingIssue === 'true') {
    attachmentSection.before(billingFragment);
    // billingIssueElems.forEach((elem) => elem.classList.remove('hidden'))
}

// form Submit handling
function getData(form) {
    let formData = new FormData(form);
  
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

    console.log(Object.fromEntries(formData));
}

const form = document.getElementById("form");
if (form) {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        getData(event.target);
      });
}

// Responsive Menu
function toggleResponsive() {
    let topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
      topNav.className += " open";
    } else {
      topnav.className = "topnav";
    }
  } 
