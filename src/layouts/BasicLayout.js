import React from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import deepEqual from 'lodash.isequal';
import memoizeOne from 'memoize-one';
import { connect } from 'bbx';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import { formatMessage } from 'umi/locale';
import SiderMenu from '../components/SiderMenu';
import Authorized from '../utils/Authorized';
//import SettingDarwer from '../components/SettingDarwer';
import logo from '../assets/logo.svg';
import Footer from './Footer';
import Header from './Header';
import Context from './MenuContext';
import { global } from '@/states/global';
import { setting } from '@/states/setting';

const { Content } = Layout;
const { check } = Authorized;

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 */
const getBreadcrumbNameMap = memoizeOne(meun => {
  const routerMap = {};
  const mergeMeunAndRouter = meunData => {
    meunData.forEach(meunItem => {
      if (meunItem.children) {
        mergeMeunAndRouter(meunItem.children);
      }
      // Reduce memory usage
      routerMap[meunItem.path] = meunItem;
    });
  };
  mergeMeunAndRouter(meun);
  return routerMap;
}, deepEqual);

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

// connect(({ global, setting }) => ({
//   collapsed: global.collapsed,
//   layout: setting.layout,
//   ...setting,
// }))(BasicLayout)
@connect(global, setting)
class BasicLayout extends React.Component {
  state = {
    rendering: true,
  };
  constructor(props) {
    super(props);
    const { menuData } = this.props;
    this.getPageTitle = memoizeOne(this.getPageTitle);
    this.breadcrumbNameMap = getBreadcrumbNameMap(menuData);
  }
  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }
  getPageTitle = pathname => {
    let currRouterData = null;
    // match params path
    Object.keys(this.breadcrumbNameMap).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = this.breadcrumbNameMap[key];
      }
    });
    if (!currRouterData) {
      return 'Ant Design Pro';
    }
    const message = formatMessage({
      id: currRouterData.locale || currRouterData.name,
      defaultMessage: currRouterData.name,
    });
    return `${message} - Ant Design Pro`;
  };

  getLayoutStyle = () => {
    const { fixSiderbar, layout } = setting.state;
    const { collapsed } = global.state;

    if (fixSiderbar && layout !== 'topmenu') {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
      };
    }
    return null;
  };

  getContentStyle = () => {
    const { fixedHeader } = setting.state;
    return {
      margin: '24px 24px 0',
      paddingTop: fixedHeader ? 64 : 0,
    };
  };

  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);

    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const { routerData } = this.props;
      // get the first authorized route path in routerData
      const authorizedPath = Object.keys(routerData).find(
        item => check(routerData[item].authority, item) && item !== '/'
      );
      return authorizedPath;
    }
    return redirect;
  };

  handleMenuCollapse = collapsed => {
    global.changeLayoutCollapsed(collapsed);
  };
  componentDidMount() {
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
  }
  render() {
    const {
      isMobile,
      children,
      location: { pathname },
    } = this.props;

    const {
      silderTheme,
      layout: PropsLayout,
    } = setting.state;

    const isTop = PropsLayout === 'topmenu';
    const layout = (
      <Layout>
        {isTop && !isMobile ? null : (
          <SiderMenu
            logo={logo}
            Authorized={Authorized}
            theme={silderTheme}
            onCollapse={this.handleMenuCollapse}
            {...this.props}
          />
        )}
        <Layout style={this.getLayoutStyle()}>
          <Header handleMenuCollapse={this.handleMenuCollapse} logo={logo} {...this.props} />
          <Content style={this.getContentStyle()}>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    );
    return (
      <React.Fragment>
        <DocumentTitle title={this.getPageTitle(pathname)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
        {/* {this.state.rendering ? null : <SettingDarwer />} */}
      </React.Fragment>
    );
  }
}

export default BasicLayout;
