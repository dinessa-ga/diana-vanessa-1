import { Download, Maximize2, Minimize2 } from 'lucide-react';

interface ToolbarProps {
  orientation: 'portrait' | 'landscape';
  onOrientationChange: (orientation: 'portrait' | 'landscape') => void;
  onDownloadPDF: () => void;
  isDownloading?: boolean;
}

export function Toolbar({
  orientation,
  onOrientationChange,
  onDownloadPDF,
  isDownloading = false,
}: ToolbarProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-3 bg-card p-4 rounded-2xl shadow-2xl border border-border backdrop-blur-sm">
      {/* Botón Orientación Vertical */}
      <button
        onClick={() => onOrientationChange('portrait')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          orientation === 'portrait'
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'bg-muted text-muted-foreground hover:bg-accent/20'
        }`}
        title="Orientación Vertical (A4)"
      >
        <Minimize2 className="w-5 h-5" />
        <span className="text-sm font-medium">Vertical</span>
      </button>

      {/* Botón Orientación Horizontal */}
      <button
        onClick={() => onOrientationChange('landscape')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          orientation === 'landscape'
            ? 'bg-primary text-primary-foreground shadow-lg'
            : 'bg-muted text-muted-foreground hover:bg-accent/20'
        }`}
        title="Orientación Horizontal (A4)"
      >
        <Maximize2 className="w-5 h-5" />
        <span className="text-sm font-medium">Horizontal</span>
      </button>

      {/* Botón Descargar PDF */}
      <button
        onClick={onDownloadPDF}
        disabled={isDownloading}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          isDownloading
            ? 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
            : 'bg-green-500/20 text-green-600 hover:bg-green-500/30 hover:shadow-lg'
        }`}
        title="Descargar como PDF"
      >
        <Download className="w-5 h-5" />
        <span className="text-sm font-medium">
          {isDownloading ? 'Generando...' : 'PDF'}
        </span>
      </button>
    </div>
  );
}
