import { loading } from 'bbx';
import State from '@/State';
import request from '@/utils/request';
import { user } from './user';

class Global extends State {
  state = {
    collapsed: false,
    notices: [],
  }

  async fetchNotices() {
    const notice = await request('/api/notices');
    this.setState({
      notice,
    });
    user.changeNotifyCount(notice.length);
  }

  async clearNotices(type) {
    this.setState({
      notice: this.state.notices.filter(item => item.type !== type),
    });
    user.changeNotifyCount(this.notices.length);
  }

  changeLayoutCollapsed(collapsed) {
    this.setState({
      collapsed,
    });
  }

}

export const global = new Global();
