// Spanish overrides for LICENSE_DETAILS.
// Only `label` and `features` are translated. `tier` stays English (official SKU name).
// Array order and length must match licenseDetails.js exactly.

export const LICENSE_DETAILS_ES = {
    'd365-sales': [
        {
            label: 'Nivel base',
            features: [
                "Automatización esencial de la fuerza de ventas (SFA) para organizaciones sin procesos de venta complejos.",
                "Crear, leer, actualizar y eliminar cuentas, contactos y clientes potenciales.",
                "Gestionar facturas, pedidos, presupuestos y listas de precios.",
                "Campañas y listas de marketing.",
                "Hasta 15 tablas personalizadas para la personalización de la aplicación.",
                "Según la guía de licencias de Microsoft Dynamics 365: los clientes que usan Sales Professional no pueden combinar Sales Premium, Sales Enterprise o Sales Insights en la misma instancia de entorno."
            ]
        },
        {
            label: '+ Añade a Professional',
            features: [
                "Personalización sin restricciones — elimina el límite de 15 tablas personalizadas.",
                "Inteligencia integrada y previsión manual.",
                "Funcionalidades de Sales Premium con capacidad limitada: Conversation Intelligence, Sales Accelerator (1.500 registros/entorno/mes), puntuación de clientes potenciales y oportunidades.",
                "Copilot en Dynamics 365 Sales.",
                "2.000 respuestas de Customer Voice por inquilino/mes."
            ]
        },
        {
            label: '+ Añade a Enterprise',
            features: [
                "Acceso completo y sin restricciones a toda la automatización e IA de Sales Insights.",
                "Pronóstico predictivo, análisis de relaciones e inteligencia de pipeline.",
                "Assistant Studio, Connection Insights y análisis de notas.",
                "Lector de tarjetas de visita (200 escaneos/usuario/mes).",
                "1.000 créditos de Copilot por usuario/mes para agentes de IA."
            ]
        }
    ],
    'd365-cs': [
        {
            label: 'Nivel base',
            features: [
                "Recursos simplificados para agentes que gestionan escenarios menos complejos.",
                "Gestión de casos básica y chat agente-equipo.",
                "Sitio web de autoservicio y base de conocimientos para clientes.",
                "Hasta 15 tablas personalizadas para la personalización."
            ]
        },
        {
            label: '+ Añade a Professional',
            features: [
                "Programación, despacho, creación de equipos y gestión de recursos avanzados mediante la integración con Field Service y Project Operations.",
                "Enrutamiento unificado inteligente (50 rutas de registro/usuario/mes).",
                "Customer Service Insights: análisis impulsados por IA, agrupación temática y análisis de sentimiento.",
                "Elimina el límite de tablas personalizadas para una personalización completa de Dataverse.",
                "2.000 respuestas de Customer Voice por usuario/mes."
            ]
        },
        {
            label: '+ Añade a Enterprise',
            features: [
                "Solución integrada Copilot-first de centro de contacto y CRM, impulsada por IA generativa.",
                "Funcionalidades completas de centro de contacto (digital + voz).",
                "1.000 créditos de Copilot por usuario/mes.",
                "Nota: actualizar a Premium retira el derecho de Customer Voice presente en Enterprise."
            ]
        },
        {
            label: 'Licencia independiente',
            features: [
                "Centro de contacto integral con canales digitales y de voz — no requiere CRM de Customer Service.",
                "Interacción digital: chat en vivo, SMS, correo electrónico, redes sociales (Facebook, WhatsApp, LINE, Apple Messages for Business) y Microsoft Teams.",
                "Voz nativa impulsada por Azure Communication Services (uso de operador/ACS facturado por separado); admite Azure Direct Routing para operadores existentes.",
                "Enrutamiento IA-first: enrutamiento unificado inteligente, asignación basada en habilidades e información de gestión de la fuerza laboral.",
                "Escritorio de agente asistido por Copilot con resúmenes en tiempo real, sugerencias de la siguiente mejor acción y análisis de conversación.",
                "Autoservicio: IVR, voicebots y agentes virtuales impulsados por IA generativa creados en Copilot Studio.",
                "Abierto y extensible — se integra con CRMs existentes mediante APIs y adaptadores.",
                "Requiere créditos de Copilot (vendidos por separado) para escenarios de IA generativa; facturación anual."
            ]
        },
        {
            label: 'Licencia independiente',
            features: [
                "Centro de contacto solo digital — canales de mensajería y chat sin voz nativa.",
                "Chat en vivo, SMS, correo electrónico, redes sociales (Facebook, WhatsApp, LINE, Apple Messages for Business) y canales de Microsoft Teams.",
                "Enrutamiento unificado IA-first con 50 rutas de registro/usuario/mes (excluyendo chats, llamadas y SMS); asignación basada en habilidades en canales digitales.",
                "Escritorio de agente asistido por Copilot con resúmenes de conversación y sugerencias de siguiente mejor acción.",
                "Chatbots de autoservicio y agentes virtuales creados en Copilot Studio.",
                "La capacidad de mensajes se compra por separado mediante Microsoft Copilot Studio.",
                "Abierto y extensible — se integra con CRMs existentes mediante APIs y adaptadores."
            ]
        },
        {
            label: 'Licencia independiente',
            features: [
                "Centro de contacto solo de voz — voz nativa entrante y saliente sin canales de mensajería digital.",
                "Voz nativa impulsada por Azure Communication Services (uso de operador/ACS facturado por separado); admite Azure Direct Routing para operadores existentes.",
                "Derechos de capacidad: 2.000 minutos de Intelligent Voicebot (IVR)/usuario/mes, 6.000 minutos de Call Intelligence/usuario/mes y 35 GB de almacenamiento de archivos en Dataverse.",
                "Enrutamiento IA-first, asignación basada en habilidades e información de gestión de la fuerza laboral para cargas de trabajo de voz.",
                "Escritorio de agente asistido por Copilot con transcripción en tiempo real, resúmenes de llamadas y sugerencias de siguiente mejor acción.",
                "IVR y voicebots de autoservicio creados en Copilot Studio.",
                "Abierto y extensible — se integra con CRMs existentes mediante APIs y adaptadores."
            ]
        }
    ],
    'd365-field': [
        {
            label: 'Licencia principal',
            features: [
                "Despachadores, planificadores y técnicos de campo a tiempo completo.",
                "Ciclo de vida completo de órdenes de trabajo: creación, programación, despacho, inventario y devoluciones.",
                "Tablero de programación, preparación para Resource Scheduling Optimization y planificación de rutas.",
                "Integración estrecha con la gestión de casos de Customer Service.",
                "Incluye la última aplicación Field Service Mobile.",
                "Licencia Bing Maps Developer incluida con limitaciones en transacciones facturables (consulte la licencia de Microsoft Bing Maps).",
                "Incluye derecho a Dynamics 365 Guides y Remote Assist (hasta el 31 de diciembre de 2026).",
                "2.000 respuestas de Customer Voice por inquilino/mes."
            ]
        },
        {
            label: 'Licencia complementaria',
            features: [
                "Para técnicos externos / a tiempo parcial — proporciona la funcionalidad esencial de gestión de órdenes de trabajo para escalar las operaciones de campo.",
                "Ejecutar y actualizar las órdenes de trabajo ya asignadas; crear casos con capacidad de edición limitada (sin SLAs/derechos/enrutamiento de casos).",
                "Ver activos de cliente, gestionar recursos propios y autoplanificar (solo recursos propios y planificación manual).",
                "Incluye la última aplicación Field Service Mobile.",
                "No incluye despacho, administración de programación ni gestión de inventario.",
                "Según la guía de licencias de Microsoft Dynamics 365: las organizaciones deben poseer ya una licencia de Field Service antes de poder comprar licencias Field Service Contractor.",
                "Las licencias SL Field Service Contractor no incluyen derechos de capacidad de Dataverse."
            ]
        }
    ],
    'd365-ci': [
        {
            label: 'Licencia de inquilino',
            features: [
                "Con licencia por inquilino; incluye derechos para instalar Customer Insights – Journeys (antes Marketing) y Customer Insights – Data (antes Customer Insights) en un número ilimitado de entornos de producción o sandbox.",
                "Customer Insights – Journeys: crear y ejecutar recorridos de cliente personalizados a través de correo electrónico, SMS, notificaciones push, etc.",
                "Customer Insights – Data: unificar y enriquecer datos de cliente con la Customer Data Platform (CDP) para obtener información profunda sobre comportamientos, preferencias e interacciones.",
                "Capacidades centrales: 10.000 Interacted People (Journeys) y 100.000 Unified People (Data) por inquilino/mes.",
                "Escale cada medidor de forma independiente con paquetes complementarios Interacted People y Unified People (niveles de volumen T1/T2/T3).",
                "El precio attach requiere un mínimo de 10 licencias base elegibles de Dynamics 365: Customer Service, Sales, Field Service, Finance, Supply Chain Management o Commerce."
            ]
        }
    ],
    'd365-finance': [
        {
            label: 'Nivel base',
            features: [
                "Gestión financiera principal inteligente, automatizada y confiable con integración profunda de datos y procesos en Dynamics 365, Microsoft 365 y aplicaciones de socios.",
                "Libro mayor, cuentas por pagar/cobrar, activos fijos, presupuestos, contabilidad de costos global y motor fiscal.",
                "Consolidaciones multientidad, multimoneda y multilingües con localizaciones específicas por país.",
                "Acceso de solo lectura a la planificación de rendimiento empresarial (la creación de planes/presupuestos/pronósticos requiere Finance Premium).",
                "Asistencia de Copilot para perspectivas financieras, procesamiento de facturas de proveedores y flujos de cobro.",
                "Incluye 100 transacciones de facturación electrónica y 100 transacciones de captura de facturas por inquilino/mes."
            ]
        },
        {
            label: '+ Añade a Finance',
            features: [
                "Espacios de trabajo avanzados de gestión de rendimiento empresarial para planificación, presupuestos y pronósticos.",
                "Licencia requerida para usuarios que necesiten crear nativamente planes, presupuestos, pronósticos o informes de análisis financiero.",
                "Facturación por suscripción con modelos de ingresos recurrentes y reconocimiento de ingresos alineado con IFRS 15 / ASC 606.",
                "Escenarios avanzados de IA como análisis de varianza asistido por Copilot y pronóstico de flujo de caja.",
                "Duplica la capacidad a 200 transacciones de facturación electrónica y 200 transacciones de captura de facturas por inquilino/mes.",
                "1.000 créditos de Copilot por usuario/mes."
            ]
        }
    ],
    'd365-scm': [
        {
            label: 'Nivel base',
            features: [
                "Visibilidad e inteligencia en tiempo real para fabricantes, distribuidores y minoristas — operaciones proactivas en cumplimiento de pedidos, planificación, abastecimiento, producción, inventario, almacén y transporte.",
                "Módulos avanzados: gestión de activos, contabilidad de costos, gestión de cambios de ingeniería y ejecución de fabricación.",
                "Modos de fabricación discreta, por procesos, lean y por proyectos con gestión de calidad integrada.",
                "Aplicación móvil Warehouse Management con escaneo portátil, procesamiento de oleadas/paquetes/cargas y seguimiento de inventario por matrícula.",
                "Asistencia de Copilot para decisiones de abastecimiento, perspectivas de pronóstico de demanda y gestión de excepciones en la cadena de suministro.",
                "Capacidades de inquilino predeterminadas: 100 activos, 100 transacciones de facturación electrónica, 100 transacciones de captura de facturas y 1.000 líneas de pedido por inquilino/mes."
            ]
        },
        {
            label: '+ Añade a SCM',
            features: [
                "Demand Planning con generación de pronósticos, segmentación y gestión de excepciones impulsada por Copilot.",
                "Licencia requerida para usuarios que necesiten crear nativamente planes, presupuestos, pronósticos o informes de análisis de demanda.",
                "Optimización avanzada de inventario y reposición con planificación multinivel entre sitios y almacenes.",
                "Simulación de escenarios integrada y análisis what-if para equilibrar oferta/demanda.",
                "Duplica la capacidad de facturación a 200 transacciones de facturación electrónica y 200 transacciones de captura de facturas por inquilino/mes (las capacidades de activos y líneas de pedido permanecen en 100 y 1.000).",
                "1.000 créditos de Copilot por usuario/mes."
            ]
        }
    ],
    'd365-hr': [
        {
            label: 'Licencia principal',
            features: [
                "Compensación, beneficios, seguimiento de ausencias/permisos, cumplimiento normativo y feedback de desempeño.",
                "Gestión de programas de formación estandarizados con catálogos de cursos, inscripciones y finalizaciones.",
                "Gestión organizacional: jerarquías de puestos, empleos, departamentos y flujos de ciclo de vida del trabajador (de la contratación a la jubilación).",
                "Datos centralizados de personas extensibles mediante Dataverse y Power Platform; se integra con soluciones de socios de nómina.",
                "Asistencia de Copilot para consultas de empleados, redacción de documentos y analítica de RR. HH.",
                "2.000 respuestas de Customer Voice por inquilino/mes."
            ]
        },
        {
            label: 'Licencia independiente',
            features: [
                "Autoservicio del empleado: actualizar información personal, reportar baja por enfermedad, ver beneficios, solicitar vacaciones y descargar nóminas.",
                "Autoservicio del manager: aprobar permisos de empleados, ver información de reporte del equipo y acceder a analíticas básicas de equipo.",
                "Acceso optimizado para móvil mediante las experiencias compañeras Dynamics 365 / Power Apps.",
                "Según la guía de licencias de Microsoft Dynamics 365: solo otorga acceso a Human Resources, no a ningún otro producto de Dynamics 365.",
                "No incluye derechos completos de usuario de RR. HH. — proporciona solo la funcionalidad de autoservicio que empleados y managers suelen necesitar.",
                "Diseñado para la base amplia de empleados; los especialistas completos de RR. HH. deben tener licencia con Human Resources."
            ]
        }
    ],
    'd365-commerce': [
        {
            label: 'Nivel base',
            features: [
                "Tienda, back office y centro de llamadas unificados en una plataforma minorista de extremo a extremo.",
                "Punto de venta (POS) moderno en Windows, iOS y Android con soporte sin conexión y herramientas de clienteling.",
                "Pronóstico inteligente, recomendaciones de productos impulsadas por IA y programas de fidelidad personalizados.",
                "Operaciones de tienda, catálogos, estrategia de merchandising, motor de precios/descuentos y facturación por suscripción.",
                "Gestión omnicanal de pedidos: BOPIS (compra en línea, recogida en tienda), pasillo infinito y envío desde la tienda.",
                "1.000 líneas de pedido por inquilino/mes."
            ]
        },
        {
            label: '+ Añade a Commerce',
            features: [
                "Niveles basados en inquilino para soportar plenamente vitrinas e-commerce B2B y B2C con bandas de capacidad basadas en AOV.",
                "Commerce Scale Unit – Cloud para procesamiento crítico en picos de demanda.",
                "Motor de comercio headless impulsado por API para canales emergentes (redes sociales, marketplaces, IoT).",
                "CMS integrado con autoría de arrastrar y soltar, pruebas A/B y optimización SEO.",
                "Integraciones nativas con conectores de pago, servicios fiscales y proveedores de calificaciones/reseñas.",
                "Según la guía de licencias de Microsoft Dynamics 365: cada entorno e-commerce adicional requiere una licencia adicional de e-Commerce Tier."
            ]
        }
    ],
    'd365-po': [
        {
            label: 'Licencia completa',
            features: [
                "Plataforma unificada que conecta ventas, gestión de recursos, gestión de proyectos y finanzas en un solo producto.",
                "De la oportunidad al cobro: presupuestos basados en proyectos con estructura de desglose del trabajo (WBS), contratos y facturación a precio fijo / tiempo y materiales / por hitos.",
                "Planificación de proyectos, programación y gestión de recursos: Gantt, dependencias, líneas base, solicitudes de recursos basadas en habilidades y planificación de capacidad.",
                "Gestión de tiempo, gastos y subcontratistas con flujos de aprobación impulsados por políticas y conciliación a tres vías frente a presupuestos del proyecto.",
                "Contabilidad de proyectos: tarifas de costo, precios intercompañía y reconocimiento de ingresos (porcentaje de finalización / a medida que se factura) alineado con IFRS 15 / ASC 606.",
                "Paneles de cartera multiproyecto con valor ganado (EV), CPI/SPI, análisis de margen y asistencia de Copilot para resúmenes de estado e identificación de riesgos."
            ]
        }
    ],
    'd365-bc': [
        {
            label: 'Nivel base',
            features: [
                "Gestión financiera: pronósticos asistidos por IA, conciliación bancaria, diferimientos y múltiples divisas.",
                "Cadena de suministro: inventario básico, envíos directos, gestión de pedidos de venta/compra y captura de datos de almacén.",
                "Campañas CRM, recursos humanos básicos y herramientas de gestión de proyectos.",
                "Amplia gama de capacidades operativas y de gestión adaptadas a PYMES."
            ]
        },
        {
            label: '+ Añade a Essentials',
            features: [
                "Gestión de órdenes de servicio: planificación, despacho y gestión de contratos de servicio.",
                "Fabricación: fabricación ágil, planificación de capacidad básica, centros de máquinas y BOMs de producción."
            ]
        }
    ],
    'power-apps': [
        {
            label: 'Licencia completa',
            features: [
                "Crear y ejecutar aplicaciones personalizadas ilimitadas y crear y acceder a sitios Power Pages ilimitados.",
                "Acceso completo a Dataverse con creación y acceso ilimitado a tablas personalizadas.",
                "Conectores estándar, premium y personalizados, además de transferencia de datos a servicios locales y en la nube.",
                "Capacidad dedicada de Dataverse: 250 MB de base de datos y 2 GB de archivos acumulados por usuario (a nivel de inquilino).",
                "Derechos de uso de Power Automate para flujos en la nube en el contexto de la aplicación (RPA requiere una compra separada de Power Automate Premium).",
                "Managed Environments para administración y gobernanza a escala.",
                "Según la Power Platform Licensing Guide de abril de 2026: 20 USD por usuario/mes, facturación anual."
            ]
        },
        {
            label: 'Licencia por volumen',
            features: [
                "Mismos derechos de Power Apps Premium que la SKU estándar de 20 USD/usuario/mes.",
                "Según la Power Platform Licensing Guide de abril de 2026: 12 USD por usuario/mes con 2.000+ nuevas licencias, facturación anual.",
                "Dirigido a despliegues empresariales a gran escala que estandarizan Power Apps para miles de usuarios.",
                "Adquirido a través de su equipo de cuenta de Microsoft o enmienda al Enterprise Agreement.",
                "Todas las demás capacidades (capacidad de Dataverse, conectores premium, Managed Environments) son idénticas a la SKU Premium estándar."
            ]
        }
    ],
    'power-automate': [
        {
            label: 'Licencia principal',
            features: [
                "Automatizar aplicaciones modernas mediante automatización de procesos digitales basada en API (flujos en la nube: automatizados, instantáneos, programados).",
                "Automatizar aplicaciones heredadas mediante automatización robótica de procesos basada en interfaz de usuario (flujos de escritorio asistidos / RPA).",
                "Flujos de procesos empresariales para flujos de trabajo estructurados, con estado e interactivos con humanos.",
                "Process Mining: visualizar y analizar procesos (capacidad adicional de Process Mining disponible como complemento de 100 GB/inquilino/mes).",
                "Conectores estándar, premium y personalizados, además de transferencia de datos a servicios locales y en la nube.",
                "Derechos de uso de Dataverse: 250 MB de base de datos y 2 GB de archivos acumulados por usuario (a nivel de inquilino).",
                "Managed Environments para administración y gobernanza a escala.",
                "Según la Power Platform Licensing Guide de abril de 2026: 15 USD por usuario/mes, facturación anual; una licencia permite al usuario (o capacidad) usar Power Automate en cualquier entorno del inquilino."
            ]
        },
        {
            label: 'Licencia independiente',
            features: [
                "Licencia un solo bot de \"automatización\" para automatización robótica de procesos no asistida (se ejecuta de forma independiente del usuario) o un proceso de negocio crítico mediante automatización de procesos digitales basada en interfaz de usuario.",
                "Alternativamente puede licenciar un proceso de negocio central de alto nivel (p. ej., onboarding de RR. HH.) para acceso a nivel de organización sin licencia por usuario.",
                "Según la Power Platform Licensing Guide de abril de 2026: 150 USD por bot/mes (facturación anual) — por entorno/mes; una licencia permite que el bot o proceso se use en un solo entorno, y se requiere una licencia adicional si el mismo bot o proceso se despliega en otro entorno.",
                "Incluye derechos de uso de Dataverse: 50 MB de base de datos y 200 MB de archivos acumulados por licencia."
            ]
        }
    ],
    'power-pages': [
        {
            label: 'Nivel de entrada',
            features: [
                "Licencia visitantes autenticados que inician sesión mediante un proveedor de identidad (Microsoft Entra ID, proveedores sociales, B2C, SAML, OpenID o personalizado).",
                "Cada paquete cubre 100 usuarios conectados por sitio por mes.",
                "Nivel inicial — sin compromiso mínimo de paquete.",
                "Uso ilimitado de conectores estándar, premium y personalizados.",
                "Acceso completo a Dataverse (incluyendo tablas personalizadas y complejas); acumula 2 GB de base de datos + 16 GB de capacidad de archivos por paquete.",
                "Managed Environments para administración y gobernanza a escala."
            ]
        },
        {
            label: 'Nivel por volumen',
            features: [
                "Mismos derechos que Authenticated T1 (100 usuarios conectados/sitio/mes por paquete) a un precio por paquete reducido.",
                "Compra mínima: 100 paquetes (= 10.000 usuarios autenticados/sitio/mes).",
                "Caso de uso objetivo: portales externos medianos a grandes con tráfico autenticado constante."
            ]
        },
        {
            label: 'Nivel de alto volumen',
            features: [
                "Mismos derechos que Authenticated T1 al precio por paquete más bajo.",
                "Compra mínima: 1.000 paquetes (= 100.000 usuarios autenticados/sitio/mes).",
                "Caso de uso objetivo: portales externos a escala empresarial, comunidades de socios/clientes y marketplaces B2B."
            ]
        },
        {
            label: 'Nivel de entrada',
            features: [
                "Licencia visitantes anónimos que acceden a los sitios sin iniciar sesión.",
                "Cada paquete cubre 500 usuarios anónimos por sitio por mes.",
                "Nivel inicial — sin compromiso mínimo de paquete.",
                "Uso ilimitado de conectores estándar, premium y personalizados.",
                "Acceso completo a Dataverse (incluyendo tablas personalizadas y complejas); acumula 500 MB de base de datos + 4 GB de capacidad de archivos por paquete.",
                "Managed Environments para administración y gobernanza a escala."
            ]
        },
        {
            label: 'Nivel por volumen',
            features: [
                "Mismos derechos que Anonymous T1 (500 usuarios anónimos/sitio/mes por paquete) a un precio por paquete reducido.",
                "Compra mínima: 20 paquetes (= 10.000 usuarios anónimos/sitio/mes).",
                "Caso de uso objetivo: sitios de marketing, bases de conocimiento y portales públicos con tráfico moderado."
            ]
        },
        {
            label: 'Nivel de alto volumen',
            features: [
                "Mismos derechos que Anonymous T1 al precio por paquete más bajo.",
                "Compra mínima: 200 paquetes (= 100.000 usuarios anónimos/sitio/mes).",
                "Caso de uso objetivo: sitios web públicos de alto tráfico, portales de autoservicio y páginas de aterrizaje externas a gran escala."
            ]
        }
    ],
    'copilot-studio': [
        {
            label: 'Licencia de inquilino',
            features: [
                "Licencia a nivel de inquilino vendida en paquetes de capacidad de 25.000 créditos de Copilot a 200 USD/paquete/mes.",
                "Cada acción o respuesta del agente consume un número variable de créditos de Copilot dependiendo de la operación.",
                "Disponible en dos modelos de facturación con funciones de producto idénticas: Plan de prepago (unidades de compromiso de créditos de Copilot prepagadas elegidas por adelantado, ahorro de hasta 20 % frente a pago por uso, conmutación automática a pago por uso cuando los créditos prepagados se agotan) y Pago por uso (sin compromiso inicial, facturado mensualmente por consumo real).",
                "Suscripción de Azure requerida para vincular el entorno a la facturación (especialmente para pago por uso).",
                "Derechos completos para construir agentes y bots inteligentes con autoría gráfica low-code; publicar en canales externos (sitios web, aplicaciones, plataformas sociales) y permitir que usuarios sin licencia los consuman.",
                "Incluye flujos en la nube de Power Automate (automatizados, instantáneos, programados) con hasta 250.000 solicitudes de Power Platform por día a nivel de inquilino.",
                "Los flujos en la nube no consumen la capacidad primaria de mensajes/créditos de Copilot Studio.",
                "Acceso completo a conectores estándar, premium y personalizados; transferencia de datos a servicios locales y en la nube.",
                "Derechos completos de uso de Dataverse: 250 MB de base de datos y 2 GB de capacidad de archivos por licencia.",
                "Managed Environments para administración y gobernanza completas a escala."
            ]
        }
    ],
    'sust-emissions': [
        {
            label: 'Nivel base',
            features: [
                "Seguimiento fundamental de carbono (Alcance 1 y 2), agua y residuos con modelos de datos preconstruidos.",
                "Ingesta de datos de actividad desde fuentes locales, en la nube e IoT mediante conectores listos para usar.",
                "Bibliotecas integradas de factores de emisión y cálculos automatizados alineados con el GHG Protocol.",
                "Análisis interactivos, scorecards y paneles de reporte ESG.",
                "Definición de objetivos y seguimiento del progreso frente a metas de sostenibilidad."
            ]
        },
        {
            label: '+ Añade a Essentials',
            features: [
                "Seguimiento avanzado de emisiones de Alcance 3 en toda la cadena de valor (categorías upstream y downstream).",
                "Cálculo de huella de carbono de producto (PCF) y compartición con proveedores y clientes.",
                "Copilot en Sustainability Manager para perspectivas en lenguaje natural, reportes y comprobaciones de calidad de datos.",
                "Gestión ESG de la cadena de valor y flujos de involucramiento de proveedores.",
                "Capacidad de ingesta de datos ampliada y análisis avanzados para mandatos complejos de reporte ESG."
            ]
        }
    ]
};
