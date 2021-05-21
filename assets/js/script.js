// use moment.js to display current day & time
$('#currentDay').text(moment().format("dddd MMMM D, YYYY"))
// $('#currentTime').text(moment().format('hh:mm a'))

function currentTime() {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let midday = "AM";
  hour = updateTime(hour)
  min = updateTime(min)
  sec = updateTime(sec)
  midday = (hour >= 12) ? "PM" : "AM";
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

  $('#currentTime').text(hour + ":" + min + " " + midday)
  let t = setTimeout(function () { currentTime() }, 1000)
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k
  } else {
    return k
  }
}
currentTime()

// Define current hour
let now = moment().hour()

// Define rowTime
// From the .time-block element
$(".time-block").each(function () {
  // find out each row's time by taking the number after hour-
  let rowTime = parseInt($(this).attr("id").split("hour-")[1])

  // compare the current hour to the row time and add color class
  if (now === rowTime) {
    $(this).removeClass("past")
    $(this).addClass("present")
    $(this).removeClass("future")
    // console.log(this)
  } else if (now > rowTime) {
    $(this).addClass("past")
    $(this).removeClass("present")
    $(this).removeClass("future")
    // console.log(this)
  } else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
    // console.log(this)
  }
})


// let desc = $("#hour").text
// console.log(desc)

$('.saveBtn').click(function () {
  // this is the saveBtn element
  // console.log(this)

  // text is the value of a sibling element with the class description aka the textarea
  let text = $(this).siblings(".description").val()

  // time is the parent div with the id hour-x
  let time = $(this).parent().attr("id")

  // store the time value with text value in local storage
  localStorage.setItem(time, text)
})



let firstID = $('.time-block:first').attr('id')
let firstHour = parseInt(firstID.split("hour-")[1])


let lastID = $('.time-block:last').attr('id')
let lastHour = parseInt(lastID.split("hour-")[1])

for (i = firstHour; i < lastHour; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
}