'use strict';

var allStores = [];
var storeTable = document.getElementById('salesTable'); //html id for data table is 'salesTable'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    this.customersPerHourArray.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + 1) + this.minCustomersPerHour); //from MDN docs
  }
}

Store.prototype.cookiesPerHour = function() {
  this.dailyTotalCookies = 0
  for(var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersPerHourArray[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHourArray.push(hourlyCookies);
    this.dailyTotalCookies += hourlyCookies;
  }
}

new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38,3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//Make Table Header...be careful
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = (hours[i]);
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

//Make Table Data Section
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArray[i];
    trEl.appendChild(tdEl);
  }
  //adding multiple columns with same totals per store (or hrs)
  tdEl = document.createElement('th');
  tdEl.textContent = this.dailyTotalCookies;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}
//Table Footer Row

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores';
  trEl.appendChild(thEl);

  //Totals (added by column)
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesPerHourArray[i];
      totalOfTotals += allStores[j].cookiesPerHourArray[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);
  
  storeTable.appendChild(trEl);
}

console.table(allStores);

function renderAllStores() {
  for (var i in allStores) {
    allStores[i].render();
  }
}
makeHeaderRow();
renderAllStores();
makeFooterRow();

/*This is from class discussion. I can add this helper function to replace longer code
function newElement(type, content, parent) {
  var element = document.createElement('th');
  element.textContent = content
  parent.appendChild(element);
}

newElement('th, 'CookieSales', trEl)
*/
