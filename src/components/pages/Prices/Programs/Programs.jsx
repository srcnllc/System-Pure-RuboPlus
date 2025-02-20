import styles from './Programs.module.scss';
import Banner from '../../../Tools/Banner/Banner';
import ProgramInfoCard from '../../../Tools/ProgramInfoCard/ProgramInfoCard';


export default function Programs({data}) {
  return (
<section className={styles.programs}>
    <h2>{data.blogName}</h2>
      <h5  style={{color:data.color}}>{data.blogSubTitle}</h5>
      <div className={styles.content}>
        {data.blogProgramData.map((program, index) => (
          <ProgramInfoCard
            key={index}
            color={data.color}
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
            messageIcon1={program.messageIcon1}
            messageIcon2={program.messageIcon2}
            messageIcon3={program.messageIcon3}
            messageIcon4={program.messageIcon4}
          />
        ))}
      </div>
      <div className={styles.notes}>
        <p>
        {data.blogDescription}
        </p>
      </div>
      {data.banner ? 
        <Banner bannerData={data.banner}/>:null
      }
</section>
)
}