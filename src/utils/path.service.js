import config from '../project.properties';
import _ from 'underscore';

const hostname = (window && window.location && window.location.hostname) || "localhost";
let domains = config.businessServiceBaseUrls.domains;

let key = _.find(domains, function (item) {
    return item[0] === hostname;
});

let apiUrl = config.businessServiceBaseUrls[key[0]].careProAPI;
export const BASE_URL = apiUrl;