import Headline from './components/Headline';
import Gallery from './components/Gallery';
import Presents from './components/Presents';
import Footer from './components/Footer';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Headline />
      <Gallery />
      <Presents />
      <Footer />
    </Container>
  );
}