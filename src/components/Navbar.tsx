import { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () =>{
        setIsClicked(!isClicked);
    }
    const handleSelected = () => {
        setIsClicked(false);
    }
    return (
        <>
             <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.brand}>
                        <h1>Memorial</h1>
                    </div>

                    <div className={styles.burger} onClick = {handleClick}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                    </div>
                    {isClicked && (
                    <div className={styles.navLinks}>
                        <Link to={'/'} onClick={handleSelected}>Home</Link>
                        <Link to={'/gallery'} onClick={handleSelected}>Gallery</Link>
                        <Link to={'/tributes'} onClick={handleSelected}>Tributes</Link>
                        <Link to={'/information'} onClick={handleSelected}>Information</Link>
                    </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;