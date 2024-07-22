import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { LinearProgress, Box, Typography } from '@mui/material';

export default function CenteredProgressBar() {
  const [progress, setProgress] = useState(0); // Initial progress value
  const [message, setMessage] = useState('Starting...'); // Initial message

  useEffect(() => {
    // Simulate progress incrementing over time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const newValue = prev + 5;
        // Update message based on progress
        if (newValue < 15) {
          setMessage('Reading the file....');
        } else if (newValue < 30) {
          setMessage('Verify the quality...');
        } else if (newValue < 45) {
          setMessage('Reading the stages...');
        } else if (newValue < 60) {
          setMessage('Extracting the components...');
        } else if (newValue < 75) {
          setMessage('Categorizing the components...');
        } else {
          setMessage('Log saved successfully.');
        }
        return newValue;
      });
    }, 1000); // Adjust the interval as needed

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '50%',
      }}
    >
      <LinearProgress
        sx={{
          width: '50%',
          borderRadius: 5,
        }}
        variant="determinate"
        value={progress}
      />
      <Typography variant="caption" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <CenteredProgressBar />
  </React.StrictMode>,
  document.getElementById('root')
);