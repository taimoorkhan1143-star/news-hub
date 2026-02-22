import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=${type}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        setArticles(res.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [type]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h2>{type.toUpperCase()} News</h2>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};



export default Category;
