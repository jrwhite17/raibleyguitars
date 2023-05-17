import Container from "../Container";

import styles from "./Header.module.css";
import Image from "next/image";
const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={125} height={125} />
      </Container>
    </header>
  );
};

export default Header;
