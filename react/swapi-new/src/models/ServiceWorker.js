export default class ServiceWorker {

  _apiURL = "https://swapi.dev/api";
  
  async getResourse(url) {
    const res = await fetch(`${this._apiURL + url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status : ${res.status}`)
    }

    const body = await res.json();
    return body;
  }

  getAllPeople = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPeople);
  }
  
  getPerson = async (id) => {
    const res = await this.getResourse(`/people/${id}/`);
    return this._transformPeople(res);
  }

  getPersonImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  getPlanetImage = (id) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  }

  //PLANETS
  getAllPlanets = async () => {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  
  getPlanet = async (id) => {
    const res = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(res);
  }

  //STARSHIPS
  getAllStarships = async () => {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }
  
  getStarship = async (id) => {
    return await this.getResourse(`/starships/${id}/`);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (item) => {

    return {
      id : this._extractId(item),
      name : item.name,
      population : item.population,
      rotationPeriod : item.rotation_period,
      diameter : item.diameter
    }
  }

  _transformPeople = (item) => {
    return {
      id : this._extractId(item),
      name : item.name,
      height : item.height,
      mass : item.mass,
      gender : item.gender
    }
  }
}