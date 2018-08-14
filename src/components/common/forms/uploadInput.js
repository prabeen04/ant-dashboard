import React, { Component } from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd';
import axios from 'axios';
import ImageCropper from '../../utils/ImageCropper'
import './forms.css';
class UploadInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            uploadResponse: ''
        }
    }
    handleBeforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        this.setState({ fileList: info.fileList })
        if (info.file.status === 'done') {
            this.setState({
                uploadResponse: info.file.response
            })
        }
        if (info.file.status === 'removed') {
            this.setState({
                uploadResponse: ''
            })
        }
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload name='file'
                    {...this.props}
                    action='https://fokuswork.com:8443/salesxl/api/v2.0/upload/image/'
                    listType="picture-card"
                    fileList={fileList}
                    name='image'
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                    beforeUpload={this.handleBeforeUpload}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <div style={{ minHeight: 200, backgroundColor: '#f4f4f4', width: '100%' }}>
                    {this.state.uploadResponse && <img src={`https://fokuswork.com:8443/salesxl/api/v2.0/upload/image/${this.state.uploadResponse}`} alt="" />}
                    <ImageCropper/>
                </div>
            </div >
        )
    }
}

export default UploadInput;