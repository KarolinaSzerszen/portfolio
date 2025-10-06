function Navbar(props) {
  return (
    <div className={`navbar ${!props.isLight && "light"}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Tech stack</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Navbar;
