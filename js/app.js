'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var pike = {
  location '1st and Pike',
  minCust = 23
  maxCust = 65
  avgSale = 6.3
  customersPerHourPike: []
  cookiesSoldPerHourPike: []
  dailyTotalPike: []
}

customersPerHourPike = function(min, max) {
    min = Math.ceil(65);
    max = Math.floor(23);
    return Math.floor(Math.random() * (max - min)) + min
  }

/*pike.render = function() {
  var pikeUl = document.getElementById('pikeplace');
  for (var i = 0; i < hours.length; i++) {
    console.log(this.hours[i], 'Cookies Sold');
    var liEl = 
  }
}

