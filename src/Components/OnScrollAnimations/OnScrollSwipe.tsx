import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

interface IProps {
  children: React.ReactNode;
  toRight?: boolean;
}
export default ({ children, toRight = false }: IProps) => {
  const { ref, inView } = useInView({ threshold: 0 });

  const slide = useSpring({
    transform: toRight
      ? inView
        ? "translateX(0)"
        : "translateX(-100%)"
      : inView
      ? "translateX(0)"
      : "translateX(100%)",
    config: { duration: 1000 },
    reset: !inView,
  });
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <animated.div style={slide}>{<>{children}</>}</animated.div>
    </div>
  );
};
