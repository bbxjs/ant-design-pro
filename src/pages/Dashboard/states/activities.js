import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Activities extends State {
  state = {
    list: [],
  }

  @loading
  async fetchList() {
    const response = await request('/api/activities');
    this.setState({
      list: Array.isArray(response) ? response : [],
    });
  }

}

export const activities = new Activities();
