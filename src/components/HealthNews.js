import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HealthNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=73cfb6ba6c3342528a487b22f2b3f16d"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .news-card {
          border-radius: 15px;
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .news-btn {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          border: none;
          font-weight: bold;
          color: white !important;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .news-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .card-text {
          font-size: 0.95rem;
        }
      `}</style>

      <h2 className="mb-4 text-primary">📰 Latest Health News</h2>
      <div className="row">
        {articles.map((a, i) => (
          <div key={i} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm news-card">
              {a.urlToImage && (
                <img
                  src={a.urlToImage}
                  className="card-img-top"
                  alt="news"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">
                  {a.description
                    ? a.description
                    : "No description available."}
                </p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn news-btn mt-auto"
                >
                  Read More
                </a>
              </div>
              <div className="card-footer text-muted">
                {a.author ? a.author : "Unknown"} |{" "}
                {new Date(a.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
