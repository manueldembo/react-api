import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import LogoIgnite from './../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />

      <nav>
        <NavLink to="/">
          <Timer size={24} title="Timer" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
