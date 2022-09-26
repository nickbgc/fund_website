import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BGC</title>
        <meta name="Blockchain Global Capital" content="A digital assets fund" />
        <link rel="icon" href="/bgc_logo.jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BLOCKCHAIN GLOBAL CAPITAL
        </h1>

        <p className={styles.description}>
          An investment vehicle for high net worth individuals and institutions focused on Bitcoin and Blockchain related technologies and infrastucture.
        </p>

        <div className={styles.grid}>
          <a href="/team" className={styles.card}>
            <h2>TEAM &rarr;</h2>
            <p>Meet the managing partners and executive team helping manage your digital assets</p>
          </a>

          <a href="/learn" className={styles.card}>
            <h2>LEARN &rarr;</h2>
            <p>Learn about Bitcoin, Web3, and NFT technology, and why it is revolutionary. </p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h2>CONTACT &rarr;</h2>
            <p>Get in touch with one of the partners today to set an initial consultation.</p>
          </a>

          <a
            href="/dashboard"
            className={styles.card}
          >
            <h2>DASHBOARD &rarr;</h2>
            <p>
              A dashboard created using market data to make the markets easier to track. 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://blockchainglobalfund.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blockhain Global Capital 2022{' '}
        </a>
      </footer>
    </div>
  )
}
