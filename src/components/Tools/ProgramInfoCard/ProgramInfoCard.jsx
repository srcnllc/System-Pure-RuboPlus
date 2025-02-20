import styles from './ProgramInfoCard.module.scss';

export default function ProgramInfoCard(
  {
    title,
    subTitle,
    date,
    message1,
    message2,
    message3,
    message4,
    price,
    installment,
    amount,
    description,
    color,
    messageIcon1,
    messageIcon2,
    messageIcon3,
    messageIcon4
  }) {
  return (
<section className={styles.programinfocard}>
  <div className={styles.title}>
    <h2>{title} <span  style={{ color:color }}>{subTitle}</span></h2>
    <h6>{date}</h6>
  </div>
  <div className={styles.desc}>
    <div className={styles.text}>
      <img src={messageIcon1} alt="message" />
      <p>{message1}</p>
    </div>
    <div className={styles.text}>
    <img src={messageIcon2} alt="wifi" />
    <p>{message2}</p>
    </div>
    {message4 ? 
    <div className={styles.text}>
    <img src={messageIcon4} alt="education" />
    <p>{message4}</p>
    </div>
    :""}
    <div className={styles.text}>
    <img src={messageIcon1} alt="bag" />
    <p>{message3}</p>
    </div>
  </div>
  <div className={styles.price}>
    {price ?
    <h3>{price} <span>{installment}</span></h3>
    : 
    <h3>İşe girince Öde<span style={{ color:color }} className={styles.notJob}>*</span></h3>
    }
    <p>{amount}</p>
    <button  className='btn pinkButton' style={{ backgroundColor:color }}>DETAYLI BİLGİ</button>
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  </div>
</section>
)
}