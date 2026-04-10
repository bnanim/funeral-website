import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GhanaImage from '../components/GhanaImage';

const Home = () => {
  return (
    <>
        <div className={styles.homeContainer}>
            <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525113/home_yfxpo4.jpg" alt="" />
            <div className={`${styles.heroSection} reveal`}>
              <div className={styles.year}>
                1933 - 2025
              </div>
              <div className={styles.name}>
                Madam Felicia Yaa Akromuah
              </div>
              <GhanaImage className={`${styles.pageSymbol} reveal`} alt="memorial symbol" />
              <div className={styles.quote}>
                <em>"A gentle soul who touched countless lives with kindness, grace, and unwavering love."</em> 
              </div>

              </div>
              
            </div>
            <div className={`${styles.links} reveal`}> 
              <Link to={'/gallery'} className={styles.link}>
                View Gallery
              </Link>
              <Link to={'/tributes'} className={styles.link}>
                Read Tributes
              </Link>
              <Link to={'/information'} className={styles.link}>
                Donation
              </Link>
            </div>
            <div className={`${styles.quote} ${styles.quoteCard} reveal`}> 
              "Those we love don't go away, they walk beside us every day. Unseen, unheard, but always near, still loved, still missed, and very dear."
            </div>
        <Footer /> 
    </>
  )
}

export default Home