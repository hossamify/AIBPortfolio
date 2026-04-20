// Autonomous agent inventory grouped by Microsoft business application.
// Source: Microsoft Learn documentation (2025/2026 release waves).
// Update this file when new agents ship or URLs change.
//
// Each group reuses the same brand icon as the corresponding product in
// portfolio.js so the visual identity is consistent across the app.

import { Briefcase, Headphones, MapPin, Calculator, Boxes, ShoppingCart } from 'lucide-react';
import { createBrandIcon } from '../components/BrandIcon.jsx';

import salesSvg from '../assets/icons/Sales.svg';
import customerServicesSvg from '../assets/icons/CustomerServices.svg';
import fieldServiceSvg from '../assets/icons/FieldService.svg';
import financeSvg from '../assets/icons/Finance.svg';
import supplyChainSvg from '../assets/icons/SupplyChainManagement.svg';
import projectOperationsSvg from '../assets/icons/ProjectOperations.svg';
import businessCentralSvg from '../assets/icons/BusinessCentral.svg';

const SalesIcon = createBrandIcon(salesSvg, 'Dynamics 365 Sales');
const CustomerServiceIcon = createBrandIcon(customerServicesSvg, 'Dynamics 365 Customer Service');
const FieldServiceIcon = createBrandIcon(fieldServiceSvg, 'Dynamics 365 Field Service');
const FinanceIcon = createBrandIcon(financeSvg, 'Dynamics 365 Finance');
const SupplyChainIcon = createBrandIcon(supplyChainSvg, 'Dynamics 365 Supply Chain Management');
const ProjectOperationsIcon = createBrandIcon(projectOperationsSvg, 'Dynamics 365 Project Operations');
const BusinessCentralIcon = createBrandIcon(businessCentralSvg, 'Dynamics 365 Business Central');

// Per-product category color theme keys reused from portfolio.js so each
// agent group inherits the visual identity of its parent product family.
const THEMES = {
    blue:   { bg: 'bg-blue-50 dark:bg-blue-950/40',   text: 'text-blue-700 dark:text-blue-300',   border: 'border-blue-200 dark:border-blue-800',   iconColor: 'text-blue-600 dark:text-blue-400',   ring: 'ring-blue-500' },
    indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', iconColor: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500' },
    teal:   { bg: 'bg-teal-50 dark:bg-teal-950/40',   text: 'text-teal-700 dark:text-teal-300',   border: 'border-teal-200 dark:border-teal-800',   iconColor: 'text-teal-600 dark:text-teal-400',   ring: 'ring-teal-500' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', iconColor: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500' },
    green:  { bg: 'bg-green-50 dark:bg-green-950/40',  text: 'text-green-700 dark:text-green-300',  border: 'border-green-200 dark:border-green-800',  iconColor: 'text-green-600 dark:text-green-400',  ring: 'ring-green-500' },
};

