import styles from './Partners.module.scss';

export default function Partners() {
  const partnerList = [
    {
      title: 'Turkish_Airlines',
      image: '/images/Turkish_Airlines.png',
    },
    {
      title: 'Akbank',
      image: '/images/Akbank.png',
    },
    {
      title: 'Sabancı',
      image: '/images/Sabancı.png',
    },
    {
      title: 'YapiKredi',
      image: '/images/yapiKredi.png',
    },
    {
      title: 'Denizbank',
      image: '/images/denizbank.png',
    },
    {
      title: 'Koc',
      image: '/images/koc.png',
    }
  ];
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