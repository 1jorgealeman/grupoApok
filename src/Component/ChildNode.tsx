import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import list from '../assets/list.svg'
import del from '../assets/delete.svg'
import plusv1 from '../assets/plusv1.svg'
import arrowleft from '../assets/arrowleft.svg'
import logomini from '../assets/Logoapokmini.svg'
import { Container, Card, SubHeader, Title, List, Button, Loading, Select } from '../Element/style'
import { IApiService, IApiServiceTraslation, IFetchSelect } from '../Interface/IApiService'
import { fetchChildNodes, Translator, DeleteNode, CreateNode, fetchLocale } from '../Fetcher/Api'

interface IChildNode{
  id?: number,
}

const ChildNode = () => {
  const params: IChildNode = useParams()
  const navigate = useNavigate()
  const { id = 1 } = params
  const [NodesChild, setNodesChild] = useState<IApiService[]>([])
  const [NodeFather, setNodeFather] = useState<IApiServiceTraslation>()
  const [Fetchloader, setFetchloader] = useState<boolean>(false)
  const [FetchResponse, setFetchResponse] = useState<boolean>(false)
  const [FetchSelect, setFetcSelect] = useState<IFetchSelect[]>([])
  const [Language, setlanguage] = useState<string>('en_US')
  const [Refresh, setRefresh] = useState<boolean>(false)
  useEffect(() => {
    FSelect()
    fetchChildNodes(id).then((response) => {
      response.ok ? setFetchResponse(true) : setFetchResponse(false)
      return response.json()
    }).then((json) => setNodesChild(json)).catch((e) => {
      return console.log(e)
    }).finally(() => {
      setFetchloader(true)
    })
    Translator(id, Language).then(json => setNodeFather(json))
  }, [id, Refresh])
  const DeleteElement = (id: number) => {
    DeleteNode(id).then((json) => {
      if (json.message) {
        toast(json.message)
      } else {
        toast(`the Element ${json.id} was deleted with successfully`)
        !Array.isArray(NodesChild) ? navigate(-1) : null
        setRefresh(!Refresh)
      }
    })
  }

  const FSelect = () => {
    fetchLocale().then(json => setFetcSelect(json))
  }
  const CreateElement = (id: number) => {
    CreateNode(id, [Language]).finally(() => {
      setRefresh(!Refresh)
      toast('Element created with success')
      navigate(`/children/${id}`)
    })
  }

  return (
    <Card>
      <ToastContainer
        theme="light"
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SubHeader>
        <div>
          <Button onClick={() =>{ navigate(-1) }}><img src={arrowleft} /></Button>
        </div>
        <div>
          <Title>Prueba practica front-end<br/><span>Nodos Hijos</span></Title>
        </div>
      </SubHeader>
      <Container PaddingTop='2em'>
        {Fetchloader?
          <List>
            <section>
              <span>{NodeFather?.id}</span>
              <div>
                <span>{NodeFather?.translation.length === 0 ? 'not available' : NodeFather?.translation.map
                  (({ title }) => title)}</span>
                <div>
                  <Button onClick={() => CreateElement(id)}><img src={plusv1} /></Button>
                  <Button onClick={() => { DeleteElement(id) }} ><img src={del} /></Button>
                </div>
              </div>
            </section>
            { FetchResponse && Array.isArray(NodesChild) ? NodesChild.map((Node) => {
            return (
            <div key={Node.id}>
              <span>{Node.id}</span>
              <div>
                  <span>{Node.title}</span>
                  <div>
                  <Button onClick={() => {
                    setFetchloader(false)
                    navigate(`/children/${Node.id}`)
                  }}><img src={list} /></Button>
                    <Button onClick={() => {
                      CreateElement(Node.id)
                    }}><img src={plusv1} /></Button>
                  <Button onClick={()=>DeleteElement(Node.id)}><img src={del} /></Button>
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
      <Select onChange={(e) => {
        setlanguage(e.target.value)
        setRefresh(!Refresh)
      }}>
        {FetchSelect.map((locale) => <option key={locale.locale} value={locale.locale} >{locale.label}</option>
        )}
      </Select>
      {/* Language === locale.locale ? <option key={locale.locale} value={locale.locale} selected >{locale.label}</option> :  */}
    </Card>
  )
}
export default ChildNode
