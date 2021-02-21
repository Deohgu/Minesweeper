import React, { useState, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux'

import { TimerBox, Counter } from '../Timer/Timer.styled'

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

export const Timer = () => {
  const gameStatus = useSelector(state => state.game.gameStatus)

  const [timerSeconds, setTimerSeconds] = useState('000.00')

  const counterRef = useRef(null)

  useEffect(() => {
    if (gameStatus === 'running') {
      // game started
      startTimer()
    } else if (gameStatus === 'won' || gameStatus === 'lost') {
      // Game Won or Lost
      clearInterval(counterRef.current) // stops the timer
    } else {
      // game waiting
      clearInterval(counterRef.current)
      setTimerSeconds('000.00') // resets timer to 0
    }
  }, [gameStatus])

  const startTimer = () => {
    counterRef.current = setInterval(() => {
      setTimerSeconds((timerSeconds) =>
        timerSeconds <= 9.99
          ? '00' + (Number(timerSeconds) + 0.01).toFixed(2) // .toFixed deals with floating numbers
          : timerSeconds <= 99.99
            ? '0' + (Number(timerSeconds) + 0.01).toFixed(2)
            : (Number(timerSeconds) + Number('000.01')).toFixed(2)
      )
    }, 10)
  }

  return (
    <TimerBox>
      <Counter
        src={importedImage[`counter_${timerSeconds.charAt(0)}`]} // turns into array to be able to select a char string
        alt={timerSeconds.charAt(0)}
      />
      <Counter
        src={importedImage[`counter_${timerSeconds.charAt(1)}`]}
        alt={timerSeconds.charAt(1)}
      />
      <Counter
        src={importedImage[`counter_${timerSeconds.charAt(2)}`]}
        alt={timerSeconds.charAt(2)}
      />
      {/* <div style={{ width: "15px" }} /> */}
      <Counter
        src={counter_null} // skips the dot - will fix later
        alt='-'
      />
      <Counter
        src={importedImage[`counter_${timerSeconds.charAt(4)}`]} // skips the dot - will fix later
        alt={timerSeconds.charAt(4)}
      />
      <Counter
        src={importedImage[`counter_${timerSeconds.charAt(5)}`]}
        alt={timerSeconds.charAt(5)}
      />
    </TimerBox>
  )
}
