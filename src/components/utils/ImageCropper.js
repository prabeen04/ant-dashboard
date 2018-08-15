import React, { Component } from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default class ImageCropper extends Component {
  state = {
    crop: {
      x: 20,
      y: 10,
      width: 100,
    }
  }
  render() {
    return (
      <div>
        <ReactCrop
          src={this.props.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
          onChange = {(crop) => {
          console.log(crop)
          this.setState({crop})
        }}
        crop = {this.state.crop}
      />
      </div>
    )
  }
}
