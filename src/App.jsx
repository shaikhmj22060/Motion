import { motion } from "motion/react";
import Button from "./Button";
import Card from "./Card";
import Container from "./Utility/Container";
const App = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0c0a09 0.2px, transparent 1.1px)`,
        backgroundSize: "10px 10px",
        backgroundRepeat: "repeat",
      }}
    >
      <Button />
      <Container className={'h-screen w-full p-12'}>
        <Card />
      </Container>
    </motion.div>
  );
};

export default App;
