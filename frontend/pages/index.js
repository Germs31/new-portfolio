import Head from 'next/head'
import styles from '../styles/Home.module.css'
import rocket from '../images/space_ship_icon.png'
import headshot from '../images/german_headshot.png'
import axios from 'axios'
import {AiFillApi} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {ImDatabase} from 'react-icons/im'
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
    <div>

      <div className={styles.homeContainer}>
        <div className={styles.landingHeading}>
          <img src={rocket} alt="rocket blasting off icon"/>
          <div>
            <h2>Software Engineer</h2>
            <p>Let's Make it Happen</p>
          </div>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.serviceCard}>
          <div>
            <h2>API Development</h2>
            <AiFillApi className={styles.serviceIcon} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div>
            <h2>Web App Development</h2>
            <CgWebsite className={styles.serviceIcon} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className={styles.serviceCard}>
          <div>
            <h2>Database Development</h2>
            <ImDatabase className={styles.serviceIcon} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div className={styles.aboutMe}>
        <div>
          <img src={headshot} className={styles.headshot} />
        </div>

        <div>
          <h2>Let me help you build something</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}
