# Guía: Modo Edición y Exportación a PDF - Case Studies

## ¿Cómo activar el modo edición?

Para acceder al modo edición y la funcionalidad de exportación a PDF en cualquier case study, agrega el parámetro `?edit=true` a la URL.

### Ejemplo:
```
http://localhost:5173/#/case-study/1?edit=true
```

Reemplaza:
- `1` con el ID del case study que desees editar
- `localhost:5173` con tu URL de desarrollo

---

## Características del modo edición

### 1. **Barra flotante (Toolbar)**
Aparecerá en la esquina inferior derecha de la pantalla con 3 botones:

- **[Vertical]** - Cambia el PDF a orientación vertical (A4: 210mm × 297mm)
- **[Horizontal]** - Cambia el PDF a orientación horizontal (A4: 297mm × 210mm)
- **[PDF]** - Descarga el caso de estudio como PDF

### 2. **Visualización de hoja**
Cuando actives el modo edición:
- El fondo de la página pasa de gris oscuro a gris claro
- El contenido del case study se envuelve en una "hoja" blanca con sombra
- El ancho se ajusta automáticamente según la orientación elegida (210mm o 297mm)
- Esto te ayuda a visualizar cómo se vería en el PDF

### 3. **Arrastrar y reordenar secciones**
Todas las secciones principales son arrastrables:
- Cliente
- Desafío
- Propósito
- Buyer persona
- Personalidad de marca
- Estrategia de contenido
- Deliverables
- Ejemplos de copywriting
- Piezas gráficas
- Paleta de colores
- Resultados
- Testimonial
- CTA

**Cómo mover una sección:**
1. Pasa el cursor sobre cualquier sección (notarás que el cursor cambia a "move" 👆)
2. Haz clic y arrastra la sección a la nueva posición
3. Suelta para colocar la sección

### 4. **Generar PDF**
Una vez hayas reordenado las secciones como desees:

1. Selecciona la orientación preferida ([Vertical] o [Horizontal])
2. Haz clic en el botón **[PDF]**
3. El sistema:
   - Capturará el contenido en alta resolución (scale: 2)
   - Generará un PDF adaptado a la orientación seleccionada
   - Ajustará automáticamente el contenido sin márgenes blancos excesivos
   - Creará múltiples páginas si el contenido es muy largo
   - Descargará el archivo con el nombre: `[NombreDelProyecto]_Case_Study_[timestamp].pdf`

---

## Requisitos técnicos (ya instalados)

Las siguientes librerías fueron instaladas para esta funcionalidad:

```bash
npm install react-draggable jspdf html2canvas
```

- **react-draggable** - Permite arrastra y suelta de secciones
- **jspdf** - Genera archivos PDF
- **html2canvas** - Captura HTML como imagen de alta resolución

---

## Archivos modificados

### Nuevos archivos:
- `src/components/sections/creative/Toolbar.tsx` - Barra flotante con controles

### Archivos actualizados:
- `src/components/sections/creative/CaseStudy.tsx` - Lógica de edición, dragging y exportación PDF

---

## Notas importantes

1. **Acceso privado**: Solo tú (con el parámetro `?edit=true`) puedes ver la toolbar y el modo edición. Los visitantes normales NO ven estos controles.

2. **Los cambios de arrastrado NO son permanentes**: Si recargas la página, las secciones volverán a su posición original. El arrastrado es solo para crear el PDF en ese momento.

3. **Alta resolución**: Los PDFs se generan con escala 2x para mejor calidad de imágenes y texto.

4. **Múltiples páginas**: Si el contenido es muy largo, el PDF se dividirá automáticamente en varias páginas A4.

5. **Sin márgenes excesivos**: El sistema ajusta automáticamente el contenido para minimizar espacios en blanco innecesarios.

---

## Ejemplos de uso

### Caso 1: Exportar Diana Vanessa Case Study en vertical
```
http://localhost:5173/#/case-study/1?edit=true
```
1. Haz clic en **[Vertical]** (ya está seleccionado por defecto)
2. Haz clic en **[PDF]**
3. Se descargará: `Diana_Vanessa_Case_Study_[timestamp].pdf`

### Caso 2: Reordenar secciones y exportar en horizontal
```
http://localhost:5173/#/case-study/1?edit=true
```
1. Arrastra las secciones que desees
2. Haz clic en **[Horizontal]**
3. Haz clic en **[PDF]**
4. Se descargará el PDF en orientación apaisada

---

## Solución de problemas

### "No puedo ver la toolbar"
- Asegúrate de incluir `?edit=true` en la URL
- Verifica en la consola del navegador (F12) si hay errores

### "Las imágenes no aparecen en el PDF"
- Verifica que las URLs de las imágenes son públicamente accesibles
- Algunos navegadores pueden bloquear imágenes por políticas CORS

### "El PDF se descarga pero está vacío o parcialmente cortado"
- Intenta recargar la página y vuelve a intentar
- Asegúrate de que la resolución de tu pantalla sea suficiente

---

¡Disfruta personalizando tus case studies!
