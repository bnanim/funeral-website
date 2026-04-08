import { useState } from 'react'
import Footer from '../components/Footer'
import styles from '../styles/gallery.module.css'

const Gallery = () => {

  const general = 
  [
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525128/withGrandkids_c3gbr3.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525126/youngWithFriends_aowyj7.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525120/withChildren_noacwp.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525119/supporter_lvshtb.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525118/wife_mhzf72.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525118/pic9_vknfjl.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525117/pic1_jyvjxk.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525117/pic8_xlpfvi.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525116/pic6_k7kjae.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525116/pic5_zspobj.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525116/pic7_qzxly0.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525117/pic3_b7hr74.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525115/pic2_agkbit.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525115/pic4_qatnbv.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525115/inlaw_uqhuuc.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525113/kidsAndGrandkids_wylekr.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525114/advisorAndComforter_kqmpyh.jpg",
      "https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525112/a_cebdbq.jpg"
  ];

  const children = 
  [
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605558/7_anhtxh.jpg",
      name: "KOFI OBENG"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605556/2_wjvcua.jpg",
      name: "FAUSTINA DEDAA EKOR"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605556/1_ss2c1j.jpg",
      name: "SETH ANIM NKANSAH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605557/4_x0foiz.jpg",
      name: "ESTHER OWUSU-ADJEI"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605558/8_j2c4nq.jpg",
      name: "DANIEL NKANSAH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605557/5_laecpg.jpg",
      name: "SARAH NKANSAH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605557/3_coeahn.jpg",
      name: "SAMUEL BOATENG OTENG"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605561/6_p7xast.jpg",
      name: "GRACE FRIMPONG-MANSO"
    },

  ];

  const inLaws =
  [
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605809/i_watnke.jpg",
      name: "KATE NKANSAH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605808/g_dyozzi.jpg",
      name: "SAMUEL OWUSU-ADJEI"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605808/f_xlcvnh.jpg",
      name: "BERNARD AMUZU"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605808/e_wdj2dk.jpg",
      name: "DR. YAW FRIMPOONG-MANSO"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605808/b_j449me.jpg",
      name: "YAA BABY"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605807/d_i8mrhl.jpg",
      name: "LINDA BOATENG OTENG"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605807/c_batmtl.jpg",
      name: "GEORGE EKOR"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605807/a_xvq2ed.jpg",
      name: "GIFTY ANIM NKANSAH"
    },
  ];

  const grandKids =
  [
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605640/z_u8adc1.jpg",
      name: "KOFI"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605639/y_qrihpb.jpg",
      name: "CECELIA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605593/x_rlhu36.jpg",
      name: "TAWIA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605593/v_uofvex.jpg",
      name: "KEZIAH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605592/w_nwldhr.jpg",
      name: "SABRINA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605591/s_jvkzu5.jpg",
      name: "KEREN"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605591/t_lrcbn5.jpg",
      name: "DANIELA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605591/u_jp24oy.jpg",
      name: "ADUTWUM"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605590/q_twv1jq.jpg",
      name: "ABIGAIL"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605590/r_puagok.jpg",
      name: "PAA KWESI"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605589/p_xxk2oj.jpg",
      name: "DORCAS"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605589/o_yjdi0o.jpg",
      name: "DIANA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605588/n_gt0rb9.jpg",
      name: "MANSFORD"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605587/m_hefqak.jpg",
      name: "RALPH"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605586/h_i32coc.jpg",
      name: "AFUA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605586/l_v2qtes.jpg",
      name: "SOLOMON"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605585/j_b6aodl.jpg",
      name: "ENO"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605585/k_vbxnsn.jpg",
      name: "SANDRA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605584/20_vi5baa.jpg",
      name: "BERNARD"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605584/18_osucfs.jpg",
      name: "OBED"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605583/19_gk8ijn.jpg",
      name: "PORTIA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605583/17_qczqp0.jpg",
      name: "CIANA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605583/13_uk1er2.jpg",
      name: "KWAME"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605582/15_bxocla.jpg",
      name: "CYNTHIA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605582/16_vkufyh.jpg",
      name: "KWAKU"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605582/14_ethg7r.jpg",
      name: "TIWAA"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605581/12_r0gugl.jpg",
      name: "MACLORD"
    },
    {
      src:"https://res.cloudinary.com/dnyka5nyc/image/upload/v1775605581/11_bnkvdc.jpg",
      name: "KWABENA"
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div className={styles.imagesContainer}>
        <img src="https://res.cloudinary.com/dnyka5nyc/image/upload/v1775525114/gallery_edjybo.jpg" alt="" />

          {/*GENERAL PICTURES */}
        <div data-reveal-stagger="90" className={styles.grandmaOnly + ' ' + styles.section}>
          <h1>Gallery</h1>
          <h2>A Wife, Mom and Friend</h2>
            {general.map( img => ( 
            <div key={img} className={`${styles.picBoxG} reveal card-hover`}>
              <img className={isClicked ? styles.clicked : ''} onClick={handleClick} src={img} alt="image" />
            </div>
            ))}
        </div>


        {/*CHILDREN PICTURES */}
        <div data-reveal-stagger="90" className={styles.grandmaOnly + ' ' + styles.section}>
          <h2>Children</h2>
            {children.map((child) => (
              <div key={child.name} className={`${styles.picBox} reveal card-hover`}>
                <img src={child.src} alt={child.name} />
                <p className={styles.imgDesc}>{child.name}</p>
              </div>
            ))}
        </div>

        {/* IN-LAWS PICTURES */}
        <div data-reveal-stagger="90" className={styles.grandmaOnly + ' ' + styles.section}>
          <h2>In-Laws</h2>
            {inLaws.map((inLaw) => (
              <div key={inLaw.name} className={`${styles.picBox} reveal card-hover`}>
                <img src={inLaw.src} alt={inLaw.name} />
                <p className={styles.imgDesc}>{inLaw.name}</p>
              </div>
            ))}
        </div>


        {/*GRAND CHILDREN PICTURES */}
        <div data-reveal-stagger="90" className={styles.grandmaOnly + ' ' + styles.section}>
          <h2>Grandchildren</h2>
            {grandKids.map((grandKid) => (
              <div key={grandKid.name} className={`${styles.picBox} reveal card-hover`}>
                <img src={grandKid.src} alt={grandKid.name} />
                <p className={styles.imgDesc}>{grandKid.name}</p>
              </div>
            ))}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Gallery