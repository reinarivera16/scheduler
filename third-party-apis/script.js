var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(rightNow);
}

function  presentTime(){
    var present = moment().format('LT');
    console.log(present)
}
displayTime()
presentTime()

