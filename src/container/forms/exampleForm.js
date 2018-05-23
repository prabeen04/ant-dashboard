import React from 'react'

class ExampleForm extends React.Component {
  render() {
    constructor(props){
      super(props)
      this.state = {
        team: '',
        noOfPlayers: '',
        captain: '',
        goalkeeper: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
      console.log(e)
    }
    return (
      <div>
        <h3>Premier League Form</h3>
        <form action="">
        <div>
          <label htmlFor="">team</label>
          <input type="text" name="team" value={this.state.team} onChange={this.handleChange}/>
        </div>
        </form>  

      </div>
    )
  }

}
export default ExampleForm;