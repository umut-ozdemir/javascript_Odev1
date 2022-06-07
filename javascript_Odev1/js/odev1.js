let isim = prompt("Kullanici ismi giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML=isim

function time(){
    let moment = new Date();
    let hour = moment.getHours();
    let minute = moment.getMinutes();
    let second = moment.getSeconds();
    var day = new Date();
    var days = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];

    let aktar = document.querySelector("#myClock");
    aktar.innerHTML = hour + ":" + minute + ":" + second + " " + days[day.getDay()];
    
}
let now = setInterval(time, 100);