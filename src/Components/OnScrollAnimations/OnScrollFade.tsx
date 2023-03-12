import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

interface IProps {
  children: React.ReactNode;
}
export default ({ children }: IProps) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { duration: 1000 },
    reset: !inView,
  });

  return (
    <div ref={ref}>
      <animated.div style={fade}>{<>{children}</>}</animated.div>
    </div>
  );
};
