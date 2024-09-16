import React, {useState, useEffect} from 'react'

function DigitalClock(){
    const [time, setTime] = useState(new Date());
    const [format, setFormat] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
       const intervalID =  setInterval(() => {
            setTime(new Date());
       }, 1000);

       return () => {clearInterval(intervalID)};
    
    }, []); //start time only when we mount the clock to the DOM;

    function formatTime(){
        let hours = time.getHours().toString().padStart(2, 0);
        const mins = time.getMinutes().toString().padStart(2, 0);
        const secs = time.getSeconds().toString().padStart(2, 0);
  
        if (format) {
            // 12-hour format
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12; // Convert to 12-hour format
            return `${hours}:${mins}:${secs} ${meridiem}`;
        } else {
            // 24-hour format
            return `${hours}:${mins}:${secs}`;
        }
    }

    function changeFormat(event) {
        setIsFading(true); // Start fade-out
        setTimeout(() => {
            setFormat(f => !f);
            setIsFading(false); // Start fade-in
        }, 200)
        // setFormat(f => !f);

        if(format){
            event.target.textContent = "12-Hour Time";
            event.target.style.backgroundColor = "hsla(210, 100%, 68%, 0.75)"
        }else{
            event.target.textContent = "24-Hour Time";
            event.target.style.backgroundColor = "hsla(305, 50%, 46%, 0.75)"
        }
    }



    return(<>
                <div className='clock-div'>
                    <div className={`clock ${isFading ? 'hidden' : ''}`}>
                        <span>{formatTime()}</span>
                    </div>
                </div>
                <div className='change-format-div'>
                    <button id='change-format' 
                            onClick={(event) => changeFormat(event)}>
                            24-Hour Time
                    </button>
                </div>
            </>
    );
}

export default DigitalClock