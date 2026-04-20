// Localized prose for the AI Capabilities pillar.
// Brand/feature names (product names, agent names, MCP server names,
// documentation link labels) are intentionally kept in English because
// Microsoft uses them as proper nouns across every locale.
//
// Only descriptive prose (agent descriptions, the MCP capability banner,
// and the 26 walkthrough video chapter annotations) is translated here.
// Lookups always fall back to English when a translation is missing, so
// `en-GB` (which has no divergence from `en` in any of these strings)
// inherits the English text automatically.

// --- Agent descriptions --------------------------------------------------
// Keyed by agent id (see AGENT_GROUPS in agentsData.js).
export const AGENT_DESCRIPTIONS_I18N = {
    'sales-qualification': {
        fr: "Recherche de manière autonome les leads entrants, les évalue par rapport à votre profil de client cible, rédige des e-mails de prospection personnalisés et — en mode Recherche-et-engagement — engage les prospects, applique les critères BANT et transmet les leads qualifiés aux commerciaux.",
        de: "Recherchiert eingehende Leads autonom, bewertet sie anhand Ihres Zielkundenprofils, verfasst personalisierte Kontakt-E-Mails und engagiert sich – im Modus Recherchieren-und-engagieren – aktiv mit Interessenten, wendet die BANT-Kriterien an und übergibt qualifizierte Leads an die Vertriebsmitarbeiter.",
        es: "Investiga de forma autónoma los clientes potenciales entrantes, los evalúa frente a tu perfil de cliente objetivo, redacta correos de contacto personalizados y — en el modo Investigar e interactuar — interactúa con los prospectos, aplica los criterios BANT y entrega los leads cualificados a los vendedores.",
        it: "Ricerca in autonomia i lead in arrivo, li valuta rispetto al profilo del cliente target, redige e-mail di contatto personalizzate e — in modalità Ricerca-e-coinvolgimento — coinvolge i prospect, applica i criteri BANT e passa i lead qualificati ai venditori.",
        ar: "يبحث تلقائياً في العملاء المحتملين الواردين، ويقيّمهم وفق ملف العميل المستهدف لديك، ويصيغ رسائل تواصل مخصّصة، وفي وضع البحث والتفاعل يتفاعل مع المحتملين ويطبّق معايير BANT ويحوّل العملاء المؤهلين إلى البائعين.",
        nl: "Onderzoekt binnenkomende leads autonoom, beoordeelt ze op basis van je doelklantprofiel, stelt persoonlijke contactmails op en — in de modus Onderzoeken-en-betrekken — gaat actief met prospects in gesprek, past de BANT-criteria toe en draagt gekwalificeerde leads over aan de verkopers."
    },
    'sales-research': {
        fr: "Aide les commerciaux à résoudre des questions métier complexes via un dialogue en langage naturel avec leurs données de vente, en mettant en avant des insights et des plans de recherche directement exploitables.",
        de: "Unterstützt Vertriebsmitarbeiter beim Lösen komplexer geschäftlicher Fragen durch einen Dialog in natürlicher Sprache mit ihren Vertriebsdaten und liefert sofort umsetzbare Erkenntnisse und Recherchepläne.",
        es: "Ayuda a los vendedores a resolver preguntas empresariales complejas mediante un diálogo en lenguaje natural con sus datos de ventas, presentando insights y planes de investigación accionables al instante.",
        it: "Aiuta i venditori a risolvere domande aziendali complesse attraverso un dialogo in linguaggio naturale con i loro dati di vendita, evidenziando insight e piani di ricerca subito utilizzabili.",
        ar: "يساعد البائعين على معالجة الأسئلة التجارية المعقدة من خلال حوار بلغة طبيعية مع بيانات المبيعات الخاصة بهم، ويُبرز رؤى وخطط بحث قابلة للتنفيذ فوراً.",
        nl: "Helpt verkopers complexe zakelijke vragen op te lossen via een natuurlijke-taaldialoog met hun verkoopgegevens en levert direct bruikbare inzichten en onderzoeksplannen."
    },
    'sales-close': {
        fr: "Conçu pour les ventes à fort volume, il automatise le cycle de vente de bout en bout — engageant les clients de manière proactive et recommandant des produits via des playbooks personnalisables pour accélérer la signature.",
        de: "Für Geschäfte mit hoher Geschwindigkeit konzipiert, automatisiert er den gesamten Verkaufsprozess: Er spricht Kunden proaktiv an und empfiehlt Produkte aus anpassbaren Playbooks, um den Abschluss zu beschleunigen.",
        es: "Diseñado para ventas de alta velocidad, automatiza todo el ciclo comercial: interactúa proactivamente con los clientes y recomienda productos a partir de playbooks personalizables para acelerar el cierre.",
        it: "Pensato per vendite ad alta velocità, automatizza l'intero ciclo commerciale, coinvolgendo proattivamente i clienti e suggerendo prodotti da playbook personalizzabili per accelerare la chiusura.",
        ar: "مصمم للصفقات السريعة، يؤتمت دورة البيع من البداية إلى النهاية — يتفاعل مع العملاء بشكل استباقي ويوصي بالمنتجات من خلال أدلة قابلة للتخصيص لتسريع الإغلاق.",
        nl: "Ontworpen voor snelle deals: automatiseert het volledige verkoopproces, benadert klanten proactief en doet productaanbevelingen op basis van aanpasbare playbooks om de afsluiting te versnellen."
    },
    'case-management': {
        fr: "Automatise tout le cycle de vie des dossiers — création, prédiction de champs, mise à jour et résolution — de manière autonome sur les canaux chat, e-mail et voix.",
        de: "Automatisiert den gesamten Fall-Lebenszyklus – Anlegen, Feldvorhersage, Aktualisieren und Lösen – autonom über die Kanäle Chat, E-Mail und Sprache.",
        es: "Automatiza el ciclo de vida completo de los casos — creación, predicción de campos, actualización y resolución — de forma autónoma a través de los canales de chat, correo y voz.",
        it: "Automatizza l'intero ciclo di vita dei casi — creazione, previsione dei campi, aggiornamento e risoluzione — in modo autonomo sui canali chat, e-mail e voce.",
        ar: "يؤتمت دورة حياة الحالات بالكامل — الإنشاء والتنبؤ بالحقول والتحديث والحل — بشكل مستقل عبر قنوات الدردشة والبريد الإلكتروني والصوت.",
        nl: "Automatiseert de volledige case-levenscyclus — aanmaken, veldvoorspelling, bijwerken en oplossen — autonoom over chat-, e-mail- en spraakkanalen."
    },
    'intent-knowledge': {
        fr: "Deux agents complémentaires qui bouclent la boucle de la compréhension client. Customer Intent cartographie les besoins clients à partir des conversations passées et en direct pour orienter le routage et l'assistance ; Customer Knowledge Management transforme chaque dossier résolu en brouillons d'articles conformes, gardant la base de connaissances à jour.",
        de: "Zwei sich ergänzende Agenten, die das Kundenverständnis vervollständigen. Customer Intent leitet Kundenbedürfnisse aus früheren und laufenden Gesprächen ab, um Routing und Hilfestellung zu steuern; Customer Knowledge Management verwandelt jeden gelösten Fall in konforme Artikel-Entwürfe und hält die Wissensdatenbank aktuell.",
        es: "Dos agentes complementarios que cierran el ciclo de la comprensión del cliente. Customer Intent identifica las necesidades de los clientes a partir de conversaciones pasadas y en directo para guiar el enrutamiento y la asistencia; Customer Knowledge Management convierte cada caso resuelto en borradores de artículos conformes, manteniendo la base de conocimiento al día.",
        it: "Due agenti complementari che chiudono il cerchio della comprensione del cliente. Customer Intent individua le esigenze dei clienti da conversazioni passate e in tempo reale per guidare instradamento e suggerimenti; Customer Knowledge Management trasforma ogni caso risolto in bozze di articoli conformi, mantenendo aggiornata la knowledge base.",
        ar: "وكيلان متكاملان يُكمِلان حلقة فهم العملاء. يرسم Customer Intent احتياجات العملاء من المحادثات السابقة والمباشرة لتوجيه التوزيع والإرشاد؛ ويحوّل Customer Knowledge Management كل حالة محلولة إلى مسودات مقالات متوافقة لإبقاء قاعدة المعرفة محدّثة.",
        nl: "Twee complementaire agents die de cirkel van klantbegrip sluiten. Customer Intent brengt klantbehoeften in kaart op basis van eerdere en lopende gesprekken om routering en begeleiding te sturen; Customer Knowledge Management zet elke opgeloste case om in conforme conceptartikelen en houdt de kennisbank actueel."
    },
    'quality-evaluation': {
        fr: "Réalise des évaluations autonomes assistées par l'IA des interactions agent–client à partir de cadres définis par les superviseurs, pour passer à l'échelle l'assurance qualité sur les dossiers et les conversations.",
        de: "Führt autonome, KI-gestützte Bewertungen von Mitarbeiter-Kunden-Interaktionen anhand von durch Supervisoren definierten Bewertungsrahmen durch und skaliert so die Qualitätssicherung über Fälle und Gespräche hinweg.",
        es: "Realiza evaluaciones autónomas asistidas por IA de las interacciones representante–cliente a partir de marcos definidos por los supervisores, escalando el aseguramiento de calidad en casos y conversaciones.",
        it: "Esegue valutazioni autonome assistite dall'IA delle interazioni operatore–cliente sulla base di framework definiti dai supervisori, portando in scala il controllo qualità su casi e conversazioni.",
        ar: "يجري تقييمات مستقلة بمساعدة الذكاء الاصطناعي لتفاعلات الممثل والعميل وفق أُطر يحدّدها المشرفون، لتوسيع نطاق ضمان الجودة عبر الحالات والمحادثات.",
        nl: "Voert autonome, door AI ondersteunde beoordelingen van medewerker–klantinteracties uit op basis van door supervisors vastgestelde frameworks en schaalt zo de kwaliteitsbewaking over cases en gesprekken."
    },
    'scheduling-operations': {
        fr: "Optimise dynamiquement le planning d'un technicien en respectant les rendez-vous verrouillés et les heures de travail, tout en déplaçant les interventions non engagées pour maximiser le taux d'utilisation ou prioriser les demandes urgentes.",
        de: "Optimiert den Zeitplan eines einzelnen Technikers dynamisch, berücksichtigt fixierte Buchungen und Arbeitszeiten und verschiebt nicht zugesicherte Aufgaben, um die Auslastung zu maximieren oder dringende Anforderungen vorzuziehen.",
        es: "Optimiza dinámicamente la agenda de un técnico, respetando las reservas bloqueadas y las horas laborables, mientras reorganiza el trabajo no comprometido para maximizar la utilización o priorizar peticiones urgentes.",
        it: "Ottimizza dinamicamente la pianificazione di un singolo tecnico, rispettando le prenotazioni bloccate e gli orari di lavoro, e sposta il lavoro non vincolato per massimizzare l'utilizzo o anticipare richieste ad alta priorità.",
        ar: "يحسّن جدول الفني الواحد ديناميكياً مع احترام المواعيد المثبتة وساعات العمل، وينقل الأعمال غير الملتزم بها لزيادة معدّل الاستخدام أو تقديم الطلبات ذات الأولوية العالية.",
        nl: "Optimaliseert dynamisch de planning van één monteur, respecteert vastgezette boekingen en werkuren en verschuift niet-vastgelegde opdrachten om de bezetting te maximaliseren of urgente werkzaamheden voorrang te geven."
    },
    'account-reconciliation': {
        fr: "Rapproche les sous-livres (comptes fournisseurs, comptes clients, taxes, banque) au grand livre quasi en temps réel, recommande des actions correctives pour les exceptions telles que les écarts de montant de pièce, et conserve une piste d'audit complète de chaque correction.",
        de: "Stimmt Nebenbücher (Kreditoren, Debitoren, Steuern, Bank) nahezu in Echtzeit mit dem Hauptbuch ab, empfiehlt Korrekturmaßnahmen für Ausnahmen wie abweichende Belegbeträge und führt einen vollständigen Audit-Trail jeder Korrektur.",
        es: "Concilia los submayores (cuentas por pagar, cuentas por cobrar, impuestos, banco) con el libro mayor casi en tiempo real, recomienda acciones de mitigación para excepciones como diferencias de importe de comprobante y mantiene una pista de auditoría completa de cada corrección.",
        it: "Riconcilia i sottoregistri (contabilità fornitori, contabilità clienti, imposte, banca) con la contabilità generale quasi in tempo reale, suggerisce azioni di mitigazione per eccezioni come differenze di importo dei giustificativi e mantiene un audit trail completo di ogni correzione.",
        ar: "يطابق دفاتر المساعدة (الذمم الدائنة، الذمم المدينة، الضرائب، البنك) مع دفتر الأستاذ العام في الوقت شبه الحقيقي، ويقترح إجراءات معالجة للاستثناءات مثل عدم تطابق مبالغ السندات، ويحتفظ بسجل تدقيق كامل لكل تصحيح.",
        nl: "Stemt subadministraties (crediteuren, debiteuren, btw, bank) in bijna real-time af op het grootboek, beveelt mitigerende acties aan voor uitzonderingen zoals afwijkende boekstukbedragen en houdt een volledig audittrail van elke correctie bij."
    },
    'supplier-communications': {
        fr: "Rédige et envoie les relances de bons de commande, puis lit les réponses e-mail des fournisseurs pour détecter les changements de quantité, de prix, d'annulation et de date de livraison — qu'il soumet à la validation de l'acheteur.",
        de: "Verfasst und versendet Bestell-Nachfassungen, liest dann die E-Mail-Antworten der Lieferanten und erkennt Änderungen bei Menge, Preis, Stornierungen und Lieferterminen – diese werden dem Einkäufer zur Prüfung vorgelegt.",
        es: "Redacta y envía seguimientos de órdenes de compra y luego lee las respuestas por correo del proveedor para detectar cambios de cantidad, precio, cancelación y fecha de entrega — presentándolos al comprador para su revisión.",
        it: "Redige e invia solleciti per gli ordini di acquisto, poi legge le risposte e-mail dei fornitori per individuare variazioni di quantità, prezzo, cancellazioni e date di consegna, sottoponendole al buyer per la revisione.",
        ar: "يصيغ ويرسل متابعات أوامر الشراء، ثم يقرأ ردود البريد الإلكتروني من الموردين لاكتشاف تغييرات الكمية والسعر والإلغاء وتواريخ التسليم — ويعرضها على المشتري للمراجعة.",
        nl: "Stelt opvolgmails voor inkooporders op en verstuurt ze, leest vervolgens leverancierreacties om wijzigingen in hoeveelheid, prijs, annulering en leverdatum te detecteren en legt deze ter beoordeling aan de inkoper voor."
    },
    'time-and-expense-agent': {
        fr: "Unifie la saisie des coûts projet à travers deux flux. Time Entry rédige les saisies hebdomadaires à partir des affectations, des réservations et du contexte Outlook ; Expense ingère les reçus depuis la boîte mail, l'application mobile ou le téléversement direct pour les catégoriser, les détailler et les regrouper dans des notes de frais par déplacement ou par projet.",
        de: "Vereinheitlicht die Erfassung von Projektkosten über zwei Abläufe. Time Entry erstellt wöchentliche Zeiteinträge aus Zuweisungen, Buchungen und Outlook-Kontext; Expense übernimmt Belege per Mailbox, Mobile App oder Direkt-Upload und kategorisiert, einzelpostet und gruppiert sie in reise- oder projektbezogenen Spesenabrechnungen.",
        es: "Unifica la captura de costes de proyecto en dos flujos. Time Entry redacta las entradas semanales a partir de asignaciones, reservas y contexto de Outlook; Expense ingiere recibos desde el buzón, la app móvil o carga directa para categorizarlos, detallarlos y agruparlos en informes por viaje o por proyecto.",
        it: "Unifica la rilevazione dei costi di progetto in due flussi. Time Entry redige le voci settimanali a partire da assegnazioni, prenotazioni e contesto Outlook; Expense acquisisce le ricevute dalla casella di posta, dall'app mobile o tramite caricamento diretto per categorizzarle, dettagliarle e raggrupparle in note spese per trasferta o per progetto.",
        ar: "يوحّد تسجيل تكاليف المشاريع عبر مسارَين. يصيغ Time Entry الإدخالات الأسبوعية من التخصيصات والحجوزات وسياق Outlook؛ ويستقبل Expense الإيصالات من البريد أو التطبيق المحمول أو التحميل المباشر ليصنّفها ويفصّلها ويجمّعها في تقارير حسب الرحلة أو المشروع.",
        nl: "Bundelt het vastleggen van projectkosten via twee stromen. Time Entry stelt weekboekingen op uit toewijzingen, boekingen en Outlook-context; Expense neemt bonnen op uit de mailbox, mobiele app of directe upload, categoriseert en specificeert ze en groepeert ze in reis- of projectgebonden declaraties."
    },
    'sales-order-agent': {
        fr: "Surveille une boîte mail configurée, identifie le client, analyse les demandes de devis et de commande entrantes, vérifie la disponibilité des articles et rédige le devis ou la commande correspondante dans Business Central.",
        de: "Überwacht ein konfiguriertes Postfach, identifiziert den Kunden, analysiert eingehende Angebots- und Auftragsanfragen, prüft die Artikelverfügbarkeit und entwirft das entsprechende Angebot oder den Auftrag in Business Central.",
        es: "Supervisa un buzón configurado, identifica al cliente, analiza las solicitudes entrantes de presupuesto y pedido, comprueba la disponibilidad de artículos y redacta el presupuesto o pedido correspondiente en Business Central.",
        it: "Monitora una casella di posta configurata, identifica il cliente, analizza le richieste di preventivo e ordine in arrivo, verifica la disponibilità degli articoli e redige il preventivo o l'ordine corrispondente in Business Central.",
        ar: "يراقب صندوق بريد مهيّأ، ويحدّد العميل، ويحلّل طلبات عروض الأسعار والطلبات الواردة، ويتحقق من توفّر الأصناف، ويصيغ عرض السعر أو الطلب المقابل في Business Central.",
        nl: "Bewaakt een geconfigureerde mailbox, identificeert de klant, parseert binnenkomende offerte- en orderverzoeken, controleert de beschikbaarheid van artikelen en stelt de bijbehorende offerte of order op in Business Central."
    },
    'payables-agent': {
        fr: "Surveille une boîte mail fournisseur pour les PDF de factures, en extrait les données via OCR, rapproche les lignes aux bons de commande et aux réceptions, et rédige les factures d'achat pour validation humaine.",
        de: "Überwacht ein Lieferanten-Postfach auf Rechnungs-PDFs, extrahiert Daten per OCR, gleicht die Positionen mit Bestellungen und Wareneingängen ab und entwirft Eingangsrechnungen zur Freigabe durch einen Menschen.",
        es: "Supervisa un buzón de proveedores en busca de PDF de facturas, extrae los datos mediante OCR, concilia las líneas con órdenes de compra y recepciones, y redacta las facturas de compra para aprobación humana.",
        it: "Monitora una casella di posta fornitori in cerca di PDF di fatture, estrae i dati tramite OCR, abbina le righe a ordini di acquisto e ricevimenti e redige le fatture di acquisto per l'approvazione umana.",
        ar: "يراقب صندوق بريد الموردين بحثاً عن ملفات PDF للفواتير، ويستخرج البيانات عبر OCR، ويطابق الأسطر مع أوامر الشراء وإيصالات الاستلام، ويصيغ فواتير الشراء لاعتمادها بشرياً.",
        nl: "Bewaakt een leveranciersmailbox op factuur-PDF's, extraheert gegevens via OCR, koppelt regels aan inkooporders en ontvangsten en stelt inkoopfacturen op voor menselijke goedkeuring."
    }
};

