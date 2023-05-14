import React, { FC } from "react";

type NewsItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  newsUrl: string;
  author: string;
  date: string;
  source: string;
};

const NewsItem: FC<NewsItemProps> = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="my-4">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2021/12/nifty_sensex_stocks-770x433.jpg" : imageUrl} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text text-truncate">{description ? description : "There is no description..."}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(date)).replace(/\//g, "-")}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
