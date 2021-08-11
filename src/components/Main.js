import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../constants/index.js';

const Main = () => {

    const [image, setImage] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            console.log(res);
            setImage(res.data.url);
        })
    }, [])

    return (
        <div className = 'main'>
            <h1>Photo of the day!</h1>
            <div className = 'container'>
                <img src = {image} alt = 'photo of the day' />
                <button>More photos</button>
            </div>
        </div>
    )
}

export default Main;