import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  target,
  duration = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(easeOutProgress * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  const formattedValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString('en-IN');

  return (
    <span ref={elementRef} className={className} aria-live="polite">
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};
