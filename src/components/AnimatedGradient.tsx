
import React, { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  colors?: string[];
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ 
  colors = ['#E5DEFF', '#F9F9F9', '#F1F0FB'], 
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const colorRgb = colors.map(color => {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return [r, g, b];
    });
    
    const points = Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      color: colorRgb[Math.floor(Math.random() * colorRgb.length)]
    }));
    
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      });
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 1.5
      );
      
      // Add color stops
      points.forEach((point, i) => {
        const [r, g, b] = point.color;
        const factor = i / (points.length - 1);
        gradient.addColorStop(factor, `rgba(${r}, ${g}, ${b}, 0.5)`);
      });
      
      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colors]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-40 ${className}`}
    />
  );
};

export default AnimatedGradient;
