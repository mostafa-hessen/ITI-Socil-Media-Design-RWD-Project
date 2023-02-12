let input = Array.from(document.querySelectorAll("input "));
let bntSubmit = document.querySelector(".btn2");
input.forEach((ele) =>
  ele.addEventListener("blur", () => {
    console.log(ele.classList[1]);
    ele.value != ""
      ? (document.querySelector(`.${ele.classList[1]}Label`).style.transform =
          "translateY(-9px)")
      : console.log("🤐");
  })
);
var fName= input[0].value
let users=[];
function populateStorage() {
 var user =  {
    firstName: input[0].value,
    lastName: input[1].value,
    email: input[2].value,
    password: input[3].value,
  };
   users.push(user);
  var storeUsers = localStorage.setItem("Users" , JSON.stringify(users));
}
bntSubmit.addEventListener("click", populateStorage);
