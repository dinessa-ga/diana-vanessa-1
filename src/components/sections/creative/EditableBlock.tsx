import { useState } from 'react';
import Draggable from 'react-draggable';

interface EditableBlockProps {
  children: React.ReactNode;
  isDraggingEnabled: boolean;
  className?: string;
}

export function EditableBlock({
  children,
  isDraggingEnabled,
  className = '',
}: EditableBlockProps) {
  const [zIndex, setZIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = () => {
    setIsDragging(true);
    setZIndex(999);
  };

  const handleStop = () => {
    setIsDragging(false);
    setZIndex(1);
  };

  const baseClasses = `
    ${isDraggingEnabled ? 'cursor-move select-none' : ''}
    ${isDragging ? 'opacity-90 shadow-2xl' : 'shadow-lg'}
    transition-all duration-200
  `;

  if (!isDraggingEnabled) {
    return <div className={`${className} ${baseClasses}`}>{children}</div>;
  }

  return (
    <Draggable
      disabled={!isDraggingEnabled}
      onStart={handleStart}
      onStop={handleStop}
    >
      <div
        className={`${className} ${baseClasses} group relative`}
        style={{
          zIndex,
          boxSizing: 'border-box',
          resize: 'both',
          overflow: 'auto',
        }}
      >
        {/* Contenido */}
        {children}

        {/* Handle visual para resize (esquina inferior derecha) */}
        {isDraggingEnabled && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500/70 cursor-se-resize hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              borderRight: '2px solid #3b82f6',
              borderBottom: '2px solid #3b82f6',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </Draggable>
  );
}
