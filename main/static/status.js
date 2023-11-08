
const EventName = ['Freshers Orientation', 'E0001', 'Accepted', 'Click Here', 'Getting Started with Git', 'E0002', 'Rejected', '-', 'Robotics Session-I', 'E0003', 'Pending' , '-']


for (let i = 0; i < document.querySelectorAll('.statusTableTD').length; i=i+4) {
    console.log(i)
    document.querySelectorAll('.statusTableTD')[i].innerHTML = EventName[i];
    document.querySelectorAll('.statusTableTD')[i+1].innerHTML = EventName[i+1];
    document.querySelectorAll('.statusTableTD')[i+2].innerHTML = EventName[i+2];
    if(EventName[i+3] != 'Click Here')
    {
        document.querySelectorAll('.statusTableTD')[i+3].innerHTML = EventName[i+3];
    }
}

document.querySelectorAll('.statusTableTD')[3].href = Laila