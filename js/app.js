'use strict';

var allStores = [];
var storeTableHead = document.getElementById('tableHead');
var storeTableFoot = document.getElementById('tableFoot');
var storeTableBody = document.getElementById('tableBody');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var addStoreForm = document.getElementById('add-store');

function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHourArray = [];
  this.cookiesPerHourArray = [];
  this.dailyTotalCookies = 0;
  this.customersPerHour();
  this.cookiesPerHour();
  allStores.push(this);
}

Store.prototype.customersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour); //from MDN docs
    console.log();
  }
}

Store.prototype.cookiesPerHour = function() {
  this.dailyTotalCookies = 0
  for(var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.floor(this.customersPerHourArray[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHourArray.push(hourlyCookies);
    this.dailyTotalCookies += hourlyCookies;
  }
}

new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38,3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//Replaces repetitive table creation code
function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

//Make Table Header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  newElement('th', 'Location', trEl)
  for (var i = 0; i < hours.length; i++) {
    newElement('th', hours[i], trEl)
  }
  newElement('th', 'Daily Totals', trEl)

  storeTableHead.appendChild(trEl);
}

//Make Table Body Section
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  newElement('th', this.location, trEl)
  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesPerHourArray[i], trEl)
  }
  newElement('th', this.dailyTotalCookies, trEl)
  
  storeTableBody.appendChild(trEl);
}

function handleAddStoreSubmit(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var minCust = parseInt(event.target['min-customers-per-hour'].value);
  var maxCust = parseInt(event.target['max-customers-per-hour'].value);
  var avgCookies = parseInt(event.target['avg-cookies-per-customer'].value);

  new Store(location, minCust, maxCust, avgCookies);

  event.target.location.value = null;
  event.target['min-customers-per-hour'].value = null;
  event.target['max-customers-per-hour'].value = null;
  event.target['avg-cookies-per-customer'].value = null;

  var newStore = allStores[allStores.length-1];

  newStore.render();
}

addStoreForm.addEventListener('submit', handleAddStoreSubmit);

//Table Footer Row
function makeFooterRow() {
  var trEl = document.createElement('tr');
  newElement('th', 'All Stores', trEl)
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesPerHourArray[i];
      totalOfTotals += allStores[j].cookiesPerHourArray[i];
    }
    newElement('th', hourlyTotal, trEl)
  }
  newElement('th', totalOfTotals, trEl)

  storeTableFoot.appendChild(trEl);
}
console.table(allStores);


//Make Table Body (Data) Section
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  newElement('th', this.location, trEl)
  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesPerHourArray[i], trEl)
  }
  newElement('th', this.dailyTotalCookies, trEl)

  storeTableBody.appendChild(trEl);
}


function renderAllStores() {
  for (var i in allStores) {
    allStores[i].render();
  }
}

makeFooterRow();
makeHeaderRow();
renderAllStores();
