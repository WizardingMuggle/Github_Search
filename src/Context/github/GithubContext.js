import {createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

const GithubContext = createContext();

export const GithubProvider = ({children}) => {

    //initialising the state users toh saari search values hogi and person will be the specific person jiski profile view karenge
    const initialState = {
        users: [],
        repos:[],
        person:{},
        loading: false,
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)


    const getRepos = async (login) =>
    {
        
        const params = new URLSearchParams(
            {
                sort: 'created',
                per_page: 10,
            }
        )

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()

        dispatch( {type:'GET_REPOS' , 
                 payload: data
                })

    }



    const getPerson = async (login) =>
    {
        pushLoad()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json()

        dispatch( {type:'GET_PERSON' , 
                 payload: data
                })

    }
    
    const fetchSearch = async (text) => {
        //Calling of the function to set loading to true
        pushLoad()

        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
    
        const data = await response.json()
        
        dispatch( {type:'GET_USERS' , 
                  payload: data.items
                })
    }
    const pushLoad = () => dispatch( {type:'SET_LOAD'} ) 
    
    const clearState = ()=> dispatch({type:'CLEAR_STATE'})
 

return  <GithubContext.Provider value={{...state,
                                        fetchSearch,
                                        getPerson,
                                        getRepos,
                                        clearState,
                                      }}>

                {children}
            </GithubContext.Provider>
}


export default GithubContext;