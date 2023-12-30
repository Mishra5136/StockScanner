// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Home = () => {
  const handleButtonClick = () => {
    // Handle button click (e.g., navigate to StockGraph page)
    console.log('Button clicked!');
  };

  return (
    <div className="container">
      <div className="jumbotron mt-5 text-center">
        <h1 className="display-4">Welcome to StockScanner</h1>
        <p className="lead">
          Explore stock market data, analyze trends, and make informed investment decisions.
        </p>
        <hr className="my-4" />
        <p>
          Stay ahead of the market with StockScanner's powerful tools and real-time data.
        </p>
        <p className="lead">
          <Link to="/stock-graph">
            <Button label="View Stock Graph" onClick={handleButtonClick} />
          </Link>
        </p>
      </div>

      {/* Stock Market News Section */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Stock Market News</h2>
          <div className="card mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="News Thumbnail"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">News Article 1</h5>
              <p className="card-text">
                A brief description of the news article. Stay updated with the latest market news.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="News Thumbnail"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">News Article 2</h5>
              <p className="card-text">
                Another important news update. Keep yourself informed for better decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mt-5">
        <div className="col-md-4">
          <h3>Real-Time Data</h3>
          <p>Access up-to-date stock market data in real-time to make timely decisions.</p>
        </div>
        <div className="col-md-4">
          <h3>User-Friendly Interface</h3>
          <p>Our user-friendly interface makes it easy for you to navigate and analyze market trends.</p>
        </div>
        <div className="col-md-4">
          <h3>Powerful Tools</h3>
          <p>Utilize powerful tools and indicators to analyze stocks and identify potential opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
