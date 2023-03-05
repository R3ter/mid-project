import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

interface IProps {
  startPosition: [number, number, number];
  color?: string;
}
export default ({ startPosition, color = "orange" }: IProps) => {
  const [loading, setLoading] = useState({ loading: true, speed: 1 });
  useEffect(() => {
    setInterval(() => {
      setLoading({ loading: false, speed: 5 });
    }, 10000);
  }, []);
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    const position = mesh.current.position;
    const target = [0, 0, startPosition[2]];
    let direction;
    if (loading.loading) {
      direction = [
        target[0] - position.x,
        target[1] - position.y,
        target[2] - position.z,
      ];
    } else {
      direction = [
        position.x - target[0],
        position.y - target[1],
        position.z - target[2],
      ];
    }

    const distance = Math.sqrt(
      direction[0] ** 2 + direction[1] ** 2 + direction[2] ** 2
    );

    if (distance > 0) {
      const factor = loading.speed * delta * distance;
      mesh.current.position.set(
        position.x + direction[0] * factor,
        position.y + direction[1] * factor,
        position.z + direction[2] * factor
      );
    }
  });
  return (
    <mesh position={startPosition} ref={mesh} scale={0.3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
