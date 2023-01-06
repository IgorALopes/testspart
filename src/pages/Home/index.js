import style from "./style.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Pagination from "../../Components/Pagination/Pagination"
import PaginationSelector from "../../Components/PaginationSelector/PaginationSelector"
import { UserCard } from "../../Components/UserCard/UserCard"

export function Home() {
    
    const [gitHubUsers, setgitHubUsers] = useState([])
    const [itensPerPage, setItensPerPage] = useState(5)
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
        <main className={style.main}>
            <h1>GitHub Users</h1>
            <PaginationSelector
              itensPerPage={itensPerPage}
              setItensPerPage={setItensPerPage}
            />
            <div className={style.cards}>
              {currentUsers.map((currentUser) => {
                return (
                  <Link to={`/${currentUser.login}/details`}>
                    <UserCard
                      login={currentUser.login}
                      id={currentUser.id}
                      avatar_url={currentUser.avatar_url}
                    />
                  </Link>
                );
              })}
            </div>
            <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </main>
      </>
    );
}