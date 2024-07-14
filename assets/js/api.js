'use strict';

const api_key = '057e3c8fdd6a736a00cb0c6b2f038234';
const imageBaseURL = 'http://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer}