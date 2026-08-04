import type { Award, Education, SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Backend & Architecture",
    items: [
      ".NET",
      "Microservices",
      "System Design",
      "Distributed Systems",
      "REST APIs",
      "Orchestration",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "Azure",
      "AWS",
      "Containerization",
      "CI/CD",
      "Azure DevOps",
      "Serverless",
    ],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQL Server", "CosmosDB", "Redis"],
  },
  {
    category: "AI Systems",
    items: ["RAG", "Semantic Kernel", "LLM Agents", "Prompt Engineering"],
  },
  {
    category: "Frontend",
    items: ["React", "Redux", "Next.js", "ElectronJS"],
  },
];

export const awards: Award[] = [
  {
    title: "Microsoft Hackathon Winner",
    issuer: "Microsoft",
    description:
      "Built an AI-powered Teams bot that autonomously joins meetings, answers real-time queries, and creates Azure DevOps work items.",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech",
    field: "Computer Science and Technology",
    detail: "CGPA 8.0 / 10",
  },
];
