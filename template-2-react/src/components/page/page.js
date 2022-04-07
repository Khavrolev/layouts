import classes from "./page.module.css";
import classNames from "classnames";
import Lead from "./lead/lead";
import Intro from "./intro/intro";
import PhotoGrid from "./photoGrid/photoGrid";
import Places from "./places/places";
import Cover from "./cover/cover";

const Page = () => {
  return (
    <div className={classNames(classes.wrapper__page, classes.page)}>
      <Lead />
      <Intro />
      <PhotoGrid />
      <Places />
      <Cover />
    </div>
  );
};

export default Page;
