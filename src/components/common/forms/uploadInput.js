import React, { Component } from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd';
import axios from 'axios'
class UploadInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    // actionHandler = (file) => {
    //     axios.post('http://46.249.53.111:8080/salesxl/api/v2.0/upload/image', file)
    //          .then(res => console.log(res))
    //          .catch(err => console.log(err))
    // }
    // onChange = (info) => {
    //     console.log(info)
    //     this.setState({ file: info.file })
    //     if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //     }
    //     if (info.file.status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully`);
    //     } else if (info.file.status === 'error') {
    //         message.error(`${info.file.name} file upload failed.`);
    //     }
    // }
    render() {
        const { previewVisible, previewImage } = this.state
        return (
            <div>
                <Upload name='file'
                    action='http://46.249.53.111:8080/salesxl/api/v2.0/upload/image'
                    onChange={this.onChange}
                    onPreview={this.handlePreview}
                    name='image'
                >
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                {this.state.file && <img src={this.state.file} alt="" style={{ width: 200, height: 200 }} />}
            </div >
        )
    }
}

export default UploadInput;