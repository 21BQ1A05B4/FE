
import React from 'react';
// import './imageGrid.css';
const images = [
    {
        src : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        width : 400,
        height : 400,
    },
    {
        src : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        width : 400,
        height : 400,
    },
    {
        src : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        width : 400,
        height : 400,
    },
    {
        src : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        width : 400,
        height : 400,
    },
    {
        src : "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        width : 400,
        height : 400,
    },
];

const SetOfImages = () => {
    return (
        <div>
            ImagesGrid
            <div id='img-wrapper'>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                        <img src={image.src}
                        height="200px"
                        width='300px' 
                        alt=''
                        />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SetOfImages