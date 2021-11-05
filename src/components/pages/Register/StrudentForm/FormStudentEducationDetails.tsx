import React, { Component } from 'react';
import RegisterFormWrapper from '../RegisterFormWrapper';
                        >
                            <Option value='babes-bolyai'>`Babes Bolyai` University</Option>
                            <Option value='technical-cluj-napoca'>Technical University of Cluj-Napoca</Option>
                            <Option value='medicine-cluj-napoca'>`Iuliu Hatieganu` University of Md. and Ph.
                                Cluj-Napoca</Option>
                            <Option value='other'>other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='faculty' label='Faculty' rules={[{ required: true }]}>
                        <Select
                            placeholder='Select a faculty'
                            onChange={this.props.handleChange('faculty')}
                            defaultValue={educationDetailsStudent.faculty}
                        >
                            <Option value='faculty-mathematics-informatics'>Faculty of mathematics and
                                informatics</Option>
                            <Option value='faculty-automation-cs'>Faculty of automation and computer science</Option>
                            <Option value='faculty-dental-medicine'>Faculty of Dental Medicine</Option>
                            <Option value='other'>other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='specialization' label='Specialization' rules={[{ required: true }]}>
                        <Select
                            placeholder='Select a specialization'
                            onChange={this.props.handleChange('specialization')}
                            defaultValue={educationDetailsStudent.specialization}
                        >
                            <Option value='informatics'>informatics</Option>
                            <Option value='mathematics'>mathematics</Option>
                            <Option value='informatics-mathematics'>informatics & mathematics</Option>
                            <Option value='automation'>automation</Option>
                            <Option value='dental-technology'>dental technology</Option>
                            <Option value='other'>other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='year-of-study' label='Year of study' rules={[{ required: true }]}>
                        <Select
                            placeholder='Select a year of study'
                            onChange={this.props.handleChange('yearOfStudy')}
                            defaultValue={educationDetailsStudent.yearOfStudy}
                        >
                            <Option value='first'>first</Option>
                            <Option value='second'>second</Option>
                            <Option value='third'>third</Option>
                            <Option value='fourth'>fourth</Option>
                            <Option value='fifth'>the fifth</Option>
                        </Select>
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