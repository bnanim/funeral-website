import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <div className={styles.homeContainer}>
            <div className={`${styles.heroSection} reveal`}> 
              <div className={styles.year}>
                1920 - 2024
              </div>
              <div className={styles.name}>
                Madam Felicia Yaa Akromuah
              </div>
              <div className={styles.quote}>
                <em>"A gentle soul who touched countless lives with kindness, grace, and unwavering love."</em> 
              </div>
              <div className={styles.cuteLine + ' underline-anim'}>

              </div>
              <div className={`${styles.txt} reveal`}>
                Beloved mother, grandmother, and friend
              </div>
              <div className={`${styles.image} reveal card-hover`}>
                <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148863/samples/people/smiling-man.jpg" alt="Grandma Felicia" />
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
        </div>
        <Footer /> 
    </>
  )
}

export default Home