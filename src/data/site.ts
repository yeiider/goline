export const site = {
  name: 'Goline',
  tagline: 'Software e IA para marcas que avanzan.',
  description:
    'Goline es una firma de ingeniería de software e inteligencia artificial. Construimos producto, automatizamos procesos con agentes de IA y hacemos crecer marcas en Colombia, México y Chile.',
  email: 'contacto@goline.com.co',
  phone: '+57 320 775 3755',
  whatsapp: 'https://wa.me/573207753755',
  countries: ['Colombia', 'México', 'Chile'],
};

export const nav = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'IA', href: '/inteligencia-artificial' },
  { label: 'ISPGO', href: '/ispgo' },
  { label: 'Nosotros', href: '/sobre-goline' },
  { label: 'Blog', href: '/blog' },
];

export type Service = {
  slug: string;
  line: string;
  title: string;
  short: string;
  headline: string;
  intro: string;
  icon: string;
  features: { title: string; text: string }[];
  stack: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'inteligencia-artificial',
    line: 'Goline AI',
    title: 'Inteligencia artificial aplicada',
    short: 'Agentes que atienden, venden y operan con los datos reales de tu empresa.',
    headline: 'Agentes de IA que trabajan con tus datos, no con suposiciones.',
    intro:
      'Diseñamos e implementamos agentes, automatizaciones y modelos que se conectan a tus sistemas (ERP, CRM, facturación, WhatsApp) para resolver tareas completas. Medimos el impacto desde el primer sprint.',
    icon: 'spark',
    features: [
      { title: 'Agentes conversacionales', text: 'Atención en WhatsApp, web y correo con acceso a saldos, pedidos y tickets mediante servidores MCP y APIs propias. Pasan a una persona cuando hace falta.' },
      { title: 'Automatización de procesos', text: 'Flujos que leen documentos, clasifican solicitudes y ejecutan acciones en tus sistemas. Menos trabajo manual y menos errores.' },
      { title: 'Analítica predictiva', text: 'Modelos que anticipan demanda, churn o fraude y alimentan tableros que tu equipo usa a diario.' },
      { title: 'Procesamiento de lenguaje', text: 'Búsqueda semántica sobre tus documentos, resúmenes, extracción de datos y asistentes internos para tu equipo.' },
      { title: 'Visión por computador', text: 'Control de calidad, lectura de documentos y conteo de inventario a partir de imágenes y video.' },
      { title: 'IA para marcas', text: 'Contenido, segmentación y personalización a escala, con la voz de tu marca y revisión humana.' },
    ],
    stack: ['Claude', 'OpenAI', 'MCP', 'LangGraph', 'Python', 'pgvector'],
    faq: [
      { q: '¿Por dónde empezamos?', a: 'Con un diagnóstico de dos semanas: mapeamos procesos, elegimos el caso con más retorno y entregamos un prototipo funcional con tus datos.' },
      { q: '¿Mis datos quedan seguros?', a: 'Sí. Trabajamos con proveedores que no entrenan con tus datos, ciframos la información y podemos desplegar en tu propia nube.' },
      { q: '¿Qué pasa cuando la IA no sabe la respuesta?', a: 'El agente lo reconoce y escala la conversación a una persona con todo el contexto, para que el cliente no repita nada.' },
      { q: '¿Cómo medimos los resultados?', a: 'Definimos métricas desde el inicio: tiempo de respuesta, tickets resueltos sin intervención, ventas asistidas y costo por interacción.' },
    ],
  },
  {
    slug: 'modelado-negocios-digitales',
    line: 'Goline Studio',
    title: 'Software a medida',
    short: 'Productos digitales, plataformas y APIs diseñadas para escalar.',
    headline: 'Del modelo de negocio al producto en producción.',
    intro:
      'Modelamos tu negocio digital, diseñamos la experiencia y construimos el software con células ágiles que entregan valor cada semana. Planificación, desarrollo, despliegue y evolución.',
    icon: 'code',
    features: [
      { title: 'Modelado de negocios digitales', text: 'Definimos propuesta de valor, flujos y métricas antes de escribir la primera línea de código.' },
      { title: 'Desarrollo de productos', text: 'Aplicaciones web y móviles, portales y plataformas SaaS con arquitectura escalable.' },
      { title: 'Soluciones basadas en datos', text: 'Integramos fuentes, construimos tableros y dejamos los datos listos para IA.' },
      { title: 'Células ágiles', text: 'Equipos multidisciplinarios que trabajan en sprints cortos con entregables visibles.' },
    ],
    stack: ['TypeScript', 'Astro', 'React', 'Laravel', 'Node.js', 'PostgreSQL'],
    faq: [
      { q: '¿Qué metodología usan?', a: 'Trabajamos en sprints de dos semanas con demos al final de cada uno. Siempre ves software funcionando, no solo documentos.' },
      { q: '¿El código es mío?', a: 'Sí. Entregamos el código, la documentación y el acceso a los repositorios desde el primer día.' },
      { q: '¿Pueden continuar un proyecto existente?', a: 'Sí. Hacemos una auditoría técnica, proponemos un plan de estabilización y luego seguimos evolucionando el producto.' },
    ],
  },
  {
    slug: 'ecommerce',
    line: 'Goline Studio',
    title: 'E-commerce y marcas',
    short: 'Tiendas que venden más, con experiencia, datos y crecimiento continuo.',
    headline: 'Tiendas en línea que se sienten como tu marca y venden como un equipo comercial.',
    intro:
      'Creamos, migramos y hacemos crecer tiendas en Adobe Commerce, Shopify y plataformas a medida. Hemos trabajado con marcas como Maui and Sons, Volcom, Rip Curl y Rusty.',
    icon: 'cart',
    features: [
      { title: 'Creación de negocio digital', text: 'Estrategia, diseño y lanzamiento de tu canal en línea.' },
      { title: 'Migraciones y upgrades', text: 'Cambio de plataforma o versión sin perder SEO, datos ni ventas.' },
      { title: 'Integraciones', text: 'ERP, pagos, logística, inventario y marketplaces conectados.' },
      { title: 'Growth continuo', text: 'Optimización de conversión, personalización con IA y analítica de punta a punta.' },
    ],
    stack: ['Adobe Commerce', 'Shopify', 'Headless', 'Wompi', 'GA4', 'Klaviyo'],
    faq: [
      { q: '¿Con qué plataformas trabajan?', a: 'Adobe Commerce (Magento), Shopify y desarrollos headless a medida. Te recomendamos la que mejor se ajusta a tu operación.' },
      { q: '¿Ofrecen soporte después del lanzamiento?', a: 'Sí. Tenemos planes de soporte operacional y de evolución continua con acuerdos de nivel de servicio.' },
      { q: '¿Cómo usan la IA en e-commerce?', a: 'Recomendaciones de producto, búsqueda inteligente, descripciones generadas con revisión humana y agentes de atención en WhatsApp.' },
    ],
  },
  {
    slug: 'infra',
    line: 'Goline Cloud',
    title: 'Cloud y ciberseguridad',
    short: 'Infraestructura moderna, observable y protegida.',
    headline: 'Infraestructura que escala sola y se defiende.',
    intro:
      'Modernizamos tu infraestructura en AWS, Google Cloud o Azure, automatizamos despliegues y protegemos tus datos con monitoreo continuo y respuesta ante incidentes.',
    icon: 'shield',
    features: [
      { title: 'Análisis de seguridad', text: 'Auditorías y pruebas para encontrar vulnerabilidades antes que otros.' },
      { title: 'Protección de datos', text: 'Cifrado, gestión de accesos, copias de seguridad y cumplimiento normativo.' },
      { title: 'Monitoreo y respuesta', text: 'Observabilidad, alertas y un protocolo de respuesta ante incidentes.' },
      { title: 'Infraestructura como código', text: 'Kubernetes, Docker y Terraform para entornos reproducibles.' },
    ],
    stack: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Terraform', 'Docker'],
    faq: [
      { q: '¿Qué pasa si sufrimos un incidente?', a: 'Activamos un protocolo de contención, análisis de origen y recuperación, y entregamos un informe con acciones para evitar que se repita.' },
      { q: '¿Pueden migrar mis servidores a la nube?', a: 'Sí. Planificamos la migración por etapas para evitar caídas y optimizamos costos desde el inicio.' },
      { q: '¿Qué incluye una auditoría?', a: 'Revisión de arquitectura, accesos, configuraciones, dependencias y exposición pública, con un plan priorizado de mejoras.' },
    ],
  },
  {
    slug: 'staff',
    line: 'Goline Talent',
    title: 'Talento y consultoría IT',
    short: 'Ingenieros senior que se integran a tu equipo en días.',
    headline: 'El equipo que necesitas, cuando lo necesitas.',
    intro:
      'Seleccionamos y acompañamos desarrolladores, especialistas de datos, IA y DevOps que se integran a tu equipo con nuestra cultura de ingeniería y sin la carga de contratación.',
    icon: 'users',
    features: [
      { title: 'Escuchamos tus necesidades', text: 'Entendemos el proyecto, la cultura y el perfil técnico que buscas.' },
      { title: 'Seleccionamos el talento', text: 'Entrevistas y evaluación técnica hechas por ingenieros.' },
      { title: 'Acompañamiento continuo', text: 'Seguimiento de desempeño y reemplazo rápido si hace falta.' },
    ],
    stack: ['Frontend', 'Backend', 'Data', 'IA / ML', 'DevOps', 'QA'],
    faq: [
      { q: '¿Cuánto tarda en incorporarse un perfil?', a: 'Normalmente entre una y tres semanas, según la especialidad y el nivel de seniority.' },
      { q: '¿Qué pasa si el perfil no encaja?', a: 'Lo reemplazamos sin costo adicional durante el periodo de garantía.' },
      { q: '¿Trabajan en mi zona horaria?', a: 'Sí. Nuestro talento está en Latinoamérica y trabaja en horarios compatibles con Colombia, México, Chile y Estados Unidos.' },
    ],
  },
];

export const clients = [
  { name: 'Maui and Sons', src: '/images/mono/maui.png' },
  { name: 'Volcom', src: '/images/mono/volcom.png' },
  { name: 'Rip Curl', src: '/images/mono/ripcurl.png' },
  { name: 'Rusty', src: '/images/mono/rusty.png' },
  { name: 'Adwise', src: '/images/mono/adwise.png' },
];

export const tech = [
  { name: 'OpenAI', src: '/images/mono/openai.png' },
  { name: 'AWS', src: '/images/mono/aws.png' },
  { name: 'Google Cloud', src: '/images/mono/googlecloud.png' },
  { name: 'Microsoft', src: '/images/mono/microsoft.png' },
  { name: 'Docker', src: '/images/mono/docker.png' },
  { name: 'Kubernetes', src: '/images/mono/kubernetes.png' },
  { name: 'Terraform', src: '/images/mono/terraform.png' },
  { name: 'GitHub', src: '/images/mono/github.png' },
  { name: 'Adobe Commerce', src: '/images/mono/adomecommerce.png' },
  { name: 'Shopify', src: '/images/mono/shopy.png' },
];
