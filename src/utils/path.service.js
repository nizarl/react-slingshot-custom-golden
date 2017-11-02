import config from '../project.properties';
import _ from 'underscore';

//The browser will always resolve window.location.hostname.  However, we supply localhost for Unit test purposes only.
const hostname = (window && window.location && window.location.hostname) || "localhost";
let domains = config.businessServiceBaseUrls.domains;

let key = _.find(domains, function (item) {
    return item[0] === hostname;
});

let apiUrl = config.businessServiceBaseUrls[key[0]].careProAPI;
export const BASE_URL = apiUrl;
