import type { Experience } from "./types";

/**
 * Newest first. Add a new role by prepending an object to this array.
 */
export const experience: Experience[] = [
  {
    company: "Microsoft",
    title: "Software Engineer",
    start: "Aug 2022",
    end: "Present",
    href: "https://www.microsoft.com",
    highlights: [
      "Led the migration of Windows driver signing workflows to a centralized Azure-based signing platform, processing submissions from leading OEMs and IHVs including Intel, AMD, NVIDIA, Dell, HP, and Qualcomm — improving platform reliability, scalability, and operational control.",
      "Built automated shadow-validation and regression-detection systems that enabled safe rollout of mission-critical signing infrastructure.",
      "Designed and implemented an AI-powered agent that auto-triages driver submission requests and generates summaries in Azure Workbooks, cutting manual investigation time by several hours per request.",
      "Built an end-to-end automated test suite covering driver signing and publishing workflows, validating production deployment artifacts pre-release for high-confidence, low-regression deployments.",
      "Mentored interns and drove technical designs, design reviews, and execution of strategic platform initiatives.",
    ],
    stack: ["C#", ".NET", "Azure", "Semantic Kernel", "CosmosDB", "CI/CD"],
  },
  {
    company: "Goldman Sachs",
    title: "Software Engineer",
    start: "Apr 2021",
    end: "Aug 2022",
    href: "https://www.goldmansachs.com",
    highlights: [
      "Designed and built a PXE-based provisioning service delivering BootAction and DHCP templates, enabling automated bootstrapping of thousands of hosts and eliminating manual provisioning steps.",
      "Developed a Work Order Service managing the full lifecycle of catalogs within the Xpedite system, doubling as a proxy that let third-party services interact with internal systems.",
      "Built an orchestration service that automatically onboards newly provisioned hosts into the capacity pool, managing full host lifecycle and removing manual intervention.",
    ],
    stack: ["Java", "Microservices", "PXE / DHCP", "SQL", "Orchestration"],
  },
  {
    company: "Traveloka",
    title: "Software Engineer",
    start: "Aug 2019",
    end: "Mar 2021",
    href: "https://www.traveloka.com",
    highlights: [
      "Built a microservices-based competitive intelligence platform on AWS ingesting real-time and scheduled pricing data from multiple competitors, powering near real-time analytics and downstream data warehouse pipelines.",
      "Developed a serverless platform on AWS Lambda to extract real-time competitor information for flight bookings.",
    ],
    stack: ["Java", "AWS", "Lambda", "Microservices", "Data Pipelines"],
  },
  {
    company: "Milvik (BIMA)",
    title: "Software Engineer",
    start: "Jun 2018",
    end: "Aug 2019",
    href: "https://bimamobile.com",
    highlights: [
      "Created a cross-platform desktop application for an insurance platform using JavaScript, Java, ReactJS, Redux, and ElectronJS.",
      "Collaborated with architects on system design and development.",
      "Led a team of frontend engineers to deliver the product.",
    ],
    stack: ["JavaScript", "React", "Redux", "ElectronJS", "Java"],
  },
];
