import React, { Component } from 'react'
import Scorecard from './scorecard/scorecard'
import './GolfScore.css'
import './bootstrap.min.css'

class GolfScore extends Component {
  state = [
    {
      key: 1,
      name: 'Chris',
      holeScores: [
        { hole: 1, score: 4 },
        { hole: 2, score: 5 },
        { hole: 3, score: 5 },
        { hole: 4, score: 5 },
        { hole: 5, score: 4 },
        { hole: 6, score: 5 },
        { hole: 7, score: 2 },
        { hole: 8, score: 4 },
        { hole: 9, score: 4 },
        { hole: 10, score: 4 },
        { hole: 11, score: 3 },
        { hole: 12, score: 4 },
        { hole: 13, score: 5 },
        { hole: 14, score: 6 },
        { hole: 15, score: 4 },
        { hole: 16, score: 4 },
        { hole: 17, score: 5 },
        { hole: 18, score: 4 },
      ],
    },
    {
      key: 2,
      name: 'Harry',
      holeScores: [
        { hole: 1, score: 3 },
        { hole: 2, score: 4 },
        { hole: 3, score: 4 },
        { hole: 4, score: 5 },
        { hole: 5, score: 6 },
        { hole: 6, score: 4 },
        { hole: 7, score: 3 },
        { hole: 8, score: 4 },
        { hole: 9, score: 3 },
        { hole: 10, score: 4 },
        { hole: 11, score: 3 },
        { hole: 12, score: 3 },
        { hole: 13, score: 4 },
        { hole: 14, score: 6 },
        { hole: 15, score: 5 },
        { hole: 16, score: 5 },
        { hole: 17, score: 5 },
        { hole: 18, score: 3 },
      ],
    },
    {
      key: 3,
      name: 'Ron',
      holeScores: [
        { hole: 1, score: 4 },
        { hole: 2, score: 5 },
        { hole: 3, score: 4 },
        { hole: 4, score: 5 },
        { hole: 5, score: 6 },
        { hole: 6, score: 4 },
        { hole: 7, score: 4 },
        { hole: 8, score: 4 },
        { hole: 9, score: 3 },
        { hole: 10, score: 4 },
        { hole: 11, score: 7 },
        { hole: 12, score: 5 },
        { hole: 13, score: 4 },
        { hole: 14, score: 6 },
        { hole: 15, score: 5 },
        { hole: 16, score: 5 },
        { hole: 17, score: 5 },
        { hole: 18, score: 3 },
      ],
    },
  ]

  render() {
    return (
      <div>
        <div className='GolfScore'>GolfScore app!</div>
        <Scorecard scores={this.state} />
      </div>
    )
  }
}

export default GolfScore
