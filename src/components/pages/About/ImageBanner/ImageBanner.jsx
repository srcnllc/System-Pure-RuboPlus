import styles from './ImageBanner.module.scss';

export default function ImageBanner() {
  return (
<section className={styles.imagebanner}>
  <div className={styles.leftBanner}>
    <div className={styles.topImages}>
      <img src="/images/left1.svg" alt="leftImage" />
      <img src="/images/left2.svg" alt="leftImage" />
    </div>
    <div className={styles.bottomImages}>
      <img src="/images/left3.svg" alt="leftImage" />
    </div>
  </div>
  <div className={styles.rightBanner}>
  <div className={styles.OneImages}>
      <img src="/images/right1.svg" alt="rightImage" />
    </div>
    <div className={styles.TwoImages}>
      <img src="/images/right2.svg" alt="rightImage" />
      <img src="/images/right3.svg" alt="rightImage" />
    </div>
  </div>
</section>
)
}