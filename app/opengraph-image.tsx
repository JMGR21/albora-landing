import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const alt = "Albora — Agenda para barberías y estéticas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

const INK = "#161412";
const BRASS = "#D3A453";
const CREAM = "#F3EEE6";
const WA_GREEN = "#157A42";

const heroPath = path.join(process.cwd(), "public", "images", "hero.jpg");

// Recorta/comprime la foto al tamaño real de la imagen (1200x630) antes de
// incrustarla: así el PNG final pesa una fracción de lo que pesaría metiendo
// la foto original completa.
async function getHeroSrc() {
  "use cache";
  if (!fs.existsSync(heroPath)) return null;
  const resized = await sharp(heroPath)
    .resize(size.width, size.height, { fit: "cover" })
    .jpeg({ quality: 78 })
    .toBuffer();
  return `data:image/jpeg;base64,${resized.toString("base64")}`;
}

// Todo el texto que aparece en la imagen, tal cual se renderiza (sin
// text-transform: el subset de Google Fonts solo trae los glifos literales
// de este string, así que ya va en mayúsculas donde el render las necesita).
const OG_TEXT =
  "albora( AGENDA PARA BARBERÍAS Y ESTÉTICAS )TUS CLIENTES AGENDAN SOLOS.TÚ NO TOCAS EL CELULAR.Escríbenos por WhatsAppPuerto Vallarta, Jalisco";

async function loadGoogleFont(familyQuery: string, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${familyQuery}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl, { cache: "force-cache" })).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`No se pudo resolver la fuente: ${familyQuery}`);
  const fontRes = await fetch(match[1], { cache: "force-cache" });
  return fontRes.arrayBuffer();
}

async function buildJpegBase64(): Promise<string> {
  "use cache";

  const [anton, dmSansBold, heroSrc] = await Promise.all([
    loadGoogleFont("Anton", OG_TEXT),
    loadGoogleFont("DM+Sans:wght@700", OG_TEXT),
    getHeroSrc(),
  ]);

  const png = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK,
          position: "relative",
          fontFamily: "DM Sans",
        }}
      >
        {heroSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={heroSrc}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", inset: 0, objectFit: "cover" }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(22,20,18,0.75) 0%, rgba(22,20,18,0.35) 45%, rgba(22,20,18,0.85) 100%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 56,
            display: "flex",
            alignItems: "baseline",
            fontSize: 40,
            fontWeight: 700,
            color: CREAM,
          }}
        >
          <span style={{ display: "flex" }}>alb</span>
          <svg
            width="30"
            height="29"
            viewBox="0 0 52 50"
            style={{ margin: "0 2px" }}
          >
            <path d="M8 44 A18 18 0 0 1 44 44 Z" fill={BRASS} />
            <line x1="4" y1="46.5" x2="48" y2="46.5" stroke={CREAM} strokeWidth="7" strokeLinecap="round" />
            <line x1="26" y1="18" x2="26" y2="9" stroke={BRASS} strokeWidth="5" strokeLinecap="round" />
            <line x1="9.5" y1="25" x2="4" y2="19.5" stroke={BRASS} strokeWidth="5" strokeLinecap="round" />
            <line x1="42.5" y1="25" x2="48" y2="19.5" stroke={BRASS} strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span style={{ display: "flex" }}>ra</span>
        </div>

        {/* Titular */}
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 150,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            maxWidth: 1000,
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
              color: BRASS,
            }}
          >
            ( AGENDA PARA BARBERÍAS Y ESTÉTICAS )
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Anton",
              fontSize: 66,
              lineHeight: 1,
              color: CREAM,
            }}
          >
            <span style={{ display: "flex" }}>TUS CLIENTES AGENDAN SOLOS.</span>
            <span style={{ display: "flex", color: BRASS }}>TÚ NO TOCAS EL CELULAR.</span>
          </div>
        </div>

        {/* Pie: CTA + ubicación */}
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            bottom: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 28px",
              borderRadius: 999,
              background: WA_GREEN,
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Escríbenos por WhatsApp
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: CREAM,
            }}
          >
            Puerto Vallarta, Jalisco
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, weight: 400, style: "normal" },
        { name: "DM Sans", data: dmSansBold, weight: 700, style: "normal" },
      ],
    },
  );

  // La foto de fondo hace que el PNG que genera satori pese mucho (sin
  // compresión con pérdida). Lo recomprimimos a JPEG, que es lo que WhatsApp
  // y las redes van a descargar cada vez que alguien comparte el link.
  const pngBuffer = Buffer.from(await png.arrayBuffer());
  const jpegBuffer = await sharp(pngBuffer).flatten({ background: INK }).jpeg({ quality: 82 }).toBuffer();

  return jpegBuffer.toString("base64");
}

export default async function Image() {
  const base64 = await buildJpegBase64();
  return new Response(Buffer.from(base64, "base64"), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
