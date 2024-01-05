import PropTypes from 'prop-types'
import UserReposItem from './UserReposItem'

function UserRepos({repos}) {

    return <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Top Repositories
            </h2>

            {repos.map((repo) =>(
                <UserReposItem key={repo.id} repo = {repo}/>
            ))}

        </div>
    </div>

}


UserRepos.propTypes = {
    repos : PropTypes.array.isRequired,
}

export default UserRepos
