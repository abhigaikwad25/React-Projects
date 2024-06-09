import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  //useLoaderData hook stored in data 
  const data = useLoaderData()


  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    //data can help to fetch data 
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// async-await wait for fetching data fro API url after that githubInfoLoader can execute
//await keyword: This pauses the execution of the githubInfoLoader function until the fetch operation completes and a response is returned.
export const githubInfoLoader = async () => {
  //in that fetch data from URL 
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  //string data converted into json format
  return response.json()
}