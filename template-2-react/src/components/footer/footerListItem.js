import classes from "./footer.module.css";

const FooterListItem = ({ item }) => {
  return (
    <li className={classes.menu__item}>
      <a href="#top" className={classes.menu__link}>
        {item}
      </a>
    </li>
  );
};

export default FooterListItem;
