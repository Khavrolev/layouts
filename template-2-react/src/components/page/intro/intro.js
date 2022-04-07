import classes from "./intro.module.css";
import classNames from "classnames";
import IntroListItem from "./introListItem";
import { introList } from "../../../utils/mockdata/page";

const Intro = () => {
  return (
    <div className={classNames(classes.page__intro, classes.intro)}>
      <h2 className={classes.intro__title}>Чего мы там не видели?</h2>
      <div className={classes.intro__text}>
        По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36%
        планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не
        видели? На самом деле, Россия — это целая вселенная с ласковым морем
        юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть
        все эти красоты можно без миллионов на счету, загранпаспорта и
        многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая
        мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
        проехала 20 тысяч километров по родной стране. Мы выбрали и описали
        некоторые интересные места, достойные вашего отпуска.
      </div>
      <ul className={classNames(classes.intro__list, classes["list-intro"])}>
        {introList.map((item, index) => (
          <IntroListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Intro;
