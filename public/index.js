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
// console.log(dt)