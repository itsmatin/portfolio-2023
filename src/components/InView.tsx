import { AnimatePresence, useInView } from "framer-motion";

const InView = ({
  children,
  containerRef,
}: {
  containerRef: any;
  children: any;
}) => {
  const isVisible = useInView(containerRef, {
    margin: "-30%",
    once: true,
  });

  return <AnimatePresence>{isVisible && children}</AnimatePresence>;
};

export default InView;
