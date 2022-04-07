import classes from "./cover.module.css";
import classNames from "classnames";
import { coverData } from "../../../utils/mockdata/page";

const Cover = () => {
  return (
    <div className={classNames(classes.page__cover, classes.cover)}>
      <a href={coverData.href} className={classes.cover__description}>
        <h2 className={classes.cover__title}>
          До Байкала
          <br />
          «на собаках»
        </h2>
        <div className={classes.cover__subtitle}>
          По мотивам учебной темы о Транссибе — путешествие от столицы до
          Байкала на электричках.
        </div>
      </a>
      <div className={classes.cover__icon}>
        <img
          className={classes.cover__image}
          src={coverData.img}
          alt="До Байкала «на собаках»"
        />
      </div>
    </div>
  );
};

export default Cover;
