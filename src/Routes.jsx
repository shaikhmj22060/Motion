import { Route, Routes } from 'react-router';
import MotionHooks from './MotionHooks';
import App from './App';
import LayoutMotion from './LayoutMotion';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MotionHooks />} />
      <Route path="/app" element={<App />} />
      <Route path="/layout" element={<LayoutMotion />} />
    </Routes>
  );
};

export default RoutesComponent;
