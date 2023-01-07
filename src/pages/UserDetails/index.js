import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import style from "./style.module.css"

export function UserDetails() {
  const [gitHubUser, setGitHubUser] = useState([]);
  const [gitHubUserRepos, setGitHubUserRepos] = useState([]);
  const userCreationDate = gitHubUser.created_at; //tried gitHubUser.created_at.slice(0, 10) to show only the date and not the hours, but the page stopped rendering.
  const { login } = useParams();

  useEffect(() => {
    async function fetchGitHubUser() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${login}`
        );
        setGitHubUser({...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchGitHubUser();
  }, []);

  useEffect(() => {
    async function fetchGitHubUserRepos() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${login}/repos`
        );
        setGitHubUserRepos([ ...response.data ]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGitHubUserRepos();
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
        <h3>Repositories:</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>Repository</th>
            <th>url</th>
          </tr>
          {console.log(gitHubUserRepos)}
          {gitHubUserRepos.map((currentRepo) => {
            return (
              <tr>
                <td>{currentRepo.id}</td>
                <td>{currentRepo.name}</td>
                <td>
                  <a
                    href={currentRepo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {currentRepo.html_url}
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    </main>
  );
}