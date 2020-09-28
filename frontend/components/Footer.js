import styles from '../styles/Footer.module.css'
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <p>&#169; German Nunez 2020</p>
            </div>
            <div className={styles.footerIcons}>
                <AiOutlineLinkedin className={styles.icon} />
                <AiFillGithub className={styles.icon}/>
            </div>
        </div>
    )
}

export default Footer;