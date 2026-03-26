import { Route, Routes } from 'react-router';
import MotionHooks from './MotionHooks';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MotionHooks />} />
    </Routes>
  );
};

export default RoutesComponent;
