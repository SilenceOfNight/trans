import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Trans</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </Container>
    );
  }
}
