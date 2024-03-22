import Hero from '@/components/hero';
import performanceImg from '../../../public/performance.jpg';

export default function Performance() {
  return (
    <Hero
        imgData={performanceImg}
        imgAlt='performance background'
        title='Performance covered sdf AAAAAAAAAAAAAAAAAAAAAA'
      />
  );
}
