class Api {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
    }
  
    _handleResponse(res) {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
      return Promise.reject(`Произошла шибка: ${res.status}`);
    }

    //загрузкa информации о пользователе с сервера
    async getUserInfo() {
        const res = await fetch(`${this._url}/users/me`, {
          headers: this._headers,
        });
        return this._handleResponse(res);
      }
    
      //редактирование профиля
      async setUserInfo(data) {
        const res = await fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            email: data.email,
          }),
        });
        return this._handleResponse(res);
      }
  
    //получение с сервера все сохранённые текущим  пользователем фильмы
    async getMovies() {
      const res = await fetch(`${this._url}/movies`, {
        method: 'GET',
        headers: this._headers,
      });
      return this._handleResponse(res);
    }
  
    //создание нового фильма
    async addNewMovies(data) {
      const res = await fetch(`${this._url}/movies`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: 'https://api.nomoreparties.co' + data.image.url,
          trailerLink: data.trailerLink,
          thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        }),
      });
      return this._handleResponse(res);
    }
  
    //удаление фильма
    async deleteMovie(movieId) {
      const res = await fetch(`${this._url}/movies/${movieId}`, {
        method: "DELETE",
        headers: this._headers,
      });
      return this._handleResponse(res);
    }
  }
  
  const config = {
    url: "http://127.0.0.1:3001",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`
    },
  };
  
  const api = new Api(config);
  
  export default api;