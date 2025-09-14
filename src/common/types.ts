export interface Hikaye {
  id: number
  adiTR: string
  adiEN: string
  tema: string
  url: string
  thumb: string
  pg: string
  folder: string
}

export type HikayeLang = 'tr' | 'en'
export type HikayeDetay = Record<HikayeLang, HikayeDetayLang[]>

export interface HikayeDetayLang {
  adi: string
  metin: string
  ozgecmisfoto: string
  ozgecmis: {
    adi: string
    foto: string
    metin: string
  }[]
  galeri: {
    big: string
    thumb: string
    fotografci: string
    ozgecmis: string
    yazi: string
  }[]
}

export interface Dernek {
  id: number
  adi: string
  logo: string
}

export interface Banner {
  dosya: string
  url: string
}