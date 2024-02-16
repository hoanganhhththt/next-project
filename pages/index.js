import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({title}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <a href='/'> Home</a>
          <a href='/events'> Events</a>
          <a href='/about-us'> About us</a>
        </nav>
      </header>

      <main className={styles.main}>
        <a href=''>
          <img />
          <h2>Events in London</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae condimentum dui. Maecenas aliquet metus et risus consectetur, id dignissim risus aliquam. Sed dignissim arcu et ex pulvinar, vitae ullamcorper lectus iaculis. Morbi id nisi elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rutrum placerat turpis, et fermentum ligula sodales ac. Morbi in dolor et ligula placerat venenatis non nec neque. Donec vel rhoncus sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam blandit dui sit amet ex feugiat, eget interdum mi efficitur. Mauris odio quam, posuere sed sollicitudin ut, tristique sed orci. Sed nec velit at nunc semper finibus. Sed nec aliquet ante.</p>
        </a>
        <a href=''>
          <img />
          <h2>Events in Madrid</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae condimentum dui. Maecenas aliquet metus et risus consectetur, id dignissim risus aliquam. Sed dignissim arcu et ex pulvinar, vitae ullamcorper lectus iaculis. Morbi id nisi elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rutrum placerat turpis, et fermentum ligula sodales ac. Morbi in dolor et ligula placerat venenatis non nec neque. Donec vel rhoncus sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam blandit dui sit amet ex feugiat, eget interdum mi efficitur. Mauris odio quam, posuere sed sollicitudin ut, tristique sed orci. Sed nec velit at nunc semper finibus. Sed nec aliquet ante.</p>
        </a>
      </main>

      <footer className={styles.footer}>
        <p>@ 2022 Time to Code - A Project Nextjs</p>
      </footer>
    </div>
  )
}
