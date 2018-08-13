import React, { Component } from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default class ImageCropper extends Component {
  render() {
    return (
      <div>
        <ReactCrop src="" />
      </div>
    )
  }
}
