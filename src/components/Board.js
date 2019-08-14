import React from 'react';
import styled from 'styled-components';

function Board() {
  const Container = styled.div`
    display: table;
    background-color: #2196f3;
    padding: 10px;
  `;

  const Row = styled.div`
    display: table-row;
  `;

  const Block = styled.div`
    display: table-cell;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-size: 40px;
    text-align: center;
    border-width: thin;
    padding-left: 10px;
    padding-right: 10px;
  `;

  return (
    <div>
      <Container>
        <Row>
          {(function() {
            const cols = [];
            for (let i = 0; i < 10; i += 1) {
              cols.push(
                <Row>
                  {(function() {
                    const rows = [];
                    for (let x = 0; x < 10; x += 1) {
                      // push iteration from here
                      rows.push(<Block key={x}>&nbsp;&nbsp;&nbsp;</Block>);
                    }
                    return rows;
                  })()}
                </Row>
              );
            }
            return cols;
          })()}
        </Row>
      </Container>
    </div>
  );
}

export default Board;
