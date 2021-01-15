export default class SwapiService {
  _url = "https://swapi.dev/api";
  _imgUrl = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._url}${url}`);
    if(!res.ok) {throw new Error(`Error ${url}, status ${res.status}`)}
    return await res.json();
  }

  getAllPlanets = async () => {
    const res = await this.getResource("/planets/");
    return res.results.map(this._transformPlanets);
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}`);
    return this._transformPlanets(res);
  }

  getAllPeople = async () => {
    const res = await this.getResource("/people/");
    return res.results.map(this._transformPeople);
  }

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}/`);
    return this._transformPeople(res);
  }

  getStarship = async (id) => {
    const res = await this.getResource(`/starships/${id}/`);
    return this._transformStarships(res);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarships);
  }

  getPersonImage = ({id}) => {
    return `${this._imgUrl}/characters/${id}.jpg`;
  }

  getStarshipImage = ({id}) => {
    return `${this._imgUrl}/starships/${id}.jpg`;
  }

  getPlanetImage = ({id}) => {
    return `${this._imgUrl}/planets/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  
  _transformStarships = (object) => {
    const {name, model, length, crew} = object;
    const id = this._extractId(object);

    return {
      id,
      name,
      model,
      length,
      crew
    }
  }

  _transformPeople = (object) => {
    const {name, gender, height, mass} = object;
    const id = this._extractId(object);

    return {
      id,
      name, 
      gender,
      height,
      mass
    }
  }

  _transformPlanets = (object) => {
    const {name, population, rotation_period, diameter} = object;
    const id = this._extractId(object);

    return {
      id,
      name,
      population,
      rotationPeriod : rotation_period,
      diameter
    }
  }
}