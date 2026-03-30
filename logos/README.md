# Logos de Clientes - Trusted By Strip

Esta carpeta contiene los logos de clientes que aparecen en la franja de confianza (Trusted By Strip) debajo del Hero.

## 📋 Logos Requeridos

Coloca los logos de tus clientes en esta carpeta con los siguientes nombres:

```
client-1.png
client-2.png
client-3.png
client-4.png
client-5.png
client-6.png
client-7.png
client-8.png
client-9.png
client-10.png
... (agrega más según necesites)
```

## 🎨 Especificaciones Técnicas

### Formato
- **Tipo:** PNG con fondo transparente (preferido) o SVG
- **Alternativa:** JPG con fondo blanco

### Dimensiones
- **Ancho recomendado:** 200-300px
- **Alto recomendado:** 80-100px
- **Ratio:** Horizontal (landscape)

### Optimización
- **Peso máximo:** 50KB por logo
- **Resolución:** 2x para pantallas Retina
- **Color:** Preferiblemente en escala de grises o monocromático

## 🎯 Estilo Visual

Para mantener consistencia con el diseño Truora:

1. **Logos en escala de grises** (el componente aplica grayscale automáticamente)
2. **Fondo transparente** para mejor integración
3. **Logos horizontales** funcionan mejor que verticales
4. **Tamaño uniforme** entre todos los logos

## 🔧 Cómo Agregar Nuevos Logos

### 1. Agregar el archivo
Coloca tu logo en `/public/logos/client-XX.png`

### 2. Actualizar el componente
Edita `/components/sections/trusted-by-strip.tsx`:

```tsx
const clients = [
  { id: 1, name: "Cliente 1", logo: "/logos/client-1.png" },
  { id: 2, name: "Cliente 2", logo: "/logos/client-2.png" },
  // ... agrega más aquí
  { id: 11, name: "Nuevo Cliente", logo: "/logos/client-11.png" },
];
```

### 3. Descomentar el código de Image
En el mismo archivo, reemplaza el placeholder con:

```tsx
<Image
  src={client.logo}
  alt={client.name}
  width={120}
  height={50}
  className="object-contain w-full h-full grayscale opacity-50 hover:opacity-70 transition-all duration-300"
/>
```

## 🎨 Herramientas Recomendadas

### Para Optimizar Logos
- **TinyPNG:** https://tinypng.com/ (compresión PNG)
- **SVGOMG:** https://jakearchibald.github.io/svgomg/ (optimización SVG)
- **Squoosh:** https://squoosh.app/ (conversión y compresión)

### Para Convertir a Escala de Grises
- **Photoshop/GIMP:** Desaturar imagen
- **ImageMagick:** `convert logo.png -colorspace Gray logo-gray.png`
- **Online:** https://www.imgonline.com.ua/eng/make-grayscale.php

## 📐 Ejemplo de Estructura

```
/public/logos/
├── client-1.png     (Rappi)
├── client-2.png     (Addi)
├── client-3.png     (Stori)
├── client-4.png     (Clivi)
├── client-5.png     (Universidad X)
├── client-6.png     (Empresa Y)
└── README.md        (este archivo)
```

## ⚡ Velocidad del Carrusel

La velocidad actual es de **25 segundos** por ciclo completo (similar a Truora).

Para ajustar la velocidad, edita en `trusted-by-strip.tsx`:

```tsx
transition={{
  x: {
    duration: 25, // Cambia este valor (menor = más rápido)
  }
}}
```

## 🎭 Placeholders Temporales

Mientras no tengas los logos reales, el componente muestra placeholders grises con el nombre del cliente.

Una vez que agregues los logos reales:
1. Coloca los archivos en esta carpeta
2. Descomenta el código de `<Image>` en el componente
3. Elimina el placeholder div

## 💡 Tips de Diseño

- **Consistencia:** Todos los logos deben tener tamaño y estilo similar
- **Contraste:** Logos oscuros funcionan mejor con el fondo
- **Simplicidad:** Versiones simplificadas de logos funcionan mejor
- **Testing:** Prueba cómo se ven en diferentes tamaños de pantalla

## 🔗 Recursos Adicionales

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Framer Motion Animation](https://www.framer.com/motion/)
- [Tailwind CSS Grayscale](https://tailwindcss.com/docs/grayscale)
