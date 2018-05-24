import React from 'react'

class ExampleForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }
  
  render() {
    return (
      <div>
        <h3>Premier League Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.state.teams.map((team, index) => {
            return <div key={index} style={{ backgroundColor: '#f4f4f4', margin: '1rem', padding: '2rem' }}>
              <div>
                <label htmlFor="">No Of Players</label>
                <input type="number" name="noOfPlayers" value={team.noOfPlayers} onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="">captain</label>
                <input type="text" name="captain" value={team.captain} onChange={this.handleChange} />
              </div>
              {team.captain === 'carrick' ? <div>
                <label htmlFor="">Goalkeeper</label>
                <input type="text" name="goalkeeper" value={team.goalkeeper} onChange={this.handleChange} />
              </div>
                : null}
            </div>

          })}

          <button>Submit</button>
        </form>
        <button onClick={this.handleAddButtonClick}>ADD</button>

      </div>
    )
  }

}
export default ExampleForm;