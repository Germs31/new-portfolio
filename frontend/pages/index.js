import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
export default function Home() {
  React.useEffect(() => {
    axios.get('http://localhost:1337/employments')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>German Nunez</h1>
    </div>
  )
}
