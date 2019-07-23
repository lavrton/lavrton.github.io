import { graphql } from 'gatsby';
import React from 'react';
import styled, { css } from 'react-emotion';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  AuthorProfileImage,
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteHeader,
  SiteHeaderContent,
  SiteTitle,
  SiteMain,
  SocialLink,
} from '../styles/shared';
import { PageContext } from './post';
import Facebook from '../components/icons/facebook';
import Helmet from 'react-helmet';
import config from '../website-config';
import Website from '../components/icons/website';
import Twitter from '../components/icons/twitter';

const HiddenMobile = css`
  @media (max-width: 500px) {
    display: none;
  }
`;

const AuthorMeta = styled.div`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  font-family: Georgia, serif;
  font-style: italic;
`;

const AuthorBio = styled.h2`
  z-index: 10;
  flex-shrink: 0;
  margin: 5px 0 10px 0;
  max-width: 600px;
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 300;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

const Bull = styled.span`
  display: inline-block;
  margin: 0 12px;
  opacity: 0.5;
`;

const AuthorProfileBioImage = css`
  z-index: 10;
  flex-shrink: 0;
  margin: 0 0 20px 0;
  width: 100px;
  height: 100px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 0 6px;
`;

interface AuthorTemplateProps {
  pathContext: {
    slug: string;
  };
  pageContext: {
    author: string;
  };
  data: {
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: PageContext;
      }[];
    };
    authorYaml: {
      id: string;
      website?: string;
      twitter?: string;
      facebook?: string;
      location?: string;
      profile_image?: {
        childImageSharp: {
          fluid: any;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

const Author: React.SFC<AuthorTemplateProps> = props => {
  const author = props.data.authorYaml;
  const { edges, totalCount } = props.data.allMarkdownRemark;

  return (
    <IndexLayout>
      <Helmet>
        <title>
          {author.id} - {config.title}
        </title>
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${author.id} - ${config.title}`} />
        <meta property="og:url" content={config.siteUrl + props.pathContext.slug} />
        <meta property="article:publisher" content="https://www.facebook.com/lavrton" />
        <meta property="article:author" content="https://www.facebook.com/lavrton" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${author.id} - ${config.title}`} />
        <meta name="twitter:url" content={config.siteUrl + props.pathContext.slug} />
        <meta name="twitter:site" content={`@${config.twitter.split('https://twitter.com/')[0]}`} />
        <meta
          name="twitter:creator"
          content={`@${config.twitter.split('https://twitter.com/')[0]}`}
        />
      </Helmet>
      <Wrapper>
        <header
          className={`${SiteHeader} ${outer} no-cover`}
          style={{
            backgroundImage: author.profile_image
              ? `url(${author.profile_image.childImageSharp.fluid.src})`
              : '',
          }}
        >
          <div className={`${inner}`}>
            <SiteNav isHome={false} />
            <SiteHeaderContent>
              <img
                className={`${AuthorProfileBioImage} ${AuthorProfileImage}`}
                src={props.data.authorYaml.avatar.childImageSharp.fluid.src}
                alt={author.id}
              />
              <SiteTitle>{author.id}</SiteTitle>
              {author.bio && <AuthorBio>{author.bio}</AuthorBio>}
              <AuthorMeta>
                {author.location && (
                  <div className={`${HiddenMobile}`}>
                    {author.location} <Bull>&bull;</Bull>
                  </div>
                )}
                <div className={`${HiddenMobile}`}>
                  {totalCount > 1 && `${totalCount} posts`}
                  {totalCount === 1 && `1 post`}
                  {totalCount === 0 && `No posts`} <Bull>•</Bull>
                </div>
                {author.website && (
                  <div>
                    <a
                      className={`${SocialLink} social-link-wb`}
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Website />
                    </a>
                  </div>
                )}
                {author.twitter && (
                  <a
                    className={`${SocialLink} social-link-tw`}
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                )}
                {author.facebook && (
                  <a
                    className={`${SocialLink} social-link-fb`}
                    href={`https://www.facebook.com/${author.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                )}
              </AuthorMeta>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" className={`${SiteMain} ${outer}`}>
          <div className={`${inner}`}>
            <div className={`${PostFeed} ${PostFeedRaise}`}>
              {edges.map(({ node }) => {
                if (node.frontmatter.author && node.frontmatter.author.id === author.id) {
                  return <PostCard key={node.fields.slug} post={node} />;
                }
                return null;
              })}
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Author;

export const pageQuery = graphql`
  query($author: String) {
    authorYaml(id: { eq: $author }) {
      id
      website
      twitter
      bio
      facebook
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 100) {
                      src
                    }
                  }
                }
              }
            }
          }
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
