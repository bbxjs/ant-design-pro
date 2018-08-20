import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';

class Chart extends State {
  state = {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
  }

  @loading
  async fetch() {
    const response = await request('/api/fake_chart_data');
    this.setState({ ...response });
  }

  async fetchSalesData() {
    const response = await request('/api/fake_chart_data');
    this.setState({
      salesData: response.salesData,
    });
  }

  clear() {
    this.setState({
      visitData: [],
      visitData2: [],
      salesData: [],
      searchData: [],
      offlineData: [],
      offlineChartData: [],
      salesTypeData: [],
      salesTypeDataOnline: [],
      salesTypeDataOffline: [],
      radarData: [],
    })
  }

}

export const chart = new Chart();
