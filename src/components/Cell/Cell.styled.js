import styled from 'styled-components'

import { Box } from './../Box'

export const CellStyled = styled(Box)`
  font-size: 25px;
  font-weight: 600;

  align-items: center;
  justify-content: center;

  width: calc((100% / ${(props) => props.gridWidth}));
  height: calc((100% / ${(props) => props.gridWidth}));
  background-color: ${(props) =>
    props.pressed
      ? 'hsl(0deg 0% 74%)'
      : 'hsl(0deg 0% 74%)'}; // original minesweeper doesn't seem to change.

  border: ${(props) =>
    props.pressed
      ? 'solid 2px hsl(0, 0%, 60%)'
      : 'outset 4px hsl(0deg 0% 92%)'};
`

export const Icons = styled.img`
  image-rendering: pixelated;
  height: 80%;
  user-select: none;
`
