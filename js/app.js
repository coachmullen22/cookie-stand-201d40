'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  location: '1st and Pike',
  customersEachHour: [],
  cookiesSoldEachHour: [],
  dailyTotalCookies: 0
}
/*
pike.getCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    console.getCustomersPerHour();
  }
}
pike.getCustomersPerHour(pike.minCustomersPerHour, pike.maxCustomersPerHour)

pike.cookiesSoldEachHour = function() {
  pike.getCustomersPerHour();
  for(var i = 0; i < hours.length; i++) {
    //calc the cookies
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    //put the numbers into an array
    this.cookiesSoldEachHour.push(hourlyCookies);
    //calculate daily total
    this.dailyTotalCookies += hourlyCookies;
  }
}

pike.render = function() {
  this.cookiesSoldEachHour();
  //grab element from the DOM
  var pikeUl = document.getElementById('pikeplace');
  //console.log(pikeUl, '<pikeUl>');
  for (var i = 0; i < this.hours.length; i++) {
    //create an element
    console.log(this.hours[i], ' Cookies Sold');
    //give it content
    var liEl = document.createElement('li');
    console.log(liEl, 'liEl');
    //append it
    liEl.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]}`;
    pikeUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.dailyTotalCookies} cookies`;
  pikeUl.appendChild(liEl);
}

pike.render();

/*
//table
var allStores = [];

var stores =

function Hours() {
  this.name = name;
}

function renderAllCats() {
  for (allCats[i].render()
}

Cat.prototype.render = function() {
  //make a tr
  var trEl = document.createElement('tr');
  //make a td
  var tdEl = document.createElement('td');
  //give it content
  tdEl.textContent = this.name;
  //apppend it to the tr
  trEl.appendChild(tdEl);

  //make a td
  tdEl = document.createElement('td');
  //give it content
  tdEl.textContent = this.color;
  //apppend it to the tr
  trEl.appendChild(tdEl);

  //make a td

  //give it content
  //apppend it to the tr

  //append the tr to the table
catTable.appendChild(trEl);
}
*/
