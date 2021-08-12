import React from 'react';
import styled from 'styled-components';

const StyledCaption = styled.div`
    width: 50%;
    margin-top: 2rem;
`

const Caption = (props) => {
    return (
        <StyledCaption>
            <p>{props.caption}</p>
        </StyledCaption>
    )
}

export default Caption;