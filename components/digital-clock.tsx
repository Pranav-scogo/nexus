"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";

export function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="w-fit">
      <CardContent className="p-4">
        <div className="text-center">
          <div className="text-2xl font-mono font-bold tracking-wide">
            {formatTime(time)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {formatDate(time)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 