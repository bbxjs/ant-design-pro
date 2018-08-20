import State from '@/State';
import { message } from 'antd';

const defaultSetting = {
  collapse: false,
  silderTheme: 'dark',
  themeColor: '#1890FF',
  layout: 'sidemenu',
  grid: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: false,
  colorWeak: false,
};


const buildLessAndWeak = (themeColor, colorWeak) => {
  // Determine if the component is remounted
  if (themeColor && themeColor !== '#1890FF' && themeColor !== window['antd_pro_less_color']) {
    window.less.refresh().then(() => {
      const hideMessage = message.loading('正在编译主题！', 0);
      setTimeout(() => {
        window.less
          .modifyVars({
            '@primary-color': themeColor,
            '@input-hover-border-color': themeColor,
          })
          .then(() => {
            window['antd_pro_less_color'] = themeColor;
            hideMessage();
          })
          .catch(() => {
            message.error(`Failed to update theme`);
          });
      }, 200);
    });
  }
  if (colorWeak) {
    document.body.className = 'colorWeak';
  } else {
    document.body.className = '';
  }
};

class Setting extends State {
  state = defaultSetting

  getSetting() {
    const setting = {};
    const urlParams = new URL(window.location.href);
    Object.keys(this.state).forEach(key => {
      if (urlParams.searchParams.has(key)) {
        const value = urlParams.searchParams.get(key);
        setting[key] = value === '1' ? true : value;
      }
    });
    const { themeColor, colorWeak } = setting;
    buildLessAndWeak(themeColor, colorWeak);
    this.setState({
      ...setting,
    });
  }

  changeSetting(setting) {
    const urlParams = new URL(window.location.href);
    Object.keys(defaultSetting).forEach(key => {
      if (urlParams.searchParams.has(key)) {
        urlParams.searchParams.delete(key);
      }
    });
    Object.keys(setting).forEach(key => {
      if (key === 'collapse') {
        return;
      }
      let value = setting[key];
      if (value === true) {
        value = 1;
      }
      if (defaultSetting[key] !== value) {
        urlParams.searchParams.set(key, value);
      }
    });
    const { themeColor, colorWeak } = setting;
    buildLessAndWeak(themeColor, colorWeak);
    window.history.replaceState(null, 'setting', urlParams.href);
    return {
      ...setting,
    };
  }

}

export const setting = new Setting();
