"use strict";
const locationOptions = document.querySelector("input[name = searchLocations]:checked");
const parkOptions = document.querySelector("input[name = searchPark]:checked");
let parkTblbody = document.querySelector("#park-tbl-body");
const dropDownParkTypes = document.querySelector("#dropDownParkTypes");
const dropDownLocations = document.querySelector("#dropDownLocations");
function loadParkOptions() {
  let option = new Option("Select Park Type...");
  dropDownParkTypes.appendChild(option);

  for (const parkType of parkTypes) {
    let option = document.createElement("option");
    option.value = parkType;
    option.innerText = parkType;
    dropDownParkTypes.appendChild(option);
  }
}

function loadlocationOptions() {
  let option = new Option("Select State...");
  dropDownLocations.appendChild(option);

  for (const location of locations) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    dropDownLocations.appendChild(option);
  }
}

loadParkOptions();
loadlocationOptions();

function buildParkRow(tbody, nationalPark) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);
  cell7.innerText = nationalPark.Visit;
}

function buildParkTblForParkType(parkType) {
  parkTblbody.innerHTML = "";
  const filteredParks = nationalParks.filter((nationalPark) => nationalPark.LocationName.includes(parkType));
  for (const nationalPark of filteredParks) {
    buildParkRow(parkTblbody, nationalPark);
  }
}
function handleParkTypeChange() {
  const parkTypeValue = dropDownParkTypes.value;
  buildParkTblForParkType(parkTypeValue);
}

function buildParkTblForLocation(location) {
  for (const nationalPark of nationalParks) {
    buildParkRow(parkTblbody, nationalPark);
  }
}
function handleLocationChange() {
  const parkTypeValue = dropDownParkTypes.value;
  buildParkTblForParkType(parkTypeValue);
