let UTMparams = ["utm_medium", "utm_source", "utm_campaign", "utm_content"];

function getQueryParams() {
    const queryParamsInterface = new URLSearchParams(window.location.search);
    const entries = queryParamsInterface.entries();
    let urlParams = {};

    for (const [key, value] of entries) {
        urlParams[key] = value;
    }

    return urlParams;
}

// since the site is an SPA, we cache the UTM params in the URL the visitor start at
export function getUTMParam(paramName){
    let paramCacheValue = getFromParamCache(paramName);

    if (queryParams[paramName]){
        return queryParams[paramName];
    } else if (paramCacheValue){
        return paramCacheValue;
    } else{
        return null;
    }
}

export function getAllUTMParams(){
    let output = {};
    UTMparams.forEach( paramName => {
        let paramValue = getUTMParam(paramName);
        if (paramValue){
            output[paramName] = paramValue;
        }
    })
    return output;
}

let queryParams = getQueryParams();

for (let paramName of Object.keys(queryParams)){
    if (UTMparams.includes(paramName)){
        setParamCache(paramName, queryParams[paramName]);
    }
}

function setParamCache(param, value){
    setCookie(`ekoengi_${param}`, value, 7);
}

function getFromParamCache(param){
    return getCookie(`ekoengi_${param}`)
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}