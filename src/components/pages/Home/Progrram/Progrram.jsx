import ProgramCard from '../../../Tools/ProgramCard/ProgramCard';
import styles from './Progrram.module.scss';
import ProgramList from '../../../../jsonData/homeProgramList.json'

export default function Progrram() {

  return (
<section className={styles.progrram}>
  <div className={styles.questionBox}>
    <h2>Hangi <span>program</span> bana uygun ?</h2>
  </div>
  <div className={styles.prgCard}>  
  {ProgramList.map((program, index) => (
    <ProgramCard 
    key={index}
    bgImage={program.bgImage} 
    buttonName={program.buttonName}
    title={program.title}
    btn1={program.btn1}
    btn2={program.btn2}
    />
  ))}
  </div>
</section>
)
}