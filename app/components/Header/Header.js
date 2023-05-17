import Container from "../Container";

import styles from "./Header.module.css";
import Image from "next/image";
const Header = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* Logo */}
        <a href="/" onClick={handleLogoClick}>
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </a>
      </Container>
    </header>
  );
};

export default Header;
