import { loading } from 'bbx';
import { message } from 'antd';
import router from 'umi/router';
import State from '@/State';
import request from '@/utils/request';

class Form extends State {
  state = {
    step: {
      payAccount: 'ant-design@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
  }

  @loading
  async submitRegularForm(params) {
    await request('/api/forms', {
      method: 'POST',
      body: params,
    });
    message.success('提交成功');
  }

  @loading
  async submitStepForm(steps) {
    await request('/api/tags');
    this.saveStepFormData(steps);
    router.push('/form/step-form/result');
  }

  @loading
  async submitAdvancedForm(params) {
    await request('/api/forms', {
      method: 'POST',
      body: params,
    });
    message.success('提交成功');
  }

  saveStepFormData(steps) {
    this.setState({
      steps: {
        ...this.state.steps,
        ...steps,
      },
    });
  }

}

export const form = new Form();
