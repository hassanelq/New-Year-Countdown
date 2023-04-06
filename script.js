function count() {
    let currentYear = new Date().getFullYear();
    let currentDay = new Date().getDate();
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();
    let currentMonth = new Date().getMonth()+1;
    let totalDays = (currentYear%4 == 0) ? 366 : 365 ;
    let passedDays = 0;

    //Calculate passed this of the year
    for (let i = 1; i < currentMonth ; i++) {
        if (i%2==1)
            passedDays += 31 ;
        else if (i==2)
            passedDays += 28 ;      
        else
            passedDays += 30 ;
    }
    passedDays += currentDay ;
    if (currentYear%4 == 0)
        passedDays += passedDays + 1 ;

    let remainHours = (24-currentHour<10) ? `0${24-currentHour}` : 24-currentHour;
    let remainMinutes = (60-currentMinute<10) ? `0${60-currentMinute}` : 60-currentMinute;
    let remainSeconds = (60-currentSecond<10) ? `0${60-currentSecond}` : 60-currentSecond;
    let remainDays = (totalDays - passedDays<10) ? `0${totalDays - passedDays}` : totalDays - passedDays;

    document.getElementById("days").innerHTML = remainDays ;
    document.getElementById("hours").innerHTML = remainHours ;
    document.getElementById("minutes").innerHTML = remainMinutes ;
    document.getElementById("seconds").innerHTML = remainSeconds ;
    document.getElementById("year").innerHTML = currentYear + 1 ;


    setTimeout(() => {
        count()
    }, 1000);
}
count();