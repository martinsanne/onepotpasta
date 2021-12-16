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
        <h1 className={styles.title}>Skikkelig digg one-pot pasta</h1>
        <hr />
        <h2 className={styles.title}>Ingredienser</h2>
        <ul className={styles.list}>
          <li data-uid={0}>
            <label>
              <input type="checkbox" />
              <span>200</span> <span>g</span> <span>spaghetti</span>{' '}
              <span>gjerne fullkorn</span>
            </label>
          </li>
          <li data-uid={1}>
            <label>
              <input type="checkbox" />
              <span>200</span> <span>g</span> <span>søte cherrytomater</span>{' '}
              <span>delt i to </span>
            </label>
          </li>
          <li data-uid={2}>
            <label>
              <input type="checkbox" />
              <span>1 </span> <span>rødløk</span> <span>i halvsirkler</span>
            </label>
          </li>
          <li data-uid={3}>
            <label>
              <input type="checkbox" />
              <span>3</span> <span>hvitløksfedd</span> <span>finhakket</span>
            </label>
          </li>
          <li data-uid={4}>
            <label>
              <input type="checkbox" />
              <span>100</span> <span>g</span> <span>spinat</span>{' '}
              <span>grovhakket </span>
            </label>
          </li>
          <li data-uid={5}>
            <label>
              <input type="checkbox" />
              <span>1/2</span> <span>ts</span>{' '}
              <span>chiliflak / 1/2 chili</span> <span>finhakket</span>
            </label>
          </li>
          <li data-uid={6}>
            <label>
              <input type="checkbox" />
              <span>1</span> <span>ss</span> <span>balsamicoeddik</span>
            </label>
          </li>
          <li data-uid={7}>
            <label>
              <input type="checkbox" />
              <span>1 </span> <span>ss</span> <span>buljongpulver</span>
            </label>
          </li>
          <li data-uid={8}>
            <label>
              <input type="checkbox" />
              <span>6</span> <span>dl</span> <span>vann</span>
            </label>
          </li>
          <li data-uid={9}>
            <label>
              <input type="checkbox" />
              <span>2</span> <span>ss</span> <span>olivenolje</span>
            </label>
          </li>
          <li data-uid={10}>
            <label>
              <input type="checkbox" />
              <span>salt og pepper</span>
            </label>
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
            <label>
              <input type="checkbox" />
              Bruk en vid kjele. Brekk gjerne spagettien i to og ha alle
              ingrediensene, utenom toppingen, i kjelen.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Kok under jevnlig omrøring i 8–10 minutter til spagettien er al
              dente og vannet er kokt inn.
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Smak til med salt og pepper, og topp med ost og basilikum.
            </label>
          </li>
        </ol>
        <h2 className={styles.title}>Yummy for your tummy!</h2>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
