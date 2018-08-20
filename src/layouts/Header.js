import React, { Component } from 'react';
import { Layout, message } from 'antd';
import Animate from 'rc-animate';
import { connect } from 'bbx';
import router from 'umi/router';
import GlobalHeader from '../components/GlobalHeader';
import TopNavHeader from '../components/TopNavHeader';
import { user } from '@/states/user';
import { global } from '@/states/global';
import { setting } from '@/states/setting';
import { login } from '@/pages/User/states/login';
import styles from './Header.less';
import Authorized from '../utils/Authorized';

const { Header } = Layout;

// connect(({ user, global, setting, loading }) => ({
//   currentUser: user.currentUser,
//   collapsed: global.collapsed,
//   fetchingNotices: loading.effects['global/fetchNotices'],
//   notices: global.notices,
//   setting,
// }))(HeaderView)
@connect(user, global, setting)
class HeaderView extends Component {
  state = {
    visible: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  getHeadWidth = () => {
    const { isMobile } = this.props;
    const { collapsed } = global.state;
    const { fixedHeader, layout } = setting;

    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%';
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
  };

  handleNoticeClear = type => {
    message.success(`清空了${type}`);
    global.clearNotices(type);
  };

  handleMenuClick = ({ key }) => {
    if (key === 'userCenter') {
      router.push('/account/center');
      return;
    }
    if (key === 'triggerError') {
      router.push('/exception/trigger');
      return;
    }
    if (key === 'userinfo') {
      router.push('/account/settings/base');
      return;
    }
    if (key === 'logout') {
      login.logout();
    }
  };

  handleNoticeVisibleChange = visible => {
    if (visible) {
      global.fetchNotices();
    }
  };

  handScroll = e => {
    const { autoHideHeader } = setting.state;
    const { visible } = this.state;
    if (!autoHideHeader) {
      return;
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    if (!this.ticking) {
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true,
          });
          this.scrollTop = scrollTop;
          return;
        }
        if (scrollTop > 400 && visible) {
          this.setState({
            visible: false,
          });
        }
        if (scrollTop < 400 && !visible) {
          this.setState({
            visible: true,
          });
        }
        this.oldScrollTop = scrollTop;
        this.ticking = false;
        return;
      });
    }
    this.ticking = false;
  };

  render() {
    const { isMobile, handleMenuCollapse } = this.props;
    const { silderTheme, layout, fixedHeader } = setting;
    const { visible } = this.state;
    const isTop = layout === 'topmenu';
    const HeaderDom = visible ? (
      <Header
        style={{ padding: 0, width: this.getHeadWidth() }}
        className={fixedHeader ? styles.fixedHeader : ''}
      >
        {isTop && !isMobile ? (
          <TopNavHeader
            theme={silderTheme}
            mode="horizontal"
            Authorized={Authorized}
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            currentUser={user.state.currentUser}
            notices={global.state.notices}
            {...this.props}
          />
        ) : (
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onNoticeClear={this.handleNoticeClear}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
            currentUser={user.state.currentUser}
            notices={global.state.notices}
            {...this.props}
          />
        )}
      </Header>
    ) : null;
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    );
  }
}

export default HeaderView;
