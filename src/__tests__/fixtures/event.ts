import {
  Status,
  Timezone,
  CountryAlpha3,
  CountryID,
  CountryName,
  Type,
  Country,
  Flag,
  Currency
} from '../../@types/events'

export default {
  show_price_breakdown: false,
  linkout_type: null,
  raw_description: ' ',
  sale_start_date: new Date('2022-07-04T09:00:00Z'),
  price: null,
  announcement_date: new Date('2022-07-01T09:00:00Z'),
  venue: 'MOTH Club',
  status: Status.OnSale,
  name: 'Dora Jar',
  ticket_types: [
    {
      id: 255977,
      name: 'General Admission',
      price: {
        face_value: 1500,
        fees: 150,
        total: 1650
      },
      sold_out: false
    }
  ],
  timezone: Timezone.EuropeLondon,
  event_images: {
    brand: null,
    landscape:
      'https://dice-media.imgix.net/attachments/2022-06-30/7b749948-b851-4928-8b3e-1c813da3804f.jpg?rect=53%2C0%2C1895%2C1125',
    portrait:
      'https://dice-media.imgix.net/attachments/2022-06-30/7b749948-b851-4928-8b3e-1c813da3804f.jpg?rect=688%2C0%2C625%2C1125',
    square:
      'https://dice-media.imgix.net/attachments/2022-06-30/7b749948-b851-4928-8b3e-1c813da3804f.jpg?rect=438%2C0%2C1125%2C1125'
  },
  age_limit: 'This is a 16+ event. ',
  sold_out: false,
  sale_end_date: new Date('2022-07-19T17:30:00Z'),
  type: Type.Event,
  destination_event_perm_name: null,
  url: 'https://link.dice.fm/I1c906d34b49',
  apple_music_tracks: [],
  lineup: [
    {
      details: 'Doors open',
      time: '7:30 PM'
    },
    {
      details: 'Dora Jar',
      time: ''
    }
  ],
  id: '62bea2f50b0af40001658d08',
  genre_tags: ['gig:synthpop', 'gig:indie'],
  spotify_tracks: [
    {
      open_url: 'https://open.spotify.com/track/0AaJgZIw1lJjc4QejCEpAu',
      preview_url:
        'https://p.scdn.co/mp3-preview/1d479a6023c7577b51cfaf6d8e384fcf0d4e074f?cid=921526b9c2da4b7b96e197790a02347e',
      title: 'Dora Jar - Polly'
    }
  ],
  detailed_artists: [
    {
      headliner: false,
      id: 31221,
      name: 'Dora Jar'
    }
  ],
  artists: ['Dora Jar'],
  promoters: [
    {
      id: 245,
      name: 'LNZRT LTD'
    }
  ],
  location: {
    accuracy: 0,
    city: 'London',
    country: Country.UnitedKingdom,
    lat: 51.5450825,
    lng: -0.0546326999999565,
    place: Timezone.EuropeLondon
  },
  checksum: 'F68AC01E9FA3AD6BBE0465C73EFDDC88',
  tags: [],
  int_id: 148414,
  images: [
    'https://dice-media.imgix.net/attachments/2022-06-30/7b749948-b851-4928-8b3e-1c813da3804f.jpg'
  ],
  perm_name: 'dora-jar-19th-jul-moth-club-london-tickets',
  hash: '2p3ka',
  date_end: new Date('2022-07-19T22:00:00Z'),
  date: new Date('2022-07-19T18:30:00Z'),
  type_tags: ['music:gig'],
  flags: [Flag.QrCode, Flag.GoingAhead],
  presented_by: 'Presented by Communion. ',
  links: [],
  destination_event_id: null,
  external_url: null,
  description: ' \n\nPresented by Communion. \n\nThis is a 16+ event. ',
  featured: false,
  address: 'Old Trades Hall, Valette Street, London E9 6NU',
  currency: Currency.Gbp,
  venues: [
    {
      city: {
        code: 'london',
        country_alpha3: CountryAlpha3.Gbr,
        country_id: CountryID.The54D8A87238Fe5D27D500988A,
        country_name: CountryName.UnitedKingdom,
        id: '54d8a23438fe5d27d500001c',
        name: 'London'
      },
      id: 43,
      name: 'MOTH Club'
    }
  ],
  cities: [
    {
      code: 'london',
      country_alpha3: CountryAlpha3.Gbr,
      country_id: CountryID.The54D8A87238Fe5D27D500988A,
      country_name: CountryName.UnitedKingdom,
      id: '54d8a23438fe5d27d500001c',
      name: 'London'
    }
  ]
}
