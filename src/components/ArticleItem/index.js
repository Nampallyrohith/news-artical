import { Link } from "react-router-dom";

const ArticleItem = (props) => {
  const { eachItem } = props;
  const { id, title, imageUrl } = eachItem;
  return (
    <li>
      <Link to={`/${id}`}>
        <div>
          <img src={imageUrl} alt={title} className="w-25" />
          <h1>{title}</h1>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
