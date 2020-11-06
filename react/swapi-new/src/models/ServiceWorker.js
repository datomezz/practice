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

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPeople);
  }
  
  async getPerson(id) {
    return await this.getResourse(`/people/${id}/`);
  }

  //PLANETS
  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  
  async getPlanet(id) {
    const res = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(res);
  }

  //STARSHIPS
  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }
  
  async getStarship(id) {
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
      name : item.name
    }
  }
}