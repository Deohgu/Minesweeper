import React from 'react'

import { BombsDisplay } from '../BombsDisplay/BombsDisplay'

import { Timer } from '../Timer/Timer'

import { ScoreboardBox, EmoteButton } from './ScoreboardBox.styled'

import face_waiting from '../../assets/face_waiting.png'

export const Scoreboard = ({ statusHandler, gameStatus, flaggedAmount }) => {
  return (
    <ScoreboardBox>
      <BombsDisplay flaggedAmount={flaggedAmount} />
      <EmoteButton>
        {/* Reset Icon */}
        <img
          src={face_waiting}
          alt='reset'
          onClick={() => {
            statusHandler('waiting')
          }}
          style={{ height: '100%', imageRendering: 'pixelated' }}
        />
      </EmoteButton>
      <Timer gameStatus={gameStatus} />
    </ScoreboardBox>
  )
}
