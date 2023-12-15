import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import useMetadata from '../util/hooks/useMetadata';
import Utils from '../components/Utils';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo';
import NextPrevious from '../components/NextPrevious';
import { gray10 } from '@carbon/colors';

// Component to be shadowed
const FirstLeftText = () => (
  <p>
    Think → <em>Guide</em>
  </p>
);

const FirstRightText = () => (
  <p>
    Build Bonds
    <br />
    This is the guiding ethos behind IBM’s design philosophy and principles.
    This helps us distinguish every element and every experience Designed&nbsp;by&nbsp;IBM.
    <span style={{ paddingTop: "1.25rem", display : "flex" }}>↓</span>
  </p>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="videos/hero-video-min.mp4"
      poster="images/hero-video-poster.jpg"
    />
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor={gray10}
      color={"#191919"}
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: null,
};

const MergedHomepage = ({
  children,
  location,
  pageContext,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords } = frontmatter;
  const { homepageTheme } = useMetadata();

  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      homepage
      theme={homepageTheme}>
      {customProps.Banner}
      {customProps.FirstCallout}
      <Main>{children}</Main>
      {customProps.SecondCallout}
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
      <Utils />
    </Layout>
  );
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default MergedHomepage;
