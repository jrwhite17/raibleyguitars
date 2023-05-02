import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Image from 'next/image'
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
      {/*Raibley Guitars Logo*/}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Raibley Guitars Logo"
          width={360}
          height={37}
          priority
        />
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
