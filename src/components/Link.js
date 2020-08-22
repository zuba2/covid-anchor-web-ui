import {useRouter} from "next/router";

// Link Component
function Link ({children, href}) {
  const {pathname} = useRouter();
  const isActive = pathname === href; 
  return(
    <a href={href} className={`navbar-link ${isActive && "is-active"}`}>
      {children}

      <style jsx>{`
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
    </a>
  );
}

export default Link;


