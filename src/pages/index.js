import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Mrinal from '../img/mrinal02.jpg';

const IntroWrapper = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }

  .intro {
    padding: 10px 20px;
    max-width: 500px;
  }
  .image {
    height: 350px;
    width: 350px;
    margin: 0 30px;
    background-color: #f9f9f9;

    @media (max-width: 900px) {
      height: 300px;
      min-width: 300px;
    }
    @media (max-width: 700px) {
      margin: 20px auto;
    }
  }
`;

const BlogWrapper = styled.div`
  max-width: 960px;
  margin: 80px auto;
  padding: 30px;
  @media (max-width: 700px) {
    margin: 30px auto;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <section className="section">
          <div classname="container">
            <IntroWrapper>
              <div className="intro">
                <h1 className="title is-3 has-text-weight-normal is-spaced">
                  My name is{' '}
                  <span className="has-text-weight-bold">Mrinal Sur</span>
                  <span role="img" className="emoji" aria-label="emoji">
                    {'   '}
                    👋
                  </span>
                  <br />
                  <br />
                  <p className=" is-size-5">
                    I am an <Link to="/about">automotive professional</Link>{' '}
                    with diversified experience. This is an experiment to keep
                    myself updated and connected with the latest sphere of
                    technology. I believe, my presence will add value to your
                    requirement.
                    <br />
                    <br />
                    This is a perfect medium to stay connected to you as well,
                    ...anytime ...anywhere.
                    <br />
                    <br />
                    <Link
                      to="/contact"
                      className="has-text-weight-semibold is-size-6"
                    >
                      <span role="img" className="emoji" aria-label="emoji">
                        {'   '}
                        📥
                        {'   '}
                      </span>
                      Contact me here
                    </Link>
                    <br />
                  </p>
                </h1>
              </div>
              <div className="image">
                <img alt="Mrinal Sur" src={Mrinal} />
              </div>
            </IntroWrapper>
          </div>
        </section>

        <BlogWrapper>
          <h1 className="subtitle is-4 has-text-weight-semibold">
            Some stuff I've written
          </h1>
          <br />
          {posts.map(({ node: post }) => (
            <div className="content" key={post.id}>
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />

                <Link className="is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
                <br />
              </p>
            </div>
          ))}
          <br />
          <Link to="/blog">
            <h1 className="button is-size-5">Read more posts</h1>
          </Link>
        </BlogWrapper>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