// --- Category extras (MCP banner) ---------------------------------------
export const EXTRA_I18N = {
    'd365-mcp-servers': {
        fr: {
            name: "Renforcer la Supply Chain et la Finance avec les serveurs MCP Dynamics 365",
            description: "Le serveur MCP Dynamics 365 ERP expose les données et la logique métier de Finance et Operations à tout agent compatible Model Context Protocol — Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot et plateformes d'agents tierces — sans connecteurs ni API personnalisés. Un serveur ERP Analytics MCP complémentaire rend les jeux de données Business Performance Analytics (Record-to-Report, Procure-to-Pay, Order-to-Cash) interrogeables en langage naturel. Ensemble, ils permettent aux agents de générer des insights et de déclencher des actions transactionnelles sur Finance, Supply Chain Management et Project Operations via un protocole unique et gouverné."
        },
        de: {
            name: "Supply Chain und Finance mit Dynamics 365 MCP-Servern stärken",
            description: "Der Dynamics 365 ERP MCP-Server stellt Daten und Geschäftslogik von Finance and Operations jedem Model-Context-Protocol-kompatiblen Agenten zur Verfügung – Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot und Drittanbieter-Agentenplattformen – ganz ohne benutzerdefinierte Konnektoren oder APIs. Ein ergänzender ERP Analytics MCP-Server macht Business-Performance-Analytics-Datensätze (Record-to-Report, Procure-to-Pay, Order-to-Cash) in natürlicher Sprache abfragbar. Gemeinsam ermöglichen sie Agenten, Erkenntnisse zu generieren und Transaktionsaktionen über Finance, Supply Chain Management und Project Operations hinweg über ein einziges, geregeltes Protokoll auszulösen."
        },
        es: {
            name: "Potenciar Supply Chain y Finanzas con los servidores MCP de Dynamics 365",
            description: "El servidor MCP Dynamics 365 ERP expone los datos y la lógica de negocio de Finance and Operations a cualquier agente compatible con Model Context Protocol — Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot y plataformas de agentes de terceros — sin necesidad de conectores ni API personalizados. Un servidor ERP Analytics MCP complementario permite consultar los conjuntos de datos de Business Performance Analytics (Record-to-Report, Procure-to-Pay, Order-to-Cash) en lenguaje natural. Juntos permiten a los agentes generar insights y desencadenar acciones transaccionales en Finance, Supply Chain Management y Project Operations a través de un único protocolo gobernado."
        },
        it: {
            name: "Potenziare Supply Chain e Finance con i server MCP di Dynamics 365",
            description: "Il server MCP Dynamics 365 ERP espone dati e logica di business di Finance and Operations a qualsiasi agente compatibile con Model Context Protocol — Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot e piattaforme di agenti di terze parti — senza connettori o API personalizzati. Un server ERP Analytics MCP complementare rende i dataset di Business Performance Analytics (Record-to-Report, Procure-to-Pay, Order-to-Cash) interrogabili in linguaggio naturale. Insieme consentono agli agenti di generare insight e attivare azioni transazionali su Finance, Supply Chain Management e Project Operations tramite un unico protocollo governato."
        },
        ar: {
            name: "تمكين سلاسل التوريد والشؤون المالية عبر خوادم MCP الخاصة بـ Dynamics 365",
            description: "يعرض خادم Dynamics 365 ERP MCP بيانات Finance and Operations ومنطق الأعمال الخاص بها لأي وكيل متوافق مع Model Context Protocol — مثل Microsoft Copilot Studio و Microsoft Foundry و GitHub Copilot ومنصات الوكلاء التابعة لجهات خارجية — دون الحاجة إلى موصّلات أو واجهات برمجية مخصّصة. ويتيح خادم ERP Analytics MCP المكمّل الاستعلام بلغة طبيعية عن مجموعات بيانات Business Performance Analytics (Record-to-Report و Procure-to-Pay و Order-to-Cash). يتيحان معاً للوكلاء توليد الرؤى وتنفيذ الإجراءات التشغيلية عبر Finance و Supply Chain Management و Project Operations من خلال بروتوكول واحد محكوم."
        },
        nl: {
            name: "Supply Chain en Finance versterken met de Dynamics 365 MCP-servers",
            description: "De Dynamics 365 ERP MCP-server stelt data en bedrijfslogica van Finance and Operations beschikbaar aan elke Model Context Protocol–compatibele agent — Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot en agentplatforms van derden — zonder maatwerkconnectors of API's. Een aanvullende ERP Analytics MCP-server maakt Business Performance Analytics-datasets (Record-to-Report, Procure-to-Pay, Order-to-Cash) bevraagbaar in natuurlijke taal. Samen stellen ze agents in staat om inzichten te genereren en transactiële acties te starten in Finance, Supply Chain Management en Project Operations via één gegoverneerd protocol."
        }
    }
};

