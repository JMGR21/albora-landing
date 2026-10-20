// Copy estático exacto de la landing (traducido de los .dc.html de referencia).

export type Servicio = {
  titulo: string;
  detalle: string;
  icon: string; // path "d" de un svg 24x24
};

export const servicios: Servicio[] = [
  {
    titulo: "Citas por link o WhatsApp",
    detalle: "Tus clientes apartan su lugar a cualquier hora, sin llamarte.",
    icon: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  },
  {
    titulo: "Confirmación y recordatorio",
    detalle: "Cada cliente recibe su aviso por WhatsApp un día antes.",
    icon: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0",
  },
  {
    titulo: "Cambios y cancelaciones",
    detalle: "Si alguien no puede, mueve su cita y el lugar se libera solo.",
    icon: "M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5",
  },
  {
    titulo: "Tu día, resumido",
    detalle: "Cada mañana te llega quién viene y a qué hora.",
    icon: "M9 4h6v3H9zM7 5H5v16h14V5h-2M8 11h8M8 15h8M8 19h5",
  },
  {
    titulo: "Configuración de tu agenda",
    detalle: "Horarios, servicios, precios y quién atiende. Lo armamos nosotros.",
    icon: "M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4",
  },
  {
    titulo: "Pasamos tus citas actuales",
    detalle: "Lo que tienes en libreta, en otra app o en el celular, lo movemos por ti.",
    icon: "M5 12h14M13 6l6 6-6 6",
  },
];

export type Paso = {
  n: string;
  titulo: string;
  texto: string;
  foto: string;
  pie: string;
};

export const pasos: Paso[] = [
  {
    n: "01",
    titulo: "Armamos tu agenda con tus reglas",
    texto:
      "Nos dices tus horarios, tus servicios, cuánto dura cada uno y quién atiende. Nosotros lo dejamos listo.",
    foto: "FOTO: barbero platicando con nosotros, libreta o celular en mano",
    pie: "Tú nos cuentas cómo trabajas. Lo demás corre por nuestra cuenta.",
  },
  {
    n: "02",
    titulo: "Tus clientes agendan solos",
    texto:
      "Apartan su lugar desde un link o por WhatsApp, a la hora que sea. Les llega su recordatorio para que no te dejen plantado.",
    foto: "FOTO: cliente agendando desde su celular",
    pie: "A las 11 de la noche o en domingo: tu agenda sigue abierta.",
  },
  {
    n: "03",
    titulo: "Lo que salga de lo normal, lo vemos nosotros",
    texto:
      "Un cliente que llega tarde, una duda, un cambio de último momento. Lo resolvemos y tú sigues en la silla.",
    foto: "FOTO: barbero concentrado terminando un fade",
    pie: "Tú sigues cortando. Los mensajes raros los atendemos nosotros.",
  },
];

export type Pregunta = {
  pregunta: string;
  respuesta: string;
};

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Mis clientes tienen que descargar algo?",
    respuesta:
      "No. Agendan desde un link que se abre en su celular o escribiendo por WhatsApp, como ya lo hacen.",
  },
  {
    pregunta: "¿Sigo usando mi WhatsApp?",
    respuesta:
      "Sí, tu WhatsApp sigue siendo tuyo. La diferencia es que ya no tienes que contestar para dar citas ni mandar recordatorios.",
  },
  {
    pregunta: "¿Y si quiero cancelar?",
    respuesta:
      "Nos avisas por WhatsApp y listo. Si es dentro de tu primer mes, te regresamos lo que pagaste.",
  },
];
