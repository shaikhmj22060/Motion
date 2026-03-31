import { Route, Routes } from 'react-router';
import MotionHooks from './MotionHooks';
import App from './App';
import LayoutMotion from './LayoutMotion';
import AnimateSequence from './AnimateSequence';
import Courasoule from './Courasoule';
import Text from './Text';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MotionHooks />} />
      <Route path="/app" element={<App />} />
      <Route path="/layout" element={<LayoutMotion />} />
      <Route path="/animateSequence" element={<AnimateSequence />} />
      <Route path="/courasole" element={<Courasoule />} />
      <Route path="/text" element={<Text />} />
    </Routes>
  );
};

export default RoutesComponent;
