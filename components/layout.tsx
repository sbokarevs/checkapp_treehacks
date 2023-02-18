import { FC, PropsWithRef } from 'react';
import WithSubnavigation from './navbar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface ILayout {
  children: any;
  style?: any;
}

const Layout: FC<PropsWithRef<ILayout>> = ({children, style}) => {
  return (
    <>
      <Head>
        <title>CheckApp</title>
        <meta name="description" content="CheckApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container} style={style}>
        <WithSubnavigation/>
        {children}
      </main>
    </>
  );
}

export default Layout;