export const AGENT_GROUPS = [
    {
        id: 'sales',
        productName: 'Dynamics 365 Sales',
        icon: SalesIcon,
        fallbackIcon: Briefcase,
        theme: THEMES.blue,
        agents: [
            {
                id: 'sales-qualification',
                name: 'Sales Qualification Agent',
                description: 'Autonomously researches inbound leads, evaluates them against your target customer profile, drafts personalized outreach emails, and — in Research-and-engage mode — engages prospects, applies BANT criteria, and hands qualified leads to sellers.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/sales/sales-qualification-agent',
                videoUrl: 'https://www.youtube.com/watch?v=g-zpeJ_W65w'
            },
            {
                id: 'sales-research',
                name: 'Sales Research Agent',
                description: 'Helps sellers solve complex business questions through a natural-language dialog with their sales data, surfacing insights and research blueprints they can act on immediately.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/sales/sales-research-agent',
                videoUrl: 'https://www.youtube.com/watch?v=S8PkHL2nO44'
            },
            {
                id: 'sales-close',
                name: 'Sales Close Agent',
                description: 'Built for high-velocity deals, automates the end-to-end sales motion — proactively engaging customers and recommending products from customizable playbooks to accelerate closure.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/sales/sales-close-agent',
                videoUrl: 'https://www.youtube.com/watch?v=m8MCEZ8OBqk'
            }
        ]
    },
    {
        id: 'customer-service',
        productName: 'Dynamics 365 Customer Service & Contact Center',
        icon: CustomerServiceIcon,
        fallbackIcon: Headphones,
        theme: THEMES.blue,
        agents: [
            {
                id: 'case-management',
                name: 'Case Management Agent',
                description: 'Automates the full case lifecycle — creating, predicting fields, updating, and resolving cases autonomously across chat, email, and voice channels.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/customer-service/use/use-case-creation-agent',
                videoUrl: 'https://www.youtube.com/watch?v=s50Zp9Ic4P8'
            },
            {
                id: 'intent-knowledge',
                name: 'Customer Intent & Customer Knowledge Management Agents',
                description: 'Two complementary agents that close the loop on customer understanding. Customer Intent maps customer needs from past and live conversations to drive routing and guidance; Customer Knowledge Management turns each resolved case into compliant draft articles, keeping the knowledge base current.',
                urls: [
                    { label: 'Customer Intent Agent', href: 'https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/overview-customer-intent-agent' },
                    { label: 'Customer Knowledge Management Agent', href: 'https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/admin-km-agent' }
                ],
                videoUrl: 'https://www.youtube.com/watch?v=qO_VTiooQZ0'
            },
            {
                id: 'quality-evaluation',
                name: 'Quality Evaluation Agent',
                description: 'Conducts autonomous, AI-assisted assessments of representative–customer interactions using supervisor-defined evaluation frameworks to scale quality assurance across cases and conversations.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/contact-center/administer/manage-quality-evaluation-agent',
                videoUrl: 'https://www.youtube.com/watch?v=jZrxrqKsyGA'
            }
        ]
    },
    {
        id: 'field-service',
        productName: 'Dynamics 365 Field Service',
        icon: FieldServiceIcon,
        fallbackIcon: MapPin,
        theme: THEMES.blue,
        agents: [
            {
                id: 'scheduling-operations',
                name: 'Scheduling Operations Agent',
                description: 'Dynamically optimizes a single technician’s schedule, respecting locked bookings and working hours while shifting uncommitted work to maximize utilization or front-load high-priority requirements.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/field-service/soa-overview',
                videoUrl: 'https://www.youtube.com/watch?v=FsYVCyW8J1M'
            }
        ]
    },
    {
        id: 'finance',
        productName: 'Dynamics 365 Finance',
        icon: FinanceIcon,
        fallbackIcon: Calculator,
        theme: THEMES.indigo,
        agents: [
            {
                id: 'account-reconciliation',
                name: 'Account Reconciliation Agent',
                description: 'Reconciles subledgers (accounts payable, accounts receivable, tax, bank) to the general ledger in near real time, recommends mitigation actions for exceptions such as voucher amount mismatches, and maintains a full audit trail of every fix.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/finance/general-ledger/acct-rec-agent',
                videoUrl: 'https://www.youtube.com/watch?v=e_5hguWGqRk'
            }
        ]
    },
    {
        id: 'supply-chain',
        productName: 'Dynamics 365 Supply Chain Management',
        icon: SupplyChainIcon,
        fallbackIcon: Boxes,
        theme: THEMES.indigo,
        agents: [
            {
                id: 'supplier-communications',
                name: 'Supplier Communications Agent',
                description: 'Drafts and sends purchase order follow-ups, then reads vendor email replies to detect quantity, price, cancellation, and delivery-date changes — surfacing them for buyer review.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/supplier-com-agent-overview',
                videoUrl: 'https://www.youtube.com/watch?v=oEY8k09fmaE'
            }
        ]
    },
    {
        id: 'project-operations',
        productName: 'Dynamics 365 Project Operations',
        icon: ProjectOperationsIcon,
        fallbackIcon: Briefcase,
        theme: THEMES.indigo,
        agents: [
            {
                id: 'time-and-expense-agent',
                name: 'Time and Expense Agent',
                description: 'Unifies project cost capture across two flows. Time Entry drafts weekly entries from assignments, bookings, and Outlook context; Expense ingests receipts from mailbox, mobile app, or direct upload to auto-categorize, itemize, and group them into trip- or project-based reports.',
                urls: [
                    { label: 'Time Entry Agent', href: 'https://learn.microsoft.com/en-us/dynamics365/project-operations/time/enable-time-entry-agent' },
                    { label: 'Expense Agent', href: 'https://learn.microsoft.com/en-us/dynamics365/project-operations/expense/expense-agent-overview' }
                ],
                videoUrl: 'https://www.youtube.com/watch?v=xU_kJ4_7hzY'
            }
        ]
    },
    {
        id: 'commerce-bc',
        productName: 'Dynamics 365 Business Central',
        icon: BusinessCentralIcon,
        fallbackIcon: ShoppingCart,
        theme: THEMES.teal,
        agentLayout: 'grid',
        agents: [
            {
                id: 'sales-order-agent',
                name: 'Sales Order Agent (Business Central)',
                description: 'Monitors a configured mailbox, identifies the customer, parses incoming quote and order requests, checks item availability, and drafts the corresponding quote or order in Business Central.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent',
                videoUrl: 'https://www.youtube.com/watch?v=6icbmbLc_Og'
            },
            {
                id: 'payables-agent',
                name: 'Payables Agent (Business Central)',
                description: 'Monitors a vendor mailbox for invoice PDFs, extracts data via OCR, matches lines to purchase orders and receipts, and drafts purchase invoices for human approval.',
                url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/payables-agent',
                videoUrl: 'https://www.youtube.com/watch?v=OvI9jaA1mJY'
            }
        ]
    }
    ];

