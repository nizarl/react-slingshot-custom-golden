import axios from 'axios';
import 'babel-polyfill';

export function getData() {

  async function get(url) {
    let json = await axios.get(url);
    return json;
  }

  async function post(url,postData) {
    
    let json = await axios.post(url, {
      headers: {
        'Content-Type': 'application/json'
    },
      postBody: postData
    });
    return json;
  }

  return {
    get: get,
    post: post
  };
}
