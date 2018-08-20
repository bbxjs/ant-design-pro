import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

class Register extends State {
  state = {
    status: undefined,
  }

  @loading
  async submit(params) {
    const response = await request('/api/register', {
      method: 'POST',
      body: params,
    });
    setAuthority('user');
    reloadAuthorized();
    this.setState({
      status: response.status,
    });
  }

}

export const register = new Register();
