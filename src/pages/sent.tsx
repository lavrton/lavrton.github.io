import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
`;

const ConsultingTemplate = css`
  .form {
    background: #eee;
    border: 0.0625rem solid #c9c9c9;
    margin: 0.5rem;
    padding: 0.75rem 0.5rem 1.125rem;
  }

  fieldset {
    border: 0.0625rem solid #d0d0d0;
    border-radius: 0.125rem;
    margin: 0.125rem;
    padding: 0.5rem;
  }

  .input-group.fluid {
    display: -webkit-box;
    -webkit-box-pack: justify;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .input-group {
    display: inline-block;
  }
  .input-group.fluid > input {
    -webkit-box-flex: 1;
    max-width: 100%;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-basis: 0px;
    flex-basis: 0px;
  }
  input:not([type]),
  [type='text'],
  [type='email'],
  [type='number'],
  [type='search'],
  [type='password'],
  [type='url'],
  [type='tel'],
  textarea,
  select {
    box-sizing: border-box;
    background: #fafafa;
    color: #212121;
    border: 0.0625rem solid #c9c9c9;
    border-radius: 0.125rem;
    margin: 0.25rem;
    padding: 0.5rem 0.75rem;
  }
`;

const Consulting: React.SFC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer} ${ConsultingTemplate}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>{/* <PostFullTitle>About</PostFullTitle> */}</PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>Your message is sent. I will write you back as soon as possible.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Consulting;
