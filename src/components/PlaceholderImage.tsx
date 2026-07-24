import React from 'react';
import { cn } from "../utils";

interface PlaceholderImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  filename: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: '16/9' | '4/3' | '1/1' | string;
  className?: string;
}

export function PlaceholderImage({ filename, width = "100%", height = "auto", aspectRatio = '4/3', className, ...props }: PlaceholderImageProps) {
  // Convert filename to point to our generated SVGs if it was webp
  const src = `/${filename.replace('.webp', '.svg')}`;
  
  return (
    <img
      src={src}
      alt={filename.split('.')[0].replace(/-/g, ' ')}
      className={cn("object-cover", className)}
      style={{ width, height, aspectRatio: aspectRatio === '16/9' ? '16/9' : aspectRatio === '4/3' ? '4/3' : '1/1' }}
      {...props}
    />
  );
}
