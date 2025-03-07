import React, {useContext} from 'react'
import UserContext from '../context/UserContext'



function Profile() {
    const {user} = useContext(UserContext)
    if (!user.username) {
        return <div>please login</div>
    }
  return (
    <div>welcome {user.username} & Password {user.password}</div>
  )
}

export default Profile;