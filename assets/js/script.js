
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
    seconds: dateObject.getSeconds().toString().padStart(2, "0"),
    amOrPM: dateObject.getHours() < 12 ? "AM" : "PM",
  };
 
  return `${parts.date}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute}:${parts.seconds} ${parts.amOrPM}`;
}
//function changes time block color depending on current time//
function displayHour(parts){
var timeBlockHour = $("#textarea")
var hours = parts[3];
  if(timeBlockHour === hours) {
$("#textarea").addClass("past");
}
  else if(timeBlockHour < hours){
$("#textarea").addClass("present");
$("#textarea").removeClass("past");
$("#textarea").removeClass("future");
}
  else {
$("#textarea").addClass("future");
$("#textarea").removeClass("past");
$("#textarea").removeClass("present");
};

};
const myDate = new Date();
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
  $('#hour-12').children().eq(2).on('click', function(event){
    var twelvePmInput = $('#hour-12').children().eq(1).val();
    console.log(twelvePmInput);
  localStorage.setItem("hour-12", twelvePmInput);
  });
  var twelvePm = localStorage.getItem("hour-12")
  $('#hour-12').children().eq(1).val(twelvePm)
  var tense = displayHour(myDate, 12)
  $('#hour-12').addClass(tense)
  
  //1PM Block//
  $('#hour-13').children().eq(2).on('click', function(event){
    var onePmInput = $('#hour-13').children().eq(1).val();
    console.log(onePmInput);
  localStorage.setItem("hour-13", onePmInput);
  });
  var onePm = localStorage.getItem("hour-13")
  $('#hour-13').children().eq(1).val(onePm)
  var tense = displayHour(myDate, 1)
  $('#hour-13').addClass(tense)
  
  //2PM Block//
  $('#hour-14').children().eq(2).on('click', function(event){
    var elevenAmInput = $('#hour-14').children().eq(1).val();
    console.log(elevenAmInput);
  localStorage.setItem("hour-14", elevenAmInput);
  });
  var twoPm = localStorage.getItem("hour-14")
  $('#hour-14').children().eq(1).val(twoPm)
  var tense = displayHour(myDate, 2)
  $('#hour-14').addClass(tense)
  
  //3PM Block//
  $('#hour-15').children().eq(2).on('click', function(event){
    var threePmInput = $('#hour-15').children().eq(1).val();
    console.log(threePmInput);
  localStorage.setItem("hour-15", threePmInput);
  });
  var threePm = localStorage.getItem("hour-15")
  $('#hour-15').children().eq(1).val(threePm)
  var tense = displayHour(myDate, 3)
  $('#hour-15').addClass(tense)
  
  //4PM Block//
  $('#hour-16').children().eq(2).on('click', function(event){
    var fourPmInput = $('#hour-16').children().eq(1).val();
    console.log(fourPmInput);
  localStorage.setItem("hour-16", fourPmInput);
  });
  var fourPm = localStorage.getItem("hour-16")
  $('#hour-16').children().eq(1).val(fourPm)
  var tense = displayHour(myDate, 4)
  $('#hour-16').addClass(tense)
  
  //5PM Block//
  $('#hour-17').children().eq(2).on('click', function(event){
    var fivePmInput = $('#hour-17').children().eq(1).val();
    console.log(fivePmInput);
  localStorage.setItem("hour-17", fivePmInput);
  });
  var fivePm = localStorage.getItem("hour-17")
  $('#hour-17').children().eq(1).val(fivePm)
  var tense = displayHour(myDate, 5)
  $('#hour-17').addClass(tense)
  
});

