import Hero from '../components/Hero';
import Button from '../components/Button';

const Custom404 = () => (
  <Hero title='404' description={`The content you're looking for doesn't exist. Either it was removed, or you mistyped the link.`}>
    <Button>Go Back</Button>
  </Hero>
);

export default Custom404;
