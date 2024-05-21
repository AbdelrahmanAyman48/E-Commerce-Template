
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

// Common Loading Component
export default function Loading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress variant="determinate" value={progress} color="secondary" size={64} />
    </div>
  );
}

