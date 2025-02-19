import styles from './HeroContact.module.scss';

export default function HeroContact() {
  return (
<section className={styles.herocontact}>
  <div className={styles.content}>
    <div className={styles.title}>
      <h2>Dijital dönüşümün parçası olun, <span>modern yazılım teknolojileriyle kariyerinizi yeniden şekillendirin.</span></h2>
    </div>
    <div className={styles.desc}>
      <p>Yazılım dünyasında yeni bir başlangıç yapmaya hazır mısınız? Systempure ile becerilerinizi geliştirerek dijital kariyer yolculuğunuza sağlam bir adım atın.</p>
      <span>Sorularınız mı var? Bizimle iletişime geçin, size en iyi eğitim ve kariyer fırsatlarını sunmak için buradayız.</span>
    </div>
  </div>
</section>
)
}