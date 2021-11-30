//set signed up users(only first time)
if (localStorage.getItem("signedUpUsers") == undefined) {
  localStorage.setItem("signedUpUsers", 0);
}

//login/sign up system

let actionBtn = document.querySelector("#actBtn");
let actionType = document.querySelector(".actionText");

let nameEntered = document.querySelector("#name");
let emailEntered = document.querySelector("#email");
let passwordEntered = document.querySelector("#password");

let sexContainer = document.querySelector(".sexContainer");
let radioMale = document.querySelector("#sexTypeMale");
let radioFemale = document.querySelector("#sexTypeFemale");

let errorText = document.querySelector(".errorText");
let successText = document.querySelector(".successText");

actionBtn.addEventListener("click", () => {
  errorText.innerText = "";
  successText.innerText = "";

  if (actionType.innerText == "Sign up") {
    if (nameEntered.value !== "") {
      if (validateEmail(emailEntered.value)) {
        if (passwordEntered.value != "") {
          if (radioMale.checked || radioFemale.checked) {
            signedUpUsers = localStorage.getItem("signedUpUsers");

            flagUserExsists = false;
            for (let i = 0; i < signedUpUsers; i++) {
              let userEmail = localStorage.getItem("email" + i);

              if (userEmail == emailEntered.value) {
                flagUserExsists = true;
                break;
              }
            }

            if (!flagUserExsists) {
              localStorage.setItem("name" + signedUpUsers, nameEntered.value);
              localStorage.setItem("email" + signedUpUsers, emailEntered.value);
              localStorage.setItem(
                "password" + signedUpUsers,
                passwordEntered.value
              );

              if (radioMale.checked) {
                localStorage.setItem("sex" + signedUpUsers, "Male");
              } else {
                localStorage.setItem("sex" + signedUpUsers, "Female");
              }

              localStorage.setItem("signedUpUsers", Number(signedUpUsers) + 1);

              errorText.innerText = "";
              successText.innerText = "user signed up correctly";

              nameEntered.value = "";
              emailEntered.value = "";
              passwordEntered.value = "";
              radioMale.checked = false;
              radioFemale.checked = false;
            } else {
              errorText.innerText = "user already exsists";
            }
          } else {
            errorText.innerText = "Sex not selected";
          }
        } else {
          errorText.innerText = "invaild password";
        }
      } else {
        errorText.innerText = "invaild email";
      }
    } else {
      errorText.innerText = "invaild name";
    }
  } else if (actionType.innerText == "Login") {
    if (validateEmail(emailEntered.value)) {
      if (passwordEntered.value != "") {
        signedUpUsers = localStorage.getItem("signedUpUsers");

        flagUserFound = false;
        for (let i = 0; i < signedUpUsers; i++) {
          let userEmail = localStorage.getItem("email" + i);

          if (emailEntered.value == userEmail) {
            let userPass = localStorage.getItem("password" + i);
            if (passwordEntered.value == userPass) {
              localStorage.setItem("loggedInUser", i);
              location.href = "./home.html";
            } else {
              errorText.innerText = "wrong password";
            }
            flagUserFound = true;
          }
        }

        if (!flagUserFound) {
          errorText.innerText = "user not signed up";
        }
      } else {
        errorText.innerText = "invaild password";
      }
    } else {
      errorText.innerText = "invaild email";
    }
  } else {
    alert("action type non defined!");
  }
});

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

//action changer function (login or sign up)
let actionChanger = document.querySelector("#changeAct");
let nameField = document.querySelector(".signUpName");
let pageTitle = document.querySelector("title");

actionChanger.addEventListener("click", () => {
  nameEntered.value = "";
  emailEntered.value = "";
  passwordEntered.value = "";

  errorText.innerText = "";
  successText.innerText = "";

  if (actionChanger.innerText === "Not signed up yet?") {
    actionType.innerText = "Sign up";
    actionBtn.value = "sign up";
    pageTitle.innerText = "skill up | Sign up";
    actionChanger.innerText = "Already sign up?";
    nameField.style.display = "block";
    sexContainer.style.display = "block";
  } else if (actionChanger.innerText === "Already sign up?") {
    actionType.innerText = "Login";
    actionBtn.value = "login";
    pageTitle.innerText = "skill up | Login";
    actionChanger.innerText = "Not signed up yet?";
    nameField.style.display = "none";
    sexContainer.style.display = "none";
  } else {
    alert("action changer not valid!");
  }
});
