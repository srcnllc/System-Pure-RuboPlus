import ProgramCard from '../../../Tools/ProgramCard/ProgramCard';
import styles from './Progrram.module.scss';

export default function Progrram() {
  const ProgramList = [
    {
      buttonName: 'TÜM GÜN',
      title:"İş bulmak, meslek sahibi olmak istiyorum.",
      btn1:"Frontend, 3 AY",
      btn2:"Fullstack Pro, 6 AY",
      bgImage: './images/bg1.png',
    },
    {
      buttonName: 'AKŞAMLARI VE HAFTASONU',
      title:"İş değiştirmek veya işimde yükselmek istiyorum.",
      btn1:"Fullstack Up",
      btn2:"Fullstack UpPro",
      bgImage: './images/bg2.png',
    },
    {
      buttonName: 'AKŞAMLARI VE HAFTASONU',
      title:"Okurken geleceğe hazırlanmak istiyorum.",
      btn1:"Fullstack Genç",
      btn2:"Fullstack GPro",
      bgImage: './images/bg3.png',
    }
  ];
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