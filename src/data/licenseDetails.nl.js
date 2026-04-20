// Dutch overrides for LICENSE_DETAILS.
// Only `label` and `features` are translated. `tier` stays English (official SKU name).
// Array order and length must match licenseDetails.js exactly.

export const LICENSE_DETAILS_NL = {
    'd365-sales': [
        {
            label: 'Basisniveau',
            features: [
                "Essentiële sales force automation (SFA) voor organisaties zonder complexe verkoopprocessen.",
                "Accounts, contactpersonen en leads aanmaken, lezen, bijwerken en verwijderen.",
                "Facturen, orders, offertes en prijslijsten beheren.",
                "Marketingcampagnes en marketinglijsten.",
                "Tot 15 aangepaste tabellen voor applicatieaanpassing.",
                "Volgens de Microsoft Dynamics 365 Licensing Guide: klanten die Sales Professional gebruiken kunnen Sales Premium, Sales Enterprise of Sales Insights niet combineren binnen dezelfde omgevingsinstantie."
            ]
        },
        {
            label: '+ Voegt toe aan Professional',
            features: [
                "Onbeperkte aanpassing — verwijdert de limiet van 15 aangepaste tabellen.",
                "Geïntegreerde intelligentie en handmatige forecasting.",
                "Sales Premium-functies met beperkte capaciteit: Conversation Intelligence, Sales Accelerator (1.500 records/omgeving/maand), Lead- en Opportunity-scoring.",
                "Copilot in Dynamics 365 Sales.",
                "2.000 Customer Voice-reacties per tenant/maand."
            ]
        },
        {
            label: '+ Voegt toe aan Enterprise',
            features: [
                "Volledige, onbeperkte toegang tot alle Sales Insights-automatisering en AI.",
                "Predictive Forecasting, Relationship Analytics, Pipeline Intelligence.",
                "Assistant Studio, Connection Insights en Notes Analysis.",
                "Visitekaartjelezer (200 scans/gebruiker/maand).",
                "1.000 Copilot Credits per gebruiker/maand voor AI-agents."
            ]
        }
    ],
    'd365-cs': [
        {
            label: 'Basisniveau',
            features: [
                "Gestroomlijnde middelen voor agents die minder complexe scenario's afhandelen.",
                "Basisbeheer van cases en chat tussen agent en team.",
                "Selfservice-website en kennisbank voor klanten.",
                "Tot 15 aangepaste tabellen voor aanpassing."
            ]
        },
        {
            label: '+ Voegt toe aan Professional',
            features: [
                "Geavanceerde planning, dispatching, teamcreatie en resourcebeheer via integratie met Field Service & Project Operations.",
                "Intelligente unified routing (50 record-routes/gebruiker/maand).",
                "Customer Service Insights: AI-gestuurde analyses, onderwerpenclustering en sentimentanalyse.",
                "Verwijdert de limiet voor aangepaste tabellen voor volledige Dataverse-aanpassing.",
                "2.000 Customer Voice-reacties per gebruiker/maand."
            ]
        },
        {
            label: '+ Voegt toe aan Enterprise',
            features: [
                "Geïntegreerde Copilot-first contactcenter- en CRM-oplossing aangedreven door generatieve AI.",
                "Uitgebreide contactcenterfunctionaliteiten (digitaal + spraak).",
                "1.000 Copilot Credits per gebruiker/maand.",
                "Opmerking: upgraden naar Premium verwijdert het Customer Voice-recht dat in Enterprise aanwezig is."
            ]
        },
        {
            label: 'Onafhankelijke licentie',
            features: [
                "Alles-in-één contactcenter met zowel digitale als spraakkanalen — geen Customer Service-CRM vereist.",
                "Digitale interactie: live chat, sms, e-mail, sociale media (Facebook, WhatsApp, LINE, Apple Messages for Business) en Microsoft Teams.",
                "Native spraak aangedreven door Azure Communication Services (carrier-/ACS-gebruik wordt afzonderlijk gefactureerd); ondersteunt Azure Direct Routing voor bestaande carriers.",
                "AI-first routing: intelligente unified routing, vaardigheidgebaseerde toewijzing en workforce management-inzichten.",
                "Door Copilot ondersteund agentbureaublad met realtime samenvattingen, suggesties voor de volgende beste actie en gespreksinzichten.",
                "Selfservice: IVR, voicebots en virtuele agents aangedreven door generatieve AI, gebouwd in Copilot Studio.",
                "Open en uitbreidbaar — integreert met bestaande CRM's via API's en adapters.",
                "Vereist Copilot Credits (apart verkocht) voor scenario's met generatieve AI; jaarlijks gefactureerd."
            ]
        },
        {
            label: 'Onafhankelijke licentie',
            features: [
                "Alleen-digitaal contactcenter — messaging- en chatkanalen zonder native spraak.",
                "Live chat, sms, e-mail, sociale media (Facebook, WhatsApp, LINE, Apple Messages for Business) en Microsoft Teams-kanalen.",
                "AI-first unified routing met 50 record-routes/gebruiker/maand (exclusief chats, gesprekken en sms-berichten); vaardigheidgebaseerde toewijzing over digitale kanalen.",
                "Door Copilot ondersteund agentbureaublad met gesprekssamenvattingen en suggesties voor de volgende beste actie.",
                "Selfservicechatbots en virtuele agents gebouwd in Copilot Studio.",
                "Berichtcapaciteit wordt afzonderlijk aangeschaft via Microsoft Copilot Studio.",
                "Open en uitbreidbaar — integreert met bestaande CRM's via API's en adapters."
            ]
        },
        {
            label: 'Onafhankelijke licentie',
            features: [
                "Alleen-spraak contactcenter — native inkomende en uitgaande spraak zonder digitale messagingkanalen.",
                "Native spraak aangedreven door Azure Communication Services (carrier-/ACS-gebruik wordt afzonderlijk gefactureerd); ondersteunt Azure Direct Routing voor bestaande carriers.",
                "Capaciteitsrechten: 2.000 Intelligent Voicebot (IVR)-minuten/gebruiker/maand, 6.000 Call Intelligence-minuten/gebruiker/maand en 35 GB Dataverse-bestandsopslag.",
                "AI-first routing, vaardigheidgebaseerde toewijzing en workforce management-inzichten voor spraakworkloads.",
                "Door Copilot ondersteund agentbureaublad met realtime transcriptie, gesprekssamenvattingen en suggesties voor de volgende beste actie.",
                "Selfservice IVR en voicebots gebouwd in Copilot Studio.",
                "Open en uitbreidbaar — integreert met bestaande CRM's via API's en adapters."
            ]
        }
    ],
    'd365-field': [
        {
            label: 'Hoofdlicentie',
            features: [
                "Voltijdse dispatchers, planners en buitendiensttechnici.",
                "Volledige werkorderlevenscyclus: aanmaken, plannen, dispatchen, voorraad en retouren.",
                "Planbord, gereedheid voor Resource Scheduling Optimization en routeplanning.",
                "Nauwe integratie met Customer Service-casebeheer.",
                "Inclusief de nieuwste Field Service Mobile-applicatie.",
                "Bing Maps Developer-licentie inbegrepen met beperkingen voor factureerbare transacties (zie Microsoft Bing Maps-licentie).",
                "Inclusief recht op Dynamics 365 Guides en Remote Assist (tot 31 dec. 2026).",
                "2.000 Customer Voice-reacties per tenant/maand."
            ]
        },
        {
            label: 'Add-onlicentie',
            features: [
                "Voor externe / parttime technici — biedt essentiële werkorderbeheerfunctionaliteit om buitendienstoperaties op te schalen.",
                "Reeds toegewezen werkorders uitvoeren en bijwerken; cases aanmaken met beperkte bewerkingsmogelijkheden (geen SLA's/rechten/case-routing).",
                "Klantactiva bekijken, eigen middelen beheren en zelf plannen (alleen eigen middelen en handmatige planning).",
                "Inclusief de nieuwste Field Service Mobile-applicatie.",
                "Bevat geen dispatch-, planningsadministratie of voorraadbeheer.",
                "Volgens de Microsoft Dynamics 365 Licensing Guide: organisaties moeten reeds een Field Service-licentie bezitten voordat ze in aanmerking komen om Field Service Contractor-licenties te kopen.",
                "Field Service Contractor-SL's bevatten geen Dataverse-capaciteitsrechten."
            ]
        }
    ],
    'd365-ci': [
        {
            label: 'Tenantlicentie',
            features: [
                "Per tenant gelicentieerd; omvat het recht om Customer Insights – Journeys (voorheen Marketing) en Customer Insights – Data (voorheen Customer Insights) te installeren in een onbeperkt aantal productie- of sandbox-omgevingen.",
                "Customer Insights – Journeys: gepersonaliseerde klantreizen creëren en uitvoeren via e-mail, sms, pushmeldingen en meer.",
                "Customer Insights – Data: klantgegevens samenvoegen en verrijken met het Customer Data Platform (CDP) voor diepgaande inzichten in klantgedrag, -voorkeuren en -interacties.",
                "Kerncapaciteiten: 10.000 Interacted People (Journeys) en 100.000 Unified People (Data) per tenant/maand.",
                "Schaal elke meter onafhankelijk met Interacted People- en Unified People-add-onpakketten (volumeniveaus T1/T2/T3).",
                "Attach-prijs vereist minimaal 10 in aanmerking komende Dynamics 365-basislicenties: Customer Service, Sales, Field Service, Finance, Supply Chain Management of Commerce."
            ]
        }
    ],
    'd365-finance': [
        {
            label: 'Basisniveau',
            features: [
                "Intelligent, geautomatiseerd en betrouwbaar kernfinancieel beheer met diepe data- en procesintegratie tussen Dynamics 365, Microsoft 365 en partnerapplicaties.",
                "Grootboek, crediteuren/debiteuren, vaste activa, budgettering, wereldwijde kostenboekhouding en belastingengine.",
                "Multi-entiteit, multi-valuta en meertalige consolidaties met landspecifieke lokalisaties.",
                "Alleen-lezen toegang tot business performance planning (het maken van plannen/budgetten/forecasts vereist Finance Premium).",
                "Copilot-ondersteuning voor financiële inzichten, leveranciersfactuurverwerking en incassoworkflows.",
                "Inclusief 100 elektronische facturen en 100 factuurvastleggingstransacties per tenant/maand."
            ]
        },
        {
            label: '+ Voegt toe aan Finance',
            features: [
                "Geavanceerde business performance management-werkruimten voor planning, budgettering en forecasting.",
                "Vereiste licentie voor gebruikers die native plannen, budgetten, forecasts of financiële analyserapporten moeten maken.",
                "Subscription billing met terugkerende-omzetmodellen en omzetherkenning conform IFRS 15 / ASC 606.",
                "Geavanceerde AI-scenario's zoals door Copilot ondersteunde variantieanalyse en cashflowforecasting.",
                "Verdubbelt de capaciteit naar 200 elektronische facturen en 200 factuurvastleggingstransacties per tenant/maand.",
                "1.000 Copilot Credits per gebruiker/maand."
            ]
        }
    ],
    'd365-scm': [
        {
            label: 'Basisniveau',
            features: [
                "Realtime zichtbaarheid en intelligentie voor fabrikanten, distributeurs en retailers — proactieve operaties voor orderafhandeling, planning, inkoop, productie, voorraad, magazijn en transport.",
                "Geavanceerde modules: assetbeheer, kostenboekhouding, engineering change management en manufacturing execution.",
                "Discrete, procesmatige, lean en projectgebaseerde productiemodi met geïntegreerd kwaliteitsbeheer.",
                "Warehouse Management mobile-app met handheld scanning, wave-/pack-/load-verwerking en voorraadtracking via license-plate.",
                "Copilot-ondersteuning voor inkoopbeslissingen, vraagvoorspellingsinzichten en uitzonderingsafhandeling in de toeleveringsketen.",
                "Standaardtenantcapaciteiten: 100 activa, 100 elektronische factuurtransacties, 100 factuurvastleggingstransacties en 1.000 orderregels per tenant/maand."
            ]
        },
        {
            label: '+ Voegt toe aan SCM',
            features: [
                "Demand Planning met door Copilot gestuurde forecastgeneratie, segmentatie en uitzonderingsbeheer.",
                "Vereiste licentie voor gebruikers die native plannen, budgetten, forecasts of vraaganalyserapporten moeten maken.",
                "Geavanceerde voorraad- en aanvuloptimalisatie met multi-echelon planning over sites en magazijnen.",
                "Geïntegreerde scenariosimulatie en what-if-analyse voor balans tussen vraag en aanbod.",
                "Verdubbelt de factureringscapaciteit naar 200 elektronische facturen en 200 factuurvastleggingstransacties per tenant/maand (asset- en orderregelcapaciteiten blijven op 100 en 1.000).",
                "1.000 Copilot Credits per gebruiker/maand."
            ]
        }
    ],
    'd365-hr': [
        {
            label: 'Hoofdlicentie',
            features: [
                "Volledige beloning, voordelen, verlof-/afwezigheidstracering, naleving van regelgeving en prestatiefeedback.",
                "Beheer van gestandaardiseerde opleidingsprogramma's met cursuscatalogi, inschrijvingen en afrondingen.",
                "Organisatiebeheer: positiehiërarchieën, functies, afdelingen en werknemerslevenscyclusworkflows (van aanwerving tot pensioen).",
                "Gecentraliseerde personeelsgegevens, uitbreidbaar via Dataverse en Power Platform; integreert met salarisadministratie-partneroplossingen.",
                "Copilot-ondersteuning voor werknemersvragen, documentopstelling en HR-analytics.",
                "2.000 Customer Voice-reacties per tenant/maand."
            ]
        },
        {
            label: 'Onafhankelijke licentie',
            features: [
                "Werknemerszelfservice: persoonlijke informatie bijwerken, ziekmelding doorgeven, voordelen bekijken, vakantieaanvragen indienen en loonstroken downloaden.",
                "Managerzelfservice: verlofaanvragen van werknemers goedkeuren, teamrapportage-informatie bekijken en toegang tot basisteamanalytics.",
                "Mobielvriendelijke toegang via de Dynamics 365 / Power Apps companion-ervaringen.",
                "Volgens de Microsoft Dynamics 365 Licensing Guide: geeft alleen toegang tot Human Resources, niet tot enig ander Dynamics 365-product.",
                "Bevat geen volledige HR-gebruikersrechten — biedt alleen de zelfservicefunctionaliteit die werknemers en managers gewoonlijk nodig hebben.",
                "Ontworpen voor de brede werknemersbasis; volledige HR-specialisten moeten worden gelicentieerd met Human Resources."
            ]
        }
    ],
    'd365-commerce': [
        {
            label: 'Basisniveau',
            features: [
                "Geünificeerde winkel, backoffice en callcenter in één end-to-end retailplatform.",
                "Modern Point of Sale (POS) op Windows, iOS en Android met offline-ondersteuning en clientelingtools.",
                "Intelligente forecasting, AI-gestuurde productaanbevelingen en gepersonaliseerde loyaliteitsprogramma's.",
                "Winkeloperaties, catalogi, merchandisingstrategie, prijs-/kortingsengine en abonnementsfacturering.",
                "Omnichannel-orderbeheer: BOPIS (online kopen, in winkel afhalen), endless aisle en verzending vanuit de winkel.",
                "1.000 orderregels per tenant/maand."
            ]
        },
        {
            label: '+ Voegt toe aan Commerce',
            features: [
                "Tenantgebaseerde niveaus om B2B- en B2C-e-commerce-storefronts volledig te ondersteunen met op AOV gebaseerde capaciteitsbanden.",
                "Commerce Scale Unit – Cloud voor bedrijfskritische piekverwerking.",
                "API-gestuurde headless commerce-engine voor opkomende kanalen (sociale media, marktplaatsen, IoT).",
                "Ingebouwde CMS met drag-and-drop authoring, A/B-testen en SEO-optimalisatie.",
                "Native integraties met betalingsconnectoren, belastingdiensten en beoordelings-/recensieproviders.",
                "Volgens de Microsoft Dynamics 365 Licensing Guide: elke extra e-commerce-omgeving vereist een extra e-Commerce Tier-licentie."
            ]
        }
    ],
    'd365-po': [
        {
            label: 'Volledige licentie',
            features: [
                "Geünificeerd platform dat sales, resourcing, projectbeheer en finance verbindt in één product.",
                "Opportunity-to-cash: projectgebaseerde offertes met work breakdown structure (WBS), contracten en facturering tegen vaste prijs / tijd-en-materiaal / mijlpaal.",
                "Projectplanning, scheduling en resourcebeheer: Gantt, afhankelijkheden, baselines, vaardigheidsgebaseerde resource-aanvragen en capaciteitsplanning.",
                "Tijd-, onkosten- en onderaannemersbeheer met door beleid gestuurde goedkeuringsworkflows en three-way matching tegen projectbudgetten.",
                "Projectboekhouding: kostentarieven, intercompany-prijsstelling en omzetherkenning (percent-complete / as-invoiced) conform IFRS 15 / ASC 606.",
                "Multi-projectportfoliodashboards met earned value (EV), CPI/SPI, margeanalyse en Copilot-ondersteuning voor statussamenvattingen en risicoidentificatie."
            ]
        }
    ],
    'd365-bc': [
        {
            label: 'Basisniveau',
            features: [
                "Financieel beheer: AI-ondersteunde forecasting, bankreconciliatie, uitstellen en meerdere valuta's.",
                "Toeleveringsketen: basisvoorraad, dropshipments, verkoop-/inkoopbeheer en magazijngegevenscapture.",
                "CRM-campagnes, basis-HR en projectbeheertools.",
                "Breed scala aan operationele en managementmogelijkheden afgestemd op het MKB."
            ]
        },
        {
            label: '+ Voegt toe aan Essentials',
            features: [
                "Service Order Management: planning, dispatching en servicecontractbeheer.",
                "Productie: agile manufacturing, basiscapaciteitsplanning, machinecentra en productie-BOM's."
            ]
        }
    ],
    'power-apps': [
        {
            label: 'Volledige licentie',
            features: [
                "Onbeperkte aangepaste applicaties maken en uitvoeren en onbeperkte Power Pages-websites maken en openen.",
                "Volledige Dataverse-toegang met onbeperkte creatie en toegang tot aangepaste tabellen.",
                "Standaard-, Premium- en aangepaste connectoren plus gegevensoverdracht naar on-premises en cloudservices.",
                "Toegewijde Dataverse-capaciteit: 250 MB Database en 2 GB File opgebouwd per gebruiker (op tenantniveau).",
                "Power Automate-gebruiksrechten voor cloudflows in de app-context (RPA vereist een aparte Power Automate Premium-aankoop).",
                "Managed Environments voor administratie en governance op schaal.",
                "Volgens de Power Platform Licensing Guide april 2026: $20 per gebruiker/maand, jaarlijks gefactureerd."
            ]
        },
        {
            label: 'Volumelicentie',
            features: [
                "Dezelfde Power Apps Premium-rechten als de standaard SKU van $20/gebruiker/maand.",
                "Volgens de Power Platform Licensing Guide april 2026: $12 per gebruiker/maand bij 2.000+ nieuwe licenties, jaarlijks gefactureerd.",
                "Gericht op grootschalige enterprise-uitrolprojecten die Power Apps standaardiseren voor duizenden gebruikers.",
                "Aangeschaft via uw Microsoft-accountteam of Enterprise Agreement-amendement.",
                "Alle andere mogelijkheden (Dataverse-capaciteit, premiumconnectoren, Managed Environments) zijn identiek aan de standaard Premium-SKU."
            ]
        }
    ],
    'power-automate': [
        {
            label: 'Hoofdlicentie',
            features: [
                "Moderne applicaties automatiseren via API-gebaseerde digitale procesautomatisering (cloudflows: geautomatiseerd, direct, gepland).",
                "Legacy-applicaties automatiseren via UI-gebaseerde robotic process automation (begeleide desktop flows / RPA).",
                "Bedrijfsprocesflows voor gestructureerde, stateful, mens-interactieve workflows.",
                "Process Mining: processen visualiseren en analyseren (extra Process Mining-capaciteit beschikbaar als 100 GB/tenant/maand add-on).",
                "Standaard-, Premium- en aangepaste connectoren plus gegevensoverdracht naar on-premises en cloudservices.",
                "Dataverse-gebruiksrechten: 250 MB Database en 2 GB File opgebouwd per gebruiker (op tenantniveau).",
                "Managed Environments voor administratie en governance op schaal.",
                "Volgens de Power Platform Licensing Guide april 2026: $15 per gebruiker/maand, jaarlijks gefactureerd; één licentie staat de gebruiker (of capaciteit) toe Power Automate te gebruiken in elke omgeving van de tenant."
            ]
        },
        {
            label: 'Onafhankelijke licentie',
            features: [
                "Licentieert één enkele \"automatiserings\"-bot voor onbeheerde robotic process automation (draait onafhankelijk van een gebruiker) of een kritisch bedrijfsproces via UI-gebaseerde digitale procesautomatisering.",
                "Kan alternatief een centraal, hoofd-bedrijfsproces licentiëren (bijv. HR-onboarding) voor organisatiebrede toegang zonder licentie per gebruiker.",
                "Volgens de Power Platform Licensing Guide april 2026: $150 per bot/maand (jaarlijks gefactureerd) — per omgeving/maand; één licentie staat toe dat de bot of het proces in één omgeving wordt gebruikt, en een extra licentie is vereist als dezelfde bot of hetzelfde proces in een andere omgeving wordt geïmplementeerd.",
                "Inclusief Dataverse-gebruiksrechten: 50 MB Database en 200 MB File opgebouwd per licentie."
            ]
        }
    ],
    'power-pages': [
        {
            label: 'Instapniveau',
            features: [
                "Licentieert geverifieerde bezoekers die zich aanmelden via een identity provider (Microsoft Entra ID, sociale providers, B2C, SAML, OpenID of aangepast).",
                "Elk pakket dekt 100 ingelogde gebruikers per site per maand.",
                "Startersniveau — geen minimale pakketverplichting.",
                "Onbeperkt gebruik van standaard-, premium- en aangepaste connectoren.",
                "Volledige Dataverse-toegang (inclusief aangepaste en complexe tabellen); bouwt 2 GB Database + 16 GB File-capaciteit per pakket op.",
                "Managed Environments voor administratie en governance op schaal."
            ]
        },
        {
            label: 'Volumeniveau',
            features: [
                "Dezelfde rechten als Authenticated T1 (100 ingelogde gebruikers/site/maand per pakket) tegen een lagere prijs per pakket.",
                "Minimale aankoop: 100 pakketten (= 10.000 geverifieerde gebruikers/site/maand).",
                "Doelgebruik: middelgrote tot grote externe portals met constant geverifieerd verkeer."
            ]
        },
        {
            label: 'Hoogvolumeniveau',
            features: [
                "Dezelfde rechten als Authenticated T1 tegen de laagste prijs per pakket.",
                "Minimale aankoop: 1.000 pakketten (= 100.000 geverifieerde gebruikers/site/maand).",
                "Doelgebruik: externe portals op enterprise-schaal, partner-/klantcommunities en B2B-marktplaatsen."
            ]
        },
        {
            label: 'Instapniveau',
            features: [
                "Licentieert anonieme bezoekers die zonder aanmelding toegang hebben tot sites.",
                "Elk pakket dekt 500 anonieme gebruikers per site per maand.",
                "Startersniveau — geen minimale pakketverplichting.",
                "Onbeperkt gebruik van standaard-, premium- en aangepaste connectoren.",
                "Volledige Dataverse-toegang (inclusief aangepaste en complexe tabellen); bouwt 500 MB Database + 4 GB File-capaciteit per pakket op.",
                "Managed Environments voor administratie en governance op schaal."
            ]
        },
        {
            label: 'Volumeniveau',
            features: [
                "Dezelfde rechten als Anonymous T1 (500 anonieme gebruikers/site/maand per pakket) tegen een lagere prijs per pakket.",
                "Minimale aankoop: 20 pakketten (= 10.000 anonieme gebruikers/site/maand).",
                "Doelgebruik: marketingsites, kennisbanken en publieke portals met gemiddeld verkeer."
            ]
        },
        {
            label: 'Hoogvolumeniveau',
            features: [
                "Dezelfde rechten als Anonymous T1 tegen de laagste prijs per pakket.",
                "Minimale aankoop: 200 pakketten (= 100.000 anonieme gebruikers/site/maand).",
                "Doelgebruik: drukbezochte publieke websites, selfserviceportals en grootschalige externe landingspagina's."
            ]
        }
    ],
    'copilot-studio': [
        {
            label: 'Tenantlicentie',
            features: [
                "Tenantbrede licentie die wordt verkocht in capaciteitspakketten van 25.000 Copilot Credits voor $200/pakket/maand.",
                "Elke agentactie of -respons verbruikt een variabel aantal Copilot Credits, afhankelijk van de bewerking.",
                "Beschikbaar in twee factureringsmodellen met identieke productfuncties: Pre-Purchase Plan (vooruitbetaalde Copilot Credit Commit Units vooraf gekozen, tot 20% besparing t.o.v. pay-as-you-go, automatische pay-as-you-go-fallback wanneer vooruitbetaalde credits op zijn) en Pay-as-you-go (geen voorafgaande verplichting, maandelijks gefactureerd voor werkelijk verbruik).",
                "Azure-abonnement vereist om de omgeving te koppelen aan facturering (vooral voor pay-as-you-go).",
                "Volledige rechten om intelligente agents en bots te bouwen met grafische low-code authoring; publiceren naar externe kanalen (websites, apps, sociale platforms) en gebruik door niet-gelicentieerde gebruikers toestaan.",
                "Inclusief Power Automate-cloudflows (geautomatiseerd, direct, gepland) met tot 250.000 Power Platform-aanvragen per dag op tenantniveau.",
                "Cloudflows verbruiken geen primaire Copilot Studio-bericht-/creditcapaciteit.",
                "Volledige toegang tot standaard-, premium- en aangepaste connectoren; gegevensoverdracht naar on-premises en cloudservices.",
                "Volledige Dataverse-gebruiksrechten: 250 MB Database en 2 GB File-capaciteit per licentie.",
                "Managed Environments voor uitgebreide administratie en governance op schaal."
            ]
        }
    ],
    'sust-emissions': [
        {
            label: 'Basisniveau',
            features: [
                "Fundamentele tracering van koolstof (Scope 1 & 2), water en afval met vooraf opgebouwde gegevensmodellen.",
                "Activiteitsgegevens opnemen uit on-premises, cloud- en IoT-bronnen via kant-en-klare connectoren.",
                "Ingebouwde emissiefactorbibliotheken en geautomatiseerde berekeningen conform GHG Protocol.",
                "Interactieve analytics, scorecards en ESG-rapportagedashboards.",
                "Doelstelling en voortgangsbewaking ten opzichte van duurzaamheidsdoelen."
            ]
        },
        {
            label: '+ Voegt toe aan Essentials',
            features: [
                "Geavanceerde Scope 3-emissietracering over de volledige waardeketen (upstream- en downstream-categorieën).",
                "Berekening van Product Carbon Footprint (PCF) en delen met leveranciers en klanten.",
                "Copilot in Sustainability Manager voor inzichten in natuurlijke taal, rapportage en gegevenskwaliteitscontroles.",
                "ESG-waardeketenbeheer en leveranciersbetrokkenheidsworkflows.",
                "Uitgebreide gegevensopnamecapaciteit en geavanceerde analytics voor complexe ESG-rapportageverplichtingen."
            ]
        }
    ]
};
