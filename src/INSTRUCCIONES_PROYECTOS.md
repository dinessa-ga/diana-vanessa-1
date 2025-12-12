# 📝 Guía para Agregar Nuevos Proyectos

## Ubicación del archivo de datos
Todos los proyectos se gestionan desde un único archivo: `/data/projects.ts`

## Cómo agregar un nuevo proyecto

### 1. Abre el archivo `/data/projects.ts`

### 2. Agrega un nuevo objeto al array `brandProjects`

```typescript
{
  id: 6, // Incrementa el ID del último proyecto
  brandName: 'Nombre de tu Marca',
  category: 'Categoría del Proyecto',
  description: 'Descripción breve que aparece en el carrusel',
  image: 'URL_DE_LA_IMAGEN', // Usa Unsplash o sube tu imagen
  colors: ['#color1', '#color2', '#color3'], // Paleta de colores
  services: ['Servicio 1', 'Servicio 2', 'Servicio 3'],
  results: {
    metric1: '+100%',
    label1: 'Descripción métrica 1',
    metric2: '5x',
    label2: 'Descripción métrica 2'
  }
}
```

### 3. Caso de Estudio Completo (Opcional pero Recomendado)

Si quieres que el proyecto tenga un caso de estudio detallado, agrega la propiedad `caseStudy`:

```typescript
{
  id: 6,
  // ... propiedades básicas anteriores ...
  caseStudy: {
    // OBLIGATORIOS
    clientOverview: 'Descripción general del cliente y su negocio',
    challenge: 'El problema o desafío que enfrentaba el cliente',
    deliverables: [
      {
        category: 'Categoría de entregable',
        items: ['Item 1', 'Item 2', 'Item 3']
      }
    ],
    results: [
      'Resultado 1 del proyecto',
      'Resultado 2 del proyecto',
      'Resultado 3 del proyecto'
    ],
    
    // OPCIONALES (úsalos según el tipo de proyecto)
    purpose: 'Propósito de la marca',
    
    buyerPersona: {
      name: 'Nombre del Persona',
      age: '25-35 años',
      occupation: 'Profesión',
      interests: ['Interés 1', 'Interés 2'],
      painPoints: ['Dolor 1', 'Dolor 2']
    },
    
    brandPersonality: {
      tone: ['Tono 1', 'Tono 2', 'Tono 3'],
      voice: 'Descripción detallada de la voz de marca'
    },
    
    contentStrategy: {
      objectives: ['Objetivo 1', 'Objetivo 2'],
      pillars: ['Pilar 1', 'Pilar 2', 'Pilar 3']
    },
    
    visualExamples: [
      'https://url-imagen-1.jpg',
      'https://url-imagen-2.jpg',
      'https://url-imagen-3.jpg'
    ],
    
    copyExamples: [
      {
        type: 'Caption Instagram',
        text: 'El texto del caption aquí...'
      },
      {
        type: 'Copy Facebook',
        text: 'El texto del copy aquí...'
      }
    ],
    
    testimonial: {
      text: 'El testimonio del cliente',
      author: 'Nombre del Cliente',
      position: 'CEO, Nombre Empresa'
    }
  }
}
```

## Ejemplos de Categorías de Deliverables

- **Estrategia de Contenido**: Análisis, calendarios, planificación
- **Copywriting & Captions**: Textos para redes sociales
- **Identidad Visual**: Logo, paleta, tipografía
- **Piezas Gráficas**: Templates, diseños, mockups
- **Marketing Digital**: Campañas, ads, estrategias
- **Branding**: Manual de marca, guías de estilo

## Ejemplos de Tipos de Copy

- `Caption Instagram`
- `Copy Facebook`
- `Caption LinkedIn`
- `Slogan`
- `Tagline`
- `Email Marketing`
- `Ad Copy`
- `Product Description`

## Tips para Imágenes

### Usar Unsplash (recomendado para placeholder)
```
https://images.unsplash.com/photo-XXXXXX?w=1080
```

### Usar tus propias imágenes
1. Sube tus imágenes a un servicio como Imgur, Cloudinary, o tu propio hosting
2. Usa la URL directa de la imagen

## Estructura Mínima vs Completa

### Mínima (solo aparece en carrusel)
```typescript
{
  id: 6,
  brandName: 'Mi Marca',
  category: 'Categoría',
  description: 'Breve descripción',
  image: 'url-imagen',
  colors: ['#591fff', '#9908cd'],
  services: ['Servicio 1'],
  results: {
    metric1: '+50%',
    label1: 'Crecimiento',
    metric2: '10k',
    label2: 'Seguidores'
  }
}
```

### Completa (con caso de estudio detallado)
```typescript
{
  id: 6,
  // ... propiedades básicas ...
  caseStudy: {
    clientOverview: '...',
    challenge: '...',
    purpose: '...',
    buyerPersona: { ... },
    brandPersonality: { ... },
    contentStrategy: { ... },
    deliverables: [ ... ],
    visualExamples: [ ... ],
    copyExamples: [ ... ],
    results: [ ... ],
    testimonial: { ... }
  }
}
```

## ✅ Checklist antes de guardar

- [ ] El ID es único y consecutivo
- [ ] Todas las URLs de imágenes funcionan
- [ ] Los colores están en formato hexadecimal (#RRGGBB)
- [ ] Los arrays tienen al menos un elemento
- [ ] El texto está bien escrito (sin errores ortográficos)
- [ ] Los resultados son coherentes con las métricas

## 🎨 Recomendaciones de Diseño

- **Imágenes**: Mínimo 1080px de ancho, formato horizontal preferiblemente
- **Colores**: 2-4 colores máximo por proyecto
- **Servicios**: 3-5 servicios por proyecto
- **Copywriting**: Ejemplos variados (Instagram, Facebook, etc.)
- **Piezas visuales**: 4-8 imágenes por proyecto

## ⚠️ Importante

- No cambies la estructura de las propiedades existentes
- Asegúrate de cerrar correctamente todos los objetos y arrays con comas
- Los comentarios en TypeScript van con `//`
- Guarda el archivo y recarga la aplicación para ver los cambios

---

**¿Necesitas ayuda?** Revisa los proyectos existentes en el archivo como ejemplos de referencia.
