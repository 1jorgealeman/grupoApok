import logo from './assets/Logoapok.png'
import ContainerGlobal, { Header, Container } from './Element/style'
import { Routes, Route, useNavigate } from 'react-router-dom'
import FatherNode from './Component/FatherNode'
import ChildNode from './Component/ChildNode'

const App = () => {
  const navigate = useNavigate()
  return (
    <ContainerGlobal>
      <Header>
        <div onClick={() => navigate('/')}><img src={logo} /></div>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<FatherNode />} />
          <Route path="/children/:id" element={<ChildNode />} />
          </Routes>
      </Container>
    </ContainerGlobal>
  )
}

export default App
