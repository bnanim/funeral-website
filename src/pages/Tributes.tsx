import Footer from '../components/Footer';
import styles from '../styles/tributes.module.css';
import { CgProfile } from "react-icons/cg";
import { useState, useRef, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Tributes = () => {
  // define a type for the tribute object (adjust properties to match your API)
  interface Tribute {
    id: string | number;
    name: string;
    message: string;
  }

  const tributes: Tribute[] = [
    { 
      id: 1,
      name: "From Children",
      message: "Written words alone cannot express how we feel about your passing. Everyone who received the news of your passing was shocked to the marrow. Only God can explain it; we mortals have no understanding until we all meet again in heaven. You played both roles of father and mother by taking care of eight children when we lost our dear father, your husband, in 1985. At the time, the oldest among your eight children was only 20 years old. You stood your ground and allowed your younger children to grow up with aunties, uncles, siblings, and the successor of our beloved father. As painful and difficult as it may have seemed at the time, you prayed to God to nurture us into responsible adults—and so God did. Each of us reconnected with our you under different circumstances after years of being away from you, and when we did, it felt as though we had lived with you all our lives. You were an example to us through your hard work. Your dedication to your business throughout your years on earth, even in old age, was a testament to your diligence and an inspiration to all of us. You also wanted us to have a life away from the village. Whenever we visited you during our youthful years, your first question was always why we had come, and you quickly sent us back the following day, saying, “the opportunities in the village are limited, and I will not allow any of you to live with me here in the village.” This compelled us to make the most of whatever situation we found ourselves in the city. At first, we thought you had neglected us, but when we grew into successful adults, we realized that you truly loved us and meant well for us. Maame never concealed the teachings of the Word of God or her life experiences from her children. You shared your Sunday church teachings with us, especially those on effective parenting, honoring and caring for parents, and marital principles. You would call us individually to share and discuss such topics at length. You took pride in the fact that we cared for you and provided for you, for which you constantly expressed your gratitude. Yaa loved all her children. She knew the abilities and characters of each of her eight children. Whenever an issue arose in the family, she knew exactly which of her children to call to make the right decision, provide comfort, or bring solace. For example: when she needed someone to resolve family issues and lead the way, she would call Kofi, her first son. When she wants firebrands in a critical situation, she immediately called Afua or Akosua, her fourth and last born. For comfort and someone to understand her in certain situations, she called Yaw, Ama, Oteng, her fifth, sixth, and seventh children. If she needed a fair-minded person on an important matter, she quickly called Anim, Tribute by Children her third born. As for her second-born, whenever she visited us in Accra, she loved staying with her. Through this wisdom and strategy, she resolved many family issues and lived as a very fulfilled mother. Each of us also related to our dear mother differently. While some of us called you Yaa, others called you Maame. We also had our own special way of addressing you. Some regarded you as a mother, others as a friend. Your relationship of your fifth born – Yaw was like a husband and wife because he has the same name as your beloved late husband. You informed us that you were not feeling well on Thursday, 7th August 2025, and we brought you to Accra to receive proper medical treatment. It was as if God had told us you would not return. On the day we came for you, we accounted for every money the church had with you and handed them over to the elders after intense opposition from you. Little did we know that it would be the last five days we would ever spend with you. On Monday, 12th August 2025, your condition became critical, and we rushed you to the University of Ghana Medical Centre. We prayed that God would give us the opportunity to speak with you one last time, but you could not. We watched and held your hand by your hospital bed as you took your last breath at exactly 11:13 p.m. on Tuesday, 13th August 2025. Even though you are no longer with us, we take pride in the fact that you have left us a great legacy. You will forever remain in our hearts, and the void you have left is irreplaceable. Wo mma Kofi, Akua, Kwaku, Afua, Yaw, Ama, Oteng and Akosua sɛ: Nantie yie, Yaa, Da yie Maame. Sɛ asamando yɛ ɔman a, kyea yɛn Papa – Kwasi Nkansah ma yɛn. Tell him we miss him a lot and wish he had lived a little longer. But God knows best. Perhaps his early passing was for our good, as Romans 8:28 says: “And we know that in all things God works for the good of those who love Him, who have been called been called according to his purpose.” May the almighty God grant you eternal rest until the resurrection when we all meet again." 
    },
    {
      id: 2,
      name: "From Siblings",
      message: "Auntie as we usually called her was a ‘Pilar’ in the family. She supported and united the family with love and constant communication through telephone calls and invitation to visit during occasions. Auntie does not hold grudges. She spoke her mind and always make her feelings clearly known when she gets hurt. She cracked the whip when she had to and pampered when the need arose. She showed her love for her siblings through financial and material support. she shared whatever she had with her siblings. She is the first person that will call on special occasions such as Christmas and Easter to wish her siblings well. She sometimes went beyond her means to ensure that the nuclear and extended family remains united. Auntie you will be greatly miss by every member of the family. The vacuum you have left may never be filled. Nate yie." 
    },
    {
      id: 3,
      name: "From In-laws",
      message: "Today, we stand together with heavy hearts to honour and remember a truly remarkable woman whose passing has left a deep emptiness in our family. Auntie Felicia Yaa Akromuah , our beloved mother-in-law. Today, your in-laws stand by your mortal remains and proclaim: You have fought a good fight. You have run the race over a remarkable 92-year journey and have kept the faith. Now, it is time to return to your maker for your well-deserved crown. To us, Maame was far more than a mother-in-law. She was a mother figure to everyone. She was loving, caring, and always present. She had a beautiful way of appreciating even the smallest things done for her, and through that simple grace, she made everyone feel valued, respected, and deeply loved. She was a woman of great hospitality. Whenever we visited, she made sure everyone was comfortable, well-fed, and completely at home. She gave of herself freely — especially through her cooking and her tender care. Her home was always filled with warmth, generosity, and a true sense of belonging. We will greatly miss the mushrooms, snails, and plantains that you constantly send to our homes. In spite of the pain and vacuum your absence has created, the doctrine you taught concerning family will remain our guiding light. The values you instilled — love, unity, peace, respect, and togetherness — will continue to shape our families for generations to come. We promise to keep your mantle burning within our individual homes and to uphold the legacy of harmony you so beautifully exemplified. Maame was an exceptional grandmother to all her grandchildren. She loved them deeply, protected them fiercely, and showed great interest in their education and well-being. She guided with wisdom and corrected when necessary — not out of harshness, but out of love and a sincere desire to see everyone grow into their best selves. She was also a gifted storyteller with a wonderful sense of humour. She knew how to lighten a moment, how to make us laugh, and how to bring joy even into ordinary days. We have missed and will continue to miss your motherly care, your jokes, your laughter, and everything that made you so special to us. You were an excellent wife, mother, grandmother, great-grandmother, friend, and, of course, a remarkable mother-in-law. Your love has been an integral part of the harmony, peace, and happiness we enjoy in our various family settings with your well-natured children. Tribute by In-Laws Maame, we are grateful for the love you poured into this family, for the lessons you taught us, and for the role you played in shaping our lives and the lives of your grandchildren. Though you are no longer physically with us, your presence will always be felt, and your love will continue to live on through the generations you leave behind. Oh, Asew Konɔfoɔ, you will be deeply missed, lovingly remembered, and forever cherished. Now, all nine of us — Abena Serwaa, George Ekor, Samuel Owusu Agyei, Gifty Anim, Kate Nkansah, Linda Boateng Oteng, Bernard Amuzu, Dr. Y. F. Frimpong, Yaa Baby, bid you farewell. Rest peacefully in the bosom of your Maker, our beloved Mother-in-law, Maame You'll Forever be our hearts." 
    },
    {
      id: 4,
      name: "From Grand Children",
      message: "Today, we honor and celebrate the life of our beloved grandmother, Felicia Yaa Akromuah, a woman of deep faith, unwavering dedication, and selfless service to God and humanity. Grandma was a true Christian in every sense of the word. Her relationship with God was not just something she spoke about—it was something she lived daily. She placed God and His work above everything else, and her commitment to the church was remarkable. Even at over 80 years old, she accepted the responsibility of serving as the Financial Secretary of her church, showing her strength, discipline, and devotion. Though most of us were very young in her early years and did not get to know her deeply then, the woman we came to know in her old age left a powerful impression on us. She was principled, focused, faithful, and deep in wisdom. Watching her live out her years made us realize how much wisdom, discipline, and strength she carried within her. She was always ever ready to offer advice and opinions whenever we went to her for it. Sometimes, we wish we had known her much earlier in life, because we believe we would have learned so much from her—about faith, perseverance, service, and total dedication to God. Yet, we are very grateful for the time we did have with her and for the example she set before us. Rest in perfect peace, Grandma Felicia Yaa Akromuah. You have fought the good fight, you have finished the race, and you have kept the faith. Your reward is with God, and your memory lives on in our hearts forever." 
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    // afterChange will be set below once updateDotsPosition is defined
  };
  
  const [expandedIds, setExpandedIds] = useState<Array<string | number>>([]);
  const sliderRef = useRef<unknown>(null);
  const skipBeforeRef = useRef(false);

  type SliderApi = {
    slickPause?: () => void;
    slickPlay?: () => void;
    slickGoTo?: (index: number) => void;
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  // update dots position to sit under the active slide
  const updateDotsPosition = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const dots = container.querySelector('.slick-dots') as HTMLElement | null;
    if (!dots) return;
    // find the active slide (slick-active inside this container)
    const active = container.querySelector('.slick-slide.slick-active') as HTMLElement | null;
    if (!active) {
      // fallback: place dots at bottom of container
      dots.style.position = 'absolute';
      dots.style.left = '50%';
      dots.style.transform = 'translateX(-50%)';
      dots.style.top = (container.clientHeight - dots.clientHeight - 12) + 'px';
      return;
    }
    // compute position relative to container
    const activeRect = active.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const top = activeRect.top - containerRect.top + activeRect.height + 12; // 12px gap
    dots.style.position = 'absolute';
    dots.style.left = '50%';
    dots.style.transform = 'translateX(-50%)';
    dots.style.top = `${top}px`;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting;
          const s = sliderRef.current as { slickPause?: () => void; slickPlay?: () => void } | null;
          if (s && typeof s.slickPause === 'function' && typeof s.slickPlay === 'function') {
            if (!inView) s.slickPause();
            else s.slickPlay();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    // ensure dots positioned initially
    setTimeout(() => updateDotsPosition(), 50);
    return () => obs.disconnect();
  }, []);

  // reposition when expandedIds change (a card expands/collapses)
  useEffect(() => {
    // small delay to allow layout changes
    const t = setTimeout(() => updateDotsPosition(), 120);
    return () => clearTimeout(t);
  }, [expandedIds]);

  // pause autoplay when any card is expanded; resume when none are expanded
  useEffect(() => {
    const s = sliderRef.current as { slickPause?: () => void; slickPlay?: () => void } | null;
    if (!s) return;
    if (expandedIds.length > 0) {
      if (typeof s.slickPause === 'function') s.slickPause();
    } else {
      if (typeof s.slickPlay === 'function') s.slickPlay();
    }
  }, [expandedIds]);

  // reposition on window resize
  useEffect(() => {
    const onResize = () => updateDotsPosition();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleExpanded = (id: string | number) => {
    setExpandedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  };

  // increase default truncate length to show more characters before "Read more"
  const truncate = (s: string, n = 800) => (s.length > n ? s.slice(0, n).trimEnd() + '...' : s);
 

  return (
    <>
        <div className={styles.tributesContainer}>
          <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525119/tribute_m5qrku.jpg" alt="" />
            <div className={styles.heading}>
              <h2>Tributes</h2>
            </div>
            <div className={styles.tributeList} ref={containerRef}>

              <Slider
                ref={(c) => { sliderRef.current = c; }}
                beforeChange={(oldIndex /*, newIndex */) => {
                  // if a card is expanded, prevent navigation and stay on the current slide
                  if (skipBeforeRef.current) {
                    // this call was programmatic to revert navigation; ignore
                    skipBeforeRef.current = false;
                    return;
                  }
                  if (expandedIds.length > 0) {
                    const s = sliderRef.current as SliderApi | null;
                    if (s && typeof s.slickGoTo === 'function') {
                      // programmatically go back to the old index to cancel the navigation
                      skipBeforeRef.current = true;
                      s.slickGoTo(oldIndex);
                    }
                  }
                }}
                afterChange={() => {
                  // auto-collapse any expanded cards when slide changes
                  setExpandedIds([]);
                  // reposition dots under the newly active slide
                  updateDotsPosition();
                }}
                {...settings}
              >
              {tributes.map((t) => (
                <div key={t.id} className={`${styles.tributeCard} reveal card-hover`}>
                  <div className={styles.tributeHeader}>
                    <CgProfile className={styles.profileIcon} />
                    <div className={styles.name}>
                      <h4>{t.name}</h4>
                    </div>
                  </div>
                  <p className={`${styles.message} ${expandedIds.includes(t.id) ? styles.messageExpanded : ''}`}>
                    {expandedIds.includes(t.id) ? t.message : truncate(t.message, 420)}
                  </p>
                  {t.message.length > 420 && (
                    <button
                      className={styles.readMore}
                      onClick={() => toggleExpanded(t.id)}
                      aria-expanded={expandedIds.includes(t.id)}
                    >
                      {expandedIds.includes(t.id) ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>
              ))}
              </Slider>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Tributes