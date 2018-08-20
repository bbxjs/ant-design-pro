import { loading } from 'bbx';
import { stringify } from 'qs';
import State from '@/State';
import request from '@/utils/request';


class List extends State {
  state = {
    list: [],
  }

  @loading
  async fetch(params) {
    const response = await request(`/api/fake_list?${stringify(params)}`);
    const list = Array.isArray(response) ? response : [];
    this.setState({
      list,
    });
  }

  @loading
  async submit(params) {
    const { count = 5, ...restParams } = params;
    let method;
    if (params.id) {
      method = Object.keys(params).length === 1 ? 'delete' : 'update';
    } else {
      method = 'post'
    }
    const list = await request(`/api/fake_list?count=${count}`, {
      method: 'POST',
      body: {
        ...restParams,
        method,
      },
    });
    this.setState({
      list,
    });
  }

  @loading
  async appendFetch(params) {
    const response = await request(`/api/fake_list?${stringify(params)}`);
    const list = Array.isArray(response) ? response : [];
    this.setState({
      list: this.state.list.concat(list),
    });
  }


}

export const list = new List();
