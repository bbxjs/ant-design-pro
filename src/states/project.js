import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Project extends State {
  state = {
    notice: [],
  }

  @loading
  async fetchNotice() {
    const response = await request('/api/project/notice');
    this.setState({
      notice: Array.isArray(response) ? response : [],
    });
  }

}

export const project = new Project();
