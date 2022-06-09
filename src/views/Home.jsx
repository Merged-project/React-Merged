import React, { useEffect, useState } from 'react';
import FestivalCard from '../components/FestivalCard';
import Gigcard from '../components/GigCard';

const Home = () => {

    const [festivals, setFestivals] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        document.title = 'Home';
        fetchData();
    }, []) // los [] impiden que se ejecute mas de una vez

    const fetchData = async () => {
        const data = await fetch('http://127.0.0.1:8000/api/festival')
        const artistsData = await fetch('http://127.0.0.1:8000/api/artist')
        const artists = await artistsData.json()
        const festivals = await data.json()
        setArtists(artists)
        setFestivals(festivals)
        // console.log(festivals)
    }

    return (
        <div>
            <section className='festSection'>
                <h1>Festivals</h1>
                {
                    festivals.map(festival =>(
                        <FestivalCard key="festival.id" data={festival}/>
                        ))
                }
            </section>
            <section className='artistSection'>
                <h1>Artists</h1>
                {
                    artists.map(artist => (
                        <Gigcard key="test.id" artistsData={artist}/>
                        ))
                }
            </section>
        </div>
    )
}

export default Home