import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MyProductPage extends Component {
    componentDidMount() {
        jQuery(document).ready(() => {
          'use strict';
    
          let revapi;
          if ($('#rev_slider').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider');
          } else {
            revapi = $('#rev_slider').show().revolution({
              sliderType: 'standard',
              jsFileLocation: 'assets/js/',
              sliderLayout: 'auto',
              dottedOverlay: 'none',
              delay: 15000,
              navigation: {
                mouseScrollNavigation: 'off',
                onHoverStop: 'off',
                touch: {
                  touchenabled: 'on'
                },
                arrows: {
                  style: 'custom',
                  enable: true,
                  hide_onmobile: false,
                  hide_under: 768,
                  hide_onleave: false,
                  tmp: '',
                  left: {
                    h_align: 'left',
                    v_align: 'bottom',
                    h_offset: 63,
                    v_offset: 48
                  },
                  right: {
                    h_align: 'left',
                    v_align: 'bottom',
                    h_offset: 85,
                    v_offset: 48
                  }
                },
                bullets: {
                  enable: false
                }
              },
              responsiveLevels: [1200, 992, 768, 480],
              gridwidth: [870, 679, 640, 480],
              gridheight: [468, 400, 360, 300],
              lazyType: 'smart',
              spinner: 'spinner2',
              parallax: {
                type: 'off'
              },
              debugMode: false
            });
          }
        });
      }
  render() {
    return (
      <div className="container">
        <div className="page-header text-center">
            <h1>My Products</h1>
            <p>List of my products</p>
          </div>{/* End .page-header */}
        <ul className="portfolio-filter text-right">
            <li className="active"><a href="#" data-filter="*">Show All</a></li>
            <li><a href="#" data-filter=".brand">Availiable</a></li>
            <li><a href="#" data-filter=".website">Draft</a></li>
            <li><a href="#" data-filter=".logo">Trash</a></li>
          </ul>
        <div className="portfolio-row">
            <div className="portfolio-container max-col-4">
            <div className="portfolio-item website">
              <figure>
                <img src="/assets/images/portfolio/item1.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item2.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item3.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item4.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item5.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item6.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item7.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item8.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item9.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item1.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item2.jpg" alt="Portfolio Image" />
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
                <img src="/assets/images/portfolio/item3.jpg" alt="Portfolio Image" />
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
  }
}
