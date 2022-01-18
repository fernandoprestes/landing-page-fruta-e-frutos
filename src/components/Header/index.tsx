import Logo from './../../images/logo.jpg'
import style from './header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      
      <img className={style.logo} src={Logo} alt="logo da fruta e fruto" />

      <nav className={style.menu}>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <a className={style.menu__link} href="#">
              Inicio
            </a>
          </li>
          <li className={style.menu__item}>
            <a className={style.menu__link} href="#">
              Receita
            </a>
          </li>
          <li className={style.menu__item}>
            <a className={style.menu__link} href="#">
              Quem somos
            </a>
          </li>
          <li className={style.menu__item}>
            <a className={style.menu__link} href="#">
              Comunidade
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
