import styles from './FormSection.module.scss';

export default function FormSection() {
  return (
<section className={styles.formsection}>
  <div className={styles.leftContent}>
    <div className={styles.map}>
      <div className={styles.text}>
        <h5>See on Maps</h5>
        <img src="/images/icons/mapIcon.png" alt="mapIcon" />
      </div>
      <div className={styles.bg}>
        <img src="/images/map.png" alt="map" />
      </div>
    </div>
    <div className={styles.address}>
      <div className={styles.tr}>
        <h2>Ankara-TÜRKİYE</h2>
        <p>Mustafa Kemal Mahallesi 2079 Sokak B-Blok C15-16 / ViaGreen Plaza Çankaya, Ankara, TÜRKİYE</p>
        <div className={styles.contact}>
          <div className={styles.number}>
            <img src="/images/icons/phone.png" alt="phone" />
            <span>+90 312 212 00 09</span>
          </div>
          <div className={styles.mail}>
          <img src="/images/icons/sms.png" alt="sms" />
          <span>info@systempure.ai</span>
          </div>
        </div>
        <div className={styles.button}>
        <a href="#"><span>Haritada Göster</span>
        <img src="/images/icons/arrow.png" alt="arrow" />
        </a>
        </div>
      </div>
      <div className={styles.bae}>
      <h2>Dubai - BAE</h2>
        <p>Meydan Grandstand, 6th floor,Meydan Road, Nad Al Sheba,Dubai, U.A.E</p>
        <div className={styles.contact}>
          <div className={styles.number}>
            <img src="/images/icons/phone.png" alt="phone" />
            <span>+971 58 533 0653</span>
          </div>
          <div className={styles.mail}>
          <img src="/images/icons/sms.png" alt="sms" />
          <span>info@systempure.ai</span>
          </div>
        </div>
        <div className={styles.button}>
        <a href="#"><span>Haritada Göster</span>
        <img src="/images/icons/arrow.png" alt="arrow" />
        </a>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.rightContent}>
    <div className={styles.form}>
    <div className={styles.nameSurname}>
  <label htmlFor="nameSurname">Adınız ve Soyadınız</label>
  <input id="nameSurname" type="text" placeholder="Adınızı ve Soyadınızı eksiksiz giriniz" />
</div>
<div className={styles.numberAndEmail}>
    <div className={styles.number}>
  <label htmlFor="number">Telefon Numaranız</label>
  <input id="number" type="phone" placeholder="GSM Numaranızı Girinizi" />
</div>
    <div className={styles.email}>
  <label htmlFor="e-mail">E-Posta Adresinizz</label>
  <input id="e-mail" type="email" placeholder="E-Posta Adresinizi Giriniz" />
</div>
</div>
<div className={styles.konu}>
  <label htmlFor="konu">Konu</label>
  <input id="konu" type="text" placeholder="Lütfen İlgili Departman Seçiniz" />
</div>
<div className={styles.desc}>
  <label htmlFor="desc">Açıklama</label>
  <textarea id="desc" rows="5" placeholder="Lütfen Detaylı Bilgileri Giriniz"></textarea>
</div>
  <button type="submit">FORMU GÖNDER
  <img className={styles.iconDefault} src="/images/icons/arrow-right.png" alt="send" />
  <img className={styles.iconHover} src="/images/icons/arrow-right-hover.png" alt="send" />
    </button>
    </div>
  </div>
</section>
)
}