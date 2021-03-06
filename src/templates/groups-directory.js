import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PatternSection } from './patterns';

export const GroupsDirectoryTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PatternSection>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </PatternSection>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupsDirectoryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const GroupsDirectory = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      title={post.frontmatter.title}
      pathname={location.pathname}
      description={post.frontmatter.description}
    >
      <GroupsDirectoryTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

GroupsDirectory.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GroupsDirectory;

export const aboutPageQuery = graphql`
  query GroupsDirectory($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
