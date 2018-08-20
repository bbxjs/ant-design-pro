import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Profile extends State {
  state = {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  }

  @loading
  async fetchBasic() {
    const response = await request('/api/profile/basic');
    this.setState({ ...response });
  }

  @loading
  async fetchAdvanced() {
    const response = await request('/api/profile/advanced');
    this.setState({ ...response });
  }

}

export const profile = new Profile();
