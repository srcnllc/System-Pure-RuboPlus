import styles from './Maps.module.scss';

export default function Maps() {
  return (
<section className={styles.maps}>
  <h2>Ofisimiz</h2>
  <div className={styles.mapsCard}>
    <div className={styles.cardItem}>
      <div className={styles.image}>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5147.118370815493!2d32.74184144308974!3d39.90793983861029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347c3abe99677%3A0x19e6797eaa1d2d35!2sVia%20Green%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1739997506048!5m2!1str!2str"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        <div className={styles.location}>
        <img src="/images/icons/location.png" alt="officeMaps" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h5>Ankara-TÜRKİYE</h5>
          <p>Mustafa Kemal Mahallesi 2079 Sokak 
          B-Blok C15-16 / ViaGreen Plaza</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.number}>
            <img src="/images/icons/phoneBlue.png" alt="phone" />
            <span>+90 312 212 00 09</span>
          </div>
          <div className={styles.mail}>
          <img src="/images/icons/smsBlue.png" alt="sms" />
          <span>info@systempure.ai</span>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.cardItem}>
      <div className={styles.image}>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28889.075771073545!2d55.28895034807128!3d25.164936933143384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c36f082541%3A0x16f65b407bb87f9!2sMeydan%20Grandstand!5e0!3m2!1str!2str!4v1739998467635!5m2!1str!2str"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        <div className={styles.location}>
        <img src="/images/icons/location.png" alt="officeMaps" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h5>Dubai - BAE</h5>
          <p>Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.number}>
            <img src="/images/icons/phoneBlue.png" alt="phone" />
            <span>+971 58 533 0653</span>
          </div>
          <div className={styles.mail}>
          <img src="/images/icons/smsBlue.png" alt="sms" />
          <span>info@systempure.ai</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}