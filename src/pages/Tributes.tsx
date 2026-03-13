import Footer from '../components/Footer';
import styles from '../styles/tributes.module.css';
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { fetchTributes, addTribute } from '../services/tributeService.tsx';
import { initReveal } from '../utils/reveal';


const Tributes = () => {
  // define a type for the tribute object (adjust properties to match your API)
  interface Tribute {
    id: string | number;
    name: string;
    relationship: string;
    message: string;
  }

  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTributes = async () => {
      setLoading(true);
      setLoadError(null);

      const fetchedTributes = await fetchTributes();
      // guard against errors and ensure array
      if (Array.isArray(fetchedTributes)) {
        setTributes(fetchedTributes);
        console.log('loaded', fetchedTributes);
      } else {
        console.warn('unable to load tributes', fetchedTributes);
        setLoadError('Unable to load tributes');
      }

      setLoading(false);
    }

    loadTributes();
  }, []);

  // ensure reveal observes tributes after they render
  useEffect(() => {
    if (tributes.length > 0) {
      // call initReveal after the DOM has updated with new tributes
      // this ensures IntersectionObserver observes the newly added .reveal elements
      initReveal();
    }
  }, [tributes]);

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // simple validation
    if (!name.trim() || !relationship.trim() || !message.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    setSubmitting(true);

    // optimistic UI: create a temporary tribute
    const tempId = `temp-${Date.now()}`;
    const tempTribute: Tribute = {
      id: tempId,
      name: name.trim(),
      relationship: relationship.trim(),
      message: message.trim(),
    };

    setTributes((prev) => [tempTribute, ...prev]);

    // send to server
    const created = await addTribute({ name: tempTribute.name, relationship: tempTribute.relationship, message: tempTribute.message });

    if (created && created.id) {
      // replace temp with created
      setTributes((prev) => prev.map((t) => (t.id === tempId ? created : t)));
      // clear form
      setName('');
      setRelationship('');
      setMessage('');
    } else {
      // remove optimistic and show error
      setTributes((prev) => prev.filter((t) => t.id !== tempId));
      setError('Unable to post tribute. Please try again.');
    }

    setSubmitting(false);
  }

  return (
    <>
        <div className={styles.tributesContainer}>
            <form onSubmit={handleOnSubmit} className={styles.tributeForm}>
                <h2>Leave a Tribute</h2>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' required />
              <input value={relationship} onChange={(e) => setRelationship(e.target.value)} type="text" placeholder='Your Relationship to the Deceased' required />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Tribute' required maxLength={500}></textarea>
              <button type='submit' disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
              {error && <p style={{ color: 'salmon', marginTop: '8px' }}>{error}</p>}
            </form>

            <div className={styles.heading}>
              <h2>Tributes</h2>
            </div>
            {loading && <p style={{color:'#c0c4c8'}}>Loading tributes...</p>}
            {loadError && <p style={{color:'salmon'}}>{loadError}</p>}
            <div className={styles.tributeList}>
              {/* dynamically render the fetched tributes */}
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