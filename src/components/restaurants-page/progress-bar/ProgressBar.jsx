import { useProgress } from "./useProgress";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      style={{
        width: progress,
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        backgroundColor: "green",
      }}
    />
  );
};
