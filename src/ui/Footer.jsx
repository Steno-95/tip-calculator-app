function Footer() {
  return (
    <footer className="text-center text-[1rem] md:text-[1.5rem] text-[var(--outfocus-color)] absolute bottom-0 left-[50%] -translate-x-[50%] min-w-[18rem]">
      Challenge by{" "}
      <a
        className="text-blue-600 hover:text-[var(--active-text)] focus:text-[var(--active-text)]"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-600 hover:text-[var(--active-text)] focus:text-[var(--active-text)]"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
