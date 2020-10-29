export default class SwapService {
  _apiURL = "https://swapi.dev/api";

  async API(api) {
    try {
      const res = await fetch(`${this._apiURL}${api}`).then(res => res.json());
      return res;
    } catch (err) {throw new Error("Error", err)}
  }

  async getPeople() {
    const res = await this.API("/people/");
    return res.results.map(this._transformPeople);
  }

  async getPerson(id) {
    const res = await this.API(`/people/${id}/`);
    return this._transformPerson(res);
  }

  _transformPeople (item) {
    return {
      name : item.name,
      gender : item.gender,
      height : item.height
    }
  }

  _transformPerson (item) {
    return {
      name : item.name,
      gender : item.gender,
      height : item.height
    }
  }
}