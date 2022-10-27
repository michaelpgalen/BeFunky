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

// removes billing fields instead of hiding them, to avoid invalid fields
if (isBillingIssue === 'false') {
  document.querySelectorAll('[isBillingIssue]').forEach((element) => element.remove())
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
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      getData(event.target);
    });


const formSubmitButton = document.querySelector('input.button');
formSubmitButton.addEventListener("click", function (event){
  const invalids = document.querySelectorAll(':invalid');
  if (invalids.length == 0) {
    event.target.value = "Received";
    event.target.style.backgroundColor = 'DarkSeaGreen';
  }
})

// Responsive Menu
function toggleResponsive(menuHam) {
    let topNav = document.getElementById("topnav");
    if (topNav.className === "topnav") {
      topNav.className += " open";
    } else {
      topnav.className = "topnav";
    }
    menuHam.classList.toggle("change");
  } 