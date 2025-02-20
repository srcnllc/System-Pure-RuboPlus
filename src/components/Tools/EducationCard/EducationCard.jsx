import styles from './EducationCard.module.scss';

export default function EducationCard({title,desc,buttonColor,titleColor}) {
  return (
<section className={styles.educationcard}>
<h3 style={{ color:titleColor }}>{title}</h3>
  <p>{desc}</p>
  <button className={`btn ${buttonColor}`}>Fiyatları Göster</button>
</section>
)
}