import Cookies from 'universal-cookie';
import config from '../project.properties';
const cookies = new Cookies();

export function appInfo() {

  function set() {
    cookies.set('appName', config.appName);
    cookies.set('appVersion', config.appVersion);
  }

  function get() {
    const appName = cookies.get('appName');
    const appVersion = cookies.get('appVersion');
    return {
      appName: appName,
      appVersion: appVersion
    };
  }

  return {
    get: get,
    set: set
  };
}
