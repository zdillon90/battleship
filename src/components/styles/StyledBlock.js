import styled, { css } from 'styled-components';

export const StyledBlock = styled.button`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: 0px solid;
  ${props =>
    props.clickable &&
    css`
      border: 4px solid;
      border-bottom-color: rgba(0, 162, 255, 0.1);
      border-right-color: rgba(0, 162, 255, 1);
      border-top-color: rgba(0, 162, 255, 1);
      border-left-color: rgba(0, 162, 255, 0.3);
      cursor: pointer;
    `}
`;

// When the person clicks a ship a red explosion symbol shows
// If there is a miss then the block shows a black x
