import { Route, Routes } from 'react-router';
import MotionHooks from './MotionHooks';
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MotionHooks />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
};

export default RoutesComponent;
