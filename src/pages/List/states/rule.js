import { loading } from 'bbx';
import { stringify } from 'qs';
import State from '@/State';
import request from '@/utils/request';

class Rule extends State {
  state = {
    data: {
      list: [],
      pagination: {},
    },
  }

  @loading
  async fetch(params) {
    const response = await request(`/api/rule?${stringify(params)}`);
    this.setState({
      data: response,
    });
  }

  @loading
  async add(params) {
    const response = await request('/api/rule', {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    });
    this.setState({
      data: response,
    });
  }

  @loading
  async remove(params) {
    const response = await request('/api/rule', {
      method: 'POST',
      body: {
        ...params,
        method: 'delete',
      },
    });
    this.setState({
      data: response,
    });
  }

  @loading
  async update(params) {
    const response = await request('/api/rule', {
      method: 'POST',
      body: {
        ...params,
        method: 'update',
      },
    });
    this.setState({
      data: response,
    });
  }

}

export const rule = new Rule();
