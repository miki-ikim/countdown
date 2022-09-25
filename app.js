const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const currentyear= new Date().getFullYear();
const newyeartime=new Date(`january 1 ${currentyear +1} 00:00:00`);


function updateCountdowntime(){
    const currentTime= new Date();
    const diff= newyeartime - currentTime;
    
    const d= Math.floor(diff / 1000 / 60 / 60 / 24);
    const h= Math.floor(diff / 1000 / 60 / 60) % 24;
    const m= Math.floor(diff / 1000 / 60 ) % 60;
    const s= Math.floor(diff / 1000) % 60;
    
    day.innerHTML = d;
    hour.innerHTML= h <10 ? '0' + h : h;
    minute.innerHTML= m <10 ? '0' + m : m;
    second.innerHTML= s <10 ? '0' + s : s;
}


setInterval(updateCountdowntime, 1000);