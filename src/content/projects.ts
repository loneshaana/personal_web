import type { Project } from "./types";

/**
 * `featured: true` projects render as large cards at the top of the Projects
 * section. Everything else falls into the compact archive list below.
 */
export const projects: Project[] = [
  {
    title: "Centralized Azure Driver Signing Platform",
    org: "Microsoft",
    period: "2022 — Present",
    description:
      "Migrated Windows driver signing workflows onto a single Azure-based platform serving submissions from the world's largest OEMs and IHVs. Redesigned the orchestration layer for reliability, throughput, and operational control.",
    impact:
      "Processes driver submissions from Intel, AMD, NVIDIA, Dell, HP, and Qualcomm.",
    stack: ["C#", ".NET", "Azure", "CosmosDB", "Microservices"],
    featured: true,
  },
  {
    title: "AI Triage Agent for Driver Submissions",
    org: "Microsoft",
    period: "2024",
    description:
      "An LLM-powered agent that auto-triages incoming driver submission requests, correlates telemetry, and publishes readable summaries directly into Azure Workbooks for on-call engineers.",
    impact: "Removed several hours of manual investigation per request.",
    stack: ["Semantic Kernel", "RAG", "C#", "Azure Workbooks"],
    featured: true,
  },
  {
    title: "Shadow Validation & Regression Detection",
    org: "Microsoft",
    period: "2023",
    description:
      "A shadow-traffic harness that replays production signing workloads against release candidates and diffs the results, surfacing regressions before they reach customers.",
    impact:
      "Enabled safe, incremental rollout of mission-critical signing infrastructure.",
    stack: ["C#", ".NET", "Azure", "CI/CD"],
    featured: true,
  },
  {
    title: "AI Meeting Bot for Microsoft Teams",
    org: "Microsoft Hackathon — Winner",
    period: "2024",
    description:
      "A bot that autonomously joins Teams meetings, answers questions in real time from meeting context, and files work items in Azure DevOps from the conversation.",
    impact: "Won the Microsoft internal hackathon.",
    stack: ["Semantic Kernel", "Teams SDK", "Azure DevOps API", "C#"],
    featured: true,
  },
  {
    title: "PXE Host Provisioning Service",
    org: "Goldman Sachs",
    period: "2021 — 2022",
    description:
      "A provisioning service delivering BootAction and DHCP templates over PXE, automating bare-metal bootstrapping across thousands of hosts.",
    stack: ["Java", "PXE", "DHCP", "Microservices"],
  },
  {
    title: "Host Lifecycle Orchestrator",
    org: "Goldman Sachs",
    period: "2021 — 2022",
    description:
      "Automatically onboards newly provisioned hosts into the capacity pool and manages their full lifecycle, eliminating manual intervention from the provisioning path.",
    stack: ["Java", "Orchestration", "SQL"],
  },
  {
    title: "Competitive Intelligence Platform",
    org: "Traveloka",
    period: "2019 — 2021",
    description:
      "Microservices platform on AWS ingesting real-time and scheduled competitor pricing data, feeding near real-time analytics and downstream warehouse pipelines.",
    stack: ["Java", "AWS", "Lambda", "Data Pipelines"],
  },
  {
    title: "Cross-Platform Insurance Desktop App",
    org: "Milvik (BIMA)",
    period: "2018 — 2019",
    description:
      "An ElectronJS desktop client for an insurance platform, delivered leading a small frontend team.",
    stack: ["ElectronJS", "React", "Redux", "Java"],
  },
];
