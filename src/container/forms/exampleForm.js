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
  }
  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>Premier League Form</h3>
        <form action="">
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
            <input type="number" name="captain" value={this.state.captain} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="">Goalkeeper</label>
            <input type="number" name="goalkeeper" value={this.state.goalkeeper} onChange={this.handleChange} />
          </div>
        </form>

      </div>
    )
  }

}
export default ExampleForm;