// --- Walkthrough video chapters -----------------------------------------
// Keyed by the chapter's start-second `s` (which is unique per chapter).
export const CHAPTER_I18N = {
    170: {
        fr: { title: "Agents IA pour les commerciaux", desc: "Présentation des agents IA conçus pour prendre en charge les tâches administratives chronophages et redonner du temps aux commerciaux pour cultiver les relations." },
        de: { title: "KI-Agenten für Vertriebsmitarbeiter", desc: "Vorstellung von KI-Agenten, die zeitraubende Verwaltungsaufgaben übernehmen und den Vertriebsmitarbeitern wieder Zeit für den Beziehungsaufbau verschaffen." },
        es: { title: "Agentes de IA para vendedores", desc: "Presentación de los agentes de IA diseñados para asumir las tareas administrativas que consumen tiempo y devolver a los vendedores horas para cultivar relaciones." },
        it: { title: "Agenti IA per i venditori", desc: "Introduzione agli agenti IA pensati per assumersi i compiti amministrativi che richiedono tempo, restituendo ai venditori spazio per coltivare relazioni." },
        ar: { title: "وكلاء الذكاء الاصطناعي للبائعين", desc: "تقديم وكلاء الذكاء الاصطناعي المصمّمين لتولّي المهام الإدارية المستهلكة للوقت وإعادة الوقت للبائعين لبناء العلاقات." },
        nl: { title: "AI-agents voor verkopers", desc: "Introductie van AI-agents die tijdrovende administratieve taken overnemen, zodat verkopers weer tijd krijgen om relaties op te bouwen." }
    },
    217: {
        fr: { title: "Sales Development Agent", desc: "Recherche automatiquement les nouveaux leads (par exemple les participants à un événement), les contacte de manière proactive, les qualifie et les transmet en douceur à l'équipe commerciale dès qu'ils sont prêts pour un rendez-vous." },
        de: { title: "Sales Development Agent", desc: "Recherchiert automatisch neue Leads (z. B. Veranstaltungsteilnehmer), spricht sie proaktiv an, qualifiziert sie und übergibt sie nahtlos an das Vertriebsteam, sobald sie für ein Meeting bereit sind." },
        es: { title: "Sales Development Agent", desc: "Investiga automáticamente nuevos leads (como asistentes a eventos), los contacta de forma proactiva, los cualifica y los transfiere sin fricciones al equipo de ventas en cuanto están listos para una reunión." },
        it: { title: "Sales Development Agent", desc: "Ricerca automaticamente i nuovi lead (ad esempio i partecipanti a un evento), li contatta proattivamente, li qualifica e li passa senza attriti al team commerciale appena sono pronti per un meeting." },
        ar: { title: "Sales Development Agent", desc: "يبحث تلقائياً عن العملاء المحتملين الجدد (مثل حضور الفعاليات)، ويتواصل معهم استباقياً، ويؤهّلهم، وينقلهم بسلاسة إلى فريق المبيعات حالما يصبحون جاهزين لاجتماع." },
        nl: { title: "Sales Development Agent", desc: "Onderzoekt automatisch nieuwe leads (bijvoorbeeld eventbezoekers), benadert ze proactief, kwalificeert ze en draagt ze naadloos over aan het verkoopteam zodra ze klaar zijn voor een afspraak." }
    },
    253: {
        fr: { title: "Sales Close Agent", desc: "Assistant automatisé qui étudie les comptes, identifie les parties prenantes clés, met en évidence les risques potentiels et propose des points de discussion pertinents pour aider à conclure les affaires." },
        de: { title: "Sales Close Agent", desc: "Automatisierter Assistent, der Konten recherchiert, wichtige Stakeholder identifiziert, potenzielle Risiken aufzeigt und passende Gesprächspunkte vorschlägt, um Abschlüsse zu unterstützen." },
        es: { title: "Sales Close Agent", desc: "Asistente automatizado que investiga cuentas, identifica a los stakeholders clave, expone riesgos potenciales y sugiere puntos de conversación relevantes para ayudar a cerrar las operaciones." },
        it: { title: "Sales Close Agent", desc: "Assistente automatizzato che ricerca gli account, identifica gli stakeholder chiave, evidenzia i rischi potenziali e suggerisce punti di discussione pertinenti per aiutare a chiudere le trattative." },
        ar: { title: "Sales Close Agent", desc: "مساعد آلي يبحث في الحسابات، ويحدّد أصحاب المصلحة الرئيسيين، ويُبرز المخاطر المحتملة، ويقترح نقاط حوار ذات صلة للمساعدة في إتمام الصفقات." },
        nl: { title: "Sales Close Agent", desc: "Geautomatiseerde assistent die accounts onderzoekt, belangrijke stakeholders identificeert, potentiële risico's blootlegt en relevante gesprekspunten voorstelt om deals te helpen sluiten." }
    },
    526: {
        fr: { title: "Insights conversationnels sur le pipeline", desc: "Les responsables des opérations commerciales peuvent poser en langage naturel des questions sur la santé du pipeline, les tendances de conversion et les risques émergents, sans avoir à extraire des rapports complexes." },
        de: { title: "Dialogbasierte Pipeline-Insights", desc: "Sales Operations Manager können in natürlicher Sprache Fragen zu Pipeline-Gesundheit, Konversionstrends und entstehenden Risiken stellen, ohne komplexe Berichte ziehen zu müssen." },
        es: { title: "Insights conversacionales del pipeline", desc: "Los responsables de operaciones de ventas pueden preguntar en lenguaje natural sobre la salud del pipeline, las tendencias de conversión y los riesgos emergentes sin tener que extraer informes complejos." },
        it: { title: "Insight conversazionali sulla pipeline", desc: "I responsabili delle sales operations possono porre in linguaggio naturale domande sullo stato della pipeline, sulle tendenze di conversione e sui rischi emergenti senza dover estrarre report complessi." },
        ar: { title: "رؤى محادثة حول خط المبيعات", desc: "يمكن لمديري عمليات المبيعات طرح أسئلة بلغة طبيعية حول صحة خط المبيعات واتجاهات التحويل والمخاطر الناشئة دون الحاجة إلى استخراج تقارير معقدة." },
        nl: { title: "Conversationele pipeline-inzichten", desc: "Sales Operations Managers kunnen in gewone taal vragen stellen over de gezondheid van de pipeline, conversietrends en opkomende risico's, zonder complexe rapporten te hoeven trekken." }
    },
    636: {
        fr: { title: "Service client proactif", desc: "Passez d'un support réactif à un engagement proactif, en laissant le système anticiper les besoins des clients et les contacter en premier." },
        de: { title: "Proaktiver Kundenservice", desc: "Wechseln Sie von reaktivem Support zu proaktivem Kundenkontakt, indem das System Kundenbedürfnisse antizipiert und von sich aus aktiv wird." },
        es: { title: "Atención al cliente proactiva", desc: "Pasa de un soporte reactivo a una interacción proactiva, dejando que el sistema anticipe las necesidades del cliente y dé el primer paso." },
        it: { title: "Customer service proattivo", desc: "Passa da un supporto reattivo a un coinvolgimento proattivo, lasciando che il sistema anticipi le esigenze del cliente e si attivi per primo." },
        ar: { title: "خدمة عملاء استباقية", desc: "انتقل من الدعم التفاعلي إلى التواصل الاستباقي، بحيث يتوقّع النظام احتياجات العملاء ويبادر بالتواصل معهم." },
        nl: { title: "Proactieve klantenservice", desc: "Stap over van reactieve ondersteuning naar proactieve interactie, waarbij het systeem klantbehoeften anticipeert en zelf het initiatief neemt." }
    },
    700: {
        fr: { title: "Insights opérationnels pour superviseurs", desc: "Les agents IA repèrent tôt les risques émergents — déséquilibres de charge, mauvaises configurations, écarts de compétences — et suggèrent des actions comme un ajustement des effectifs." },
        de: { title: "Operative Insights für Supervisoren", desc: "KI-Agenten erkennen aufkommende Risiken frühzeitig – Auslastungsungleichgewichte, Fehlkonfigurationen, Skill-Lücken – und schlagen Maßnahmen wie eine Anpassung der Personalplanung vor." },
        es: { title: "Insights operativos para supervisores", desc: "Los agentes de IA detectan pronto los riesgos emergentes — desequilibrios de carga, configuraciones erróneas, desajustes de habilidades — y sugieren acciones como ajustar la dotación." },
        it: { title: "Insight operativi per i supervisori", desc: "Gli agenti IA individuano in anticipo i rischi emergenti — squilibri di carico, configurazioni errate, gap di competenze — e suggeriscono azioni come la rimodulazione del personale." },
        ar: { title: "رؤى تشغيلية للمشرفين", desc: "يرصد وكلاء الذكاء الاصطناعي المخاطر الناشئة مبكراً — اختلالات أعباء العمل وأخطاء الإعدادات وعدم تطابق المهارات — ويقترحون إجراءات مثل تعديل التوزيع البشري." },
        nl: { title: "Operationele inzichten voor supervisors", desc: "AI-agents signaleren opkomende risico's vroeg — onbalans in werklast, verkeerde configuraties, niet-passende vaardigheden — en stellen acties voor zoals het bijsturen van de bezetting." }
    },
    815: {
        fr: { title: "Agent IA d'engagement proactif", desc: "Détecte instantanément l'intention du client à partir de ses messages et propose des réponses immédiates et précises (par exemple en clarifiant les détails de couverture) sans intervention humaine." },
        de: { title: "Proactive Engagement KI-Agent", desc: "Erkennt sofort die Absicht des Kunden aus seinen Nachrichten und liefert ohne menschliches Zutun unmittelbare, präzise Antworten (z. B. zu Versicherungsleistungen)." },
        es: { title: "Agente de IA de interacción proactiva", desc: "Detecta al instante la intención del cliente a partir de sus mensajes y ofrece respuestas inmediatas y precisas (por ejemplo, aclarando coberturas) sin intervención humana." },
        it: { title: "Agente IA di engagement proattivo", desc: "Rileva istantaneamente l'intento del cliente dai suoi messaggi e fornisce risposte immediate e precise (ad esempio chiarendo dettagli di copertura) senza intervento umano." },
        ar: { title: "وكيل التفاعل الاستباقي بالذكاء الاصطناعي", desc: "يكتشف فوراً نية العميل من رسائله ويقدّم ردوداً سريعة ودقيقة (كتوضيح تفاصيل التغطية) دون تدخل بشري." },
        nl: { title: "AI-agent voor proactieve interactie", desc: "Herkent direct de intentie van de klant uit diens berichten en geeft onmiddellijk nauwkeurige antwoorden (bijvoorbeeld over dekking) zonder menselijke tussenkomst." }
    },
    866: {
        fr: { title: "Case Management Agent", desc: "Lorsqu'un problème est escaladé vers un agent humain, ce dernier dispose déjà d'un dossier créé et des informations clés capturées, lui donnant immédiatement le contexte complet." },
        de: { title: "Case Management Agent", desc: "Wenn ein Problem an einen Mitarbeiter eskaliert wird, ist der Fall bereits angelegt und mit wichtigen Details versehen, sodass die Mitarbeiterin sofort über den vollen Kontext verfügt." },
        es: { title: "Case Management Agent", desc: "Cuando un problema se escala a un representante, este agente ya ha creado el caso y capturado los detalles clave para que el representante disponga de inmediato del contexto completo." },
        it: { title: "Case Management Agent", desc: "Quando un problema viene escalato a un operatore, questo agente ha già creato il caso e raccolto i dettagli chiave, così che l'operatore abbia subito il contesto completo." },
        ar: { title: "Case Management Agent", desc: "عند تصعيد مشكلة إلى موظف بشري، يكون هذا الوكيل قد أنشأ الحالة بالفعل والتقط التفاصيل الرئيسية لتزويد الممثل بالسياق الكامل فوراً." },
        nl: { title: "Case Management Agent", desc: "Wanneer een probleem wordt geëscaleerd naar een medewerker, heeft deze agent de case al aangemaakt en de belangrijkste details vastgelegd, zodat de medewerker direct over de volledige context beschikt." }
    },
    881: {
        fr: { title: "Customer Intent Agent", desc: "Met en évidence les détails de politique pertinents, les étapes suivantes recommandées et les connaissances externes via Copilot Studio pour aider les agents en direct à répondre avec assurance." },
        de: { title: "Customer Intent Agent", desc: "Hebt relevante Richtlinien-Details, empfohlene nächste Schritte und externes Wissen über Copilot Studio hervor, damit Live-Agenten Fragen souverän beantworten können." },
        es: { title: "Customer Intent Agent", desc: "Resalta detalles de políticas relevantes, próximos pasos sugeridos y conocimientos externos a través de Copilot Studio para ayudar a los agentes en vivo a responder con confianza." },
        it: { title: "Customer Intent Agent", desc: "Mette in evidenza dettagli di policy pertinenti, prossimi passi suggeriti e conoscenze esterne tramite Copilot Studio per aiutare gli operatori live a rispondere con sicurezza." },
        ar: { title: "Customer Intent Agent", desc: "يُبرز تفاصيل السياسات ذات الصلة والخطوات التالية المقترحة والمعرفة الخارجية عبر Copilot Studio لمساعدة الموظفين المباشرين على الرد بثقة." },
        nl: { title: "Customer Intent Agent", desc: "Brengt relevante beleidsinformatie, voorgestelde vervolgstappen en externe kennis via Copilot Studio naar voren, zodat live medewerkers met zelfvertrouwen kunnen antwoorden." }
    },
    932: {
        fr: { title: "Quality Evaluation Agent", desc: "Consolide les vues de performance des équipes pour les superviseurs et génère automatiquement des évaluations cas par cas avec scores de qualité et justifications." },
        de: { title: "Quality Evaluation Agent", desc: "Bündelt Performance-Ansichten des Teams für Supervisoren und erstellt automatisch fallbezogene Bewertungen mit Qualitätsbewertungen und Begründungen." },
        es: { title: "Quality Evaluation Agent", desc: "Consolida las vistas de rendimiento del equipo para supervisores y genera automáticamente evaluaciones caso por caso con puntuaciones de calidad y razonamientos." },
        it: { title: "Quality Evaluation Agent", desc: "Consolida le viste di performance del team per i supervisori e genera automaticamente valutazioni caso per caso con punteggi di qualità e motivazioni." },
        ar: { title: "Quality Evaluation Agent", desc: "يوحّد عروض أداء الفريق للمشرفين ويولّد تلقائياً تقييمات لكل حالة مع درجات الجودة وأسباب التقييم." },
        nl: { title: "Quality Evaluation Agent", desc: "Brengt prestatieoverzichten van het team samen voor supervisors en genereert automatisch case-per-case beoordelingen met kwaliteitsscores en onderbouwing." }
    },
    1199: {
        fr: { title: "ERP agentique et planification de la demande", desc: "Intègre l'historique des ventes et les insights de marché pour fournir des prévisions de demande très précises et prospectives, en particulier lors des transitions saisonnières." },
        de: { title: "Agentisches ERP & Bedarfsplanung", desc: "Verknüpft historische Verkaufsdaten mit Marktinsights und liefert hochpräzise, vorausschauende Bedarfsprognosen – besonders für saisonale Übergänge." },
        es: { title: "ERP agéntico y planificación de la demanda", desc: "Integra el histórico de ventas y los insights de mercado para entregar previsiones de demanda muy precisas y orientadas al futuro, especialmente en transiciones estacionales." },
        it: { title: "ERP agentico e pianificazione della domanda", desc: "Integra lo storico delle vendite e gli insight di mercato per offrire previsioni di domanda molto accurate e proiettate in avanti, soprattutto nelle transizioni stagionali." },
        ar: { title: "ERP وكيلي وتخطيط الطلب", desc: "يدمج أداء المبيعات التاريخي ورؤى السوق لتقديم توقعات طلب عالية الدقة واستشرافية، خاصة في فترات التحوّل الموسمي." },
        nl: { title: "Agentic ERP & vraagplanning", desc: "Combineert historische verkoopprestaties met marktinzichten voor zeer accurate, vooruitkijkende vraagprognoses, met name bij seizoenswisselingen." }
    },
    1277: {
        fr: { title: "Rééquilibrage intelligent des stocks", desc: "Utilise des prévisions pilotées par l'IA pour générer des ordres de travail entrepôt qui déplacent des articles spécifiques vers des emplacements de prélèvement optimaux avant un pic de demande." },
        de: { title: "Intelligente Bestandsbalance", desc: "Nutzt KI-gestützte Prognosen, um Lageraufträge zu erzeugen, die bestimmte Artikel rechtzeitig vor einem Nachfragepeak an die optimalen Kommissionierplätze umlagern." },
        es: { title: "Rebalanceo inteligente de inventario", desc: "Usa previsiones impulsadas por IA para generar órdenes de trabajo de almacén que mueven artículos específicos a ubicaciones de picking óptimas antes de un pico de demanda." },
        it: { title: "Riequilibrio intelligente delle giacenze", desc: "Sfrutta previsioni guidate dall'IA per generare ordini di lavoro di magazzino che spostano articoli specifici nelle ubicazioni di prelievo ottimali prima di un picco di domanda." },
        ar: { title: "موازنة المخزون الذكية", desc: "يستخدم توقعات مدفوعة بالذكاء الاصطناعي لإنشاء أوامر عمل في المستودع تنقل أصنافاً محدّدة إلى مواقع الانتقاء المثلى قبل ذروة الطلب." },
        nl: { title: "Intelligent voorraad-rebalancing", desc: "Gebruikt door AI gestuurde prognoses om magazijnopdrachten te genereren die specifieke artikelen vóór een vraagpiek naar optimale piklocaties verplaatsen." }
    },
    1306: {
        fr: { title: "Optimisation avancée des routes de prélèvement", desc: "Regroupe et séquence intelligemment les commandes pour minimiser le temps de marche et la congestion dans les très grands entrepôts." },
        de: { title: "Erweiterte Optimierung der Kommissionierwege", desc: "Gruppiert und sequenziert Aufträge intelligent, um Laufwege und Engpässe in großen Lagern zu minimieren." },
        es: { title: "Optimización avanzada de rutas de picking", desc: "Agrupa y secuencia inteligentemente los pedidos para minimizar los desplazamientos y la congestión dentro de almacenes de gran tamaño." },
        it: { title: "Ottimizzazione avanzata dei percorsi di prelievo", desc: "Raggruppa e sequenzia gli ordini in modo intelligente per ridurre al minimo i tempi di spostamento e la congestione nei grandi magazzini." },
        ar: { title: "تحسين متقدّم لمسارات الانتقاء بالمستودعات", desc: "يجمّع الطلبات ويرتّبها بذكاء لتقليل وقت المشي والازدحام داخل المستودعات الضخمة." },
        nl: { title: "Geavanceerde optimalisatie van pickroutes", desc: "Groepeert en sequencet orders op intelligente wijze om looptijd en opstoppingen in grote magazijnen te minimaliseren." }
    },
    1355: {
        fr: { title: "Commerce B2B multi-points de vente", desc: "Expérience d'achat unifiée où les acheteurs peuvent consulter et commander pour plusieurs sites autorisés via une seule authentification." },
        de: { title: "B2B Multi-Outlet Commerce", desc: "Einheitliches Einkaufserlebnis: Käufer sehen und bestellen für mehrere autorisierte Standorte über ein einziges Single-Sign-on." },
        es: { title: "Comercio B2B multi-punto de venta", desc: "Experiencia de compra unificada donde los compradores pueden ver y pedir para varias ubicaciones autorizadas con un único inicio de sesión." },
        it: { title: "Commerce B2B multi-punto vendita", desc: "Esperienza d'acquisto unificata in cui i buyer possono visualizzare e ordinare per più sedi autorizzate con un unico Single Sign-On." },
        ar: { title: "تجارة B2B متعددة المنافذ", desc: "تجربة شراء موحّدة تتيح للمشترين عرض الطلبات وإجرائها لعدة مواقع معتمدة من خلال تسجيل دخول واحد." },
        nl: { title: "B2B-commerce voor meerdere vestigingen", desc: "Geünificeerde inkoopervaring waarmee kopers met één keer inloggen voor meerdere geautoriseerde locaties kunnen bekijken en bestellen." }
    },
    1392: {
        fr: { title: "Intégration du serveur MCP Commerce", desc: "Déploie des agents intelligents personnalisés directement dans Microsoft Teams pour aider les agents de centres d'appels à passer rapidement des commandes conformes avec le contexte client complet." },
        de: { title: "Integration des Commerce MCP-Servers", desc: "Stellt benutzerdefinierte intelligente Agenten direkt in Microsoft Teams bereit, damit Callcenter-Mitarbeiter schnell konforme Bestellungen mit vollständigem Kundenkontext erfassen können." },
        es: { title: "Integración del servidor MCP de Commerce", desc: "Despliega agentes inteligentes personalizados directamente en Microsoft Teams para que los empleados del centro de llamadas puedan tramitar rápidamente pedidos conformes con todo el contexto de la cuenta." },
        it: { title: "Integrazione del Commerce MCP server", desc: "Distribuisce agenti intelligenti personalizzati direttamente in Microsoft Teams per aiutare gli operatori del call center a inserire rapidamente ordini conformi con il contesto completo dell'account." },
        ar: { title: "تكامل خادم Commerce MCP", desc: "ينشر وكلاء أذكياء مخصّصين مباشرة داخل Microsoft Teams لمساعدة موظفي مراكز الاتصال على إنشاء طلبات متوافقة بسرعة مع توفّر السياق الكامل للعميل." },
        nl: { title: "Integratie van de Commerce MCP-server", desc: "Implementeert maatwerk intelligente agents rechtstreeks in Microsoft Teams, zodat callcentermedewerkers snel conforme orders kunnen plaatsen met volledige accountcontext." }
    },
    1461: {
        fr: { title: "Cadre unifié d'intégration de la facturation électronique", desc: "Génère et achemine automatiquement les factures électroniques entre différents pays sans intégrations personnalisées complexes, garantissant la conformité aux réglementations locales." },
        de: { title: "Einheitliches Framework für E-Invoicing", desc: "Erzeugt und versendet E-Rechnungen automatisch über verschiedene Länder hinweg ohne komplexe Custom-Integrationen und stellt die Einhaltung lokaler Vorschriften sicher." },
        es: { title: "Marco unificado de e-invoicing", desc: "Genera y enruta automáticamente facturas electrónicas entre distintos países sin integraciones personalizadas complejas, asegurando el cumplimiento de las normativas locales." },
        it: { title: "Framework unificato di e-invoicing", desc: "Genera e instrada automaticamente le fatture elettroniche in diversi paesi senza integrazioni personalizzate complesse, garantendo la conformità alle normative locali." },
        ar: { title: "إطار موحّد لتكامل الفوترة الإلكترونية", desc: "ينشئ ويوجّه الفواتير الإلكترونية تلقائياً عبر دول مختلفة دون الحاجة إلى تكاملات مخصّصة معقدة، مع ضمان الامتثال للأنظمة المحلية." },
        nl: { title: "Geünificeerd e-invoicing-integratieframework", desc: "Genereert en routeert automatisch e-facturen over verschillende landen zonder complexe maatwerkintegraties en zorgt voor naleving van lokale regelgeving." }
    },
    1522: {
        fr: { title: "Traitement des factures par IA", desc: "Automatise la réception et le rapprochement des factures fournisseurs avec les bons de commande, augmentant les taux de traitement sans intervention." },
        de: { title: "KI-gestützte Rechnungsverarbeitung", desc: "Automatisiert den Eingang und den Abgleich von Lieferantenrechnungen mit Bestellungen und erhöht die touchless-Verarbeitungsquote." },
        es: { title: "Procesamiento de facturas con IA", desc: "Automatiza la recepción y la conciliación de facturas de proveedor con las órdenes de compra, aumentando las tasas de procesamiento sin intervención." },
        it: { title: "Elaborazione fatture basata su IA", desc: "Automatizza l'acquisizione e l'abbinamento delle fatture fornitore agli ordini di acquisto, aumentando i tassi di elaborazione touchless." },
        ar: { title: "معالجة الفواتير المعتمدة على الذكاء الاصطناعي", desc: "يؤتمت استلام فواتير الموردين ومطابقتها مع أوامر الشراء، مما يرفع معدلات المعالجة دون تدخل بشري." },
        nl: { title: "AI-gestuurde factuurverwerking", desc: "Automatiseert het inlezen en matchen van leveranciersfacturen met inkooporders en verhoogt zo het percentage touchless verwerkingen." }
    },
    1563: {
        fr: { title: "Account Reconciliation Agent", desc: "Rapproche automatiquement les mouvements de stock et les enregistrements financiers, en ne remontant que les vraies exceptions nécessitant une intervention humaine." },
        de: { title: "Account Reconciliation Agent", desc: "Stimmt Bestandsbewegungen automatisch mit den Finanzbuchungen ab und meldet nur die tatsächlichen Ausnahmen, die menschliches Eingreifen erfordern." },
        es: { title: "Account Reconciliation Agent", desc: "Concilia automáticamente los movimientos de inventario con los registros financieros, mostrando solo las verdaderas excepciones que requieren atención humana." },
        it: { title: "Account Reconciliation Agent", desc: "Riconcilia automaticamente i movimenti di magazzino con le scritture contabili, evidenziando solo le vere eccezioni che richiedono attenzione umana." },
        ar: { title: "Account Reconciliation Agent", desc: "يطابق تلقائياً حركات المخزون مع السجلات المالية، ولا يُبرز سوى الاستثناءات الحقيقية التي تتطلب تدخلاً بشرياً." },
        nl: { title: "Account Reconciliation Agent", desc: "Stemt voorraadmutaties automatisch af op de financiële registratie en brengt alleen de werkelijke uitzonderingen naar voren die menselijke aandacht vereisen." }
    },
    1668: {
        fr: { title: "Intégration LinkedIn pour les RH", desc: "Permet aux équipes d'acquisition de talents de publier des offres directement sur des plateformes comme LinkedIn et de gérer les workflows de recrutement de manière fluide." },
        de: { title: "LinkedIn-HR-Integration", desc: "Ermöglicht Talent-Acquisition-Teams, Stellenanzeigen direkt auf Boards wie LinkedIn zu veröffentlichen und Recruiting-Workflows nahtlos zu steuern." },
        es: { title: "Integración de LinkedIn con RR. HH.", desc: "Permite a los equipos de adquisición de talento publicar ofertas directamente en portales como LinkedIn y gestionar los flujos de selección sin fricciones." },
        it: { title: "Integrazione LinkedIn HR", desc: "Consente ai team di talent acquisition di pubblicare annunci di lavoro direttamente su board come LinkedIn e gestire senza attriti i workflow di selezione." },
        ar: { title: "تكامل LinkedIn مع الموارد البشرية", desc: "يتيح لفرق استقطاب المواهب نشر إعلانات الوظائف مباشرة على منصات مثل LinkedIn وإدارة مسارات التوظيف بسلاسة." },
        nl: { title: "LinkedIn HR-integratie", desc: "Stelt talent acquisition-teams in staat vacatures rechtstreeks op platforms zoals LinkedIn te plaatsen en wervingsprocessen naadloos te beheren." }
    },
    1677: {
        fr: { title: "Onboarding Agent", desc: "Intégré à Microsoft Teams, cet agent automatise la collecte de documents et les étapes de formation spécifiques au poste pour mettre rapidement les nouveaux collaborateurs à niveau." },
        de: { title: "Onboarding Agent", desc: "In Microsoft Teams eingebettet, automatisiert dieser Agent die Dokumentensammlung und rollenspezifische Trainingsschritte, damit neue Mitarbeitende schnell einsatzbereit sind." },
        es: { title: "Onboarding Agent", desc: "Integrado en Microsoft Teams, este agente automatiza la recopilación de documentos y los pasos de formación específicos del puesto para poner al día rápidamente a los nuevos empleados." },
        it: { title: "Onboarding Agent", desc: "Integrato in Microsoft Teams, questo agente automatizza la raccolta dei documenti e gli step di formazione specifici per il ruolo, portando rapidamente a regime i nuovi assunti." },
        ar: { title: "Onboarding Agent", desc: "مدمج في Microsoft Teams، يؤتمت هذا الوكيل جمع المستندات وخطوات التدريب الخاصة بالدور لتأهيل الموظفين الجدد بسرعة." },
        nl: { title: "Onboarding Agent", desc: "Geïntegreerd in Microsoft Teams automatiseert deze agent het verzamelen van documenten en rolspecifieke trainingsstappen om nieuwe medewerkers snel productief te maken." }
    },
    1811: {
        fr: { title: "Réservation multi-ressources (Project Operations)", desc: "Les responsables de ressources peuvent sélectionner et confirmer plusieurs spécialistes en une seule fois depuis le tableau de planning, accélérant nettement le staffing des projets." },
        de: { title: "Multi-Ressourcen-Buchung (Project Operations)", desc: "Ressourcenmanager können mehrere Spezialisten auf einen Schlag direkt aus dem Schedule Board auswählen und bestätigen, wodurch die Projektbesetzung deutlich beschleunigt wird." },
        es: { title: "Reserva multi-recurso (Project Operations)", desc: "Los responsables de recursos pueden seleccionar y confirmar varios especialistas a la vez desde el tablero de planificación, acelerando significativamente la asignación de proyectos." },
        it: { title: "Prenotazione multi-risorsa (Project Operations)", desc: "I resource manager possono selezionare e confermare più specialisti contemporaneamente dalla schedule board, accelerando in modo significativo lo staffing dei progetti." },
        ar: { title: "حجز متعدد الموارد (Project Operations)", desc: "يمكن لمسؤولي الموارد اختيار وتأكيد عدة متخصصين دفعة واحدة من لوحة الجدولة، مما يسرّع بشكل ملحوظ تكوين فرق المشاريع." },
        nl: { title: "Multi-resource boeking (Project Operations)", desc: "Resource managers kunnen meerdere specialisten in één keer selecteren en bevestigen vanuit het scheduleboard, wat projectbemensing aanzienlijk versnelt." }
    },
    1846: {
        fr: { title: "Changements de prix automatisés", desc: "Applique automatiquement les ajustements stratégiques de tarifs et les modifications de bundles de services en fonction des dates d'effet, garantissant l'exactitude des prix dans les contrats clients." },
        de: { title: "Automatisierte Preisänderungen", desc: "Wendet strategische Tarifaktualisierungen und Anpassungen von Service-Bundles automatisch entsprechend den Stichtagen an und stellt die Preisgenauigkeit über alle Kundenverträge hinweg sicher." },
        es: { title: "Cambios de precio automatizados", desc: "Aplica automáticamente actualizaciones estratégicas de tarifas y ajustes de bundles de servicios según las fechas de efectividad, asegurando la exactitud de precios en los contratos con clientes." },
        it: { title: "Modifiche di prezzo automatizzate", desc: "Applica automaticamente aggiornamenti strategici dei tariffari e modifiche dei bundle di servizi in base alle date di efficacia, garantendo l'accuratezza dei prezzi nei contratti cliente." },
        ar: { title: "تغييرات أسعار آلية", desc: "يطبّق تلقائياً تحديثات الأسعار الاستراتيجية وتعديلات حزم الخدمات وفقاً لتواريخ السريان، مما يضمن دقة الأسعار في عقود العملاء." },
        nl: { title: "Geautomatiseerde prijswijzigingen", desc: "Past strategische tariefwijzigingen en aanpassingen van servicebundels automatisch toe op basis van ingangsdata en zorgt zo voor nauwkeurige prijzen in klantcontracten." }
    },
    1875: {
        fr: { title: "Vue chronologique de la dotation", desc: "Indicateur visuel clair du travail planifié versus le temps de banc, aidant les responsables à réduire efficacement la volatilité du taux d'utilisation." },
        de: { title: "Zeitstrahl-Ansicht der Personalbesetzung", desc: "Klarer visueller Indikator für geplante Arbeit gegenüber Bench-Zeiten, der Führungskräften hilft, Auslastungsschwankungen wirkungsvoll zu reduzieren." },
        es: { title: "Vista de línea de tiempo del staffing", desc: "Indicador visual claro del trabajo planificado frente al tiempo en banco, ayudando a los responsables a reducir eficazmente la volatilidad de la utilización." },
        it: { title: "Vista timeline dello staffing", desc: "Indicatore visivo chiaro del lavoro pianificato rispetto al tempo a bench, che aiuta i responsabili a ridurre in modo efficace la volatilità dell'utilizzo." },
        ar: { title: "عرض زمني لتوزيع الموارد", desc: "مؤشر بصري واضح للأعمال المجدولة مقابل وقت الراحة، يساعد القادة على تقليل تذبذب معدّلات الاستخدام بفاعلية." },
        nl: { title: "Tijdlijnweergave van bemensing", desc: "Duidelijke visuele indicator van geplande werkzaamheden versus benchtijd, waarmee leidinggevenden de bezettingsvolatiliteit effectief kunnen verlagen." }
    },
    1931: {
        fr: { title: "Portail agence sécurisé", desc: "Remplace les transferts manuels et les accès invités en intégrant les agences de recrutement tierces directement dans les workflows d'entreprise avec un accès basé sur les rôles." },
        de: { title: "Sicheres Agentur-Portal", desc: "Ersetzt manuelle Übergaben und Gastzugriffe, indem externe Personaldienstleister mit rollenbasiertem Zugriff direkt in die Unternehmens-Workflows eingebunden werden." },
        es: { title: "Portal seguro para agencias", desc: "Reemplaza los traspasos manuales y los accesos como invitado, integrando las agencias de selección externas directamente en los flujos de trabajo de la empresa con accesos basados en roles." },
        it: { title: "Portale sicuro per le agenzie", desc: "Sostituisce passaggi manuali e accessi guest portando le agenzie di selezione di terze parti direttamente nei workflow aziendali con accesso basato sui ruoli." },
        ar: { title: "بوابة وكالات آمنة", desc: "تستبدل التسليمات اليدوية ووصول الضيوف بإدماج وكالات التوظيف الخارجية مباشرة في سير عمل المؤسسة مع وصول مبني على الأدوار." },
        nl: { title: "Beveiligd bureauportaal", desc: "Vervangt handmatige overdrachten en gasttoegang door externe wervingsbureaus rechtstreeks in bedrijfsworkflows op te nemen met rolgebaseerde toegang." }
    },
    1988: {
        fr: { title: "Contrôle de notes mobile (Field Service)", desc: "Permet aux techniciens de terrain de capturer facilement texte, images et vidéos sur la chronologie sans interrompre leur flux de travail." },
        de: { title: "Mobile Notiz-Steuerung (Field Service)", desc: "Erlaubt Außendienstmitarbeitenden, Text, Bilder und Videos einfach auf der Zeitleiste zu erfassen, ohne ihren Arbeitsablauf zu unterbrechen." },
        es: { title: "Control de notas móvil (Field Service)", desc: "Permite a los técnicos de campo capturar fácilmente texto, imágenes y vídeos en la línea de tiempo sin interrumpir su flujo de trabajo." },
        it: { title: "Controllo note mobile (Field Service)", desc: "Consente ai tecnici sul campo di acquisire facilmente testo, immagini e video nella timeline senza interrompere il flusso di lavoro." },
        ar: { title: "عنصر تحكّم بالملاحظات للجوّال (Field Service)", desc: "يتيح للفنيين الميدانيين التقاط النصوص والصور والفيديوهات بسهولة في الجدول الزمني دون قطع سير عملهم." },
        nl: { title: "Mobiele notitiebesturing (Field Service)", desc: "Stelt buitendienstmedewerkers in staat eenvoudig tekst, afbeeldingen en video's vast te leggen op de tijdlijn zonder hun werkstroom te onderbreken." }
    },
    2008: {
        fr: { title: "Scheduling Operations Agent", desc: "Déclenche des plans d'optimisation ad hoc et permet d'ajuster la planification directement depuis le tableau, pour des environnements de field service pilotés par contraintes." },
        de: { title: "Scheduling Operations Agent", desc: "Stößt Ad-hoc-Optimierungspläne an und ermöglicht Planungsanpassungen direkt aus dem Board – für Field-Service-Umgebungen mit komplexen Einschränkungen." },
        es: { title: "Scheduling Operations Agent", desc: "Lanza planes de optimización ad hoc y permite ajustar la planificación directamente desde el tablero, para entornos de field service guiados por restricciones." },
        it: { title: "Scheduling Operations Agent", desc: "Avvia piani di ottimizzazione ad hoc e consente di modificare la pianificazione direttamente dalla board, per ambienti field service guidati da vincoli." },
        ar: { title: "Scheduling Operations Agent", desc: "يُطلق خطط تحسين فورية ويسمح بإجراء تعديلات الجدولة مباشرة من اللوحة، لبيئات الخدمة الميدانية المحكومة بالقيود." },
        nl: { title: "Scheduling Operations Agent", desc: "Start ad-hoc optimalisatieplannen en maakt planningsaanpassingen rechtstreeks vanaf het board mogelijk, voor field service-omgevingen met veel beperkingen." }
    }
};

// --- Lookup helpers ------------------------------------------------------
// Each helper returns the requested field in the active language and falls
// back to English (the source-of-truth) when no translation is available.

export function getAgentDescription(agent, lang) {
    return AGENT_DESCRIPTIONS_I18N[agent.id]?.[lang] || agent.description;
}

export function getExtraName(extra, lang) {
    return EXTRA_I18N[extra.id]?.[lang]?.name || extra.name;
}

export function getExtraDescription(extra, lang) {
    return EXTRA_I18N[extra.id]?.[lang]?.description || extra.description;
}

export function getChapterTitle(item, lang) {
    return CHAPTER_I18N[item.s]?.[lang]?.title || item.title;
}

export function getChapterDesc(item, lang) {
    return CHAPTER_I18N[item.s]?.[lang]?.desc || item.desc;
}
