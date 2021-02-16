import styled from 'styled-components'

import { Box } from '../Box'

export const GameBox = styled(Box)`
  flex-direction: column;
  width: 100vw;
  height: calc(100vw * 1.15);
  // 85% of its height. If changed here it needs to be changed in the child components (Scoreboard and board) as they have it hardcoded as 15% and 85%.
  max-width: calc(450px);
  max-height: calc(
    450px + (450px * 0.15)
  ); // plus 15% in height of the total width for the scoreboard
  border: 8px outset hsl(0deg 0% 92%);
  background-color: hsl(0deg 0% 74%);
`
