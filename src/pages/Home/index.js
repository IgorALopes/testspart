import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Pagination from "../../Components/Pagination"
import PaginationSelector from "../../Components/PaginationSelector"

export function Home() {
    
    const [gitHubUsers, setgitHubUsers] = useState([])
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    
    const pages = Math.ceil(gitHubUsers.length / itensPerPage);
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentUsers = gitHubUsers.slice(startIndex, endIndex)

    let number = 0
    
    useEffect(() => {
        async function fetchGitHubUsers() {
            try {
                const response = await axios.get(
                  `https://api.github.com/users?since=${number}`
                );

                setgitHubUsers([...response.data])

            } catch (error) {
                console.log(error)
            }
        }
        fetchGitHubUsers()
    }, [])

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])
    
    return (
      <>
        <h1>GitHub Users</h1>
        {currentUsers.map((currentUser) => {
          return (
            <Link to={`/${currentUser.login}/details`}>
              <p>
                User login:{currentUser.login} / ID:{currentUser.id}
              </p>
            </Link>
          );
        })}
        <PaginationSelector
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </>
    );
}