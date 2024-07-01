import logo from "../assets/logo.png";
import classes from "./Header.module.css"; // the name class will be ourchoice which gives object

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
