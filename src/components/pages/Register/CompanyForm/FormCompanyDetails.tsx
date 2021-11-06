import React, { Component } from 'react';
import CustomButton from '../../../shared/CustomButton';
                    </Form.Item>

                    <Form.Item name='company-domain' label='Domain' rules={[{ required: true }]}>
                        <Select
                            placeholder='Select a domain'
                            onChange={this.props.handleDomainChange('companyDomain')}
                            defaultValue={companyDetails.companyDomain}
                        >
                            <Option value='it'>IT</Option>
                            <Option value='medicine'>Medicine</Option>
                            <Option value='atomization'>Atomization</Option>
                            <Option value='other'>other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name='company-address'
                        label='Address'
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input.TextArea placeholder='Enter your address...'
                                        onChange={this.props.handleChange('companyAddress')}
                                        defaultValue={companyDetails.companyAddress}
                                        maxLength={50}
                                        style={{ width: '100%' }}/>
                    </Form.Item>
                    <div style={{ display: 'inline-flex' }}>
                        <CustomButton onClick={this.prev}>
                            Back
                        </CustomButton>
                        <CustomButton onClick={this.next}>
                            Next
                        </CustomButton>
                    </div>
                </RegisterFormWrapper>
            </Card>

        );
    }
}