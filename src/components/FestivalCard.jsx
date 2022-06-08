import React from 'react';
import "../stylesheets/FestivalCard.css";

const FestivalCard = ({data}) => {



    return (
        <div className='cardFestival'>

            <svg id='favourite' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3139 2.82233C20.3925 0.916895 17.7383 -0.642099 14.651 0.265582C13.1757 0.69499 11.8886 1.61587 10.9998 2.87776C10.1111 1.61587 8.82396 0.69499 7.34869 0.265582C4.25448 -0.628241 1.60722 0.916895 0.685831 2.82233C-0.606859 5.48994 -0.0705301 8.49014 2.28107 11.7398C4.12384 14.2827 6.75735 16.8602 10.5804 19.8535C10.7012 19.9484 10.8501 20 11.0033 20C11.1565 20 11.3053 19.9484 11.4262 19.8535C15.2423 16.8671 17.8827 14.3104 19.7255 11.7398C22.0702 8.49014 22.6066 5.48994 21.3139 2.82233V2.82233Z" fill="white"/>
            </svg>
            <div>
                <p>{data.name}</p>
                <p>{data.location}</p>
            </div>

        </div>
    )
}

export default FestivalCard