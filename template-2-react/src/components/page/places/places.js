import classes from "./places.module.css";
import classNames from "classnames";
import { placesList } from "../../../utils/mockdata/page";
import PlacesItem from "./placesItem";

const Places = () => {
  return (
    <div className={classNames(classes.page__places, classes.places)}>
      {placesList.map((place, index) => (
        <PlacesItem key={index} place={place} />
      ))}
    </div>
  );
};

export default Places;
