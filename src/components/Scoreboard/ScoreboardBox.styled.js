import styled from 'styled-components'

import { Box } from '../Box'

export const ScoreboardBox = styled(Box)`
  justify-content: space-between;

  align-items: center;
  font-size: clamp(3px, 9.4vw, calc((700px * 0.85) * 0.094));

  color: white;
  width: calc(100% - (100% * 0.06)); // amount added in margin
  height: 15%;
  padding: 1.5%;
  border: inset 6px hsl(0deg 0% 92%);
  margin: calc(85% * 0.03) calc(100% * 0.03) 0 calc(100% * 0.03); // to be equal to the board
  background-color: hsl(0, 0%, 75%);
`

export const EmoteButton = styled.button`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1%;
  border: outset 4px hsl(0 0% 92%);
  background-color: hsl(0 0% 74%);
  user-select: none;

  &:active {
    border: inset 4px hsl(0 0% 92%);
  }
`
