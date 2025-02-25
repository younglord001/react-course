import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const gitData= useLoaderData()
    // const [gitData, setGitData] = React.useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/younglord001')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setGitData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-300 text-white text-3xl'>Github followers:{gitData.followers}
    <br/> Github User Name: {gitData.login}
    <img src={gitData.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github 

export const githubInfoLoaderData = async () => {
    const res = await fetch('https://api.github.com/users/younglord001');
    return (
        res.json()
    );
}