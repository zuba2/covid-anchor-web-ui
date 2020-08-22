import Link from "./Link";

// This is the navbar component
function Navbar () {
  return(
  <nav className="navbar">
    <div className="container">
      <Link href="/stories">Stories</Link>
      <Link href="/">Covid Anchor</Link>
      <Link href="/cases">Cases</Link>
    </div>

  {/* Styling Component */}
    <style jsx>{`

      .navbar{
        height: 100%;
        width: 12rem;
        background-color: var(--color-primary);

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container{
          display: flex;
          min-width: 38rem;
          justify-content: space-between;
          transform: rotate(-90deg);
      }

      .navbar-link{
          color: var(--color-tertirary);
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          text-align: center;
      }

      .is-active{
          font-size: 1.8rem;
          color: var(--color-secondary);
          position: relative;
      }

      .is-active::before{
        content: "";
        height: 1rem;
        width: 1rem;
        background-color: var(--color-secondary);
        position: absolute;
        bottom: -1.5rem;
        left: 50%;
        transform: rotateX(-50%);
      }

    `}</style>
  </nav>
  );
}

export default Navbar;

