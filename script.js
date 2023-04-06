function count() {
    let currentYear = new Date().getFullYear();
    let currentDay = new Date().getDay();
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();
    let currentMonth = new Date().getMonth();
    let totalDays = (currentYear%4 == 0) ? 366 : 365 ;
    let passedDays = 0;

    //Calculate passed this of the year
    for (let i = 1; i <= currentMonth ; i++) {
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

    console.log(passedDays);
    console.log(currentMonth);
    console.log(currentDay);


    document.getElementById("days").innerHTML = totalDays - passedDays ;
    document.getElementById("hours").innerHTML = 24 - currentHour ;
    document.getElementById("minutes").innerHTML = 60 - currentMinute ;
    document.getElementById("seconds").innerHTML = 60 - currentSecond ;
    document.getElementById("year").innerHTML = currentYear + 1 ;

    setTimeout(() => {
        count()
    }, 1000);
}
count();