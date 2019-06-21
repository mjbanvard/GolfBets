import React from 'react'
import './scorecard.css'

const holeNumber = (holes, side) => {
  let start = 9
  let end = 18
  let comb = []
  if (side === 'front') {
    start = 0
    end = 9
  }
  for (let f = start; f < end; f++) {
    comb.push(
      < div className='HoleNumber' >
        <p>{holes[f].hole}</p>
      </div >
    )
  }
  return comb
}

const score = (score, side) => {
  let start = 9
  let end = 18
  let comb = []
  if (side === 'front') {
    start = 0
    end = 9
  }
  for (let f = start; f < end; f++) {
    comb.push(
      < div className='HoleScore' >
        <p>{score[f].score}</p>
      </div >
    )
  }
  return comb
}

const sideTotal = (total, side) => {
  let start = 9
  let end = 18
  let comb = []
  if (side === 'front') {
    start = 0
    end = 9
  }
  let scorefill = 0
  for (let x = start; x < end; x++) {
    scorefill = scorefill + total[x].score
  }
  comb.push(<div className='TotalScore'>{scorefill}</div>)

  return comb

}

const totalScore = score => {
  let scorefill = 0
  for (let x = 0; x < score.length; x++) {
    scorefill = scorefill + score[x].score
  }
  return <div className='TotalScore'>{scorefill}</div>
}

const scoreCard = props => {
  console.log('Dem B props', props)
  let holeBadge = <div className='HoleName'>Hole</div>
  let total = <div className='TotalTitle'>Total</div>
  let front = <div className='TotalTitle'>Front</div>
  let back = <div className='TotalTitle'>Back</div>
  let nameBadge = <div className='HoleName'>{props.scores.name}</div>
  let playerScore = props.scores.holeScores

  return (
    <div>
      <div className='rowC'>
        {holeBadge}
        {holeNumber(playerScore, 'front')}
        {front}
        {holeNumber(playerScore, '')}
        {back}
        {total}
      </div>
      <div className='rowC'>
        {nameBadge}
        {score(playerScore, 'front')}
        {sideTotal(playerScore, 'front')}
        {score(playerScore, '')}
        {sideTotal(playerScore, '')}
        {totalScore(playerScore)}
      </div>
    </div>
  )
}

export default scoreCard
