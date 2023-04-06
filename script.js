function count() {
    let currentYear = new Date().getFullYear();
    let currentDay = new Date().getDay();
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();

    document.getElementById("days").innerHTML = 
    document.getElementById("hours").innerHTML = 24 - currentHour ;
    document.getElementById("minutes").innerHTML = 60 - currentMinute ;
    document.getElementById("seconds").innerHTML = 60 - currentSecond ;

    document.getElementById("year").innerHTML = currentYear + 1 ;

    setTimeout(() => {
        count()
    }, 1000);
}
count();