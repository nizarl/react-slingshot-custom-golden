import config from '../project.properties';
import _ from 'underscore';

//The browser will always resolve window.location.hostname.  However, we supply localhost for Unit test purposes only.
const hostname = (window && window.location && window.location.hostname) || "localhost";

let envKey;
let domains = config.businessServiceBaseUrls.domains;

_.each(domains, function(value, key) {
    if(value[0]===hostname){
        envKey = key;
    }
});

if(!envKey){
    throw new Error("Business service URL not found. Check project.properties.json file for correct config values.");
}

let apiUrl = config.businessServiceBaseUrls[envKey].careProAPI;
export const BASE_URL = apiUrl;
