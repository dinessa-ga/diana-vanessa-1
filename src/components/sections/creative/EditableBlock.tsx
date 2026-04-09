import { useState } from 'react';
import Draggable from 'react-draggable';
import { Trash2 } from 'lucide-react';

interface EditableBlockProps {
  children: React.ReactNode;
  isDraggingEnabled: boolean;
  className?: string;
  onDelete?: () => void;
}

export function EditableBlock({
  children,
  isDraggingEnabled,
  className = '',
  onDelete,
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

        {/* Botón eliminar (esquina superior derecha) */}
        {isDraggingEnabled && onDelete && (
          <button
            onClick={onDelete}
            className="absolute top-2 right-2 p-1.5 bg-red-500/80 hover:bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50"
            title="Eliminar elemento"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </Draggable>
  );
}
