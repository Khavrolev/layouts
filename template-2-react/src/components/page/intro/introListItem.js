import classes from "./intro.module.css";

const IntroListItem = ({ item }) => {
  return (
    <li className={classes["list-intro__item"]}>
      <span className={classes["list-intro__description"]}>
        {item.description}&nbsp;
      </span>
      {item.number}
    </li>
  );
};

export default IntroListItem;
