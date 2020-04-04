const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const Second = now.getSeconds();
    const secondsDegrees = ((Second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((Second/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    switch (90) {
        case secondsDegrees:
            console.log("secondssayhello");
            secondHand.style.transition = "none";
            break;
        
        case minsDegrees:
            minsHand.style.transition = "none";
            break;

        case hourDegrees:
            hourHand.style.transition = "none";
            break;

        default:
            break;
    
    }

}

setInterval(setDate, 1000);

setDate();