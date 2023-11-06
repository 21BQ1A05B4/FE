import React, { useEffect } from 'react'

export default function DigitalClockFunc() {
    const [myTime, setTime] = useState('');
    const tick = () => {
        const d = new Date();
        const hr = d.getHours();
        const min = d.getMinutes();
        const sec = d.getSeconds();
        const time = `${hr>12?12-hr:hr} : ${min} : ${sec}`;
        if(hr>12) {
            time += "PM";
        } else {
            time += "AM";
        }
        setTime(time);
    }
    useEffect(() => {
        const t = setInterval(tick, 1000);
        return () => {
            clearInterval(t);
        }
    }, [myTime])
    return (
        <div>
            <h1>DigitalClockFunc</h1>
            <h2>{myTime}</h2>
        </div>
    )
}
