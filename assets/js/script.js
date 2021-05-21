// use moment.js to display current day & time
$('#currentDay').text(moment().format("dddd MMMM D, YYYY"))
$('#currentTime').text(moment().format('hh:mm a'))

function currentTime() {
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  hour = updateTime(hour)
  min = updateTime(min)
  sec = updateTime(sec)

  $('currentTime').text(hour + ":" + min + ":" + sec)
}

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
console.log(firstID)
let firstHour = parseInt(firstID.split("hour-")[1])
console.log(firstHour)

let lastID = $('.time-block:last').attr('id')
console.log(lastID)
let lastHour = parseInt(lastID.split("hour-")[1])
console.log(lastHour)

for (i = firstHour; i < lastHour; i++) {
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
}