import HeroAbout from '../../components/pages/About/HeroAbout/HeroAbout';
import ImageBanner from '../../components/pages/About/ImageBanner/ImageBanner';
import WhoAreWe from '../../components/pages/About/WhoAreWe/WhoAreWe';
import styles from './About.module.scss';
import Container from '../../components/Tools/Container/Container';
import Partners from '../../components/pages/About/Partners/Partners';
import Maps from '../../components/pages/About/Maps/Maps';

export default function About() {
  return (
<section className={styles.about}>
<Container large>
  <HeroAbout/>
  <WhoAreWe/>
  <ImageBanner/>
  <Partners/>
  <Maps/>
  </Container>
</section>
)
}