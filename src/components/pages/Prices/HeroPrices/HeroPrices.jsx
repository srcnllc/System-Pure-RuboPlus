import EducationCard from '../../../Tools/EducationCard/EducationCard';
import styles from './HeroPrices.module.scss';

export default function HeroPrices() {
  const educationList = [
    {
      title: 'Tüm Gün Programlar',
      desc: 'Eğitim hafta içi, gün boyunca',
      buttonColor:"pinkButton",
      titleColor:"#ED417F"
    },
    {
      title: 'Part Time Programlar (Çalışanlar için)',
      desc: 'Eğitimler hafta içi akşamları ve hafta sonları',
      buttonColor:"pinkNeonButton",
      titleColor:"rgba(233, 59, 227, 1)"
    },
    {
      title: 'Genç Yazılımcı Programı (Öğrenciler için)',
      desc: 'Eğitimler hafta içi akşamları ve hafta sonları',
      buttonColor:"greenButton",
      titleColor:"#7DC6B5"
    },
  ];
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