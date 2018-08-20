import { loading } from 'bbx';
import router from 'umi/router';
import { stringify } from 'qs';
import State from '@/State';
import request from '@/utils/request';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

class Login extends State {
  state = {
    status: undefined,
    type: undefined,
  }

  @loading
  async login(params) {
    const response = await request('/api/login/account', {
      method: 'POST',
      body: params,
    });
    setAuthority(params.currentAuthority);
    this.setState({
      status: response.status,
      type: response.type,
    });
    if (response.status === 'ok') {
      reloadAuthorized();
      const urlParams = new URL(window.location.href);
      const params = getPageQuery();
      let { redirect } = params;
      if (redirect) {
        const redirectUrlParams = new URL(redirect);
        if (redirectUrlParams.origin === urlParams.origin) {
          redirect = redirect.substr(urlParams.origin.length);
          if (redirect.startsWith('/#')) {
            redirect = redirect.substr(2);
          }
        } else {
          window.location.href = redirect;
          return;
        }
      }
      router.replace(redirect || '/');
    }
  }

  async getCaptcha(mobile) {
    await request(`/api/captcha?mobile=${mobile}`);
  }

  async logout() {
    setAuthority({
      currentAuthority: 'guest',
    });
    this.setState({
      status: false,
    });
    reloadAuthorized();
    router.push(`/user/login?${stringify({
      redirect: window.location.href,
    })}`)
  }

}

export const login = new Login();
