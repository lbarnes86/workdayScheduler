(function($) {
    "use strict";
  
    localStorage.setItem("", "");
  //- Load calendar data
    $(document).ready(function() {
      //date format MMDDYYYY
      var loadFunction = function(date) {
        //'09/12/2020'
        var calendarData = [];  //localStorage.getItem(date);

        