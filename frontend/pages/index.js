import Head from 'next/head'
import styles from '../styles/Home.module.css'
import rocket from '../images/space_ship_icon.png'
import headshot from '../images/german_headshot.png'
import axios from 'axios'
import {AiFillApi, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {ImDatabase} from 'react-icons/im'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import mongodb from '../images/mongodb.png'
import node from '../images/node.png'
import sass from '../images/sass.png'
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
          <img src={headshot} className={styles.headshot} alt="image of german nunez, software engineer"/>
        </div>

        <div className={styles.aboutMeContent}>
          <div className={styles.aboutMeText}>
            <h2>Let me help you build something</h2>
            <p>My name is German. I began developing late 2018. I launched a couple of sites and decided to take it one step further. I am a graduate of General Assembly's SEI course. There I learned how to develop full stack web application and how to teach myself how to find solutions to my development problems. Coding is practically all I do. I love finding solutions and creating. Other then that, I am a down to earth guy that enjoys creating music and performing in bands and I love dogs and I enjoy nature hikes.</p>
          </div>

          <div>
            <h2>Current Tech of Choice</h2>
            <img src={javascript} />
            <img src={react} />
            <img src={node} />
            <img src={mongodb} />
            <img src={sass} />
          </div>

          <div>
            <h2>Connect with me</h2>
            <AiOutlineLinkedin className={styles.smIcons}/>
            <AiFillGithub className={styles.smIcons} />
          </div>

        </div>
      </div>

      <div className={styles.resumeSection}>
        <button>Resume</button>
      </div>

      <div className={styles.employmentSection}>
        {/* insert strapi data here for employment */}
        <div className={styles.ulCont}>
          <p>
            <span>Allen Eden Guitar Inc, Aug 2020 - current </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!
          </p>
          <p>
            <span>Allen Eden Guitar Inc, Aug 2020 - current </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!
          </p>
          <p>
            <span>Allen Eden Guitar Inc, Aug 2020 - current </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!
          </p>
          <p>
            <span>Allen Eden Guitar Inc, Aug 2020 - current </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!
          </p>
          <p>
            <span>Allen Eden Guitar Inc, Aug 2020 - current </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!
          </p>
        </div>
      </div>

      <div className={styles.projectSection}>
        <div className={styles.projectCards}>
          <div className={styles.projectCardsContent}>
            <h3>Pokedex</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error alias ab enim est consequatur, porro esse distinctio laborum saepe perferendis dicta perspiciatis repellendus tempore praesentium, quaerat inventore quas, eaque nisi!</p>
            <img src={javascript} />
            <img src={react} />
            <div>
              <button>Live</button>
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
