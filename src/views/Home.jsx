import React, { useEffect, useState } from 'react';
import FestivalCard from '../components/FestivalCard';
import GigCard from '../components/GigCard';

const Home = () => {

    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        document.title = 'React Project';
        getData();
    }, []) // los [] impiden que se ejecute mas de una vez

    const getData = async () => {
        const data = await fetch('http://127.0.0.1:8000/api/festival')
        const festivals = await data.json()
        setFestivals(festivals)
        // console.log(festivals)
    }

    
    return (
        <div>
            <h1>Festivals</h1>
            {
                festivals.map(festival =>(
                    <FestivalCard key="festival.id" data={festival}/>
                    ))
            }

        </div>
    )
}

export default Home