import { Form, Input, Select } from "antd";
import React, { useContext, useState } from "react";
import { ApiEndpoints } from "../../../configs/api/endpoints";
import CustomButton from "../../shared/CustomButton";
import ApiService from '../../../services/apiService';
import { UserContext } from "../../context/UserContext";
import { Application } from "../../../interfaces/application/Application";

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const ApplyModal = (props) => {

    const { id } = useContext(UserContext);

    const {handleOk, openPositionName} = props;

    const [form] = Form.useForm();
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
    const [apiError, setApiError] = useState(null);

    const handleSubmit = (values: any) => {
        setIsSubmitButtonDisabled(true);
        ApiService.post<any, Application>(ApiEndpoints.applyOpenPosition, {
            studentID: id,
            openInternPositionID: props.openInternPositionID,
            description: values.description
        })
            .then(() => {
                handleOk();
                setIsSubmitButtonDisabled(false);
            })
            .catch((error) => {
                setApiError(error.response.data.errorMessage);
                setIsSubmitButtonDisabled(false);
            });
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={handleSubmit}>
            <label>
                Apply for {openPositionName}
            </label>
            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, max: 600 }]}
            >
                <Input.TextArea />
            </Form.Item>
            {/* <Form.Item name="cv" label="CV" rules={[{ required: true }]}>
                <Select placeholder="Select a CV" allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item> */}
            <Form.Item {...tailLayout}>
                <CustomButton type="primary" htmlType="submit" disabled={isSubmitButtonDisabled}>
                    Submit
                </CustomButton>
            </Form.Item>
            { apiError && <label>
                {apiError}
            </label>}
        </Form>
    );
};

export default ApplyModal;
