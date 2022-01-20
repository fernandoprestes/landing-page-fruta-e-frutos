import { People } from '../../components/People'
import ImgRoberta from './../../images/pessoas/roberta.jpg'
import ImgMarcela from './../../images/pessoas/marcela.jpg'
import ImgAndreia from './../../images/pessoas/andreia.jpg'
import style from './about.module.scss'

const About = () => {
  return (
    <section className={style.about}>
      <h2 className={style.about__title}>Quem somos</h2>
      <p className={style.about__text}>
        Conheça a comunidade por trás da iniciativa
      </p>
      <div className={style.peoples}>
        <People
          peopleImage={ImgRoberta}
          peopleAlt="foto roberta"
          title="Roberta"
          content="Conteúdo"
        />
        <People
          peopleImage={ImgMarcela}
          peopleAlt="foto marcela"
          title="Marcela"
          content="Chefe de cozinha"
        />
        <People
          peopleImage={ImgAndreia}
          peopleAlt="foto andreia"
          title="Andreia"
          content="Pequena produtora"
        />
      </div>
    </section>
  )
}

export default About
