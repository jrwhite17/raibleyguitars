import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Container from "../components/Container";
import products from "../products.json";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import styles from "../styles/Home.module.css";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Raibley Guitars</title>
      </Head>

      <main
        className={`flex flex-col items-center justify-between p-24 min-h-screen ${inter.className}`}
      >
        {/* Products */}
        <Container className={styles.homeContainer}>
          <div className={styles.grid}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={`Preview of ${product.title}`}
                  />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </Link>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </Layout>
  );
}
