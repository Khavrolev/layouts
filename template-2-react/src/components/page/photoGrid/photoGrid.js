import classes from "./photoGrid.module.css";
import classNames from "classnames";
import { photoGridPhoto } from "../../../utils/mockdata/page";
import PhotoGridIcon from "./photoGridIcon";

const PhotoGrid = () => {
  return (
    <div
      className={classNames(classes["page__photo-grid"], classes["photo-grid"])}
    >
      {photoGridPhoto.map((imgSrc, index) => (
        <PhotoGridIcon key={index} imgSrc={imgSrc} />
      ))}
    </div>
  );
};

export default PhotoGrid;
