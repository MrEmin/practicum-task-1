import axios from 'axios'

export default async (userId) => {
  // data fetch.
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )

  // merge user and posts data.
  const result = { ...user, posts }
  console.log(result)
}
