import {useContext } from "react"
import Spinny from "../layout/Spinny"
import UserItem from "./UserItem"
import GithubContext from "../../Context/github/GithubContext"

function UsersResults() {

const {users , loading} = useContext(GithubContext)

if(loading === false)
{
    return (
        <div className='grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols2'>
            {users.map((user) => (
                <UserItem key = {user.id}  user = {user} />
            ))}
        </div>
      )
}

else
{
    return(
        <Spinny/>
    )
}

}

export default UsersResults
