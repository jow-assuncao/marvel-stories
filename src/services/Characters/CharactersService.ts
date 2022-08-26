import { client } from 'libs/axios'

const CHARACTERS_URL = '/characters'

export const getAllCharacters = async () => {
  const { data } = await client.get(CHARACTERS_URL)
  return data
}
