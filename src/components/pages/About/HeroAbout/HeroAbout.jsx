import styles from './HeroAbout.module.scss';

export default function HeroAbout() {
  return (
<section className={styles.heroabout}>
            <div className={styles.textContent}>
            <h2>Kodlama Yeteneğini
            <span>Yapay Zeka ile Güçlendir!</span></h2>
            <p>Yapay zeka destekli online yazılım kursumuzla, kodlama yeteneğinizi bir üst seviyeye taşıyın. Sıfırdan başlayarak, modern yazılım geliştirme ve yapay zeka teknolojileriyle projeler oluşturmayı öğrenin. Geleceğin teknolojileri sizi bekliyor!</p>
            <button className={`btn ${styles.blurButton}` }>
            PROGRAMLARI KEŞFEDİN
              <img src="./images/icons/click.png" alt="click" />
              </button>
            </div>
          <div className={styles.bacground}>
            <img className='icon' src="./images/aboutImage.svg" alt="aboutImage" />
          </div>
</section>
)
}