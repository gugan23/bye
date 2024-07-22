import React, { useEffect, useRef } from 'react';

const AsteroidsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context');
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Set background color to green
    ctx.fillStyle = '#20B2AA'; // Green background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const asteroids = [];
    const numAsteroids = 50; // Number of asteroids

    class Asteroid {
      constructor() {
        // Increased size for visibility
        this.radius = Math.random() * 10 + 20; // Radius between 20 and 30
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 1 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        console.log(`Asteroid created at (${this.x}, ${this.y}) with radius ${this.radius}`);
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Reposition asteroid if it goes off screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        console.log(`Asteroid updated to (${this.x}, ${this.y})`);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // Full circle
        ctx.fillStyle = 'yellow'; // Black color for asteroids
        ctx.fill();
        console.log(`Asteroid drawn at (${this.x}, ${this.y}) with radius ${this.radius}`);
      }
    }

    for (let i = 0; i < numAsteroids; i++) {
      asteroids.push(new Asteroid());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      /// Draw background again with green color
    ctx.fillStyle = '#20B2AA'; // Green background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

      asteroids.forEach(asteroid => {
        asteroid.update();
        asteroid.draw();
      });
      
      console.log('Animating...');
      requestAnimationFrame(animate);
    };

    console.log('Starting animation');
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, border: 0 }} />;
};

export default AsteroidsBackground;
