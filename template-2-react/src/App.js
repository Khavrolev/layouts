import classes from "./App.module.css";
import Container from "./components/container/container";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Container />
    </div>
  );
};

export default App;
