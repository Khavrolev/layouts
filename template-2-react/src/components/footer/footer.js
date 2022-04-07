import classes from "./footer.module.css";
import classNames from "classnames";
import { footerList } from "../../utils/mockdata/footer";
import FooterListItem from "./footerListItem";

const Footer = () => {
  return (
    <footer className={classNames(classes.wrapper__footer, classes.footer)}>
      <nav className={classNames(classes.footer__menu, classes.menu)}>
        <ul className={classes.menu__list}>
          {footerList.map((item, index) => (
            <FooterListItem key={index} item={item} />
          ))}
        </ul>
      </nav>
      <div className={classes.footer__copy}>© 2022. Сергей Хавролев</div>
    </footer>
  );
};

export default Footer;
