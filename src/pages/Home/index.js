import { useState, useEffect } from "react"
import axios from "axios"

export function Home() {
    
    const [gitHubUsers, setgitHubUsers] = useState([])
    
    useEffect(() => {
        async function fetchGitHubUsers() {
            let number = 0;
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
    
    return (
      <>
        <h1>GitHub Users</h1>
            {gitHubUsers.map((currentUser) => {
                return (
                  <div>
                    <p>
                      User login:{currentUser.login} / ID:{currentUser.id}
                    </p>
                  </div>
                );
        })}
      </>
    );
}