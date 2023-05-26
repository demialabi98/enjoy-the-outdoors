"use strict";
let mtnTblBody = document.querySelector("#mtn-tbl-body");
const dropDownMountains = document.querySelector("#dropDownMountains");
const mtnPhoto = document.querySelector("#mtnPhoto");

function loadMountainList() {
  let option = new Option("Select Mountain...");
  dropDownMountains.appendChild(option);

  for (const mountain of mountains) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;
    dropDownMountains.appendChild(option);
  }
}

loadMountainList();

function buildMountainRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = mountain.name;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.elevation;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountain.effort;

  let cell4 = row.insertCell(3);
  cell4.innerText = mountain.desc;

  mtnPhoto.src = `images/${mountain.img}`;
  mtnPhoto.alt = mountain.name;
  mtnPhoto.style.display = "unset";
}

mtnPhoto.style.display = "none";

function buildMountainTbl(mountainValue) {
  mtnTblBody.innerHTML = "";
  mtnPhoto.style.display = "none";
  const foundMountain = mountains.find((mountain) => mountain.name.includes(mountainValue));
  buildMountainRow(mtnTblBody, foundMountain);
}
function handleMountainChange() {
  const mountainValue = dropDownMountains.value;
  buildMountainTbl(mountainValue);
}
