import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Settings extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Settings Component</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
