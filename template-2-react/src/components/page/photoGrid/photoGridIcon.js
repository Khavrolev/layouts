import classes from "./photoGrid.module.css";

const PhotoGridIcon = ({ imgSrc }) => {
  return (
    <div className={classes["photo-grid__icon"]}>
      <img
        className={classes["photo-grid__image"]}
        src={imgSrc}
        alt="Путешествия по России"
      />
    </div>
  );
};

export default PhotoGridIcon;
