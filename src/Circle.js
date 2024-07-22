import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import CheckCircle icon

// Individual Progress Bar with Label
function CircularProgressWithLabel({ value }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {value >= 100 ? (
        <CheckCircleIcon 
          sx={{ 
            color: 'success.main', 
            fontSize: 40 // Adjust the size as needed
          }} 
        />
      ) : (
        <>
          <CircularProgress variant="determinate" value={value} />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

// Main Component to Render Progress Bars
export default function CircularProgressContainer() {
  const [progress, setProgress] = React.useState(Array(6).fill(0));

  React.useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        // Copy current progress state
        const newProgress = [...prevProgress];

        // Increment progress for the current index
        if (newProgress[currentIndex] < 100) {
          newProgress[currentIndex] += 35;
        } else {
          // Move to the next progress bar if current one is complete
          currentIndex = Math.min(currentIndex + 1, newProgress.length - 1);
        }

        // Stop the interval when all bars are complete
        if (currentIndex >= newProgress.length - 1 && newProgress[currentIndex] >= 100) {
          clearInterval(timer);
        }

        return newProgress;
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed', // Fixes the container to the viewport
        top: 0,            // Aligns the container to the top of the viewport
        left: '40%',       // Centers the container horizontally
        transform: 'translateX(-50%)', // Adjust for exact centering
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',      // Full width of the viewport
        maxWidth: '500px',  // Maximum width for the container
        padding: '10px',    // Padding for spacing
        boxSizing: 'border-box', // Include padding in width calculation
      }}
    >
      {progress.map((value, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <CircularProgressWithLabel value={value} />
        </Box>
      ))}
    </Box>
  );
}
