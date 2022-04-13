import Head from 'next/head'
import Image from 'next/image'
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
          Welcome to <span className={styles.websiteTitle}>TanneraBread</span>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/react" className={styles.card}>
            <h2>React &rarr;</h2>
            <p>
              Find projects created in React without the use of extra
              frameworks.
            </p>
          </a>

          <a href="/next" className={styles.card}>
            <h2>Next &rarr;</h2>
            <p>Find Next.js projects and example code from each project!</p>
          </a>

          <a href="/node" className={styles.card}>
            <h2>Node &rarr;</h2>
            <p>I only dabble in node as of the time of writing this page.</p>
          </a>

          <a href="/cypress" className={styles.card}>
            <h2>Cypress &rarr;</h2>
            <p>
              Recently started testing my apps with Cypress, this is example
              projects in that.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
