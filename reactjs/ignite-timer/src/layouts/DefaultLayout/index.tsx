import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LAyoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LAyoutContainer>
      <Header />
      <Outlet />
    </LAyoutContainer>
  )
}
