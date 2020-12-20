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
          onsole.log('calendarViewModel: ', calendarViewModel);
  
          function htmlTemplate(hour, details, hourDecorator) {
            var d = new Date().setHours(hour);
            var buttonId = `hrBtn${hour}`;
            var textId = `text${hour}`
            var hourlyTemplate = `
            <div class="row hour-block ${hourDecorator}">
              <div class="col-md-1 hour d-flex align-items-center">${moment(d).format('h A')}
              </div>
                <textarea id="${textId}" class="col-md-10 description">${details}</textarea>
                    <button id="${buttonId}" type="button" class="saveBtn col-1 fa fa-save fa-2x"></button>
            </div>`;
            return hourlyTemplate;
          }