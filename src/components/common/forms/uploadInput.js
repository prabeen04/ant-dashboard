import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';

class UploadInput extends Component {
    render() {
        return (
            <div>
                <Upload>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}

export default UploadInput;