import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GithubContext from '../../Context/github/GithubContext'

function UserItem({user}) {

    const {getPerson} = useContext(GithubContext)

  return (
    <div className="card shadow-md compact bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className='avatar'>
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt ='User'/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='card-title'>{user.login}</h2>
                <div onClick={() => getPerson(user.login)}>
                    <Link className='text-base-content text-opacity-40' 
                    to={`/user/${user.login}` } >View Profile</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user:Proptypes.object.isRequired
}

UserItem.defaultProps ={
    user:{}
}

export default UserItem
