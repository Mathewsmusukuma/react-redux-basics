import { Form, Input, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import updateArticle from "../../stateManger/actions/updateArticleAction";
import articleDetails from "../../stateManger/actions/articleDetailsAction";
import CustomLoader from "../CustomLoader";
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

const UpdateArticleForm = () => {
    const { loading, articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const { articleID } = useParams();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(updateArticle(articleID,values));
  };

  useEffect(()=>{
    dispatch(articleDetails(articleID));
  },[dispatch, articleID])

  useEffect(()=>{
    form.setFieldsValue({
        first_name: articles?.data?.first_name,
        last_name: articles?.data?.last_name,
        email: articles?.data?.email,
      })
  })

  return (
    <AppLayout>
        <CustomLoader loading={loading}>
      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{marginTop: 20}}
      >
        <Form.Item
          name='first_name'
          label="First name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='last_name'
          label="Last name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" style={{float: 'right'}}>
            Update
          </Button>
        </Form.Item>
      </Form>
      </CustomLoader>
    </AppLayout>
  );
};

export default UpdateArticleForm;
