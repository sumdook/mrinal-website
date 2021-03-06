import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta
            name="google-site-verification"
            content="bwgu2B9wxoxPm98BKypAxfiB76F-GSrIs7GsPmmRYcY"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/logoi.jpg" />
          <link
            rel="icon"
            type="image/png"
            href="/img/logoi.jpg"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/logoi.jpg"
            sizes="16x16"
          />

          <link rel="mask-icon" href="/img/logoi.jpg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="Personal Website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="https://www.mrinalsur.com" />
          <meta property="og:image" content="/img/logoi.jpg" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
);

export default TemplateWrapper;
