let x;
let y;
let z;

let m = "00";
let s = "00";

let t;
let min;


setInterval(function() {
  t = new Date();
  x = t.getHours();
  min = t.getMinutes();
  y = Math.floor(min / 2.5) + x * 24;
  sec = t.getSeconds();
  console.log(Math.floor((min/2.5) % 1) * 24);
  z = (Math.round(((min/2.5) % 1) * 24) + Math.floor(sec/6.25));

  z < 10 ? s = "0" + z.toString() : s = z.toString();

  if (y < 10){
    m = "00" + y.toString();
  } else if (y < 100){
    m = "0" + y.toString();
  } else {
     m = y.toString();
  }

  countTextS = document.getElementById("sec");
  countTextS.innerHTML = s;

  countTextM = document.getElementById("min");
  countTextM.innerHTML = m;

}, 2500);
