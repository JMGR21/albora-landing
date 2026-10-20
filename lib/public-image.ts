import fs from "node:fs";
import path from "node:path";

// Solo para Server Components: revisa si una imagen ya existe en /public
// y, si existe, le agrega ?v=<fecha de modificación> para que el navegador
// y la caché de imágenes de Next sirvan la versión nueva cada vez que se
// reemplace el archivo (mismo nombre, contenido distinto).
export function getPublicImage(publicPath: string): { src: string; exists: boolean } {
  const absolutePath = path.join(process.cwd(), "public", publicPath);
  const exists = fs.existsSync(absolutePath);

  if (!exists) {
    return { src: publicPath, exists: false };
  }

  const mtimeMs = fs.statSync(absolutePath).mtimeMs;
  return { src: `${publicPath}?v=${mtimeMs}`, exists: true };
}
