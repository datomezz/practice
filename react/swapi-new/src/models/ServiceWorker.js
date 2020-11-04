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
    return res.results;
  }
  
  async getPerson(id) {
    return await this.getResourse(`/people/${id}/`);
  }

  //PLANETS
  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }
  
  async getPlanet(id) {
    return await this.getResourse(`/planets/${id}/`);
  }

  //STARSHIPS
  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }
  
  async getStarship(id) {
    return await this.getResourse(`/starships/${id}/`);
  }
}