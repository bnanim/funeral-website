import Footer from '../components/Footer';
import styles from '../styles/tributes.module.css';
import { CgProfile } from "react-icons/cg";
import GhanaImage from '../components/GhanaImage';


const Tributes = () => {
  // define a type for the tribute object (adjust properties to match your API)
  interface Tribute {
    id: string | number;
    name: string;
    relationship: string;
    message: string;
  }

  const tributes: Tribute[] = [
    { 
      id: 1,
      name: "John Doe",
      relationship: "Son",
      message: "I will always remember you." 
    },
    {
      id: 2,
      name: "Jane Smith",
      relationship: "Daughter",
      message: "You were the best grandmother." 
    }
  ];

 

  return (
    <>
        <div className={styles.tributesContainer}>
            <div className={styles.heading}>
              <h2>Tributes</h2>
              <GhanaImage className={styles.pageSymbol} alt="memorial symbol" />
            </div>
            <div className={styles.tributeList}>
              
              {tributes.map((t) => (
                <div key={t.id} className={`${styles.tributeCard} reveal card-hover`}>
                  <div className={styles.tributeHeader}>
                    <CgProfile className={styles.profileIcon} />
                    <div className={styles.name}>
                      <h4>{t.name}</h4>
                      <p className={styles.relationship}>{t.relationship}</p>
                    </div>
                  </div>
                  <p>{t.message}</p>
                </div>
              ))}
              {tributes.length === 0 && (
                <p>No tributes have been posted yet.</p>
              )}

            </div>

        </div>
        <Footer />
    </>
  )
}

export default Tributes