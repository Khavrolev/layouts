import classes from "./header.module.css";
import classNames from "classnames";
import { langs, logoSrc } from "../../utils/mockdata/header";
import HeaderLang from "./headerLang";
import { useState } from "react";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState(
    langs.length >= 0 ? langs[0] : ""
  );

  return (
    <div className={classNames(classes.wrapper__header, classes.header)}>
      <div className={classes.header__body}>
        <div className={classes.header__logo}>
          <img className={classes.header__image} src={logoSrc} alt="logo" />
        </div>
        <div className={classes.header__langs}>
          {langs.map((lang, index) => (
            <HeaderLang
              key={index}
              lang={lang}
              selected={lang === selectedLang}
              handleSelectedLang={setSelectedLang}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
