import style from "./style.module.css";

export function UserCard(props) {
  const { login, id, avatar_url } = props;

  return (
    
    <div className={style.card}>
        <div className={style.avatar}>
            <img src={avatar_url} alt="User avatar" />
        </div>
        <div className={style.identification}>
            <h1>{login}</h1>
            <h2>ID: {id}</h2>
        </div>
    </div>
    
  );
}
