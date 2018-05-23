import React from 'react'

class ExampleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team: '',
      noOfPlayers: '',
      captain: '',
      goalkeeper: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }
  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleAddButtonClick = ()=>{
    console.log('add fields')
  }
  render() {
    return (
      <div>
        <h3>Premier League Form</h3>
        <form action="">
          <div style={{ backgroundColor: '#f4f4f4', margin: '1rem', padding: '2rem' }}>
            <div>
              <label htmlFor="">team</label>
              <input type="text" name="team" value={this.state.team} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="">No Of Players</label>
              <input type="number" name="noOfPlayers" value={this.state.noOfPlayers} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="">captain</label>
              <input type="text" name="captain" value={this.state.captain} onChange={this.handleChange} />
            </div>
            {this.state.captain === 'carrick' ? <div>
              <label htmlFor="">Goalkeeper</label>
              <input type="text" name="goalkeeper" value={this.state.goalkeeper} onChange={this.handleChange} />
            </div>
              : null}
          </div>
        </form>
          <button onClick={this.handleAddButtonClick}>ADD</button>

      </div>
    )
  }

}
export default ExampleForm;