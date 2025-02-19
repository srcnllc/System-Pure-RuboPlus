import Container from '../../../Tools/Container/Container';
import styles from './CareerCenter.module.scss';

export default function CareerCenter() {
  return (
<section className={styles.careercenter}>
  <Container large>
    <div className={styles.content}>
  <div className={styles.top}>
    <div className={styles.info}>
      <div className={styles.infoContent}>
        <div className={styles.iconTitle}>
          <img src="./images/icons/briefcase.png" alt="jobicon" />
          <span>İŞE GİRİNCE ÖDE</span>
        </div>
        <h2>İşe girince veya aylık abonelikle ödeme imkanı</h2>
        <p>Systempure tüm-gün yazılımcı eğitiminde (Full-Stack Pro) işe girdikten sonra ödeme imkanı sunuyor. 
          Ayrıca bütün programlarda kredi kartının limitini bloke etmeyen aylık ödeme fırsatı sağlıyor.</p>
          <button className='btn pinkButton'>FİYATLAR</button>
      </div>
    </div>
    <div className={styles.image}>
      <img src="./images/careerİmage1.svg" alt="careerİmage" />
    </div>
  </div>
  <div className={styles.bottom}>
  <div className={styles.image}>
  <img src="./images/careerİmage2.svg" alt="careerİmage2" />
  </div>
  <div className={styles.info}>
  <div className={styles.infoContent}>
        <div className={styles.title}>
          <h2>Türkiye’nin en etkili <span>Kariyer Merkezi</span></h2>
          <p>Kariyer desteği alan mezunlarımızın <span>%93’ü</span> yazılımcı olarak işe başladılar.</p>
        </div>
        <ul>
          <li>
            <img src="./images/icons/danısman.png" alt="danışman" />
            <h4>Kişisel kariyer <br /> danışmanı</h4>
          </li>
          <li>
          <img src="./images/icons/takvim.png" alt="takvim" />
          <h4>Haftanın 4 günü iş <br /> başvurusu desteği</h4>
          </li>
          <li>
          <img src="./images/icons/basvuru.png" alt="basvuru" />
          <h4>Anlaşmalı şirketlere <br /> doğrudan başvuru</h4>
          </li>
        </ul>
      </div>
  </div>
  </div>
      </div>  
  </Container>
</section>
)
}