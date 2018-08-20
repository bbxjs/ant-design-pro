import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class User extends State {
  state = {
    list: [],
    currentUser: {},
  }

  async fetch() {
    const response = await request('/api/users');
    this.setState({
      list: response,
    });
  }

  @loading
  async fetchCurrent() {
    const response = await request('/api/currentUser');
    this.setState({
      currentUser: response || {},
    });
  }

  changeNotifyCount(notifyCount) {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        notifyCount,
      },
    });
  }

}

export const user = new User();
