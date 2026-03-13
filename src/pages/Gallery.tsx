import Footer from '../components/Footer'
import styles from '../styles/gallery.module.css'

const Gallery = () => {
  return (
    <>


      <div className={styles.imagesContainer}>
        <div data-reveal-stagger="90" className={styles.grandmaOnly + ' ' + styles.section}>
          <h1>Gallery</h1>
          <h2>Photos of Felicia</h2>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148868/samples/animals/kitten-playing.gif" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148868/samples/animals/kitten-playing.gif" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148868/samples/animals/kitten-playing.gif" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148865/samples/animals/three-dogs.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
        </div>

        <div data-reveal-stagger="90" className={styles.grandmaWithFamily + ' ' + styles.section}>
            <h2>Mother, Wife,  </h2>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148868/samples/animals/kitten-playing.gif" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148865/samples/animals/three-dogs.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
        </div>
        <div data-reveal-stagger="90" className={styles.grandmaWithFriends + ' ' + styles.section}>
            <h2>Friend to Many</h2>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148868/samples/animals/kitten-playing.gif" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148865/samples/animals/three-dogs.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
            <div className={`${styles.box} reveal card-hover`}>
              <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1773148862/samples/animals/reindeer.jpg" alt="" />
            </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Gallery