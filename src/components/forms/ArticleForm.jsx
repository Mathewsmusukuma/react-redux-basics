import { Form, Input, InputNumber, Button } from "antd";
import { useDispatch } from "react-redux";
import { addArticle } from "../../stateManger/actions/articlesListAction";
import AppLayout from "../layouts/AppLayout";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const ArticleForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addArticle(values.user));
  };

  return (
    <AppLayout>
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{marginTop: 20}}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{float: 'right'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default ArticleForm;