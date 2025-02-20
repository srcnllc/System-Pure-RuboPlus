import EducationCard from '../../../Tools/EducationCard/EducationCard';
import styles from './HeroPrices.module.scss';
import educationList from '../../../../jsonData/educationList.json'

export default function HeroPrices() {
  return (
<section className={styles.heroprices}>
    <h2>Eğitimlerimiz</h2>
  <div className={styles.content}>
    {educationList.map((item,index)=>(
      <EducationCard key={index} title={item.title} desc={item.desc} buttonColor={item.buttonColor} titleColor={item.titleColor}/>
    ))}
  </div>
</section>
)
}