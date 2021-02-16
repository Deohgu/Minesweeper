import styled from 'styled-components'
import { Box } from '../Box'

export const BoardStyled = styled(Box)`
  justify-content: center;
  flex-wrap: wrap;
  // 85% as that the parents width is 85% of the height. So with this the component will be square and - 0.06 to remove the extra margin
  width: calc(100% - (100% * 0.06));
  height: calc(85% - (85% * 0.06));
  margin: calc(85% * 0.03) calc(100% * 0.03);
  border: inset 6px hsl(0deg 0% 92%);
  background-color: lightgray;
`
