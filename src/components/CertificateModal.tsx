import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Certificate {
  title: string;
  org: string;
  year: string;
  certificateUrl?: string;
  imageUrl?: string;
}

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({ certificate, isOpen, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-card rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h3 className="text-foreground mb-1">{certificate.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {certificate.org} • {certificate.year}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {certificate.imageUrl ? (
                  <div className="flex justify-center">
                    <ImageWithFallback
                      src={certificate.imageUrl}
                      alt={`Certificado ${certificate.title}`}
                      className="max-w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                ) : certificate.certificateUrl ? (
                  <div className="space-y-4">
                    <iframe
                      src={certificate.certificateUrl}
                      className="w-full h-[600px] rounded-2xl border-2 border-border"
                      title={`Certificado ${certificate.title}`}
                    />
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir en nueva pestaña
                    </a>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No hay certificado disponible para mostrar</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
