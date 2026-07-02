export const profile = {
  name: "Caio Oliveira",
  fullName: "Caio Oliveira Gonçalves",
  role: "Data Engineer",
  location: "Goiânia, Brazil",
  email: "caio11goncalves@hotmail.com",
  linkedin: "https://www.linkedin.com/in/caio-oliveira-6889001bb/",
  github: "https://github.com/caioOlivera",
  resumeUrl: "/docs/Curriculo_Caio_Oliveira.pdf",
  tagline: "I build data pipelines that move between fintech and government — from a single event to the analytics layer behind public decisions.",
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  companyNote?: string;
  summary: string;
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 — Now",
    role: "Data Engineer",
    company: "Minsait",
    companyNote: "Embedded within the Goiás State Government (SGG · SECTI · SEFAZ)",
    summary:
      "Batch and streaming pipelines processing 5M+ fiscal documents a day, plus the data layer behind a Gemini-powered analytics dashboard for state government — merging Vertex AI, BigQuery and SharePoint into one queryable semantic layer.",
    stack: ["python", "pyspark", "apachekafka", "apachenifi", "apacheairflow", "hive", "googlebigquery", "vertexai", "oracle", "aws"],
  },
  {
    period: "2023 — 2025",
    role: "Data Engineer",
    company: "FitBank",
    companyNote: "Credit engine · data-driven decisioning",
    summary:
      "Rebuilt the credit pipeline around events instead of batch — D-1 latency down to minutes — with BigQuery and Snowflake as the analytics layer for risk and product teams.",
    stack: ["python", "pyspark", "apacheairflow", "apachekafka", "googlecloud", "googlebigquery", "snowflake", "mongodb"],
  },
  {
    period: "2022",
    role: "Front-end Developer",
    company: "Poli Digital",
    summary: "Features, hotfixes and refactors on a React/TypeScript SPA, focused on performance and stability.",
    stack: ["react", "typescript"],
  },
  {
    period: "2021 — 2022",
    role: "Front-end Developer (Intern)",
    company: "Kampana Digital",
    summary: "High-conversion web systems and landing pages with React, Next.js and WordPress.",
    stack: ["react", "nextdotjs", "javascript"],
  },
];

export type Project = {
  title: string;
  org: string;
  description: string;
  points: string[];
  stack: string[];
  kind: "gov" | "fintech" | "fiscal";
};

export const projects: Project[] = [
  {
    title: "Generative AI Dashboard for the Goiás Government",
    org: "Minsait · SGG, SECTI & SEFAZ",
    kind: "gov",
    description:
      "A data layer for a corporate GenAI dashboard, unifying four sources with different join rules and granularity into one reliable query surface for technical stakeholders.",
    points: [
      "Modeled a semantic layer combining Vertex AI API logs, pre-aggregated BigQuery metrics, SLA/infra logs, and a SharePoint license registry.",
      "Defined per-source filters and join constraints: Vertex and SharePoint join on corporate email, while BigQuery and SLA stay aggregated since they can't resolve to an individual user.",
      "Documented the pipeline for technical stakeholders — join constraints, usage observability, and agent performance metrics.",
    ],
    stack: ["Vertex AI", "BigQuery", "SharePoint", "Gemini", "SQL"],
  },
  {
    title: "Fiscal Pipeline at National Scale",
    org: "Minsait",
    kind: "fiscal",
    description: "A Medallion architecture processing 5M+ electronic fiscal documents a day with end-to-end traceability for audits.",
    points: [
      "Bronze, Silver and Gold layers with Star Schema dimensional modeling.",
      "Complex Hive and Impala transformations, fed by Kafka and Apache NiFi.",
      "Oracle, MySQL, AWS S3 and corporate APIs integrated for analytics and audit.",
    ],
    stack: ["PySpark", "Kafka", "NiFi", "Hive", "Impala", "Oracle", "AWS S3"],
  },
  {
    title: "Data-Driven Credit Engine",
    org: "FitBank",
    kind: "fintech",
    description: "Modernized the data pipelines behind the credit engine, moving from D-1 batch windows to event-driven processing in minutes.",
    points: [
      "Airflow-orchestrated pipelines with Spark transformations and Hue exploration.",
      "Migrated part of the batch flow to events with Kafka and GCP Pub/Sub.",
      "BigQuery and Snowflake as the analytics layer for risk and product teams.",
    ],
    stack: ["Airflow", "Spark", "Kafka", "Pub/Sub", "BigQuery", "Snowflake"],
  },
];

