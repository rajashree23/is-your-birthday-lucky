const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBirthday = document.querySelector("#check-birthday");
const outputBox = document.querySelector("#output-box");

function checkBirthdayHandler() {
  let bday = dateOfBirth.value.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < bday.length; i++) {
    sum += parseInt(bday.charAt(i));
  }
  console.log(sum);
  if (sum % luckyNumber.value === 0) {
    outputBox.innerText = "Your birthday is lucky!!";
  } else {
    outputBox.innerText = "Your birthday is not lucky :(!";
  }
}

checkBirthday.addEventListener("click", checkBirthdayHandler);
