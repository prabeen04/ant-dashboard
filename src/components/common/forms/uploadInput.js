import React, { Component } from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd';
import axios from 'axios';
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
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        console.log(info)
        this.setState({ fileList: info.fileList })
        if (info.file.status === 'done') {
            this.setState({
                uploadResponse: info.file.response
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
                    action='http://46.249.53.111:8080/salesxl/api/v2.0/upload/image'
                    listType="picture-card"
                    fileList={fileList}
                    name='image'
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <div style={{ minHeight: 200, backgroundColor: '#f4f4f4', width: '100%'}}>
                    {this.state.uploadResponse && <img src={`http://46.249.53.111:8080/salesxl/api/v2.0/upload/image/${this.state.uploadResponse}`} alt="" />}
                </div>
            </div >
        )
    }
}

export default UploadInput;