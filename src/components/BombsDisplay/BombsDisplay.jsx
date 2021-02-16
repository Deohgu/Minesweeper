import React from 'react'

import { BombsBox, BombsImg } from './BombsDisplay.styled'

import counter_0 from '../../assets/counter_0.png'
import counter_1 from '../../assets/counter_1.png'
import counter_2 from '../../assets/counter_2.png'
import counter_3 from '../../assets/counter_3.png'
import counter_4 from '../../assets/counter_4.png'
import counter_5 from '../../assets/counter_5.png'
import counter_6 from '../../assets/counter_6.png'
import counter_7 from '../../assets/counter_7.png'
import counter_8 from '../../assets/counter_8.png'
import counter_9 from '../../assets/counter_9.png'
import counter_null from '../../assets/counter_null.png'

const importedImage = {
  counter_0,
  counter_1,
  counter_2,
  counter_3,
  counter_4,
  counter_5,
  counter_6,
  counter_7,
  counter_8,
  counter_9,
  counter_null
}

// Turns to string to be able to add the 0's
const stringFlaggedAmount = (flaggedAmount) => {
  const stringfied = flaggedAmount.toString()
  if (stringfied.length === 1) return '00' + flaggedAmount
  else if (stringfied.length === 2) return '0' + stringfied
  else return stringfied
}

export const BombsDisplay = ({ flaggedAmount }) => {
  return (
    <BombsBox>
      <BombsImg
        src={
          flaggedAmount < 0
            ? counter_null
            : importedImage[
                `counter_${stringFlaggedAmount(flaggedAmount).charAt(0)}`
            ]
        }
        alt={
          flaggedAmount < 0
            ? '-'
            : importedImage[
                `counter_${stringFlaggedAmount(flaggedAmount).charAt(0)}`
            ]
        }
      />
      <BombsImg
        src={
          flaggedAmount < 0 && flaggedAmount > -10
            ? importedImage.counter_0
            : importedImage[
                `counter_${stringFlaggedAmount(flaggedAmount).charAt(1)}`
            ]
        }
        alt={
          flaggedAmount < 0 && flaggedAmount > -10
            ? '0'
            : importedImage[
                `counter_${stringFlaggedAmount(flaggedAmount).charAt(1)}`
            ]
        }
      />
      <BombsImg
        src={
          importedImage[
            `counter_${stringFlaggedAmount(flaggedAmount).charAt(2)}`
          ]
        }
        alt={
          importedImage[
            `counter_${stringFlaggedAmount(flaggedAmount).charAt(3)}`
          ]
        }
      />
    </BombsBox>
  )
}
