import { Canvas } from "@react-three/fiber";
import Loading from "./Loading";

export default () => {
  const boxes: any = [];
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const numBoxesX = 10;
  const numBoxesY = 10;
  const numBoxesZ = 10;
  const totalWidth = boxWidth * numBoxesX;
  const totalHeight = boxHeight * numBoxesY;
  const totalDepth = boxDepth * numBoxesZ;
  let o = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // for (let k = 0; k < 10; k++) {
      const x = i - numBoxesX / 2 + 0.5;
      const y = j - numBoxesY / 2 + 0.5;
      boxes.push(<Loading key={`${x}-${y}-${0}`} startPosition={[x, y, 0]} />);
    }
  }

  return (
    <div>
      <Canvas style={{ height: "100vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {boxes}
      </Canvas>
    </div>
  );
};
