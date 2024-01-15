import React, { useState, ChangeEvent } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface HorizontalSliderProps {
  onValueChange: (newValue: number) => void;
  valorInicialS: number;
}

export default function HorizontalSlider({ onValueChange, valorInicialS }: HorizontalSliderProps) {
  const [value, setValue] = useState(valorInicialS);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    onValueChange(newValue as number);
  };

  return (
    <Box sx={{ width: 250, display: 'flex', alignItems: 'center' }}>
      <Slider
        orientation="horizontal"
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        aria-labelledby="horizontal-slider"
        min={0}
        max={100}
      />
    </Box>
  );
}
