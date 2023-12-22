//varibles for buttons
const startstopbtn = document.querySelector("#startstopwatch");
const resetbtn = document.querySelector("#resetbtn");

//varibles foe time values
let seconds =0;
let minutes =0;
let hours =0;

// varibles for leading zero
let leadingseconds =0;
let leadingminutes =0;
let leadinghours =0;

//varibles for set interval and timerstatus
let timeInterval = null;
let timerStstus = "stopped";

//stopwatchh functions 
function stopwatch()
{
    seconds++;
    if(seconds/60 === 1)
    {
        seconds = 0;
        minutes++;

        if(minutes/60 ===1)
        {
            minutes =0;
            hours++;
        }
    }
    if(seconds<10)
    {
        leadingseconds="0" + seconds.toString();
    }
    else{
        leadingseconds = seconds;
    }
    if(minutes<10)
    {
        leadingminutes="0" + minutes.toString();
    }
    else{
        leadingminutes =  minutes;
    }
    if(hours<10)
    {
        leadinghours="0" + hours.toString();
    }
    else{
        leadinghours = hours;
    }

    let displaytimer = document.getElementById('timer').innerText =
    leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}

//window.setInterval(stopwatch,1000)

startstopbtn.addEventListener('click',function()
{
    if(timerStstus === "stopped")
    {
        timeInterval = window.setInterval(stopwatch,1000);
        document.getElementById('startstopwatch').innerHTML = `<i class ="fa-solid fa-pause" id="pause"></i>`;
        timerStstus = "started";
    }
    else{
        window.clearInterval(timeInterval);
        document.getElementById('startstopwatch').innerHTML = `<i class ="fa-solid fa-play" id="play"></i>`;
        timerStstus = "stopped";
    }
});

resetbtn.addEventListener('click',function()
{
    window.clearInterval(timeInterval);
    seconds=0;
    minutes=0;
    hours=0;

    document.getElementById('timer').innerHTML = "00:00:00";
})

