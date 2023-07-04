class Api {
    constructor({ url, apiKey }) {
        this._url = url;
        this._apiKey = apiKey;
    }

    searchGifs(query, limit, offset) {
        const url = `${this._url}/search?q=${query}&api_key=${this._apiKey}&limit=${limit}&offset=${offset}`;

        return fetch(url)
            .then(this._checkResponse)
            .catch(error => console.error(error));
    }

    getTrendingGifs(limit, offset) {
        const url = `${this._url}/trending?api_key=${this._apiKey}&limit=${limit}&offset=${offset}`;

        return fetch(url)
            .then(this._checkResponse)
            .catch(error => console.error(error));
    }

    getRandomGifs() {
        const url = `${this._url}/random?api_key=${this._apiKey}`;

        return fetch(url)
            .then(this._checkResponse)
            .catch(error => console.error(error));
    }

    _checkResponse = (response) => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }
}

export const api = new Api({
    url: 'https://api.giphy.com/v1/gifs',
    apiKey: 'DdqVAdDoPxWGE4ljULY4GNeth7Df7H7D'
});