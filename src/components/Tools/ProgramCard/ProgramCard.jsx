import styles from './ProgramCard.module.scss';

export default function ProgramCard({buttonName,title,btn1,btn2,bgImage}) {
  return (
<section className={styles.programcard}>
  <div className={styles.content}>
      <button className={`btn ${styles.transparent}`}>{buttonName}</button>
      <h2>{title}</h2>
      <div className={styles.buttons}>
        <button className={`btn ${styles.currentButton}`}>{btn1}</button>
        <button className={`btn ${styles.currentButton}`}>{btn2}</button>
      </div>
  </div>
  <div className={styles.bacground}>
    <img src={bgImage} alt="bacground" />
  </div>
</section>
)
}