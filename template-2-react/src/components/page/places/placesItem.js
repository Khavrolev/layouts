import classes from "./places.module.css";
import classNames from "classnames";
import PlacesParagraph from "./placesParagraph";

const PlacesItem = ({ place }) => {
  return (
    <div className={classNames(classes.places__item, classes["item-places"])}>
      <div className={classes["item-places__head"]}>
        <h2 className={classes["item-places__title"]}>{place.title}</h2>
        <div className={classes["item-places__website"]}>
          <div className={classes["item-places__url-heading"]}>URL</div>
          <a href={place.href} className={classes["item-places__link"]}>
            {place.url}
          </a>
        </div>
      </div>
      <div className={classes["item-places__description"]}>
        <div className={classes["item-places__icon"]}>
          <img
            className={classes["item-places__image"]}
            src={place.img}
            alt={place.title}
          />
        </div>
        <div className={classes["item-places__paragraphs"]}>
          {place.paragraphs.map((paragraph, index) => (
            <PlacesParagraph key={index} paragraph={paragraph} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacesItem;
