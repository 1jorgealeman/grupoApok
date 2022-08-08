const url = 'https://api-graph.tests.grupoapok.com'

export const fetchParentNodes = async () => {
  return await fetch(`${url}/api/nodes`).then((response) => response.json())
}

export const fetchLocale = async () => {
  return await fetch(`${url}/api/locales`).then((response) => response.json())
}

export const fetchChildNodes = async (id:number) => {
  return await fetch(`${url}/api/nodes?parent=${id}`)
}

export const Translator = async (id: number, language: string) => {
  return await fetch(`${url}/api/node/${id}?locale=${language}`).then((response) => response.json())
}

export const CreateNode = async (id: number, language: string[]) => {
  return await fetch(`${url}/api/node`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ parent: id, locales: language })
  }
  ).then((response) => response.json())
}

export const DeleteNode = async (id: number) => {
  return await fetch(`${url}/api/node/${id}`, { method: 'DELETE' }).then((response) => response.json())
}
