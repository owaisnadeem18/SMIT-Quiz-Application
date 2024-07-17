// Firt create a log out function on our home page :

// Function for logOut()

full_name_of_user = localStorage.getItem("Name of user");

let logOut = () => {
  window.localStorage.clear();
  Swal.fire({
    icon: "success",
    title: ` ${full_name_of_user
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}! Logged Out `,
  });

  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);
};

if (full_name_of_user == null) {
  Swal.fire({
    icon: "error",
    title: "Connection Timed Out ! LogIn Again ",
  });

  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);
}

let name_of_user = document.getElementById("name_of_user");

// let full_name_of_user = full_name_of_user
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

name_of_user.innerHTML = `<h1>Hi ! ${full_name_of_user} 👋</h1>`;

name_of_user = document.getElementById("naam");

name_of_user.innerText = full_name_of_user;
