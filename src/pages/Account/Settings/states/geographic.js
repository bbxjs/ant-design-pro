import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Geographic extends State {
  state = {
    province: [],
    city: [],
  }

  @loading
  async fetchProvince() {
    const response = await request('/api/geographic/province');
    this.setState({
      province: response,
    });
  }

  @loading
  async fetchCity(province) {
    const response = await request(`/api/geographic/city/${province}`);
    this.setState({
      city: response,
    });
  }

}

export const geographic = new Geographic();
