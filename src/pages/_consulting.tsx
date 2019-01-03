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
      <title>Consulting</title>
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
              <p>
                Looking to build a <strong>visual tool</strong> for your product or business?
              </p>
              <p>
                Say, graphical UI for <strong>designing window frames</strong>.
              </p>
              <p>
                Or UI editor for customers to <strong>try on outfits right in the browser</strong>.
              </p>
              <p>
                How about automating your business workflow with a <strong>custom CAD</strong>?
              </p>
              <h2>I can help you with that.</h2>
              <p>My name is Anton Lavrenov. I help companies create graphical web-applications.</p>
              <h3>Things I've made</h3>
              <p>
                I am maintainer of{' '}
                <a href="https://konvajs.github.io/" target="_blank">
                  Konva
                </a>
                . It is an Open-Source 2d canvas graphic library. Also I am making an ecosystem of
                tools that fit better into modern web development flow like{' '}
                <a href="https://konvajs.github.io/docs/react" target="_blank">
                  react-konva
                </a>
                . You can find more on{' '}
                <a href="https://github.com/lavrton" target="_blank">
                  GitHub
                </a>
                .
              </p>
              <h2> Kind words</h2>
              <blockquote>
                <p>
                  Anton is a terrific developer. Anyone who is able to create, maintain and support
                  an open-source project like KonvaJS is a mindful and caring developer. We have
                  been using KonvaJS in our BrikL app from the beginning and enjoyed having such a
                  reliable and feature-rich framework as part of our platform. Anton has been very
                  helpful guiding us in the process, answering questions and support us.
                </p>
                Tobias Meixner - Co-Founder & CTO, BrikL (B2B Fashion Design Platform)
              </blockquote>
              <h2>About</h2>
              <p>
                I’m an expert in building domain-specific visual interfaces for the web. I’ve
                developed solutions for fashion design, business automation, and engineering. I
                celebrate the difficulties of each field and work closely with my clients on the
                best possible solution. Sounds interesting? Get in touch!
              </p>
              <form
                action="https://mailthis.to/anton@lavrton.com"
                method="POST"
                style={{
                  textAlign: 'center',
                }}
              >
                <fieldset>
                  <legend>Let's talk</legend>
                  <div className="input-group fluid">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="input-group fluid">
                    <input type="email" name="_replyto" placeholder="Email" />
                  </div>
                  <div className="input-group fluid">
                    <textarea
                      name="message"
                      placeholder="What do you want to create? Why do you need it?"
                      style={{ width: '100%' }}
                      rows={4}
                    />
                  </div>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Do you need a help from Anton Lavrenov?"
                  />
                  <input type="hidden" name="_next" value="https://lavrton.com/sent" />
                  <input type="hidden" name="_after" value="https://lavrton.com/sent" />
                  <input type="submit" value="Send" />
                </fieldset>
              </form>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Consulting;
