/* eslint-disable jsx-a11y/label-has-for  */
/* eslint-disable react/prop-types */
import React from 'react';

const ViewLiveYardsale = ({ products, yardsale }) => (
  <div className="container hide-sidebar-display">
    {/* SHOW YARDSALE PRODUCTS IF YARDSALE IS ACTIVE */}
    <div className="page-header text-center">
      <h1>{yardsale.name} Yard sale</h1>
    </div>{/* End .page-header */}
    <div className="portfolio-row">
      <div className="portfolio-container max-col-4">
        <div className="portfolio-item website">
          <figure>
            <img src="/assets/images/portfolio/item1.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">the writer</a></h3>
            <div className="portfolio-tags">
              <a href="#">website</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item logo">
          <figure>
            <img src="/assets/images/portfolio/item2.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">house logo</a></h3>
            <div className="portfolio-tags">
              <a href="#">logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item logo">
          <figure>
            <img src="/assets/images/portfolio/item3.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">fly away</a></h3>
            <div className="portfolio-tags">
              <a href="#">Logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item brand">
          <figure>
            <img src="/assets/images/portfolio/item4.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">runner campaing</a></h3>
            <div className="portfolio-tags">
              <a href="#">brand</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item website">
          <figure>
            <img src="/assets/images/portfolio/item5.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">real estate</a></h3>
            <div className="portfolio-tags">
              <a href="#">website</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item brand">
          <figure>
            <img src="/assets/images/portfolio/item6.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">music trends</a></h3>
            <div className="portfolio-tags">
              <a href="#">brand</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item website">
          <figure>
            <img src="/assets/images/portfolio/item7.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">home office</a></h3>
            <div className="portfolio-tags">
              <a href="#">website</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item logo">
          <figure>
            <img src="/assets/images/portfolio/item8.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">sounds of silence</a></h3>
            <div className="portfolio-tags">
              <a href="#">logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item logo">
          <figure>
            <img src="/assets/images/portfolio/item9.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">globe icon</a></h3>
            <div className="portfolio-tags">
              <a href="#">Logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item website">
          <figure>
            <img src="/assets/images/portfolio/item1.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">the writer</a></h3>
            <div className="portfolio-tags">
              <a href="#">website</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item brand logo">
          <figure>
            <img src="/assets/images/portfolio/item2.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">house logo</a></h3>
            <div className="portfolio-tags">
              <a href="#">logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
        <div className="portfolio-item brand logo">
          <figure>
            <img src="/assets/images/portfolio/item3.jpg" alt="Portfolio" />
            <a href="single-portfolio.html" className="btn-detail" role="button">View Details</a>
          </figure>
          <div className="portfolio-meta">
            <h3 className="portfolio-title"><a href="single-portfolio.html" title="Portfolio name">fly away</a></h3>
            <div className="portfolio-tags">
              <a href="#">Logo</a>
            </div>{/* End .portfolio-tags */}
          </div>{/* End .portfolio-meta */}
        </div>{/* End portfolio-item */}
      </div>{/* End .portfolio-container */}
    </div>{/* End .portfolio-row */}
    <nav aria-label="Page Navigation">
      <ul className="pagination">
        <li><a href="#">1</a></li>
        <li className="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li className="dots"><span>...</span></li>
        <li><a href="#">18</a></li>
      </ul>
    </nav>
  </div>
);

export default ViewLiveYardsale;
