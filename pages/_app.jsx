import '../styles/globals.css';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import 'material-symbols/outlined.css';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default App;
