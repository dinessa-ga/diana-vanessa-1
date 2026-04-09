import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Quote,
  CheckCircle2,
  Palette,
  MessageSquare,
  Package
} from 'lucide-react';
import { BrandProject } from '../../../data/projects';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Toolbar } from './Toolbar';
import { EditableBlock } from './EditableBlock';

interface CaseStudyProps {
  project: BrandProject;
  onBack: () => void;
}

export function CaseStudy({ project, onBack }: CaseStudyProps) {
  const caseStudy = project.caseStudy;
  const pdfContentRef = useRef<HTMLDivElement>(null);
  
  // Estados para la funcionalidad de edición y PDF
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [deletedElements, setDeletedElements] = useState<Set<string>>(new Set());

  // Detectar parámetro ?edit=true en la URL o dentro del hash
  useEffect(() => {
    const getEditMode = () => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('edit') === 'true') return true;

      const hashQuery = window.location.hash.split('?')[1] || '';
      const hashParams = new URLSearchParams(hashQuery);
      return hashParams.get('edit') === 'true';
    };

    const isEditMode = getEditMode();
    setIsDraggingEnabled(isEditMode);

    // Inyectar estilos dinámicos en modo edición
    if (isEditMode) {
      document.body.classList.add('is-editing');
      const styleTag = document.createElement('style');
      styleTag.id = 'edit-mode-styles';
      styleTag.textContent = `
        .is-editing h1,
        .is-editing h2,
        .is-editing h3,
        .is-editing h4,
        .is-editing h5,
        .is-editing h6,
        .is-editing p,
        /* Forzar texto negro en modo edición, pero excluir paleta de colores */
        .is-editing span:not(.preserve-colors):not(.preserve-colors *),
        .is-editing a:not(.preserve-colors):not(.preserve-colors *),
        .is-editing div:not(.preserve-colors):not(.preserve-colors *),
        .is-editing li:not(.preserve-colors):not(.preserve-colors *),
        .is-editing p:not(.preserve-colors):not(.preserve-colors *),
        .is-editing h1:not(.preserve-colors):not(.preserve-colors *),
        .is-editing h2:not(.preserve-colors):not(.preserve-colors *),
        .is-editing h3:not(.preserve-colors):not(.preserve-colors *),
        .is-editing h4:not(.preserve-colors):not(.preserve-colors *) {
          color: #000000 !important;
          background: transparent !important;
          text-shadow: none !important;
        }
        

        
        .is-editing #pdf-content {
          background: white;
          border: 2px solid #d1d5db;
          margin: 50px auto;
          overflow: visible;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        /* Líneas de separación de páginas */
        [data-page-break] {
          position: absolute;
          top: 297mm;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #ef4444,
            #ef4444 10px,
            transparent 10px,
            transparent 20px
          );
          z-index: 10;
          pointer-events: none;
        }
        
        [data-page-break]::after {
          content: 'Página 1 | Página 2 →';
          position: absolute;
          top: -12px;
          right: 10px;
          font-size: 12px;
          color: #ef4444;
          background: white;
          padding: 2px 8px;
          z-index: 11;
        }
        
        .is-editing body {
          background-color: #f3f4f6;
        }
      `;
      document.head.appendChild(styleTag);
    } else {
      document.body.classList.remove('is-editing');
      const styleTag = document.getElementById('edit-mode-styles');
      if (styleTag) {
        styleTag.remove();
      }
    }

    const handleHashChange = () => {
      const newEditMode = getEditMode();
      setIsDraggingEnabled(newEditMode);
      
      if (newEditMode) {
        document.body.classList.add('is-editing');
      } else {
        document.body.classList.remove('is-editing');
        const styleTag = document.getElementById('edit-mode-styles');
        if (styleTag) {
          styleTag.remove();
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (isEditMode) {
        document.body.classList.remove('is-editing');
        const styleTag = document.getElementById('edit-mode-styles');
        if (styleTag) {
          styleTag.remove();
        }
      }
    };
  }, []);

  const copyComputedStyles = (source: HTMLElement, target: HTMLElement) => {
    const computed = window.getComputedStyle(source);
    
    // Para elementos con preserve-colors, copiar TODOS los estilos sin modificaciones
    if (source.className.includes('preserve-colors') || source.closest('.preserve-colors')) {
      const allProperties = [
        'background',
        'backgroundColor',
        'backgroundImage',
        'backgroundPosition',
        'backgroundSize',
        'backgroundRepeat',
        'backgroundAttachment',
        'border',
        'borderColor',
        'borderStyle',
        'borderWidth',
        'borderRadius',
        'boxShadow',
        'color',
        'fill',
        'stroke',
        'font',
        'fontFamily',
        'fontSize',
        'fontWeight',
        'fontStyle',
        'lineHeight',
        'letterSpacing',
        'textAlign',
        'textDecoration',
        'textTransform',
        'whiteSpace',
        'wordSpacing',
        'padding',
        'margin',
        'display',
        'flexDirection',
        'justifyContent',
        'alignItems',
        'gap',
        'width',
        'height',
        'minWidth',
        'minHeight',
        'maxWidth',
        'maxHeight',
        'position',
        'top',
        'left',
        'right',
        'bottom',
        'overflow',
        'opacity',
        'visibility',
        'transform',
        'filter',
        'outlineColor',
        'outlineStyle',
        'outlineWidth',
        'boxSizing',
        'gridTemplateColumns',
        'gridTemplateRows',
        'gridColumn',
        'gridRow',
        'gridAutoRows',
        'flex',
        'flexBasis',
        'flexGrow',
        'flexShrink',
        'resize'
      ];

      allProperties.forEach((property) => {
        let value = computed.getPropertyValue(property);
        if (!value) return;

        const hasUnsupportedColor = value.includes('oklab') || value.includes('color-mix(');
        if (hasUnsupportedColor) {
          if (property === 'backgroundImage' || property === 'boxShadow' || property === 'filter') {
            value = 'none';
          } else if (property.includes('color') || property === 'border' || property === 'outlineColor') {
            value = 'transparent';
          } else {
            return;
          }
        }

        (target.style as any)[property] = value;
      });
      return;
    }
    
    // Para elementos normales, aplicar la lógica de forzar texto negro
    const properties = [
      'background',
      'backgroundColor',
      'backgroundImage',
      'backgroundPosition',
      'backgroundSize',
      'backgroundRepeat',
      'backgroundAttachment',
      'border',
      'borderColor',
      'borderStyle',
      'borderWidth',
      'borderRadius',
      'boxShadow',
      'color',
      'fill',
      'stroke',
      'font',
      'fontFamily',
      'fontSize',
      'fontWeight',
      'fontStyle',
      'lineHeight',
      'letterSpacing',
      'textAlign',
      'textDecoration',
      'textTransform',
      'whiteSpace',
      'wordSpacing',
      'padding',
      'margin',
      'display',
      'flexDirection',
      'justifyContent',
      'alignItems',
      'gap',
      'width',
      'height',
      'minWidth',
      'minHeight',
      'maxWidth',
      'maxHeight',
      'position',
      'top',
      'left',
      'right',
      'bottom',
      'overflow',
      'opacity',
      'visibility',
      'transform',
      'filter',
      'outlineColor',
      'outlineStyle',
      'outlineWidth',
      'boxSizing',
      'gridTemplateColumns',
      'gridTemplateRows',
      'gridColumn',
      'gridRow',
      'gridAutoRows',
      'flex',
      'flexBasis',
      'flexGrow',
      'flexShrink',
      'resize'
    ];

    properties.forEach((property) => {
      let value = computed.getPropertyValue(property);
      if (!value) return;

      const hasUnsupportedColor = value.includes('oklab') || value.includes('color-mix(');
      if (hasUnsupportedColor) {
        if (property === 'backgroundImage' || property === 'boxShadow' || property === 'filter') {
          value = 'none';
        } else if (property.includes('color') || property === 'border' || property === 'outlineColor') {
          value = 'transparent';
        } else {
          return;
        }
      }

      // Para elementos normales, forzar texto negro y fondo transparente
      if (property === 'color') {
        value = '#000000';
      }
      if (property === 'background' || property === 'backgroundColor') {
        value = 'transparent';
      }

      (target.style as any)[property] = value;
    });
  };

  const cloneNodeWithInlineStyles = (node: HTMLElement): HTMLElement => {
    const clone = node.cloneNode(true) as HTMLElement;
    const sourceNodes = [node, ...Array.from(node.querySelectorAll<HTMLElement>('*'))];
    const cloneNodes = [clone, ...Array.from(clone.querySelectorAll<HTMLElement>('*'))];

    sourceNodes.forEach((sourceNode, index) => {
      const cloneNode = cloneNodes[index];
      if (cloneNode instanceof HTMLElement) {
        copyComputedStyles(sourceNode, cloneNode);
        
        // Mantener estilos de grid en inline para que se capturen en PDF
        if (sourceNode.className.includes('grid')) {
          const computed = window.getComputedStyle(sourceNode);
          const gridTemplateColumns = computed.gridTemplateColumns;
          const gridAutoRows = computed.gridAutoRows;
          const gridGap = computed.gap;
          
          cloneNode.style.display = 'grid';
          if (gridTemplateColumns && gridTemplateColumns !== 'none') {
            cloneNode.style.gridTemplateColumns = gridTemplateColumns;
          }
          if (gridAutoRows && gridAutoRows !== 'auto') {
            cloneNode.style.gridAutoRows = gridAutoRows;
          }
          if (gridGap) {
            cloneNode.style.gap = gridGap;
          }
        }
        
        cloneNode.className = '';
      }
    });

    return clone;
  };

  const handleDownloadPDF = async () => {
    if (!pdfContentRef.current) return;

    setIsDownloading(true);
    try {
      const clonedNode = cloneNodeWithInlineStyles(pdfContentRef.current);
      clonedNode.style.width = `${pdfContentRef.current.offsetWidth}px`;
      clonedNode.style.boxSizing = 'border-box';
      clonedNode.style.backgroundColor = '#FFFFFF';

      const wrapper = document.createElement('div');
      wrapper.style.position = 'fixed';
      wrapper.style.top = '-9999px';
      wrapper.style.left = '-9999px';
      wrapper.style.zIndex = '-9999';
      wrapper.appendChild(clonedNode);
      document.body.appendChild(wrapper);

      const canvas = await html2canvas(clonedNode, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF',
      });

      document.body.removeChild(wrapper);

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error('canvas inválido para exportar PDF');
      }

      const imgData = canvas.toDataURL('image/png');
      const isLandscape = orientation === 'landscape';
      const pdf = new jsPDF({
        orientation: isLandscape ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidthMm = pdf.internal.pageSize.getWidth();
      const pdfHeightMm = pdf.internal.pageSize.getHeight();
      const pxPerMm = canvas.width / pdfWidthMm;
      const totalHeightMm = canvas.height / pxPerMm;
      const imageHeightMm = totalHeightMm;

      console.log('📄 PDF export', {
        orientation,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height,
        pdfWidthMm,
        pdfHeightMm,
        pxPerMm,
        totalHeightMm,
      });

      if (imageHeightMm <= pdfHeightMm) {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidthMm, imageHeightMm);
        // Agregar indicador de página para documento de una página
        pdf.setFontSize(10);
        pdf.setTextColor(100, 100, 100); // Gris
        pdf.text('Página 1', pdfWidthMm - 20, pdfHeightMm - 10);
      } else {
        let pageTopPx = 0;
        let pageIndex = 0;
        const pageHeightPx = Math.floor(pdfHeightMm * pxPerMm);

        while (pageTopPx < canvas.height) {
          const remainingPx = canvas.height - pageTopPx;
          const currentPageHeightPx = Math.min(pageHeightPx, remainingPx);

          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvas.width;
          pageCanvas.height = currentPageHeightPx;
          const ctx = pageCanvas.getContext('2d');

          if (!ctx) {
            throw new Error('No se pudo obtener contexto del canvas');
          }

          ctx.drawImage(
            canvas,
            0,
            pageTopPx,
            canvas.width,
            currentPageHeightPx,
            0,
            0,
            canvas.width,
            currentPageHeightPx
          );

          const pageData = pageCanvas.toDataURL('image/png');
          const pageImageHeightMm = currentPageHeightPx / pxPerMm;

          if (pageIndex > 0) {
            pdf.addPage();
          }

          pdf.addImage(pageData, 'PNG', 0, 0, pdfWidthMm, pageImageHeightMm);

          // Agregar indicador de página
          pdf.setFontSize(10);
          pdf.setTextColor(100, 100, 100); // Gris
          const currentPage = pageIndex + 1;
          const nextPage = currentPage + 1;
          const pageText = pageTopPx + currentPageHeightPx < canvas.height ? `Página ${currentPage} → Página ${nextPage}` : `Página ${currentPage}`;
          pdf.text(pageText, pdfWidthMm - 40, pdfHeightMm - 10);

          pageTopPx += currentPageHeightPx;
          pageIndex += 1;
        }
      }

      const fileName = `${project.brandName.replace(/\s+/g, '_')}_Case_Study_${new Date().getTime()}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generando PDF:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : null,
        stack: error instanceof Error ? error.stack : null,
      });
      alert(`Error al generar el PDF. Por favor intenta de nuevo. (${error instanceof Error ? error.message : 'detalle desconocido'})`);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl mb-4 text-foreground">Caso de estudio no disponible</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Volver al portafolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDraggingEnabled
          ? 'bg-gray-100/50 dark:bg-gray-900/30'
          : 'bg-background'
      }`}
    >
      {/* Mostrar Toolbar si está en modo edición */}
      {isDraggingEnabled && (
        <Toolbar
          orientation={orientation}
          onOrientationChange={setOrientation}
          onDownloadPDF={handleDownloadPDF}
          isDownloading={isDownloading}
        />
      )}

      {/* Contenedor PDF con estilos dinámicos */}
      <div
        ref={pdfContentRef}
        className={`${
          isDraggingEnabled
            ? 'bg-white dark:bg-card shadow-2xl mx-auto my-8'
            : ''
        }`}
        style={{
          width: isDraggingEnabled
            ? orientation === 'portrait'
              ? '210mm'
              : '297mm'
            : 'auto',
          transition: 'width 0.3s ease',
        }}
      >
        {/* Header con imagen hero */}
        <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <img 
            src={project.image} 
            alt={project.brandName}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Botón volver */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-105 transition-transform text-foreground border border-border"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>

          {/* Título del proyecto */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full mb-4 border border-primary/30">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
                {project.brandName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">
          
          {/* Overview & Challenge */}
          {!deletedElements.has('overview-challenge') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'overview-challenge']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-foreground">El cliente</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.clientOverview}</p>
                </div>

                <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-foreground">El desafío</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Propósito (si existe) */}
          {caseStudy.purpose && !deletedElements.has('purpose') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'purpose']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 p-10 rounded-3xl border border-primary/20"
              >
                <h3 className="text-center mb-4 text-foreground">Propósito de la marca</h3>
                <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {caseStudy.purpose}
                </p>
              </motion.div>
            </EditableBlock>
          )}

          {/* Buyer Persona */}
          {caseStudy.buyerPersona && !deletedElements.has('buyer-persona') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'buyer-persona']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                  Buyer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">persona</span>
                </h2>
                <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl text-foreground">{caseStudy.buyerPersona.name}</h4>
                      <p className="text-muted-foreground">{caseStudy.buyerPersona.age} • {caseStudy.buyerPersona.occupation}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="mb-3 text-primary">Intereses</h5>
                      <ul className="space-y-2">
                        {caseStudy.buyerPersona.interests.map((interest, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {interest}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-3 text-accent">Pain points</h5>
                      <ul className="space-y-2">
                        {caseStudy.buyerPersona.painPoints.map((pain, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <Target className="w-4 h-4 text-accent" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Personalidad de Marca */}
          {caseStudy.brandPersonality && !deletedElements.has('brand-personality') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'brand-personality']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                  Personalidad de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">marca</span>
                </h2>
                <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                  <div className="space-y-6">
                    <div>
                      <h5 className="mb-4 text-primary flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Tono de voz
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {caseStudy.brandPersonality.tone.map((tone, index) => (
                          <span
                            key={index}
                            className="px-5 py-2 bg-primary/10 text-foreground rounded-full border border-primary/20"
                          >
                            {tone}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-3 text-secondary">Voice Description</h5>
                      <p className="text-muted-foreground leading-relaxed italic">
                        {caseStudy.brandPersonality.voice}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Estrategia de Contenido */}
          {caseStudy.contentStrategy && !deletedElements.has('content-strategy') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'content-strategy']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                  Estrategia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">contenido</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                    <h5 className="mb-4 text-primary">Objetivos</h5>
                    <ul className="space-y-3">
                      {caseStudy.contentStrategy.objectives.map((obj, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
                    <h5 className="mb-4 text-secondary">Pilares de contenido</h5>
                    <ul className="space-y-3">
                      {caseStudy.contentStrategy.pillars.map((pillar, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Deliverables */}
          {!deletedElements.has('deliverables') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'deliverables']))}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                Entregables del <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">proyecto</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-foreground">{deliverable.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {deliverable.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
            </EditableBlock>
          )}

          {/* Ejemplos de Copy */}
          {caseStudy.copyExamples && caseStudy.copyExamples.length > 0 && !deletedElements.has('copy-examples') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'copy-examples']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                  Ejemplos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">copywriting</span>
                </h2>
                <div className="space-y-6">
                  {caseStudy.copyExamples.map((copy, index) => (
                    <div
                      key={index}
                      className="bg-card p-8 rounded-3xl shadow-lg border border-border"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span className="text-sm uppercase tracking-wider text-primary">
                          {copy.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {copy.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Ejemplos Visuales */}
          {caseStudy.visualExamples && caseStudy.visualExamples.length > 0 && !deletedElements.has('visual-examples') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'visual-examples']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                  Piezas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">gráficas</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {caseStudy.visualExamples.map((imgUrl, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
                    >
                      <ImageWithFallback
                        src={imgUrl}
                        alt={`Pieza gráfica ${index + 1} - ${project.brandName}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* Paleta de colores */}
          {!deletedElements.has('color-palette') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'color-palette']))}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-border preserve-colors"
            >
              <h3 className="text-center mb-6 text-foreground">Paleta de colores</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                {project.colors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-20 h-20 rounded-2xl shadow-lg mb-2 border-2 border-border"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm text-muted-foreground">{color}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            </EditableBlock>
          )}

          {/* Resultados */}
          {!deletedElements.has('results') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'results']))}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
                Resultados e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">impacto</span>
              </h2>
              <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-3xl text-white shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{project.results.metric1}</div>
                    <div className="text-lg opacity-90">{project.results.label1}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-2">{project.results.metric2}</div>
                    <div className="text-lg opacity-90">{project.results.label2}</div>
                  </div>
                </div>
                
                <ul className="space-y-3 max-w-3xl mx-auto">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            </EditableBlock>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && !deletedElements.has('testimonial') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'testimonial']))}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-card p-10 md:p-12 rounded-3xl shadow-lg border border-border relative"
              >
                <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic leading-relaxed">
                    "{caseStudy.testimonial.text}"
                  </p>
                  <div>
                    <div className="text-foreground">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            </EditableBlock>
          )}

          {/* CTA Final */}
          {!deletedElements.has('cta-final') && (
            <EditableBlock 
              isDraggingEnabled={isDraggingEnabled}
              onDelete={() => setDeletedElements(new Set([...deletedElements, 'cta-final']))}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl md:text-3xl mb-6 text-foreground">
                ¿Empezamos a transformar tu marca?
              </h3>
              <button
                onClick={() => window.location.hash = '#contact'}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Hablemos de tu proyecto
              </button>
            </motion.div>
            </EditableBlock>
          )}
        </div>

        {/* Elemento visual para separación de página */}
        {isDraggingEnabled && (
          <div data-page-break="" />
        )}
      </div>
    </div>
  );
}
