function Footer() {
  return (
    <footer className="text-center text-[1rem] md:text-[1.5rem] text-[var(--outfocus-color)] mt-10 min-w-[fit]">
      Challenge by{" "}
      <a
        className="text-blue-600 hover:text-(--active-text) focus:text-(--active-text)"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-600 hover:text-(--active-text) focus:text-(--active-text)"
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
