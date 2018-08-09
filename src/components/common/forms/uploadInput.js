import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';
const props = {
    name: 'file',
    action: 'http://46.249.53.111:8080/salesxl/api/v2.0/upload/image',
    headers: {
        authorization: 'authorization-text',
    },
    beforeUpload(a, b, c) {
        console.log(a)
        console.log(b)
        console.log(c)
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class UploadInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: null
        }
    }
    render() {
        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                {this.state.file && <img src={this.state.file} alt="" />}
            </div>
        )
    }
}

export default UploadInput;