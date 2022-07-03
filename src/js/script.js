const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

const hours = document.querySelectorAll(".hours");
const lastTime = document.querySelectorAll('.last-time');


/* fetch dailydata and displays on hours and lastTime class */

function dailyStat(){
    fetch('./data.json')
     .then(response => response.json())
     .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
            lastTime[i].innerHTML = 'Last daily - ' + data[i].timeframes.daily.previous + 'hrs';
        })
     })
}


/* dailytime function gets activated onload */
dailyStat()
dailyBtn.classList.add('active')


/* fetch weeklydata and displays on hours and lastTime class */

function weeklyStat(){
    fetch('./data.json')
     .then(response => response.json())
     .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
            lastTime[i].innerHTML = 'Last weekly - ' + data[i].timeframes.weekly.previous + 'hrs';
        })
     })
}


/* fetch montlydata and displays on hours and lastTime class */

function monthlyStat(){
    fetch('./data.json')
     .then(response => response.json())
     .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
            lastTime[i].innerHTML = 'Last monthly - ' + data[i].timeframes.monthly.previous + 'hrs';
        })
     })
}





/* adds active class to daily button once cliked and remove active class from other buttons */

dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.add('active')
    dailyStat()
    monthlyBtn.classList.remove('active')
    weeklyBtn.classList.remove('active')
})


/* adds active class to weekly button once cliked and remove active class from other buttons */

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.add('active')
    weeklyStat()
    dailyBtn.classList.remove('active')
    monthlyBtn.classList.remove('active')
    
})



/* adds active class to monthly button once cliked and remove active class from other buttons */

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active')
    monthlyStat()
    weeklyBtn.classList.remove('active')
    dailyBtn.classList.remove('active')
})
