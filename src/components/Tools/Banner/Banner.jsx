import styles from './Banner.module.scss';

export default function Banner({bannerData}) {
  return (
<section className={styles.banner}>
  <div className={styles.pinkBanner}>
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2>{bannerData.bannerPinkTitle}</h2>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.price}>
        <h3>{bannerData.bannerPinkPrice1}</h3>
        <h3>{bannerData.bannerPinkPrice2}</h3>
        </div>
        <p>{bannerData.bannerPinkText}</p>
      </div>
    </div>
  </div>
  <div className={styles.greenBanner}>
  <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2>{bannerData.bannerGreenTitle}</h2>
      </div>
      <div className={styles.rightContent}>
        <p><span>{bannerData.bannerGreenPrice1}</span>{bannerData.bannerGreenText1}</p>
        <p><span>{bannerData.bannerGreenPrice2}</span>{bannerData.bannerGreenText2}</p>
          </div>
    </div>
  </div>
</section>
)
}