import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container mx-auto">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
