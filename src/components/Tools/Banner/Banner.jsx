import styles from './Banner.module.scss';

export default function Banner() {
  return (
<section className={styles.banner}>
  <div className={styles.pinkBanner}>
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2>Peşin ödemeye özel koşullar</h2>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.price}>
        <h3>Fullstack Up: 52.000 TL</h3>
        <h3>Fullstack UpPro: 99.000 TL</h3>
        </div>
        <p>Kredi kartına vade farksız 6 aya varan taksit fırsatları için başvurun</p>
      </div>
    </div>
  </div>
  <div className={styles.greenBanner}>2</div>
</section>
)
}