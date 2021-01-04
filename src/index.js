import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GolfScore from './GolfScore'
import * as serviceWorker from './serviceWorker'

/* const players = [
    {
        id: 1,
        firstName: 'Chris',
        lastName: 'Teater',
        handicap: 12
    },
    {
        id: 2,
        firstName: 'Harry',
        lastName: 'Behlmann',
        handicap: 5
    }
]

const scores = [
    {
        game: 1,
        playerId: 1,
        h01: 4,
        h02: 3,
        h03: 6,
        h04: 4,
        h05: 3,
        h06: 5,
        h07: 4,
        h08: 5,
        h09: 4
    },
    {
        game: 1,
        playerId: 2,
        h01: 3,
        h02: 4,
        h03: 4,
        h04: 5,
        h05: 3,
        h06: 5,
        h07: 3,
        h08: 4,
        h09: 4
    }
] */

ReactDOM.render(<GolfScore />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
