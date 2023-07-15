import React from "react";
import styled from 'styled-components';

const Button = styled.button`
border: 2px solid black;
background-color: white;
color:black;
font-size: 50px;
cursor: pointer;
`;

export default class Styled extends React.Component {
    render() {
        return (
            <div>
                <Button>Halo Semua</Button>
            </div>
        )
    }
}