import styles from './BannerContact.module.scss';

export default function BannerContact() {
  return (
<section className={styles.bannercontact}>
  <div className={styles.mause}>
    <img src="/images/icons/mause.png" alt="mause" />
  </div>
  <div className={styles.bg}>
  <img src="/images/BannerContact.png" alt="banner" />
  </div>
</section>
)
}