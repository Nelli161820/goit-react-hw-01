import css from "./Profile.module.css";


export default function Profile({ image, name, tag, location, stats })
{
     
    return (
<div className={css.container}>
      <div>
        <img
          src={image}
          alt="User avatar" width={250} height={250}
        />
          <p className={css.textName}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{location}</p>
      </div>
  
      <ul className={css.block}>
        <li className={css.list}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.status}>Views</span>
          <span className={css.status}>{stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.status}>Likes</span>
          <span className={css.status}>{stats.likes}</span>
        </li>
      </ul>
    </div>
    ); 
}

