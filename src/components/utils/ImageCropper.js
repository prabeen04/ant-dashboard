import React, { Component } from 'react'
import ReactCrop from 'react-image-crop';
import { Button } from 'antd'
import 'react-image-crop/dist/ReactCrop.css';

export default class ImageCropper extends Component {
  state = {
    crop: {
      x: 20,
      y: 10,
      width: 100,
      aspect: 1
    },
    showCroppedImage: false,
    croppedImage: null
  }
  getCroppedImg = (image, pixelCrop, fileName) => {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    const myImage = document.createElement('img')
    myImage.src = this.props.src
    // console.log(canvas.toDataURL('image/jpeg'))
    ctx.drawImage(
      myImage,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.image.naturalWidth,
      pixelCrop.image.naturalHeight,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // As Base64 string
    const base64Image = canvas.toDataURL('image/jpeg');
    console.log(base64Image)
    return base64Image
    // As a blob
    // return new Promise((resolve, reject) => {
    //   canvas.toBlob(file => {
    //     // file.name = fileName;
    //     resolve(file);
    //   }, 'image/jpeg');
    // });
  }

  handleCrop = () => {
    const testImage = this.getCroppedImg(this.props.file, this.state.crop, 'testImage')
    this.setState({
      croppedImage: testImage,
      showCroppedImage: true
    })
    // .then(res => console.log(typeof res))
    // .catch(err => console.log(err))
  }
  handleChange = (crop) => {
    this.setState({ crop })
  }
  render() {
    return (
      <div>
        <ReactCrop
          src={this.props.src || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
          onChange={this.handleChange}
          crop={this.state.crop}
        />
        {this.props.src && <Button type="primary" onClick={this.handleCrop}>Crop Here</Button>}
        {this.state.showCroppedImage && <img src={this.state.croppedImage} style={{height: 400, width: 400}}/>}
      </div>
        )
      }
    }
