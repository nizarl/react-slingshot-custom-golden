import axios from 'axios';
import 'babel-polyfill';

export function getData(params) {
  async function get() {
    let json = await axios.get('../mocks/clinicaldocs.mock.json');
    return json;
  }
  return {
    get: get
  };
}
