import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { breakpoints } from '@carbon/layout/es';
import { ArrowRight } from '@carbon/icons-react';
import VideoInternal from '../VideoInternal';

import '../../styles/Grid.module.scss';

const { prefix } = settings;

class HomepageVideo extends Component {
  state = {
    loop: true,
  };

  static defaultProps = {
    poster: 'images/hero-video-poster.jpg',
    src: 'videos/hero-video.mp4',
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { loop } = this.state;

    if (window.matchMedia(`(max-width: ${breakpoints.md.width})`).matches) {
      if (loop) {
        this.setState({
          loop: false,
        });
      }
    } else if (!loop) {
      this.setState({
        loop: true,
      });
    }
  };

  render() {
    const { loop } = this.state;
    const { src, poster } = this.props;

    return (
      <div className={`${prefix}--homepage-video-container`}>
        <div className={`${prefix}--homepage-video-wrapper`}>
          <VideoInternal
            loop={loop}
            poster={poster}
            src={src}
            overlay
            cornerPlayButton>
            <div
              className={`${prefix}--homepage-video-overlay-content ${prefix}--grid`}>
              <div
                className={`${prefix}--homepage-video-container-cta ${prefix}--row`}>
                <Link
                  className={`${prefix}--homepage-video-cta ${prefix}--col-md-2 ${prefix}--col-lg-4`}
                  to="/philosophy/pov/">
                  <p className={`${prefix}--type-expressive-heading-03`}>
                    Philosophy
                  </p>
                  <div className={`${prefix}--homepage-video-arrow-container`}>
                    <ArrowRight size={20} className={`${prefix}--homepage-video-cta-icon`} />
                  </div>
                </Link>
                <Link
                  className={`${prefix}--homepage-video-cta ${prefix}--col-md-2 ${prefix}--col-lg-4`}
                  to="/gallery/">
                  <p className={`${prefix}--type-expressive-heading-03`}>
                    Gallery
                  </p>
                  <div className={`${prefix}--homepage-video-arrow-container`}>
                    <ArrowRight size={20} className={`${prefix}--homepage-video-cta-icon`} />
                  </div>
                </Link>
              </div>
            </div>
          </VideoInternal>
        </div>
      </div>
    );
  }
}

HomepageVideo.propTypes = {
  // url to video
  src: PropTypes.string,

  // url to poster
  poster: PropTypes.string,
};

export default HomepageVideo;
