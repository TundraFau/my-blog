'use strict'

let today = new Date();
let format_date = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = format_date