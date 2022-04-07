import classes from "./places.module.css";

const PlacesParagraph = ({ paragraph }) => {
  return <div className={classes["item-places__paragraph"]}>{paragraph}</div>;
};

export default PlacesParagraph;
