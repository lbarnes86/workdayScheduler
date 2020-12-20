(function($) {
    "use strict";
  
    localStorage.setItem("", "");
  //- Load calendar data
    $(document).ready(function() {
      //date format MMDDYYYY
      var loadFunction = function(date) {
        //'09/12/2020'
        var calendarData = [];  //localStorage.getItem(date);

        for (var h = 0; h <= 17; h++) {
            calendarData.push(localStorage.getItem(h));        
            }
            return calendarData;
          }