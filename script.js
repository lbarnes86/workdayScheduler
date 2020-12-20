(function($) {
    "use strict";
  
    localStorage.setItem("", "");
  //- Load calendar data
    $(document).ready(function() {
      //date format MMDDYYYY
      var loadFunction = function(date) {
        //'09/12/2020'
        var calendarData = []; 

        for (var h = 0; h <= 17; h++) {
            calendarData.push(localStorage.getItem(h));        
            }
            return calendarData;
          }
          var saveFunction = function(hour, hourInfo) {
            localStorage.setItem(hour, hourInfo);
          }
      
          var dataService = {
            loadCalendarItem: loadFunction,
            saveCalendarItem: saveFunction
          }
          var currentSimpleDate = moment().format('L');
          console.log('currentSimpleDate: ', currentSimpleDate);
         //- Create ViewModel
          var calendarViewModel = {
            currentDate: moment().format('MMMM Do YYYY, h:mm A'),
            calendarData: dataService.loadCalendarItem(currentSimpleDate)
          }
      