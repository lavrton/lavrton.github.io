import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../website-config';

interface WrapperProps {
  title: string;
  path: string;
  description?: string;
  image?: any;
  tags?: string[];
  date?: string;
  authorName: string;
  type?: string;
}

const Wrapper: React.SFC<WrapperProps> = ({
  title,
  path,
  description,
  image,
  tags,
  date,
  authorName,
  type,
}) => {
  const width = image ? image.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0] : 0;
  const height = image
    ? String(Math.round(Number(width) / image.childImageSharp.fluid.aspectRatio))
    : 0;
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content={type || 'article'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={config.siteUrl + path} />
      {image && (
        <meta property="og:image" content={config.siteUrl + image.childImageSharp.fluid.src} />
      )}
      {date && <meta property="article:published_time" content={date} />}
      {tags && <meta property="article:tag" content={tags[0]} />}

      <meta property="article:publisher" content={config.twitter} />
      <meta property="article:author" content={config.twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={config.siteUrl + path} />
      {image && (
        <meta name="twitter:image" content={config.siteUrl + image.childImageSharp.fluid.src} />
      )}
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={authorName} />
      <meta name="twitter:label2" content="Filed under" />
      {tags && <meta name="twitter:data2" content={tags[0]} />}
      <meta name="twitter:site" content={`@${config.twitter.split('https://twitter.com/')[1]}`} />
      <meta
        name="twitter:creator"
        content={`@${config.twitter.split('https://twitter.com/')[1]}`}
      />
      {width && <meta property="og:image:width" content={width} />}
      {height && <meta property="og:image:height" content={height} />}
    </Helmet>
  );
};

export default Wrapper;
