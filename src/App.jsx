import { motion } from 'motion/react';
import Button from './Button';
import Card from './Card';
import Variants from './Variants';
const App = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0c0a09 0.2px, transparent 1.1px)`,
        backgroundSize: '10px 10px',
        backgroundRepeat: 'repeat',
      }}
    >
      <Button />

      <Card />
      <Variants />
    </motion.div>
  );
};

export default App;
