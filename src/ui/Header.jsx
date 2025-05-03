function Header({ title }) {
  const text = title.split(" ");
  return (
    <header className="header">
      <h1>
        <span>{text[0]}</span>
        <br />
        <span>{text[1]}</span>
      </h1>
    </header>
  );
}

export default Header;
