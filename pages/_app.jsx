import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'material-symbols/outlined.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default App;
