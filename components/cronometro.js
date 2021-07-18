let countEndDate = new Date("Nov 26, 2021 00:00:00").getTime();
    let a = setInterval(function() {

        let todayDate = new Date().getTime();
        
        let dateDiff = countEndDate - todayDate;
        
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
            
        document.getElementById("dias").innerHTML = days;
        document.getElementById("horas").innerHTML =  hours;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("seg").innerHTML = seconds;
    },1000);

