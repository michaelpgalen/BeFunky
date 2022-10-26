
// handle form screen state
let params = (new URL(document.location)).searchParams;
let isBillingIssue = params.get('isBillingIssue');
let isSignedIn = params.get('isSignedIn');
const billingIssueElems = document.querySelectorAll('[isBillingIssue]')
const errorMessage = document.querySelector('.error-message');

if (isBillingIssue === 'true') {
    billingIssueElems.forEach((elem) => elem.classList.remove('hidden'))
}

if (isSignedIn === 'false') {
    errorMessage.classList.remove('hidden');
}


// form handling
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
