export interface IApiService{
  id: number,
  parent?: number,
  title: string,
  created_at?: any,
  updated_at?: any,
}

export interface IApiServiceTraslation extends IApiService{
  translation: Translation[]
}

interface Translation {
    id: number,
    node_id: number,
    locale: string,
    title: string,
    created_at?: any,
    updated_at?: any
}

export interface IFetchSelect{
  locale: string,
  label: string
}
