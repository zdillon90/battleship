import React from 'react';
import styled from 'styled-components';

function Board() {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    background-color: #2196f3;
    padding: 10px;
  `;

  const Block = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  `;

  return (
    <div>
      <Container>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
        <Block>4</Block>
        <Block>5</Block>
        <Block>6</Block>
        <Block>7</Block>
        <Block>8</Block>
        <Block>9</Block>
      </Container>
    </div>
  );
}

export default Board;
