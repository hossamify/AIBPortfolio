// French overrides for LICENSE_DETAILS.
// Only `label` and `features` are translated. `tier` stays English (official SKU name).
// Array order and length must match licenseDetails.js exactly.

export const LICENSE_DETAILS_FR = {
    'd365-sales': [
        {
            label: 'Niveau de base',
            features: [
                "Automatisation essentielle de la force de vente (SFA) pour les organisations sans processus de vente complexes.",
                "Créer, lire, mettre à jour et supprimer des comptes, des contacts et des prospects.",
                "Gérer les factures, commandes, devis et listes de prix.",
                "Campagnes marketing et listes marketing.",
                "Jusqu'à 15 tables personnalisées pour la personnalisation de l'application.",
                "Selon le guide de licence Microsoft Dynamics 365 : les clients utilisant Sales Professional ne peuvent pas combiner Sales Premium, Sales Enterprise ou Sales Insights dans la même instance d'environnement."
            ]
        },
        {
            label: '+ Ajoute à Professional',
            features: [
                "Personnalisation illimitée — supprime la limite de 15 tables personnalisées.",
                "Intelligence intégrée et prévisions manuelles.",
                "Fonctionnalités Sales Premium à capacité limitée : Conversation Intelligence, Sales Accelerator (1 500 enregistrements/env/mois), scoring des prospects et opportunités.",
                "Copilot dans Dynamics 365 Sales.",
                "2 000 réponses Customer Voice par locataire/mois."
            ]
        },
        {
            label: '+ Ajoute à Enterprise',
            features: [
                "Accès complet et illimité à toute l'automatisation et l'IA de Sales Insights.",
                "Prévisions prédictives, analyses relationnelles, intelligence du pipeline.",
                "Assistant Studio, Connection Insights et analyse des notes.",
                "Lecteur de cartes de visite (200 scans/utilisateur/mois).",
                "1 000 crédits Copilot par utilisateur/mois pour les agents IA."
            ]
        }
    ],
    'd365-cs': [
        {
            label: 'Niveau de base',
            features: [
                "Ressources simplifiées pour les agents traitant des scénarios moins complexes.",
                "Gestion de cas de base et chat agent-équipe.",
                "Site web en libre-service et base de connaissances pour les clients.",
                "Jusqu'à 15 tables personnalisées pour la personnalisation."
            ]
        },
        {
            label: '+ Ajoute à Professional',
            features: [
                "Planification, répartition, création d'équipes et gestion des ressources avancées via l'intégration de Field Service et Project Operations.",
                "Routage unifié intelligent (50 routes d'enregistrement/utilisateur/mois).",
                "Customer Service Insights : analyses pilotées par IA, regroupement par sujet et analyse de sentiment.",
                "Supprime la limite des tables personnalisées pour une personnalisation Dataverse complète.",
                "2 000 réponses Customer Voice par utilisateur/mois."
            ]
        },
        {
            label: '+ Ajoute à Enterprise',
            features: [
                "Solution intégrée centre de contact et CRM Copilot-first, propulsée par l'IA générative.",
                "Fonctionnalités complètes de centre de contact (numérique + voix).",
                "1 000 crédits Copilot par utilisateur/mois.",
                "Note : la mise à niveau vers Premium retire le droit Customer Voice présent dans Enterprise."
            ]
        },
        {
            label: 'Licence indépendante',
            features: [
                "Centre de contact tout-en-un avec canaux numériques et voix — aucun CRM Customer Service requis.",
                "Engagement numérique : chat en direct, SMS, e-mail, réseaux sociaux (Facebook, WhatsApp, LINE, Apple Messages for Business) et Microsoft Teams.",
                "Voix native propulsée par Azure Communication Services (utilisation opérateur/ACS facturée séparément) ; prend en charge Azure Direct Routing pour les opérateurs existants.",
                "Routage IA-first : routage unifié intelligent, affectation par compétences et analyses de gestion des effectifs.",
                "Bureau d'agent assisté par Copilot avec résumés en temps réel, suggestions de prochaine meilleure action et analyses de conversation.",
                "Libre-service : SVI, voicebots et agents virtuels propulsés par IA générative créés dans Copilot Studio.",
                "Ouvert et extensible — s'intègre aux CRM existants via API et adaptateurs.",
                "Nécessite des crédits Copilot (vendus séparément) pour les scénarios d'IA générative ; facturé annuellement."
            ]
        },
        {
            label: 'Licence indépendante',
            features: [
                "Centre de contact uniquement numérique — canaux de messagerie et chat sans voix native.",
                "Chat en direct, SMS, e-mail, réseaux sociaux (Facebook, WhatsApp, LINE, Apple Messages for Business) et canaux Microsoft Teams.",
                "Routage unifié IA-first avec 50 routes d'enregistrement/utilisateur/mois (hors chats, appels et SMS) ; affectation par compétences sur les canaux numériques.",
                "Bureau d'agent assisté par Copilot avec résumés de conversation et suggestions de prochaine meilleure action.",
                "Chatbots en libre-service et agents virtuels créés dans Copilot Studio.",
                "La capacité de messages s'achète séparément via Microsoft Copilot Studio.",
                "Ouvert et extensible — s'intègre aux CRM existants via API et adaptateurs."
            ]
        },
        {
            label: 'Licence indépendante',
            features: [
                "Centre de contact uniquement vocal — voix native entrante et sortante sans canaux de messagerie numérique.",
                "Voix native propulsée par Azure Communication Services (utilisation opérateur/ACS facturée séparément) ; prend en charge Azure Direct Routing pour les opérateurs existants.",
                "Droits de capacité : 2 000 minutes Intelligent Voicebot (SVI)/utilisateur/mois, 6 000 minutes Call Intelligence/utilisateur/mois et 35 Go de stockage de fichiers Dataverse.",
                "Routage IA-first, affectation par compétences et analyses de gestion des effectifs pour les charges de travail vocales.",
                "Bureau d'agent assisté par Copilot avec transcription en temps réel, résumés d'appels et suggestions de prochaine meilleure action.",
                "SVI et voicebots en libre-service créés dans Copilot Studio.",
                "Ouvert et extensible — s'intègre aux CRM existants via API et adaptateurs."
            ]
        }
    ],
    'd365-field': [
        {
            label: 'Licence principale',
            features: [
                "Répartiteurs, planificateurs et techniciens de terrain à temps plein.",
                "Cycle de vie complet des ordres de travail : création, planification, répartition, inventaire et retours.",
                "Tableau de planification, préparation à Resource Scheduling Optimization et planification d'itinéraires.",
                "Intégration étroite avec la gestion de cas de Customer Service.",
                "Inclut la dernière application Field Service Mobile.",
                "Licence Bing Maps Developer incluse avec limitations sur les transactions facturables (voir la licence Microsoft Bing Maps).",
                "Inclut le droit Dynamics 365 Guides et Remote Assist (jusqu'au 31 déc. 2026).",
                "2 000 réponses Customer Voice par locataire/mois."
            ]
        },
        {
            label: 'Licence complémentaire',
            features: [
                "Pour les techniciens tiers / à temps partiel — fournit les fonctionnalités essentielles de gestion d'ordres de travail pour faire évoluer les opérations terrain.",
                "Exécuter et mettre à jour les ordres de travail qui leur sont déjà assignés ; créer des cas avec capacité d'édition limitée (pas de SLA/droits/routage de cas).",
                "Consulter les actifs clients, gérer ses propres ressources et auto-planifier (uniquement ressources propres et planification manuelle).",
                "Inclut la dernière application Field Service Mobile.",
                "N'inclut pas la répartition, l'administration de la planification ni la gestion d'inventaire.",
                "Selon le guide de licence Microsoft Dynamics 365 : les organisations doivent déjà posséder une licence Field Service avant de pouvoir acheter des licences Field Service Contractor.",
                "Les licences SL Field Service Contractor n'incluent aucun droit de capacité Dataverse."
            ]
        }
    ],
    'd365-ci': [
        {
            label: 'Licence locataire',
            features: [
                "Sous licence par locataire ; inclut les droits d'installer Customer Insights – Journeys (anciennement Marketing) et Customer Insights – Data (anciennement Customer Insights) dans un nombre illimité d'environnements de production ou bac à sable.",
                "Customer Insights – Journeys : créer et exécuter des parcours clients personnalisés via e-mail, SMS, notifications push, etc.",
                "Customer Insights – Data : unifier et enrichir les données clients avec la Customer Data Platform (CDP) pour des informations approfondies sur le comportement, les préférences et les interactions des clients.",
                "Capacités principales : 10 000 Interacted People (Journeys) et 100 000 Unified People (Data) par locataire/mois.",
                "Faites évoluer chaque compteur indépendamment avec les packs complémentaires Interacted People et Unified People (paliers de volume T1/T2/T3).",
                "Le prix d'attache requiert un minimum de 10 licences Dynamics 365 de base éligibles : Customer Service, Sales, Field Service, Finance, Supply Chain Management ou Commerce."
            ]
        }
    ],
    'd365-finance': [
        {
            label: 'Niveau de base',
            features: [
                "Gestion financière intelligente, automatisée et fiable avec une intégration approfondie des données et des processus à travers Dynamics 365, Microsoft 365 et les applications partenaires.",
                "Grand livre, comptes fournisseurs/clients, immobilisations, budgétisation, comptabilité analytique mondiale et moteur fiscal.",
                "Consolidations multi-entités, multi-devises et multilingues avec localisations spécifiques par pays.",
                "Accès en lecture seule à la planification de la performance d'entreprise (la création de plans/budgets/prévisions nécessite Finance Premium).",
                "Assistance Copilot pour les insights financiers, le traitement des factures fournisseurs et les flux de recouvrement.",
                "Inclut 100 transactions de facturation électronique et 100 transactions de capture de factures par locataire/mois."
            ]
        },
        {
            label: '+ Ajoute à Finance',
            features: [
                "Espaces de travail avancés de gestion de la performance d'entreprise pour la planification, la budgétisation et les prévisions.",
                "Licence requise pour les utilisateurs qui doivent créer nativement des plans, budgets, prévisions ou rapports d'analyse financière.",
                "Facturation par abonnement avec modèles de revenus récurrents et reconnaissance de revenus alignée sur IFRS 15 / ASC 606.",
                "Scénarios d'IA avancés tels que l'analyse d'écart assistée par Copilot et les prévisions de trésorerie.",
                "Double la capacité à 200 transactions de facturation électronique et 200 transactions de capture de factures par locataire/mois.",
                "1 000 crédits Copilot par utilisateur/mois."
            ]
        }
    ],
    'd365-scm': [
        {
            label: 'Niveau de base',
            features: [
                "Visibilité et intelligence en temps réel pour les fabricants, distributeurs et détaillants — opérations proactives sur l'exécution des commandes, la planification, l'approvisionnement, la production, l'inventaire, l'entreposage et le transport.",
                "Modules avancés : gestion des actifs, comptabilité analytique, gestion des modifications techniques et exécution de fabrication.",
                "Modes de fabrication discrète, par processus, lean et par projet avec gestion intégrée de la qualité.",
                "Application mobile Warehouse Management avec scan portatif, traitement vague/colis/charge et suivi d'inventaire par plaques d'immatriculation.",
                "Assistance Copilot pour les décisions d'approvisionnement, les insights de prévision de la demande et la gestion des exceptions à travers la chaîne logistique.",
                "Capacités locataire par défaut : 100 actifs, 100 transactions de facturation électronique, 100 transactions de capture de factures et 1 000 lignes de commande par locataire/mois."
            ]
        },
        {
            label: '+ Ajoute à SCM',
            features: [
                "Demand Planning avec génération de prévisions, segmentation et gestion des exceptions pilotées par Copilot.",
                "Licence requise pour les utilisateurs qui doivent créer nativement des plans, budgets, prévisions ou rapports d'analyse de la demande.",
                "Optimisation avancée de l'inventaire et du réapprovisionnement avec planification multi-échelon entre sites et entrepôts.",
                "Simulation de scénarios intégrée et analyse what-if pour l'équilibrage offre/demande.",
                "Double la capacité de facturation à 200 transactions de facturation électronique et 200 transactions de capture de factures par locataire/mois (les capacités d'actifs et de lignes de commande restent à 100 et 1 000).",
                "1 000 crédits Copilot par utilisateur/mois."
            ]
        }
    ],
    'd365-hr': [
        {
            label: 'Licence principale',
            features: [
                "Rémunération complète, avantages, suivi des congés/absences, conformité réglementaire et feedback de performance.",
                "Gestion des programmes de formation standardisés avec catalogues de cours, inscriptions et achèvements.",
                "Gestion organisationnelle : hiérarchies de postes, emplois, départements et flux de cycle de vie du collaborateur (de l'embauche à la retraite).",
                "Données collaborateurs centralisées extensibles via Dataverse et Power Platform ; s'intègre avec les solutions partenaires de paie.",
                "Assistance Copilot pour les demandes des employés, la rédaction de documents et l'analytique RH.",
                "2 000 réponses Customer Voice par locataire/mois."
            ]
        },
        {
            label: 'Licence indépendante',
            features: [
                "Libre-service employé : mettre à jour les informations personnelles, déclarer un arrêt maladie, consulter les avantages, soumettre des demandes de congés et télécharger les fiches de paie.",
                "Libre-service manager : approuver les congés des employés, consulter les informations de reporting de l'équipe et accéder aux analyses d'équipe de base.",
                "Accès mobile via les expériences compagnons Dynamics 365 / Power Apps.",
                "Selon le guide de licence Microsoft Dynamics 365 : n'accorde l'accès qu'à Human Resources, à aucun autre produit Dynamics 365.",
                "N'inclut pas les droits utilisateur RH complets — fournit uniquement les fonctionnalités de libre-service dont les employés et managers ont couramment besoin.",
                "Conçu pour la base d'employés étendue ; les spécialistes RH complets doivent être licenciés avec Human Resources."
            ]
        }
    ],
    'd365-commerce': [
        {
            label: 'Niveau de base',
            features: [
                "Magasin, back office et centre d'appels unifiés en une plateforme de vente au détail de bout en bout.",
                "Point de vente (POS) moderne sur Windows, iOS et Android avec prise en charge hors ligne et outils de clienteling.",
                "Prévision intelligente, recommandations de produits pilotées par IA et programmes de fidélité personnalisés.",
                "Opérations de magasin, catalogues, stratégie de merchandising, moteur de prix/remises et facturation par abonnement.",
                "Gestion omnicanal des commandes : BOPIS (achat en ligne, retrait en magasin), allée infinie et expédition depuis le magasin.",
                "1 000 lignes de commande par locataire/mois."
            ]
        },
        {
            label: '+ Ajoute à Commerce',
            features: [
                "Paliers basés sur le locataire pour soutenir pleinement les vitrines e-commerce B2B et B2C avec des bandes de capacité basées sur la valeur moyenne de commande (AOV).",
                "Commerce Scale Unit – Cloud pour le traitement critique en pic de demande.",
                "Moteur de commerce headless piloté par API pour les canaux émergents (réseaux sociaux, places de marché, IoT).",
                "CMS intégré avec création par glisser-déposer, tests A/B et optimisation SEO.",
                "Intégrations natives avec connecteurs de paiement, services fiscaux et fournisseurs de notation/avis.",
                "Selon le guide de licence Microsoft Dynamics 365 : chaque environnement e-commerce supplémentaire nécessite une licence e-Commerce Tier supplémentaire."
            ]
        }
    ],
    'd365-po': [
        {
            label: 'Licence complète',
            features: [
                "Plateforme unifiée connectant ventes, gestion des ressources, gestion de projet et finance dans un seul produit.",
                "De l'opportunité à l'encaissement : devis basés sur projet avec structure de découpage du travail (WBS), contrats et facturation à prix fixe / temps et matières / par jalon.",
                "Planification de projet, ordonnancement et gestion des ressources : Gantt, dépendances, références, demandes de ressources par compétences et planification de la capacité.",
                "Gestion du temps, des dépenses et des sous-traitants avec flux d'approbation pilotés par politique et rapprochement à trois voies par rapport aux budgets de projet.",
                "Comptabilité de projet : taux de coût, prix intersociétés et reconnaissance de revenus (pourcentage d'achèvement / au fur et à mesure de la facturation) alignée sur IFRS 15 / ASC 606.",
                "Tableaux de bord de portefeuille multi-projets avec valeur acquise (EV), CPI/SPI, analyse de marge et assistance Copilot pour les résumés d'état et l'identification des risques."
            ]
        }
    ],
    'd365-bc': [
        {
            label: 'Niveau de base',
            features: [
                "Gestion financière : prévisions assistées par IA, rapprochement bancaire, reports et devises multiples.",
                "Chaîne logistique : inventaire de base, expéditions directes, gestion des commandes de vente/achat et capture de données d'entrepôt.",
                "Campagnes CRM, ressources humaines de base et outils de gestion de projet.",
                "Large gamme de capacités opérationnelles et de gestion adaptées aux PME."
            ]
        },
        {
            label: '+ Ajoute à Essentials',
            features: [
                "Gestion des ordres de service : planification, répartition et gestion des contrats de service.",
                "Fabrication : fabrication agile, planification de capacité de base, centres de machines et nomenclatures de production."
            ]
        }
    ],
    'power-apps': [
        {
            label: 'Licence complète',
            features: [
                "Créer et exécuter un nombre illimité d'applications personnalisées et créer et accéder à un nombre illimité de sites Power Pages.",
                "Accès complet à Dataverse avec création illimitée et accès aux tables personnalisées.",
                "Connecteurs standard, premium et personnalisés, ainsi que transfert de données vers les services cloud et locaux.",
                "Capacité Dataverse dédiée : 250 Mo de base de données et 2 Go de fichiers cumulés par utilisateur (au niveau locataire).",
                "Droits d'utilisation Power Automate pour les flux cloud dans le contexte de l'application (le RPA nécessite un achat séparé Power Automate Premium).",
                "Managed Environments pour l'administration et la gouvernance à grande échelle.",
                "Selon le Power Platform Licensing Guide d'avril 2026 : 20 $ par utilisateur/mois, facturé annuellement."
            ]
        },
        {
            label: 'Licence en volume',
            features: [
                "Mêmes droits Power Apps Premium que la SKU standard à 20 $/utilisateur/mois.",
                "Selon le Power Platform Licensing Guide d'avril 2026 : 12 $ par utilisateur/mois avec 2 000+ nouvelles licences, facturé annuellement.",
                "Cible les déploiements d'entreprise à grande échelle standardisant Power Apps pour des milliers d'utilisateurs.",
                "Acheté via votre équipe de compte Microsoft ou un avenant à l'Enterprise Agreement.",
                "Toutes les autres capacités (capacité Dataverse, connecteurs premium, Managed Environments) sont identiques à la SKU Premium standard."
            ]
        }
    ],
    'power-automate': [
        {
            label: 'Licence principale',
            features: [
                "Automatiser les applications modernes via l'automatisation des processus numériques basée sur API (flux cloud : automatisés, instantanés, planifiés).",
                "Automatiser les applications héritées via l'automatisation des processus robotiques basée sur l'interface utilisateur (flux de bureau assistés / RPA).",
                "Flux de processus métier pour des workflows structurés, à état et interactifs avec l'humain.",
                "Process Mining : visualiser et analyser les processus (capacité Process Mining supplémentaire disponible en complément 100 Go/locataire/mois).",
                "Connecteurs standard, premium et personnalisés, ainsi que transfert de données vers les services cloud et locaux.",
                "Droits d'utilisation Dataverse : 250 Mo de base de données et 2 Go de fichiers cumulés par utilisateur (au niveau locataire).",
                "Managed Environments pour l'administration et la gouvernance à grande échelle.",
                "Selon le Power Platform Licensing Guide d'avril 2026 : 15 $ par utilisateur/mois, facturé annuellement ; une licence permet à l'utilisateur (ou à la capacité) d'utiliser Power Automate dans n'importe quel environnement du locataire."
            ]
        },
        {
            label: 'Licence indépendante',
            features: [
                "Licencie un seul bot « d'automatisation » pour l'automatisation des processus robotiques non assistée (s'exécute indépendamment d'un utilisateur) ou un processus métier critique via l'automatisation des processus numériques basée sur l'interface utilisateur.",
                "Peut alternativement licencier un processus métier central de haut niveau (par ex. l'onboarding RH) pour un accès à l'échelle de l'organisation sans licence par utilisateur.",
                "Selon le Power Platform Licensing Guide d'avril 2026 : 150 $ par bot/mois (facturé annuellement) — par environnement/mois ; une licence permet d'utiliser le bot ou le processus dans un seul environnement, et une licence supplémentaire est requise si le même bot ou processus est déployé dans un autre environnement.",
                "Inclut les droits d'utilisation Dataverse : 50 Mo de base de données et 200 Mo de fichiers cumulés par licence."
            ]
        }
    ],
    'power-pages': [
        {
            label: 'Palier d\'entrée',
            features: [
                "Licencie les visiteurs authentifiés qui se connectent via un fournisseur d'identité (Microsoft Entra ID, fournisseurs sociaux, B2C, SAML, OpenID ou personnalisé).",
                "Chaque pack couvre 100 utilisateurs connectés par site par mois.",
                "Palier de démarrage — aucun engagement minimum de pack.",
                "Utilisation illimitée des connecteurs standard, premium et personnalisés.",
                "Accès complet à Dataverse (y compris tables personnalisées et complexes) ; cumule 2 Go de base de données + 16 Go de capacité de fichiers par pack.",
                "Managed Environments pour l'administration et la gouvernance à grande échelle."
            ]
        },
        {
            label: 'Palier en volume',
            features: [
                "Mêmes droits qu'Authenticated T1 (100 utilisateurs connectés/site/mois par pack) à un prix par pack réduit.",
                "Achat minimum : 100 packs (= 10 000 utilisateurs authentifiés/site/mois).",
                "Cas d'usage cible : portails externes de taille moyenne à grande avec un trafic authentifié régulier."
            ]
        },
        {
            label: 'Palier haut volume',
            features: [
                "Mêmes droits qu'Authenticated T1 au prix par pack le plus bas.",
                "Achat minimum : 1 000 packs (= 100 000 utilisateurs authentifiés/site/mois).",
                "Cas d'usage cible : portails externes à l'échelle de l'entreprise, communautés partenaires/clients et places de marché B2B."
            ]
        },
        {
            label: 'Palier d\'entrée',
            features: [
                "Licencie les visiteurs anonymes qui accèdent aux sites sans se connecter.",
                "Chaque pack couvre 500 utilisateurs anonymes par site par mois.",
                "Palier de démarrage — aucun engagement minimum de pack.",
                "Utilisation illimitée des connecteurs standard, premium et personnalisés.",
                "Accès complet à Dataverse (y compris tables personnalisées et complexes) ; cumule 500 Mo de base de données + 4 Go de capacité de fichiers par pack.",
                "Managed Environments pour l'administration et la gouvernance à grande échelle."
            ]
        },
        {
            label: 'Palier en volume',
            features: [
                "Mêmes droits qu'Anonymous T1 (500 utilisateurs anonymes/site/mois par pack) à un prix par pack réduit.",
                "Achat minimum : 20 packs (= 10 000 utilisateurs anonymes/site/mois).",
                "Cas d'usage cible : sites marketing, bases de connaissances et portails publics avec un trafic modéré."
            ]
        },
        {
            label: 'Palier haut volume',
            features: [
                "Mêmes droits qu'Anonymous T1 au prix par pack le plus bas.",
                "Achat minimum : 200 packs (= 100 000 utilisateurs anonymes/site/mois).",
                "Cas d'usage cible : sites web publics à fort trafic, portails libre-service et grandes pages d'atterrissage externes."
            ]
        }
    ],
    'copilot-studio': [
        {
            label: 'Licence locataire',
            features: [
                "Licence à l'échelle du locataire vendue en packs de capacité de 25 000 crédits Copilot à 200 $/pack/mois.",
                "Chaque action ou réponse d'agent consomme un nombre variable de crédits Copilot selon l'opération.",
                "Disponible en deux modèles de facturation avec des fonctionnalités produit identiques : Plan de pré-achat (unités d'engagement de crédits Copilot prépayées choisies à l'avance, économies jusqu'à 20 % par rapport au pay-as-you-go, bascule automatique en pay-as-you-go quand les crédits prépayés sont épuisés) et Pay-as-you-go (aucun engagement initial, facturé mensuellement selon la consommation réelle).",
                "Abonnement Azure requis pour lier l'environnement à la facturation (en particulier pour le pay-as-you-go).",
                "Droits complets de créer des agents et bots intelligents avec création graphique low-code ; publier sur des canaux externes (sites web, applications, plateformes sociales) et permettre aux utilisateurs non licenciés de les consommer.",
                "Inclut les flux cloud Power Automate (automatisés, instantanés, planifiés) avec jusqu'à 250 000 requêtes Power Platform par jour au niveau du locataire.",
                "Les flux cloud ne consomment pas la capacité primaire de messages/crédits Copilot Studio.",
                "Accès complet aux connecteurs standard, premium et personnalisés ; transfert de données vers les services cloud et locaux.",
                "Droits d'utilisation Dataverse complets : 250 Mo de base de données et 2 Go de capacité de fichiers par licence.",
                "Managed Environments pour une administration et une gouvernance complètes à grande échelle."
            ]
        }
    ],
    'sust-emissions': [
        {
            label: 'Niveau de base',
            features: [
                "Suivi fondamental du carbone (Scope 1 & 2), de l'eau et des déchets avec des modèles de données pré-construits.",
                "Ingérer les données d'activité depuis des sources locales, cloud et IoT via des connecteurs prêts à l'emploi.",
                "Bibliothèques de facteurs d'émission intégrées et calculs automatisés alignés sur le GHG Protocol.",
                "Tableaux de bord d'analyses interactives, scorecards et reporting ESG.",
                "Définition d'objectifs et suivi des progrès par rapport aux cibles de durabilité."
            ]
        },
        {
            label: '+ Ajoute à Essentials',
            features: [
                "Suivi avancé des émissions Scope 3 sur l'ensemble de la chaîne de valeur (catégories en amont et en aval).",
                "Calcul de l'empreinte carbone produit (PCF) et partage avec les fournisseurs et clients.",
                "Copilot dans Sustainability Manager pour des insights en langage naturel, du reporting et des contrôles de qualité des données.",
                "Gestion ESG de la chaîne de valeur et flux d'engagement des fournisseurs.",
                "Capacité d'ingestion de données étendue et analyses avancées pour les exigences complexes de reporting ESG."
            ]
        }
    ]
};
