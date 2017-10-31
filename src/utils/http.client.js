import axios from 'axios';
import 'babel-polyfill';

export function getData(params) {

  async function get() {
    let json = await axios.get('../mocks/clinicaldocs.mock.jsonasdasd');
    return json;
  }

  async function post(postData) {
    let json = await axios.post('../mocks/clinicaldocs.mock.json', {
      postBody: postData
    });
    return json;
  }

  return {
    get: get,
    post: post
  };
}
