import classes from "./header.module.css";
import classNames from "classnames";

const HeaderLang = ({ lang, selected, handleSelectedLang }) => {
  return (
    <button
      onClick={() => handleSelectedLang(lang)}
      className={classNames(classes.header__lang, {
        [classes.header__lang_selected]: selected,
      })}
    >
      {lang}
    </button>
  );
};

export default HeaderLang;
