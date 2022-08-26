import axios from 'axios'
import md5 from 'md5'

const API_URL = 'http://gateway.marvel.com/v1/public'

const PUBLIC_KEY = process.env.REACT_APP_API_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_API_PRIVATE_KEY
const ts = new Date().getTime()

const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)

const client = axios.create({
  baseURL: API_URL,
  params: {
    ts,
    apikey: process.env.REACT_APP_API_PUBLIC_KEY,
    hash,
  },
})

export default client
