import React, { useEffect, useState } from 'react';
import FestivalCard from '../components/FestivalCard';
import Gigcard from '../components/GigCard';

const Home = () => {

    const [festivals, setFestivals] = React.useState([]);
    const [artists, setArtists] = useState();

    React.useEffect(() => {
        document.title = 'Home';
        getData();
    }, []) // los [] impiden que se ejecute mas de una vez

    const getData = async () => {
        const data = await fetch('http://127.0.0.1:8000/api/festival')
        const festivals = await data.json()
        setFestivals(festivals)
        // console.log(festivals)
    }

    const fetchArtists = async() => {
        const artistsData = await fetch('http://127.0.0.1:8000/api/artist')
        const artists = await artistsData.json()
        setArtists(artists)
    }

    useEffect(() => {
        fetchArtists();
    },[])

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
                    artists.map(test => (
                        <p key="test.id" artistsData={test}>{test.name}</p>
                        ))
                }
            </section>
        </div>
    )
}

export default Home