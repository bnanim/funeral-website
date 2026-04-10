import {FaMoneyBillWave} from 'react-icons/fa';
import styles from '../styles/information.module.css';
import Footer from '../components/Footer';
const Information = () => {
  return (
    <>
      <div className={styles.informationContainer}>
        <img className="reveal" src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525117/information_j1w7mv.jpg" alt="" />
    {/* Brochure Section -------------------------------*/}
        <div className={styles.brochureSection}>
          <h2>Funeral Brochure</h2>
          <p>Download the funeral brochure for Madam Felicia Akromuah to learn more about her life, achievements, and the funeral arrangements.</p>
          <a href="/assets/BROCHURE.pdf" download>Download Brochure</a>
        </div>

    {/* Donations Section -------------------------------*/}
        <div className={styles.donationsSection}>
          <div className={styles.donationsContent}>
            <h2>Donations</h2>
            <p>In lieu of flowers, the family kindly requests donations to be made in memory of Madam Felicia Akromuah. Your generosity will help support causes that were close to her heart.</p>
            <div className={styles.donationCards}>
              <div className={`${styles.donationCardMomo} ${styles.card}`}>
                <div className={styles.heading}>
                  <FaMoneyBillWave className={styles.mobileIcon} />
                  <h3>Mobile Money</h3>
                </div>
                <p>Account Name: SAMUEL BOATENG OTENG</p>
                <p>Number: <strong>0243 234 241</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section -------------------------------*/}
        <div className={styles.contactSection}>
          <h2>Contact Information</h2>
          <p>If you have any questions or would like to send your condolences, please feel free to reach out to the family.</p><br />
          <div className={styles.contactDetails}>
            <p>Phone: +233 243 234 241</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Information