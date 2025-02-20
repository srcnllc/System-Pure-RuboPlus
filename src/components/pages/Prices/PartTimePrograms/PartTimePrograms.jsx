import Banner from '../../../Tools/Banner/Banner';
import ProgramInfoCard from '../../../Tools/ProgramInfoCard/ProgramInfoCard';
import styles from './PartTimePrograms.module.scss';

export default function PartTimePrograms() {
  const allProgramData = [
    {
      title: 'Fullstack',
      subTitle: 'Up',
      date: '12 ay, haftada 6 saat',
      message1: 'Eğitimlerimiz ve yapay zeka 1-1 destek veriyor',
      message2: 'Haftada 1 gün canlı ders, 1 gün kütüphane seansı',
      message3: 'Kariyer merkezimiz ile iş bulma desteği',
      price: '5.000',
      installment: 'TL/ay',
      amount: '13 ay boyunca (karta bloke yok)',
      description:'* Her hafta 1.5 saat canlı ders, 4-5 saatlik yapay zeka destekli online eğitim, eğitmen /komunite desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır.',
    },
    {
      title: 'Fullstack',
      subTitle: 'UpPro',
      date: '10 ay, haftada 12 saat',
      message1: 'Eğitimlerimiz ve yapay zeka 1-1 destek veriyor',
      message2: 'Haftada 3 gün canlı ders, 1 gün proje',
      message3: 'İş bulma kariyer merkezi desteği',
      message4: 'Toplamda 516 saat eğitim *',
      price: '4.600',
      installment: 'TL/ay',
      amount: '13 ay boyunca (Karta bloke yok)',
      description:
        '* Haftada ortalama 6 saat vanlı, 6-8 saatlik yapay zaka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır.',
    },
  ];
  return (
<section className={styles.parttimeprograms}>
    <h2>Part-time Programlar (Çalışanlar için)</h2>
      <h5  style={{color:"rgba(233, 59, 227, 1)"}}>Eğitim hafta içi akşamları ve hafta sonları</h5>
      <div className={styles.content}>
        {allProgramData.map((program, index) => (
          <ProgramInfoCard
            key={index}
            color={"rgba(233, 59, 227, 1)"}
            title={program.title}
            subTitle={program.subTitle}
            date={program.date}
            message1={program.message1}
            message2={program.message2}
            message3={program.message3}
            message4={program.message4}
            price={program.price}
            installment={program.installment}
            amount={program.amount}
            description={program.description}
          />
        ))}
      </div>
      <div className={styles.notes}>
        <p>
        Aylık ödeme opsiyonunda kart limitiniz aynı kalıyor - Bloke yok.
        </p>
      </div>
      <Banner/>
</section>
)
}