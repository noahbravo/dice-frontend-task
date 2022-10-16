export interface Track {
  open_url: string
  preview_url: null | string
  title: string
}

export interface City {
  code: string
  country_alpha3: string
  country_id: string
  country_name: string
  id: string
  name: string
}

export interface Venue {
  city: City
  id: number
  name: string
}

export interface DetailedArtist {
  headliner: boolean
  id: number
  name: string
}

export interface EventImages {
  brand: null
  landscape: string
  portrait: string
  square: string
}

export interface Lineup {
  details: string
  time: string
}

export interface Location {
  accuracy: number
  city: string
  country: string
  lat: number
  lng: number
  place: string
}

export interface Promoter {
  id: number
  name: string
}

export interface Price {
  face_value: number
  fees: number
  total: number
}

export interface TicketType {
  id: number
  name: string
  price: Price
  sold_out: boolean
}

export interface Links {
  next: string
  self: string
}

export interface PageLinks {
  next: string | null
  self: string
}

export interface Event {
  raw_description: string
  sale_start_date: string
  announcement_date: string
  status: string
  price: null
  tags: string[]
  show_price_breakdown: boolean
  name: string
  timezone: string
  venues: Venue[]
  sale_end_date: string
  type: string
  destination_event_perm_name: null
  apple_music_tracks: Track[]
  perm_name: string
  id: string
  genre_tags: string[]
  spotify_tracks: Track[]
  detailed_artists: DetailedArtist[]
  event_images: EventImages
  artists: string[]
  cities: City[]
  location: Location
  checksum: string
  age_limit: string
  int_id: number
  presented_by: string
  linkout_type: null
  images: string[]
  destination_event_id: null
  sold_out: boolean
  hash: string
  date_end: string
  date: string
  ticket_types: TicketType[]
  type_tags: string[]
  flags: string[]
  lineup: Lineup[]
  links: string[]
  external_url: null
  description: string
  featured: boolean
  url: string
  address: string
  venue: string
  currency: string
  promoters: Promoter[]
}

export interface Events {
  data: Event[]
  links: PageLinks
}