export type SkillIcon =
  | "python" | "pyspark" | "apachespark" | "apacheairflow" | "apachekafka" | "apachenifi"
  | "hive" | "mysql" | "postgresql" | "mongodb" | "snowflake" | "elasticsearch"
  | "typescript" | "javascript" | "react" | "nextdotjs" | "googlecloud" | "googlebigquery"
  | "aws" | "azure" | "oracle" | "databricks" | "looker" | "metabase" | "git" | "vertexai" | "sql";

export const toolbox: { icon: SkillIcon; label: string }[] = [
  { icon: "python", label: "Python" },
  { icon: "sql", label: "SQL" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "apachespark", label: "Spark" },
  { icon: "apacheairflow", label: "Airflow" },
  { icon: "apachekafka", label: "Kafka" },
  { icon: "apachenifi", label: "NiFi" },
  { icon: "hive", label: "Hive" },
  { icon: "googlecloud", label: "GCP" },
  { icon: "googlebigquery", label: "BigQuery" },
  { icon: "vertexai", label: "Vertex AI" },
  { icon: "aws", label: "AWS" },
  { icon: "azure", label: "Azure" },
  { icon: "snowflake", label: "Snowflake" },
  { icon: "databricks", label: "Databricks" },
  { icon: "oracle", label: "Oracle" },
  { icon: "mysql", label: "MySQL" },
  { icon: "postgresql", label: "PostgreSQL" },
  { icon: "mongodb", label: "MongoDB" },
  { icon: "elasticsearch", label: "Elasticsearch" },
  { icon: "looker", label: "Looker" },
  { icon: "metabase", label: "Metabase" },
  { icon: "react", label: "React" },
  { icon: "git", label: "Git" },
];

export const certifications = [
  { title: "Google Cloud Certified — Professional Data Engineer", image: "/images/gcp-data-engineer-badge.png" },
];

export const education = {
  degree: "B.Eng. Computer Engineering",
  school: "Universidade Federal de Goiás",
  period: "2020 — 2026",
};

export const community = {
  title: "Seja Wild × League of Legends: Wild Rift",
  date: "September 26, 2023",
  partners: ["Riot Games Brazil", "AcadArena", "UFG Eagles Esports", "EMC — UFG"],
  body: [
    "I created my League of Legends account in March 2013. Ten years later, I helped bring Riot Games onto my own university campus: UFG was one of six universities chosen nationwide to host Seja Wild, an official League of Legends: Wild Rift activation.",
    "The event brought together Riot Games Brazil, AcadArena, UFG Eagles Esports, and UFG's School of Electrical, Mechanical and Computer Engineering — turning a long-held dream into something tangible: people having fun, swapping stories, whole families playing side by side.",
    "It was a reminder that goals that feel far away just need a first step — and that September 26th was mine.",
  ],
  gallery: [
    { src: "/images/wildrift-04.jpg", alt: "Seja Wild attendee holding a custom Wild Rift champion illustration" },
    { src: "/images/wildrift-02.jpg", alt: "Attendee posing in front of the Piltover/Zaun themed backdrop" },
    { src: "/images/wildrift-03.jpg", alt: "Father and son interacting with an activation booth at Seja Wild" },
    { src: "/images/wildrift-01.jpg", alt: "Close-up of a smartphone running a League of Legends: Wild Rift match" },
  ],
};
