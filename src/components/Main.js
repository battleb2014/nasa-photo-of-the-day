import React, { useState, useEffect } from 'react';
import Caption from './Caption';
import axios from 'axios';
import { API_KEY } from '../constants/index.js';
import styled from 'styled-components';

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledH1 = styled.h1`
    font-family: 'Palette Mosaic', cursive;
    color: blue ;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledImg = styled.img`
    width: 50rem;
    height: 30rem;
    margin-top: 3rem;
`

const Main = () => {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            setImage(res.data.hdurl);
            setCaption(res.data.explanation);
        })
    }, [])

    return (
        <StyledMain>
            <StyledH1>Photo of the day</StyledH1>
            <StyledContainer>
                <StyledImg src = {image} alt = 'photo of the day' />
                <Caption caption = { caption } />
                </StyledContainer>
        </StyledMain>
    )
}

export default Main;