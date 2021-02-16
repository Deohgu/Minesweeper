import styled from 'styled-components'

export const Wrapper = styled.div`
  // *Destructures* the received props from rest into the a variable that matches the name. No need for props.display
  display: ${({ display }) => (display || 'Flex')};

  align-items: ${({ alignItems }) => (alignItems || 'initial')};

  justify-content: ${({ justifyContent }) =>
    justifyContent || 'start'};

  flex-direction: ${({ flexDirection }) =>
    flexDirection || 'row'};

  width: ${({ width }) => (width || 'initial')};

  height: ${({ height }) => (height || 'initial')};

  max-width: ${({ maxWidth }) => (maxWidth || 'initial')};

  max-height: ${({ maxHeight }) => (maxHeight || 'initial')};

  border: ${({ border }) => (border || 'initial')};

  margin: ${({ margin }) => (margin || 'initial')};

  font-size: ${({ fontSize }) => (fontSize || 'inherit')};

  color: ${({ color }) => (color || 'inherit')};

  line-height: ${({ lineHeight }) => (lineHeight || 'initial')};

  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'initial'};
`
