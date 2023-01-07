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
const myDate = new Date();
const myDateFormatted = formatDate(myDate);
console.log(myDateFormatted)

$(function () {
  $('#hour-9').children().eq(2).on('click', function(event){
    var nineAmInput = $('#hour-9').children().eq(1).val();
    console.log(nineAmInput);
  localStorage.setItem("hour-9", nineAmInput);
  })
  var nineAm = localStorage.getItem("hour-9")
  $('#hour-9').children().eq(1).val(nineAm)
  

});
