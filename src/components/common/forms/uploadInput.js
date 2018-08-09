import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';
import axios from 'axios'
class UploadInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: null
        }
    }
    beforeUpload = (file, fileList) => {
        this.setState({ file })
        return;
    }
    onChange = (info) => {
        axios.post('http://46.249.53.111:8080/salesxl/api/v2.0/upload/image', info.file, {
            headers: { 'content-type': 'multipart/form-data' }
        })
                        .then(res => console.log(res))
                        .catch(err => 'some error occoured')
        // if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        // }
        // if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        // } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        // }
    }
    render() {
        return (
            <div>
                <Upload name='file'
                    // action={(file) => {
                    //     console.log(file)
                    //     axios.post('http://46.249.53.111:8080/salesxl/api/v2.0/upload/image', file)
                    //     .then(res => console.log(res))
                    //     .catch(err => 'some error occoured')
                    // }}
                    beforeUpload={this.beforeUpload}
                    onChange={this.onChange}
                >
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                {this.state.file && <img src={this.state.file} alt="" />}
            </div >
        )
    }
}

export default UploadInput;