import styles from './Partners.module.scss';
import partnerList from '../../../../jsonData/partnerList.json'

export default function Partners() {

  return (
<section className={styles.partners}>
  <div className={styles.content}>
    <div className={styles.desc}>
      <h3>Önde gelen kurumların tercihi Systempure oldu!</h3>
      <p>Başarılı kurumsal işbirlikleri ile öğrencilerimizi tercih eden kurumlarımızdan bazıları</p>
    </div>
    <div className={styles.partnersList}>
      {partnerList.map((partner, index) => (
        <div key={index} className={styles.partner}>
          <img src={partner.image} alt={partner.title} />
        </div>
      ))}
    </div>
  </div>
</section>
)
}