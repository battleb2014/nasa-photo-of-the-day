import React from 'react';
import styled from 'styled-components'; 

const StyledHeader = styled.div`
display: flex;
align-items: center;
height: 15rem;
color: red;
`

const StyledWrap = styled.div`
    display: flex;
    margin-left: 5rem;
`

const StyledLogo = styled.img`
    width: 10rem;
    margin-right: 2rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledWrap>
            <StyledLogo src="https://seekvectorlogo.com/wp-content/uploads/2018/02/nasa-vector-logo.png" alt = 'nasa logo' />
            <h1>NASA</h1>
            </StyledWrap>
        </StyledHeader>
    )
}

export default Header;