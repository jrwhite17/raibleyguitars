import Container from "../Container";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children }) => {

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </a>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
