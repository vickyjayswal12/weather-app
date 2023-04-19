const dt=document.getElementById("dt");
const dat=new Date();
const getdate=()=>
{
    const dat=new Date();
    
    var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    let day=week[dat.getDay()];
    let mon=month[dat.getMonth()];
    let hr=dat.getHours();
    let min =dat.getMinutes();
    // console.log(`$(dat.getHours)()dat.getMinutes()`)
    // console.log(day)
    dt.innerHTML=`${day}|${mon}|${hr}:${min}`;
    console.log(mon)
}
getdate();

// async function getData() {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=surat&appid=d2239184eefb923448a5a7204d7f8397';
//     const response = await fetch(url);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.main.temp);
//     // console.log(response);
//   } 
//   getData();
// console.log(dt)