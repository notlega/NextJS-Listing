import PropTypes from 'prop-types';

const Hero = ({ title, description, children }) => (
  <div className="container mx-auto h-screen flex flex-col justify-center items-center self-center space-y-12">
    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-base-content font-black leading-7 md:leading-10">
        {title}
      </h1>
      <p className="mt-5 sm:mt-10 lg:w-10/12 text-base-content font-normal text-center text-sm sm:text-lg">
        {description}
      </p>
    </div>
    <div className="flex justify-center items-center">{children}</div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
