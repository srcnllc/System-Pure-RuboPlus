import ProgramInfoCard from '../../../Tools/ProgramInfoCard/ProgramInfoCard';
import styles from './AllDayPrograms.module.scss';

export default function AllDayPrograms() {
  const allProgramData = [
    {
      title: 'Fullstack',
      subTitle: 'Pro',
      date: '6 ay, 864 saat *',
      message1: 'Eğitimlerimiz ve yapay zeka 1-1 destek veriyor',
      message2: 'Canlı sınıf: Haftada 4 gün ders',
      message3: 'Kariyer merkezimiz ile iş bulma desteği',
      installment: '',
      amount: '6.000 TL yönetim gideri hariç',
      description:
        '* Haftada ortalama 10 saat canlı ders, 24 saatlik yapay zeka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesap',
    },
    {
      title: 'Frontend',
      subTitle: '',
      date: '3 ay, 432 saat *',
      message1: 'Eğitimlerimiz ve yapay zeka 1-1 destek veriyor',
      message2: 'Canlı sınıf: Haftada 4 gün ders',
      message3: 'Kariyer merkezimiz ile iş bulma desteği',
      price: '4.600',
      installment: 'TL/ay',
      amount: '13 ay boyunca (Karta bloke yok)',
      description:
        '* Haftada ortalama 6 saat vanlı, 6-8 saatlik yapay zaka destekli online eğitim, birebir eğitmen/koç desteği ile öğrencinin eğitime ayıracağı toplam süreye göre hesaplanmıştır.',
    },
  ];

  return (
    <section className={styles.alldayprograms}>
      <h2>Tüm Gün Programlar</h2>
      <h5>Hafta içi ve gün boyunca</h5>
      <div className={styles.content}>
        {allProgramData.map((program, index) => (
          <ProgramInfoCard
            key={index}
            color={"#ED417F"}
            title={program.title}
            subTitle={program.subTitle}
            date={program.date}
            message1={program.message1}
            message2={program.message2}
            message3={program.message3}
            price={program.price}
            installment={program.installment}
            amount={program.amount}
            description={program.description}
          />
        ))}
      </div>
      <div className={styles.notes}>
        <p>
          * Fullstack Pro İşe Girince Öde opsiyonunun öğrenci kapasitesi sınırlıdır. Ayrıca programa 96.000 peşin
          fiyatına 6 taksit veya 13 ay boyunca ayda 9.200 TL (karta bloke yok) ödeme koşullarıyla da başvuru
          yapabilirsiniz. Detaylı bilgi için Sıkça Sorulan Sorular’a bakın.
        </p>
      </div>
    </section>
  );
}
