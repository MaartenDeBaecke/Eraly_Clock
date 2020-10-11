let x;
let y;
let z;

let m = "00";
let h = "00";
let s = "00";

let t;
let min;


setInterval(function() {
  t = new Date();
  sec = t.getSeconds();
  z = Math.floor(sec/2.5);
  min = t.getMinutes();
  y = Math.floor(min / 2.5);
  x = t.getHours();

  z < 10 ? s = "0" + z.toString() : s = z.toString();
  y < 10 ? m = "0" + y.toString() : m = y.toString();
  x < 10 ? h = "0" + x.toString() : h = x.toString();


  countTextS = document.getElementById("sec");
  countTextS.innerHTML = s;

  countTextM = document.getElementById("min");
  countTextM.innerHTML = m;

  countTextH = document.getElementById("hours");
  countTextH.innerHTML = h;
}, 100);
