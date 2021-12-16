import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>One Pot Pasta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Ingredienser</h2>
        <ul className={styles.list}>
          <li data-uid={0}>
            <span>200</span> <span>g</span> <span>spaghetti</span>{' '}
            <span>gjerne fullkorn</span>
          </li>
          <li data-uid={1}>
            <span>200</span> <span>g</span> <span>søte cherrytomater</span>{' '}
            <span>delt i to </span>
          </li>
          <li data-uid={2}>
            <span>1 </span> <span>rødløk</span> <span>i halvsirkler</span>
          </li>
          <li data-uid={3}>
            <span>3</span> <span>hvitløksfedd</span> <span>finhakket</span>
          </li>
          <li data-uid={4}>
            <span>100</span> <span>g</span> <span>spinat</span>{' '}
            <span>grovhakket </span>
          </li>
          <li data-uid={5}>
            <span>1/2</span> <span>ts</span> <span>chiliflak / 1/2 chili</span>{' '}
            <span>finhakket</span>
          </li>
          <li data-uid={6}>
            <span>1</span> <span>ss</span> <span>balsamicoeddik</span>
          </li>
          <li data-uid={7}>
            <span>1 </span> <span>ss</span> <span>buljongpulver</span>
          </li>
          <li data-uid={8}>
            <span>6</span> <span>dl</span> <span>vann</span>
          </li>
          <li data-uid={9}>
            <span>2</span> <span>ss</span> <span>olivenolje</span>
          </li>
          <li data-uid={10}>
            <span>salt og pepper</span>
          </li>
        </ul>

        <h2 className={styles.title}>Valgfri topping</h2>
        <ul className={styles.list}>
          <li>2 never valgfri ost revet (valgfritt)</li>
          <li>Frisk basilikum</li>
          <li>
            2 never bønner eller kikerter (valgfritt) min favoritt er
            edamamebønner uten skall fra frysedisken
          </li>
        </ul>

        <h2 className={styles.title}>Fremgangsmåte</h2>
        <ol className={styles.list}>
          <li>
            Bruk en vid kjele. Brekk gjerne spagettien i to og ha alle
            ingrediensene, utenom toppingen, i kjelen.
          </li>
          <li>
            Kok under jevnlig omrøring i 8–10 minutter til spagettien er al
            dente og vannet er kokt inn.
          </li>
          <li>Smak til med salt og pepper, og topp med ost og basilikum.</li>
        </ol>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
