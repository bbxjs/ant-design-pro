import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Monitor extends State {
  state = {
    tags: [],
  }

  @loading
  async fetchTags() {
    const response = await request('/api/tags');
    this.setState({
      tags: response.list,
    });
  }

}

export const monitor = new Monitor();
