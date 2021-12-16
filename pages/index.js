import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const ingredients = [
  { amount: 200, unit: 'g', name: 'spaghetti', note: 'gjerne fullkorn' },
  { amount: 200, unit: 'g', name: 'søte cherrytomater', note: 'delt i to' },
  { amount: 1, unit: null, name: 'rødløk', note: 'i halvsirkler' },
  { amount: 3, unit: null, name: 'hvitløksfedd', note: 'finhakket' },
  { amount: 100, unit: 'g', name: 'fersk spinat', note: 'grovhakket' },
  { amount: 1, unit: 'ss', name: 'balsamicoeddik', note: 'balsamicoeddik' },
  { amount: 2, unit: 'ss', name: 'olivenolje', note: null },
  { amount: 0.5, unit: 'ts', name: 'chiliflak', note: null },
  { amount: 1, unit: 'ss', name: 'buljongpulver', note: null },
  { amount: 6, unit: 'dl', name: 'vann', note: null },
  { name: 'salt og pepper', note: null },
]

const topping = [
  {
    amount: 2,
    unit: 'never',
    name: 'valgfri ost',
    note: '(mozarella er digg!)',
  },
  {
    amount: 2,
    unit: 'never',
    name: 'edamamebønner',
    note: 'uten skall fra frysedisken',
  },
  { name: 'Frisk basilikum' },
]

const Ingredient = ({ amount, unit, name, note }) => {
  return (
    <label>
      <input type="checkbox" />
      {amount && <span>{amount} </span>}
      {unit && <span>{unit} </span>}
      {name && <span>{name} </span>}
      {note && <span>{note} </span>}
    </label>
  )
}

export default function Home() {
  const recipeBaseFor = 2

  const [people, setPeople] = useState(2)
  const [ingredientsCalculated, setIngredientsCalculated] =
    useState(ingredients)
  const [toppingCalculated, setToppingCalculated] = useState(topping)

  const calculateAmounts = (arr, multiplier) => {
    return [...arr].map((item) => {
      if (item?.amount) {
        return {
          ...item,
          amount: item?.amount * multiplier,
        }
      }
      return item
    })
  }

  useEffect(() => {
    const multiplier = people / recipeBaseFor
    setIngredientsCalculated(calculateAmounts(ingredients, multiplier))
    setToppingCalculated(calculateAmounts(topping, multiplier))
  }, [people])

  return (
    <div className={styles.container}>
      <Head>
        <title>One Pot Pasta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Skikkelig digg one-pot pasta</h1>

        <h3>For {people} personer</h3>
        <input
          type="range"
          min="2"
          max="12"
          value={people}
          onChange={(event) => {
            setPeople(event.target.value)
          }}
          step="1"
          style={{ width: '100%' }}
        />
        <hr />

        <h2 className={styles.title}>Ingredienser</h2>
        <ul className={styles.list}>
          {ingredientsCalculated.map((props, i) => {
            return (
              <li key={i}>
                <Ingredient {...props} />
              </li>
            )
          })}
        </ul>

        <h2 className={styles.title}>Valgfri topping</h2>
        <ul className={styles.list}>
          {toppingCalculated.map((props, i) => {
            return (
              <li key={i}>
                <Ingredient {...props} />
              </li>
            )
          })}
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
