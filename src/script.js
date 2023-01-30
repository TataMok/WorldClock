function updateTime() {

// Los Angeles

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format(`MMMM Do YYYY`);
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
);


// Paris

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format(`MMMM Do YYYY`);
parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
);

// Zurich

let zurichElement = document.querySelector("#zurich");
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Europe/Zurich");
zurichDateElement.innerHTML = zurichTime.format(`MMMM Do YYYY`);
zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
);


// Istambul

let istambulElement = document.querySelector("#istambul");
let istambulDateElement = istambulElement.querySelector(".date");
let istambulTimeElement = istambulElement.querySelector(".time");
let istambulTime = moment().tz("Europe/Istambul");
istambulDateElement.innerHTML = istambulTime.format(`MMMM Do YYYY`);
istambulTimeElement.innerHTML = istambulTime.format(
    "h:mm:ss [<small>]A[</small>]"
);

}
updateTime();
setInterval(updateTime, 1000);