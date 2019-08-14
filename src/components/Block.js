import React, { useState } from 'react';
import styled from 'styled-components';

function Block(props) {
  //   const [hasShip, setShip] = useState(false);

  const coloredBlock = styled.div`
    display: table-cell;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-size: 40px;
    text-align: center;
    border-width: thin;
    padding-left: 10px;
    padding-right: 10px;
  `;

  return <coloredBlock>props.key</coloredBlock>;
}

export default Block;
