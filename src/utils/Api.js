import { API_KEY } from "./utils";
class Api {
  constructor({ url, apiKey, headers }) {
    this._url = url;
    this._apiKey = apiKey;
    this.headers = headers;
  }

  _checkResponse = (response) => {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  };

  async searchGifs(query, limit, offset) {
    const url = `${this._url}/search?q=${query}&api_key=${this._apiKey}&limit=${limit}&offset=${offset}`;

    const response = await fetch(url, {
      headers: this.headers,
    });
    return this._checkResponse(response);
  }

  async getTrendingGifs(limit, offset) {
    const url = `${this._url}/trending?api_key=${this._apiKey}&limit=${limit}&offset=${offset}`;

    const response = await fetch(url, {
      headers: this.headers,
    });
    return this._checkResponse(response);
  }

  async getRandomGifs() {
    const url = `${this._url}/random?api_key=${this._apiKey}`;

    const response = await fetch(url, {
      headers: this.headers,
    });
    return this._checkResponse(response);
  }

}

export const api = new Api({
  url: "https://api.giphy.com/v1/gifs",
  apiKey: API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
