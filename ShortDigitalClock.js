import React, { useState } from 'react'

export default function ShortDigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime, 1000);
    return (
        <div>
            <h1>{ctime}</h1>
        </div>
    )
}
