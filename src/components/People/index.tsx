import style from './people.module.scss'

interface PeopleProps {
  peopleImage: string
  peopleAlt: string
  title: string
  content: string
}

export const People = ({
  title,
  content,
  peopleImage,
  peopleAlt
}: PeopleProps) => {
  return (
    <div className={style.people}>
      <img className={style.people__image} src={peopleImage} alt={peopleAlt} />
      <h1 className={style.people__title}>{title}</h1>
      <p className={style.people__position}>{content}</p>
    </div>
  )
}
