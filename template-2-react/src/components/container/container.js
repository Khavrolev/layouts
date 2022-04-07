import Footer from "../footer/footer";
import Header from "../header/header";
import Page from "../page/page";
import classes from "./container.module.css";

const Container = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default Container;
