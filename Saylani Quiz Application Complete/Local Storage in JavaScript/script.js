// Local Storage in JavaScript

let registration_Form = () => {
  event.preventDefault();

  let email = document.getElementById("email");
  let form_name = document.getElementById("form_name");
  let phone_number = document.getElementById("phone_number");
  let password = document.getElementById("Password");
  let confirm_password = document.getElementById("Confirm_Password");

  if (email.value == "") {
    Swal.fire({
      icon: "error",
      title: "Email should not be empty ...",
      text: "Please fill the required field !",
    });
  } else if (form_name.value == "") {
    Swal.fire({
      icon: "error",
      title: "Name should not be empty ...",
      text: "Please fill the required field !",
    });
  } else if (phone_number.value == "") {
    Swal.fire({
      icon: "error",
      title: "Phone Number should not be empty ...",
      text: "Please fill the required field !",
    });
  } else if (password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Password should not be empty ...",
      text: "Please fill the required field !",
    });
  } else if (confirm_password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Confirm Password should not be empty ...",
      text: "Please fill the required field !",
    });
  } else if (confirm_password.value !== "") {
    if (password.value != confirm_password.value) {
      Swal.fire({
        icon: "error",
        title: "Confirm Password should match the entered password ...",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: ` ${form_name.value} has Signed Up Successfully  `,
      });

      // Here, we are going to create an object of our user data

      let obj_user_data = {
        email: email.value,
        form_name: form_name.value,
        phone_number: phone_number.value,
        password: password.value,
        confirm_password: confirm_password.value,
      };

      localStorage.setItem("User Data", JSON.stringify(obj_user_data));

      let get_data = JSON.parse(localStorage.getItem("User Data"));

      console.log(get_data);

      // setting the key and value of 'email' in the local storage , to access them at the time of sign in process.
      localStorage.setItem("email", email.value);

      // setting the key and value of 'password' in the local storage , to access them at the time of sign in process.
      localStorage.setItem("password", password.value);

      // setting the key and value of 'User name' in the local storage , to access them at the time of sign in process.
      localStorage.setItem(
        "Name of user",
        form_name.value
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );

      setTimeout(() => {
        window.location.href = "./Log_In.html";
      }, 1000);
      //   it will store two things
      // 1. What are u saving in your local storage
      // 2. With which name your are saving something in your local storage

      //   localStorage.setItem("User Data", JSON.stringify(obj_user_data));
      //   let get_user_data = JSON.parse(localStorage.getItem("User Data"));

      //   console.log(get_user_data);
    }
  }
};

// ---------------------------------------------------------------------------------

// Till yet , we have successfully covered the registration of the 'user' functionality in our website. Now, it's time to discuss the 'logIn' functionality of our website.

// Now, we have to create a function for login functionality:

login_btn = document.getElementById("log_in_btn");

let log_in_email = document.getElementById("Login_email");
let log_in_password = document.getElementById("Login_Password");

let Login_In_Func = () => {
  event.preventDefault();

  let stored_Email = localStorage.getItem("email");
  let stored_password = localStorage.getItem("password");

  // If Email value is empty

  if (log_in_email.value != "") {
    // If Email is entered correctly
    if (log_in_email.value != stored_Email) {
      Swal.fire({
        icon: "error",
        title: "Email is not correct ...",
        text: "Please enter the correct email !",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Log-In Email or Password should not be empty...",
      text: "Please fill the required field !",
    });
  }

  // If password is empty

  if (log_in_password.value != "") {
    // If Password is entered correctly
    if (log_in_password.value != stored_password) {
      Swal.fire({
        icon: "error",
        title: "Password is not correct...",
        text: "Please enter the correct password !",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Log-In Password should not be empty...",
      text: "Please fill the required field !",
    });
  }

  // if both the password and emails are same & are not empty

  if (
    log_in_email.value == stored_Email &&
    log_in_password.value == stored_password
  ) {
    let full_name_of_user = localStorage.getItem("Name of user");

    full_name_of_user = full_name_of_user
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    Swal.fire({
      icon: "success",
      title: ` Welcome ! ${full_name_of_user}  `,
    });

    setTimeout(() => {
      window.location.href = "./dashboard.html";
    }, 1000);
  }
};

login_btn.addEventListener("click", () => {
  // console.log(log_in_email.value);
  // console.log(log_in_password.value);
  Login_In_Func();
});

// ---------------------------------------------------------------------------------------------------------------------
