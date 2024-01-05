import {FaLink} from 'react-icons/fa'
import PropTypes from 'prop-types'

function UserReposItem({repo}) {

 return (
  <div className="mb-2 rounded-md shadow-xl card bg-gray-800 hover:bg-gray-900">
    <div className="card-body">
        <h3 className="mb-2 text-xl font-semiblod">
            <a href={repo.html_url}>
                <FaLink className='inline mr-5'/>
                {repo.name}
            </a>
        </h3>
        <p className="text-gray-300">Size: {repo.size}</p>
        <p className="text-gray-300">Forks: {repo.forks_count}</p>
    </div>
  </div>
)}


UserReposItem.propTypes = {
    repo: PropTypes.object.isRequired,
}
export default UserReposItem
