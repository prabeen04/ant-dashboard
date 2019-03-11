import React, { useState } from 'react';
import { Icon, Popover, Tooltip, Card, Button } from 'antd';
import SettingTab from '../tabs/settingTab';
import { StyledPopover } from "../UI/Antd";

export default function SettingPopover(props) {
    const [visible, setVisible] = useState(false)
    const hide = () => setVisible(false)
    const handleVisibleChange = (visible) => setVisible(visible);
    return (
        <div>
            <Tooltip title="Settings">
                <StyledPopover
                    content={
                        <div>
                            <SettingTab hide={hide} />
                        </div>

                    }
                    trigger="click"
                    placement="bottomRight"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                >
                    <Icon
                        style={{ fontSize: 25, cursor: 'pointer' }}
                        type="setting"
                        onClick={() => handleVisibleChange()}
                    />
                </StyledPopover>
            </Tooltip>
        </div>
    )
}
