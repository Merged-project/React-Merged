import React, { useEffect, useState } from 'react';
import FestivalCard from '../components/FestivalCard';
import Gigcard from '../components/GigCard';
import Footer from '../components/Footer';

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
    }

    return (
        <div className='HomeView'>

            <h1 className='title'>Festivals</h1>
            <section className='festSection'>
                <div className='festCards'>
                    {festivals.map(festival =>(<FestivalCard key="festival.id" data={festival}/>))}
                </div>
                <div className='festBackground'></div>
                
            </section>

            <h1 className='title'>Artists</h1>
            <section className='artistSection'>

                {artists.map(artist => (<Gigcard key="artist.id" artistsData={artist}/>))}

            </section>

        </div>
    )
}

export default Home