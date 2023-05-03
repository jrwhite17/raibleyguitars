import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Layout from '../components/Layout';
import Container from '../components/Container';

import { Inter } from 'next/font/google'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import styles from '../styles/Home.module.css';
//Import flat file of products
import products from '../products.json'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Check if Firebase Analytics is Supported
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Raibley Guitars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={250} height={250} />
      </div>

      {/*Products*/}
      <Container className={styles.homeContainer}>
      <div className={styles.grid}>
        {products.map(product => {
          return (
            <div key={product.id} className={styles.card}>
              <Link href={`/products/${product.id}`}>
                  <img src={product.image} alt={`Preview of ${product.title}`} />
                  <h3>{ product.title }</h3>
                  <p>{ product.description }</p>
                  <p>${ product.price }</p>
              </Link>
              <p>
                <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
                  >
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
      </div>
      </Container>
      <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; White Computing
      </Container>
    </footer>
    </main>
  )
}
