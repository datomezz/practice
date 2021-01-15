import React from "react";

export default function Planet(props) {
  const {planet} = props;
  
  const _url = `https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`;

  return (
    <div className="swapi-card row m-0">
      <div className="col-3 p-0">
        <img className="swapi-card__img" src={_url} alt={planet.name} />
      </div>
      <div className="col-8 pr-5">
        <div className="swapi-card__body">
          <h2 className="swapi-cart__title text-success">Planet Name : {planet.name}</h2>
          <ul className="p-0">
            <li>Population : {planet.population}</li>
            <li>Rotation Period: {planet.rotationPeriod}</li>
            <li>Diameter : {planet.diameter}</li>
            <li>Planet ID : {planet.id}</li>
          </ul>
        </div>
      </div>
    </div>
  )

}