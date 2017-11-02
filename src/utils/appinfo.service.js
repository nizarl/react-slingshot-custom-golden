import Cookies from 'universal-cookie';
import config from '../project.properties';
const cookies = new Cookies();

export function appInfo() {

  function set() {
    cookies.set('appName', config.appName);
    cookies.set('appVersion', config.appVersion);
  }

  function get() {
    let appName = cookies.get('appName');
    let appVersion = cookies.get('appVersion');
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
