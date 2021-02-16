import React from 'react'

import { Box } from '../../components/Box'

import { Icons } from '../../components/Cell/Cell.styled'

import num1 from '../../assets/1.png'
import num2 from '../../assets/2.png'
import num3 from '../../assets/3.png'
import num4 from '../../assets/4.png'
import num5 from '../../assets/5.png'
import num6 from '../../assets/6.png'
import num7 from '../../assets/7.png'
import num8 from '../../assets/8.png'
import bomb from '../../assets/bomb.png'
import flag from '../../assets/flag.png'
import wrong_flag from '../../assets/wrong_flag.png'

// Allows refering in the Icons src with a "variable" variable bellow -> `num${value}`
const importedImg = { num1, num2, num3, num4, num5, num6, num7, num8 }

export const toDisplay = (cellArray, index, value) => {
  if (cellArray[index].advancedChecked === true) {
    if (cellArray[index].value === 'bombPressed') {
      return (
        <Box
          alignItems='center'
          justifyContent='center'
          backgroundColor='red'
          width='100%'
          height='100%'
        >
          {' '}
          <Icons src={bomb} alt={value} draggable='false' />
        </Box>
      )
    } else if (cellArray[index].value === 'bomb') {
      return <Icons src={bomb} alt={value} draggable='false' />
    } else {
      return (
        <Icons
          src={importedImg[`num${cellArray[index].value}`]}
          alt={value}
          draggable='false'
        />
      )
    }
  } else if (cellArray[index].flagged === 'wrong') {
    return <Icons src={wrong_flag} alt='wrong' draggable='false' />
  } else if (cellArray[index].flagged === true) {
    return <Icons src={flag} alt='flag' draggable='false' />
  }
}
