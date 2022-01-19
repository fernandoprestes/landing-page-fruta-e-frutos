import style from './revenue.module.scss'
import ImgFood1 from './../../images/receitas/tigela-de-abacate.jpg'
import ImgFood2 from './../../images/receitas/salada-de-kiwi.jpg'
import ImgFood3 from './../../images/receitas/mix-de-vegetais.jpg'
import ImgFood4 from './../../images/receitas/pimentoes-a-juliana.jpg'
import ImgFood5 from './../../images/receitas/prato-oriental.jpg'
import ImgFood6 from './../../images/receitas/beterrabas-assadas.jpg'
import { Card } from '../../components/Card'

export const Revenue = () => {
  return (
    <>
      <section className={style.revenue}>
        <h2 className={style.revenue__title}>Receitas</h2>
        <p className={style.revenue__subtitle}>Economize e ganhe saúde</p>
        <p className={style.revenue__text}>
          Nossas receitas ajudam voce a aproveitar melhor os alimentos,
          economizar, ganhar tempo e praticidade
        </p>
      </section>
      <section className={style.cards}>
        <Card
          cardFoodImg={ImgFood1}
          cardFoodAlt="Tigela de abacate"
          title="Tigela de abacate"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
        <Card
          cardFoodImg={ImgFood2}
          cardFoodAlt="Salada de kiwi"
          title="Salada de kiwi"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
        <Card
          cardFoodImg={ImgFood3}
          cardFoodAlt="Mix de vegetais"
          title="Mix de vegetais"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
        <Card
          cardFoodImg={ImgFood4}
          cardFoodAlt="Pimentões à Juliana"
          title="Pimentões à Juliana"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
        <Card
          cardFoodImg={ImgFood5}
          cardFoodAlt="Prato oriental"
          title="Prato oriental"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
        <Card
          cardFoodImg={ImgFood6}
          cardFoodAlt="Beterrabas assadas"
          title="Beterrabas assadas"
          description="Receita refrescante e cheia de vitaminas para seu café da manhã."
        />
      </section>
    </>
  )
}
