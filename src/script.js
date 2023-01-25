


let userLike = moment.tz("Asia/Tokyo");
let userSecLike = moment.tz("Europe/Paris");
let userThirLike = moment.tz("Australia/Sydney");




function showSelectedCities(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      alert(
        ` Your current time zone is ${userLike} and the current time is ${moment().format(
          "h:m A"
        )}`
      );
    }
    if (event.target.value === "paris") {
      alert(
        `Your current time zone is ${userSecLike} and the current time is ${moment().format(
          "h:m A"
        )}`
      );
    }
    if (event.target.value === "sydney") {
      alert(
        `Your current time zone is ${userThirLike} and the current time is ${moment().format(
          "h:m A"
        )}`
      );
    }
   
    }
  }

let countriesSelect = document.querySelector("#cities");
countriesSelect.addEventListener("change", showSelectedCities);
