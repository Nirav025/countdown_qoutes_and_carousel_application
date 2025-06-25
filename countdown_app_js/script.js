/*----------------------- JS Code By Nirav --------------------------*/


setInterval(() => {


    let currentDate = new Date();

    let expireDate = new Date("2025-08-01T07:51:07Z");

    let dateFormate = expireDate - currentDate;

    if(expireDate > currentDate){

        
    let days = Math.floor(dateFormate / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dateFormate / (1000 * 60 * 60) % 24);

    let minutes = Math.floor(dateFormate / (1000 * 60) % 60);

    let seconds = Math.floor(dateFormate / (1000) % 60);


    let time = document.querySelector('#time');

    // time.innerHTML = [days,hours,minutes,seconds].join(":");

    // time.innerHTML = `${days}d:${hours}h:${minutes}m:${seconds}s`

   if(days < 10 ){
    days = `0${days}`
   }
   if(hours < 10 ){
    hours = `0${hours}`
   }
   if(minutes < 10 ){
    minutes = `0${minutes}`
   }
   if(seconds < 10 ){
    seconds = `0${seconds}`
   }

   let day_ui = document.querySelector('#day_ui')
   let hour_ui = document.querySelector('#hour_ui')
   let minute_ui = document.querySelector('#minute_ui')
   let second_ui = document.querySelector('#second_ui')

   day_ui.innerHTML = `${days}:`
   hour_ui.innerHTML = `${hours}:`
   minute_ui.innerHTML = `${minutes}:`
   second_ui.innerHTML = `${seconds}`


    // time.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;



    }else{
        document.querySelector('#comingsoon').innerText = "Time Expired";
        document.querySelectorAll('.box').forEach(el => el.style.display = 'none');
    }




}, 1000)

