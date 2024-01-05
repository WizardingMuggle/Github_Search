const githubReducer = (state,action) =>
{
    switch(action.type)
    {
        case 'GET_USERS':
            return{ 
            ...state,
            users: action.payload,
            loading: false
            }
        case 'SET_LOAD':
            return{
                ...state,
                loading: true
            }
        case 'CLEAR_STATE':
            return {
                ...state,
                users:[],
                loading:false
            } 
        case 'GET_PERSON':
            return {
                ...state,
                loading:false,
                person: action.payload
            }
        case 'GET_REPOS':
            return{
                ...state,
                repos: action.payload,
                loading:false
            }                 
        default:
            return state
    }
}

export default githubReducer