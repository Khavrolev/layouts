import classes from "./lead.module.css";
import classNames from "classnames";
import { leadSrc } from "../../../utils/mockdata/page";

const Lead = () => {
  return (
    <div className={classNames(classes.page__lead, classes.lead)}>
      <h1 className={classes.lead__title}>Путешествия по России</h1>
      <h3 className={classes.lead__subtitle}>
        Настоящая страна не в выпусках новостей, а здесь.
      </h3>
      <div className={classes.lead__card}>
        <div className={classes.lead__icon}>
          <img
            className={classes.lead__image}
            src={leadSrc}
            alt="Путешествия по России"
          />
        </div>
        <div className={classes.lead__caption}>ваша полка — верхняя</div>
      </div>
    </div>
  );
};

export default Lead;
