import React from 'react'
import './scorecard.css'

//   This is a StackOverflow solution that uses .bind and setState. -MJB
//   class Example extends React.Component {
//   
//   constructor() {
//     super();
//     this.state = { gender: "male" };
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(e) {
//     this.setState({ gender: e.target.value });
//   }
//
//   render() {
//     return (
//       <select value={this.state.gender} onChange={this.handleChange}>
//         <option name="male"> Male</option>
//         <option name="female">Female</option>
//       </select>
//     );
//   }
// }
//
// ReactDOM.render(<Example />, document.getElementById("root"));

var handleChange = (event) => {
  // Trying to find where handleChange manifests
  // console.log(event.current.value)
  this.setState({ score: event.current.value })
  // handleChange = handleChange.bind(this)
  console.log("Aren't we supposed to see this?")
  // console.log('Status: ', this.props)
  console.log(event.key)
  if (event.key >= '0' && event.key <= '9') {
    // inScore[f].score = event.key

    // 'this.' added to 'keystroke, below, to eliminate IntelliSense error
    console.log('Show me ', this.keyStroke)
    return this.keyStroke
  }
}

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
      <div className='HoleNumber'>
        <p>{holes[f].hole}</p>
      </div>
    )
  }
  return comb
}

const score = (inScore, side) => {
  let start = 9
  let end = 18
  let comb = []
  // let keyStroke
  if (side === 'front') {
    start = 0
    end = 9
  }
  for (let f = start; f < end; f++) {
    comb.push(
      <div className='HoleScore'>
        <form>
          {/* MJB added className and .css details to match cell width */}
          {/* <td>
            <textarea name="Answer" placeholder="Answer" 
            th:field="${questionAnswerSet.answer}" id="answer" 
            style="resize: none; width: 100%;">
            </textarea>
          </td> */}
          <input className='inputCell' type='input' value={score[f].score} onChange={handleChange()} />
        </form>
      </div>
    )
    
  }
  console.log('This is comb: ', comb)
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
  console.log('This is COMB: ', comb)
  return comb
}

const totalScore = (propScore) => {
  let scorefill = 0
  for (let x = 0; x < propScore.length; x++) {
    scorefill = scorefill + propScore[x].score
  }
  return <div className='TotalScore'>{scorefill}</div>
}

const playerRow = (players) => {
  let evening = []
  for (let j = 0; j < players.length; j++) {
    console.log('Players ', players[j].holeScores)
    evening.push(
      <div className='rowC'>
        <div className='HoleName'>{players[j].name}</div>
        {score(players[j].holeScores, 'front')}
        {sideTotal(players[j].holeScores, 'front')}
        {score(players[j].holeScores, '')}
        {sideTotal(players[j].holeScores, '')}
        {totalScore(players[j].holeScores)}
      </div>
    )
  }
  return evening
}

const scoreCard = (props) => {
  console.log('Dem B props', props.scores)
  let holeBadge = <div className='HoleName'>Name</div>
  let total = <div className='TotalTitle'>Total</div>
  let front = <div className='TotalTitle'>Front</div>
  let back = <div className='TotalTitle'>Back</div>
  let playerScore = props.scores[0].holeScores

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
      {playerRow(props.scores)}
    </div>
  )
}

export default scoreCard
