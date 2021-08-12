import React from 'react';
import styled from 'styled-components'; 

const StyledHeader = styled.div`
display: flex;
align-items: center;
height: 15rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <div className = 'wrap'>
            <img src="https://seekvectorlogo.com/wp-content/uploads/2018/02/nasa-vector-logo.png" alt = 'nasa logo' className = 'nasaLogo' />
            <h1>NASA</h1>
        </div>
        </StyledHeader>
    )
}

export default Header;