import Hero from '../components/Hero';
import Button from '../components/Button';

const Home = () => (
  <main>
    <Hero title="Hello" description="The best hero ever">
      <Button className="button">Hello</Button>
    </Hero>
  </main>
);

export default Home;
