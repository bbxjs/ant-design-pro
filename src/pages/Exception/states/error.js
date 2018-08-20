import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Error extends State {
  state = {
    error: '',
  }

  @loading
  async query(params) {
    await request(`/api/${params.code}`);
    this.setState({
      error: params.code,
    });
  }

}

export const error = new Error();
