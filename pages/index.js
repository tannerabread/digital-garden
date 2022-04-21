import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import favicon from '../public/images/favicon.ico'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TanneraBread Digital Garden</title>
        <meta
          name="description"
          content="My playground for trying out new things as I learn"
        />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.websiteTitle}>TanneraBread</span>
        </h1>

        <div className={styles.grid}>
          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>
                Find a list of all of my live projects and links to their github repos!
              </p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>Find information about me and download a copy of my resume!</p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>Link to my blog, where I write about all things coding and dev work.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
