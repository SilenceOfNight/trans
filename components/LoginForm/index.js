import styled from 'styled-components';
import { Button, Form, Icon, Input } from 'antd';

const Container = styled.div`
  margin-top: 175px;
`;

const Tips = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .tips-keyword {
    color: #333;
    font-size: 32px;
    margin-right: 10px;
  }

  .tips-content {
    color: #333;
    font-size: 18px;
  }
`;

const { Item: FormItem } = Form;

const LoginForm = props => {
  const { form, onSubmit } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = event => {
    event.preventDefault();
    const { validateFields } = form;
    validateFields({ force: true }, (error, values) => {
      if (!error) {
        onSubmit(values);
      }
    });
  };

  return (
    <Container>
      <Tips>
        <span className="tips-keyword">Translate</span>
        <span className="tips-content">让国际化管理更简单</span>
      </Tips>
      <Form layout="inline" autoComplete="off" onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '用户名不能为空',
              },
            ],
          })(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '密码不能为空',
              },
            ],
          })(
            <Input
              prefix={<Icon type="key" />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          <Button htmlType="submit" block>
            登录
          </Button>
        </FormItem>
      </Form>
    </Container>
  );
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};

export default Form.create()(LoginForm);
