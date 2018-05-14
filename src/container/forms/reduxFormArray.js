import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

 class ReduxFormArray extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
