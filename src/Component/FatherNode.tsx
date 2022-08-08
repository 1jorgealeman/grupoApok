import { useState, useEffect } from 'react'
import list from '../assets/list.svg'
import plusv1 from '../assets/plusv1.svg'
import logomini from '../assets/Logoapokmini.svg'
import { Container, Card, SubHeader, Title, List, Button, Loading } from '../Element/style'
import { fetchParentNodes, CreateNode } from '../Fetcher/Api'
import { IApiService } from '../Interface/IApiService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const FatherNode = () => {
  const [NodesFather, setNodesFather] = useState<IApiService[]>([])
  const [Fetchloader, setFetchloader] = useState<boolean>(false)
  const navigate = useNavigate()
  const CreateElement = (id: number) => {
    CreateNode(id, ['es_ES']).finally(() => {
      toast('Element created with success')
      navigate(`/children/${id}`)
    })
  }

  useEffect(() => {
    fetchParentNodes().then((json) => setNodesFather(json)).catch((e) => console.log(e)).finally(() => {
      setFetchloader(true)
    })
  }, [])

  return (
    <Card>
      <SubHeader>
        <div>
          <Title>Prueba practica front-end<br/><span>Nodos padres</span></Title>
        </div>
      </SubHeader>
      <Container PaddingTop='2em'>
        {Fetchloader ?
          <List>
              {NodesFather.length !== 0 ? NodesFather.map((Node) => {
                
            return (
            <div key={Node.id}>
                <span>{Node.id}</span>
                <div>
                    <span>{Node.title}</span>
                    <div>
                    <Button onClick={() => navigate(`/children/${Node.id}`)}><img src={list} /></Button>
                    <Button onClick={() => CreateElement(Node.id)}><img src={plusv1} /></Button>
                    </div>
                </div>
            </div>
            )
            }) :
            <div>
                <span>404</span>
                <div>
                    <span>Sin elementos</span>
                </div>
            </div>
        }
        </List> : <Loading><img src={logomini} /></Loading>}
    </Container>
        </Card>
  )
}
export default FatherNode
