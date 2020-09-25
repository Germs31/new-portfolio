import Head from 'next/head'
import styles from '../styles/Home.module.css'
import rocket from '../images/space_ship_icon.png'
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
      <div className={styles.landingHeading}>
        <img src={rocket} alt="rocket blasting off icon"/>
        <div>
          <h2>Software Engineer</h2>
          <p>Let's Make it Happen</p>
        </div>
      </div>
    </div>
  )
}
