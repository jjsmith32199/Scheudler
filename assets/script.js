// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
/**
 * 
 * @param {Date} dateObject 
 *
 */
function formatDate(dateObject) {
  const parts = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
    hour: (dateObject.getHours() % 12) || 12,
    minute: dateObject.getMinutes().toString().padStart(2, "0"),
    amOrPM: dateObject.getHours() < 12 ? "AM" : "PM",
  };
 
  return `${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute} ${parts.amOrPM}`;
}
function displayHour(dateObject, timeBlockHour){
var hours = dateObject.getHours();
if(timeBlockHour === hours) {
  return 'present'
}
else if(timeBlockHour < hours){
return 'past'}
else {
  return 'future'
}

}
const myDate = new Date("2020-02-04");
const myDateFormatted = formatDate(myDate);
console.log(myDateFormatted);
$('#currentDay').text(myDateFormatted)

$(function () {
  //9AM block//
  $('#hour-9').children().eq(2).on('click', function(event){
    var nineAmInput = $('#hour-9').children().eq(1).val();
    console.log(nineAmInput);
  localStorage.setItem("hour-9", nineAmInput);
  });
  var nineAm = localStorage.getItem("hour-9")
  $('#hour-9').children().eq(1).val(nineAm)
  var tense = displayHour(myDate, 9)
  $('#hour-9').addClass(tense)

//10 AM Block//
  $('#hour-10').children().eq(2).on('click', function(event){
    var tenAmInput = $('#hour-10').children().eq(1).val();
    console.log(tenAmInput);
  localStorage.setItem("hour-10", tenAmInput);
  });
  var tenAm = localStorage.getItem("hour-10")
  $('#hour-10').children().eq(1).val(tenAm)
  var tense = displayHour(myDate, 10)
  $('#hour-10').addClass(tense)

//11 AM Block//
  $('#hour-11').children().eq(2).on('click', function(event){
    var elevenAmInput = $('#hour-11').children().eq(1).val();
    console.log(elevenAmInput);
  localStorage.setItem("hour-11", elevenAmInput);
  });
  var elevenAm = localStorage.getItem("hour-11")
  $('#hour-11').children().eq(1).val(elevenAm)
  var tense = displayHour(myDate, 11)
  $('#hour-11').addClass(tense)

  //12 PM Block//

});

function displayTime(){
  
}