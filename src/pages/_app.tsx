import '/src/app/style/global.scss';
import { ComponentProps, ComponentType } from 'react';

type Props = {
  Component: ComponentType,
  pageProps: ComponentProps<any>
}

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;