
// handle form screen state
let params = (new URL(document.location)).searchParams;
let isBillingIssue = params.get('isBillingIssue');
const billingIssueElems = document.querySelectorAll('[isBillingIssue]')

if (isBillingIssue === 'true') {
    billingIssueElems.forEach((elem) => elem.classList.remove('hidden'))
}


// form handling
function getData(form) {
    let formData = new FormData(form);
  
    // maybe print each value/field with for of 
    for (const [key, value] of formData.entries()) {
        console.log(`${key}, ${value}`);
      }
    // console.log(Object.fromEntries(formData));
    console.log(formData)
}
  
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    getData(event.target);
  });

