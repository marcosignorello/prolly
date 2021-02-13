import {useAuth0} from '@auth0/auth0-react'

export const Welcome = () => {
  const {user, isAuthenticated} = useAuth0()

  return (
    <div>
      <h2>Home</h2>
      {isAuthenticated ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <div>Welcome to Prolly, please login</div>
      )}
    </div>
  )
}
