import styles from '../styles/footer.module.css';
import { Link } from 'react-router-dom';
import GhanaImage from './GhanaImage';

const Footer = () => {

  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.brandFooter}>
                <GhanaImage className={styles.symbol} alt="memorial symbol" />
                <p className={styles.name}>Yaa Felicia Akromuah</p>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.quickLinks}>
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/information">Information</Link>
                    <Link to="/information">Donations</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/tributes">Tributes</Link>
                </div>
                <div className={styles.contact}>
                    <h3>Contact Us</h3><br />
                    <p>Email: yaa.felicia@gmail.com</p><br />
                    <p>Phone: +233 123 456 789</p>
                </div>
            </div>
            <p className={styles.copyright}>&copy; 2026 Yaa Felicia's funeral. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer