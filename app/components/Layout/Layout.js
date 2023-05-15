import Nav from '../Nav';
import Header from '../Header'
import Footer from '../Footer';


import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Nav />
      { children }
      <Footer />
    </div>
  )
}

export default Layout;