import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  componentDidMount() {
    jQuery(document).ready(() => {
      

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
      <div>
        <div className="col-md-9 col-md-push-3">
          <div
            id="rev_slider_wrapper"
            className="slider-container rev_slider_wrapper fullwidthbanner-container"
          >
            <div
              id="rev_slider"
              className="rev_slider fullwidthabanner"
              style={{ display: 'none' }}
            >
              <ul>
                        {/* SLIDE  */}
                        <li data-transition="fade">
                          {/* Background Image */}
                          <img
                            src="assets/images/transparent.png"
                            className="rev-slidebg"
                            style={{ backgroundColor: '#eeebe7' }}
                            alt="Slider bg"
                          />
                          <div
                            className="tp-caption tp-resizeme rs-parallaxlevel-0 text-primary"
                            data-x="['left','left','left','left']"
                            data-hoffset="['68','50','45','30']"
                            data-y="['center','center','center','center']"
                            data-voffset="['-44','-36','-30','-24']"
                            data-fontsize="['26','24','22','20']"
                            data-fontweight={400}
                            data-lineheight="['36','34','32','30']"
                            data-width="none"
                            data-height="none"
                            data-whitespace="nowrap"
                            data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-responsive_offset="on"
                            data-elementdelay={0}
                            style={{
                              zIndex: 5,
                              whiteSpace: 'nowrap',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontFamily: '"Oswald", sans-serif'
                            }}
                          >
                            Andela Marketplace<br /> for Epic products
                          </div>
                          <Link
                            className="tp-caption tp-resizeme rs-parallaxlevel-0"
                            data-x="['left','left','left','left']"
                            data-hoffset="['68','50','45','30']"
                            data-y="['center','center','center','center']"
                            data-voffset="['40','36','32','30']"
                            data-width="none"
                            data-height="none"
                            data-fontsize="['13','12','11','10']"
                            data-fontweight={400}
                            data-lineheight="['21','20','18','16']"
                            data-color="#7e6f5c"
                            data-whitespace="nowrap"
                            data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-responsive_offset="on"
                            style={{
                              zIndex: 7,
                              letterSpacing: '0.075em',
                              textTransform: 'uppercase',
                              textDecoration: 'underline'
                            }}
                            to="/products"
                          >
                            Shop Now
                          </Link>
                          <div
                            className="tp-caption tp-resizeme"
                            data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-type="image"
                            data-x="['right','right','right','right']"
                            data-hoffset="['110','90','80','60']"
                            data-y="['bottom','bottom','bottom','bottom']"
                            data-voffset="['0','0','0','0']"
                            data-width="none"
                            data-height="none"
                          >
                            <img
                              src="assets/images/slider/item1.png"
                              alt="Item"
                              width={452}
                              height={428}
                              data-ww="['452px', '380px', '300px', '240px']"
                              data-hh="['428px', '359px', '331px', '227px']"
                            />
                          </div>
                        </li>
                        {/* SLIDE  */}
                        <li data-transition="fade">
                          {/* Background Image */}
                          <img
                            src="assets/images/transparent.png"
                            className="rev-slidebg"
                            style={{ backgroundColor: '#eeebe7' }}
                            alt="Slider bg"
                          />
                          <div
                            className="tp-caption tp-resizeme rs-parallaxlevel-0 text-primary"
                            data-x="['left','left','left','left']"
                            data-hoffset="['68','50','45','30']"
                            data-y="['center','center','center','center']"
                            data-voffset="['-44','-36','-30','-24']"
                            data-fontsize="['26','24','22','20']"
                            data-fontweight={400}
                            data-lineheight="['36','34','32','30']"
                            data-width="none"
                            data-height="none"
                            data-whitespace="nowrap"
                            data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-responsive_offset="on"
                            data-elementdelay={0}
                            style={{
                              zIndex: 5,
                              whiteSpace: 'nowrap',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontFamily: '"Oswald", sans-serif'
                            }}
                          >
                            Best place to buy<br /> Epic Product
                          </div>
                          <Link
                            className="tp-caption tp-resizeme rs-parallaxlevel-0"
                            data-x="['left','left','left','left']"
                            data-hoffset="['68','50','45','30']"
                            data-y="['center','center','center','center']"
                            data-voffset="['40','36','32','30']"
                            data-width="none"
                            data-height="none"
                            data-fontsize="['13','12','11','10']"
                            data-fontweight={400}
                            data-lineheight="['21','20','18','16']"
                            data-color="#7e6f5c"
                            data-whitespace="nowrap"
                            data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-responsive_offset="on"
                            style={{
                              zIndex: 7,
                              letterSpacing: '0.075em',
                              textTransform: 'uppercase',
                              textDecoration: 'underline'
                            }}
                            to="/products"
                          >
                            Shop Now
                          </Link>
                          <div
                            className="tp-caption tp-resizeme"
                            data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:600,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-type="image"
                            data-x="['right','right','right','right']"
                            data-hoffset="['140','120','100','80']"
                            data-y="['bottom','bottom','bottom','bottom']"
                            data-voffset="['0','0','0','0']"
                            data-width="none"
                            data-height="none"
                          >
                            <img
                              src="assets/images/slider/item2.png"
                              alt="Item"
                              width={365}
                              height={454}
                              data-ww="['365px', '300px', '240px', '200px']"
                              data-hh="['454px', '373px', '298px', '248px']"
                            />
                          </div>
                        </li>
                      </ul>
              <div
                        className="tp-bannertimer tp-bottom"
                        style={{
                          display: 'none',
                          height: 2,
                          backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }}
                      />
            </div>
            {/* End #rev_slider */}
          </div>
          {/* END REVOLUTION SLIDER */}
          {/* End .owl-data-carousel */}
          <div className="mb30 mb10-xs" />
          {/* margin */}
          <div className="banner banner-fullwidth">
            <div className="banner-content-wrapper">
              <h3>Do you Want to Sell?</h3>
              <p>Start selling</p>
              <div className="banner-price">By clicking</div>
              <Link to="/products/create">Sell Now</Link>
            </div>
            {/* End .banner-content-wrapper */}
            <div className="banner-image-wrapper">
              <a href="#">
                        <img
                          src="assets/images/banners/banner-full.jpg"
                          alt="Banner"
                        />
                      </a>
            </div>
            {/* End .banner-image-wrapper */}
          </div>
          {/* end .banner */}

          <div className="mb50 visible-sm visible-xs" />
          {/* margin */}
        </div>
      </div>
    );
  }
}