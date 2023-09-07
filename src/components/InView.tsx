import { AnimatePresence, useInView } from "framer-motion";

const InView = ({
  children,
  containerRef,
}: {
  containerRef: any;
  children: any;
}) => {
  const isVisible = useInView(containerRef, {
    margin: "-40%",
    once: true,
  });

  return <AnimatePresence>{isVisible && children}</AnimatePresence>;
};

export default InView;
