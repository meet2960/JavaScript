var a;
let ch, cm, cs;
let hh, mm;
function gets() {
  hh = parseInt(aform.time1.value);
  mm = parseInt(aform.time2.value);
  console.log(hh);
  console.log(mm);
}

function checkalarm() {
  setInterval(setalarm, 1000);
}

function setalarm() {
  let time = new Date();
  ch = time.getHours();
  cm = time.getMinutes();
  cs = time.getSeconds();
  console.log("Second : " + cs);
  if (cs == 0 && ch == hh && cm == mm) {
    clearInterval(setalarm);
    timeout();
    console.log("Alarm Successfully Working !!!");
  }
}
function timeout() {
    a = new Audio("alarm_ring.mp3");
//   a = new Audio("kesariya.mp3");
  a.play();
  // if (ch == hh && cm == mm + 1) {
  //     a.pause();
  // }
}
function stopalarm() {
  console.log("Inside Stop Alarm");
  a.pause();
}
function playalarm() {
  console.log("Inside Play Alarm");
  a.play();
}
