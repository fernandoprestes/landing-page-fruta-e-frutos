import style from './card.module.scss'

interface CardProps {
  cardFoodImg: string
  cardFoodAlt: string
  title: string
  description: string
}

export const Card = ({
  cardFoodImg,
  cardFoodAlt,
  title,
  description
}: CardProps) => {
  return (
    <div className={style.card}>
      <img className={style.card__image} src={cardFoodImg} alt={cardFoodAlt} />
      <div className={style.card__content}>
        <h4 className={style.card__title}>{title}</h4>
        <p className={style.card__description}>{description}</p>
        <button className={style.card__button}>Ver receita</button>
      </div>
    </div>
  )
}
