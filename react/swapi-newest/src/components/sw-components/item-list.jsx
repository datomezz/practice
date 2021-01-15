import React from "react";

import List from "../app-list";
import {withData} from "../hoc-helpers";
import SwapiService from "../../models/swapiService";

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const renderName = ({name}) => <span>{name}</span>;

const withChildFunction = (Wrapper, fn) => {
  return (props) => {
    return (
      <Wrapper {...props}>
        {fn}
      </Wrapper>
    )
  }
}

const PeopleList = withData(withChildFunction(List, renderName), getAllPeople);

const PlanetList = withData(withChildFunction(List, renderName), getAllPlanets);

const StarshipList = withData(withChildFunction(List, renderName), getAllStarships);

export {
  PeopleList,
  PlanetList,
  StarshipList
}