import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import style from "./style.module.css"

export function UserDetails() {
  const { userLogin } = useParams();
  const [gitHubUser, setGitHubUser] = useState([]);
  const userCreationDate = gitHubUser.created_at; //tried gitHubUser.created_at.slice(0, 10) to show only the date and not the hours, but the page stopped rendering.

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${userLogin}`
        );
        setGitHubUser({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchGitHubUser();
  }, []);

  return (
    <main className={style.main}>
      <div className={style.details}>
        <h1>GitHub user Details</h1>
        <div className={style.avatar}>
          <img src={gitHubUser.avatar_url} alt="User avatar" />
        </div>
        <h2>{gitHubUser.login}</h2>
        <p>id: {gitHubUser.id}</p>
        <p>
          Created at: <br></br>
          {userCreationDate}
        </p>
        <p>
          <a href={gitHubUser.html_url} target="_blank" rel="noreferrer">
            {gitHubUser.login}'s GitHub Profile
          </a>
        </p>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    </main>
  );
}