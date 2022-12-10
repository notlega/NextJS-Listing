import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="xl:mx-auto max-w-screen-xl mx-6 bg-base-100 mt-2 space-y-8">
    <Navbar />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
