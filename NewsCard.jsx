const NewsCard = ({ article }) => {
  return (
    <div className="card">
      <img
        src={article.urlToImage || "https://via.placeholder.com/300"}
        alt="news"
      />
      <div className="card-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
