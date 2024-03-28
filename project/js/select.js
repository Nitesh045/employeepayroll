// console.log("jai mata di")

const day = document.getElementById('day');
const month = document.getElementById('months');
const year = document.getElementById('year');
const months = ['jan', "feb", 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
day.addEventListener('click', function () {
    console.log("list")

    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.text = i;
        option.value = i;
        //day.appendChild=option;
        console.log(option);
        day.add(option)
    }
});

// for month
month.addEventListener('click', function () {

    for (let i = 0; i < months.length; i++) {
        let option = document.createElement('option');
        option.text = months[i];
        option.value = months[i];
        //day.appendChild=option;
        console.log(option);
        month.add(option)
    }
})


// for year
year.addEventListener('click', function () {
    for (let i = 0; i < years.length; i++) {
        let option = document.createElement('option');
        option.text = years[i];
        option.value = years[i];
        //day.appendChild=option;
        console.log(option);
        year.add(option)
    }
})