// Strategic categories used by AgentsView. Each category groups one or more
// product families (agent groups). Order here drives the rendering order.
// `accent` chooses the section header color theme.
export const AGENT_CATEGORIES = [
    {
        id: 'customer-experience',
        labelKey: 'agentCat_cx',
        accent: 'rose',
        groupIds: ['sales', 'customer-service', 'field-service']
    },
    {
        id: 'erp-back-office',
        labelKey: 'agentCat_erp',
        accent: 'indigo',
        groupIds: ['finance', 'supply-chain', 'project-operations'],
        // Category-wide capabilities that apply across all product groups in
        // this category. Rendered as a full-width banner under the grid.
        extras: [
            {
                id: 'd365-mcp-servers',
                name: 'Empowering Supply Chain and Finance with Dynamics 365 MCP servers',
                description: 'The Dynamics 365 ERP MCP server exposes finance and operations data and business logic to any Model Context Protocol–compatible agent — Microsoft Copilot Studio, Microsoft Foundry, GitHub Copilot, and third-party agent platforms — without custom connectors or APIs. A companion ERP Analytics MCP server makes Business Performance Analytics datasets (Record-to-Report, Procure-to-Pay, Order-to-Cash) queryable in natural language. Together they let agents generate insights and trigger transactional actions across Finance, Supply Chain Management, and Project Operations from a single, governed protocol.',
                urls: [
                    { label: 'Dynamics 365 ERP MCP server', href: 'https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp' },
                    { label: 'ERP Analytics MCP server', href: 'https://learn.microsoft.com/en-us/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-overview' }
                ],
                videoUrl: 'https://www.youtube.com/watch?v=g5SfAPAPVYA'
            }
        ]
    },
    {
        id: 'smb-solutions',
        labelKey: 'agentCat_smb',
        accent: 'teal',
        groupIds: ['commerce-bc']
    }
];

// Helper: look up an agent group by its id.
export function getAgentGroup(id) {
    return AGENT_GROUPS.find((g) => g.id === id);
}
