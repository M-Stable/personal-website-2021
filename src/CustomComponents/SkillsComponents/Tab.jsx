import React from 'react';
import styled from "styled-components";

const TabContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    opacity: ${props => props.isActive ? 1 : 0.5};
    font-size: 28px;

    &:hover {
        cursor: pointer;
    }
`;

function Tab(props) {
    const {isActive} = props;

    return (
        <TabContainer isActive={isActive}>
            <h2>Tab</h2>
        </TabContainer>
    );
}

export default Tab;