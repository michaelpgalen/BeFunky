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
    console.log(Object.fromEntries(formData));
}

const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      getData(event.target);
    });

// handle form file uploads
const inputFile = document.querySelector('input[type=file]');
const attachmentPreview = document.querySelector('.attachment-preview')

inputFile.addEventListener('change', updatePreview);
function updatePreview() {
  attachmentPreview.innerHTML = '';

  const curFiles = inputFile.files;
  if (curFiles.length === 0) {
    attachmentPreview.innerHTML = "No files currently attached";
  } else {
    attachmentPreview.innerHTML = `Attached: ${curFiles[0].name}, size: ${returnFileSize(curFiles[0].size)}`
  }
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}



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