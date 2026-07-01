export const profile = {
  name: "Caio Oliveira Gonçalves",
  role: "Engenheiro de Dados",
  location: "Goiânia, GO — Brasil",
  email: "caio11goncalves@hotmail.com",
  linkedin: "https://www.linkedin.com/in/caio-oliveira-6889001bb/",
  github: "https://github.com/caioOlivera",
  resumeUrl: "/docs/Curriculo_Caio_Oliveira.pdf",
  tagline:
    "Construo pipelines de dados que atravessam fintechs e governo — do lançamento de um evento até a camada analítica que sustenta decisões públicas.",
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  companyNote?: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Fev 2025 — Atual",
    role: "Engenheiro de Dados",
    company: "Minsait",
    companyNote: "Alocado no Governo do Estado de Goiás (SGG · SECTI · SEFAZ)",
    bullets: [
      "Arquitetura e sustentação de pipelines ETL/ELT batch e streaming para processamento de mais de 5 milhões de documentos fiscais eletrônicos por dia, em ambientes Big Data de alta disponibilidade.",
      "Construção de arquitetura de dados em modelo Medallion (Bronze, Silver, Gold) com modelagem dimensional em Star Schema para fins analíticos e de auditoria fiscal.",
      "Participação no desenvolvimento de soluções de IA generativa com Gemini para painéis do Governo de Goiás, integrando fontes estruturadas e não estruturadas — Vertex AI, BigQuery e SharePoint — em camadas semânticas de consulta, observabilidade de uso e métricas de desempenho dos agentes.",
      "Consultas e transformações complexas em Hive, Impala e SQL, com persistência em Oracle, MySQL e AWS S3, dando suporte a processos de auditoria e rastreabilidade.",
    ],
    stack: ["Python", "PySpark", "Kafka", "Apache NiFi", "Airflow", "Hive", "Impala", "BigQuery", "Vertex AI", "Oracle", "AWS S3"],
  },
  {
    period: "Fev 2023 — Fev 2025",
    role: "Engenheiro de Dados",
    company: "FitBank",
    companyNote: "Esteira de crédito · visão data-driven",
    bullets: [
      "Desenvolvimento e manutenção de pipelines ETL/ELT para a esteira de crédito, com integração entre bancos relacionais (MySQL, PostgreSQL) e não relacionais (MongoDB).",
      "Orquestração com Apache Airflow e transformações em larga escala com Spark, reduzindo a latência de processamento de D-1 para janelas de minutos com Kafka e GCP Pub/Sub.",
      "Uso de BigQuery e Snowflake como camadas analíticas, com automação e monitoramento que reduziram significativamente o tempo de identificação de gargalos e resolução de incidentes.",
      "Apoio em modelagem dimensional e relacional, e integração de dados para consumo por soluções de IA generativa no Vertex AI.",
    ],
    stack: ["Python", "PySpark", "SQL", "Airflow", "Kafka", "Pub/Sub", "BigQuery", "Snowflake", "MongoDB"],
  },
  {
    period: "Abr 2022 — Jul 2022",
    role: "Desenvolvedor Front-end",
    company: "Poli Digital",
    bullets: [
      "Features, hotfixes e refatoração de uma SPA em React, TypeScript e Redux, com foco em performance e estabilidade.",
    ],
    stack: ["React", "TypeScript", "Redux"],
  },
  {
    period: "Out 2021 — Abr 2022",
    role: "Desenvolvedor Front-end (Estágio)",
    company: "Kampana Digital",
    bullets: [
      "Sistemas web e landing pages de alta conversão com React, Next.js, JavaScript e WordPress, além de automações internas.",
    ],
    stack: ["React", "Next.js", "JavaScript", "WordPress"],
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
    title: "Painel de IA Generativa para o Governo de Goiás",
    org: "Minsait · SGG, SECTI e SEFAZ",
    kind: "gov",
    description:
      "Camada de dados para um dashboard corporativo de IA generativa, unificando quatro fontes com regras de junção e granularidade distintas para consulta confiável por stakeholders técnicos.",
    points: [
      "Modelagem de uma camada semântica combinando logs da API do Vertex AI, métricas pré-calculadas no BigQuery, logs de SLA/infraestrutura e o cadastro de licenças do SharePoint.",
      "Definição de filtros por fonte e das regras de junção: Vertex e SharePoint conectam-se por e-mail corporativo, enquanto BigQuery e SLA permanecem agregados por não suportarem granularidade de usuário individual.",
      "Documentação técnica do pipeline para stakeholders, cobrindo constraints de junção, observabilidade de uso e métricas de desempenho dos agentes de IA.",
    ],
    stack: ["Vertex AI", "BigQuery", "SharePoint", "Gemini", "SQL"],
  },
  {
    title: "Pipeline Fiscal em Escala Nacional",
    org: "Minsait",
    kind: "fiscal",
    description:
      "Arquitetura Medallion para processar mais de 5 milhões de documentos fiscais eletrônicos por dia com rastreabilidade de ponta a ponta para auditoria.",
    points: [
      "Camadas Bronze, Silver e Gold com modelagem dimensional em Star Schema.",
      "Transformações complexas em Hive e Impala, com ingestão via Kafka e Apache NiFi.",
      "Integração de Oracle, MySQL, AWS S3 e APIs corporativas para fins analíticos e de auditoria.",
    ],
    stack: ["PySpark", "Kafka", "NiFi", "Hive", "Impala", "Oracle", "AWS S3"],
  },
  {
    title: "Esteira de Crédito Data-Driven",
    org: "FitBank",
    kind: "fintech",
    description:
      "Modernização dos pipelines de dados por trás da esteira de crédito, saindo de janelas de D-1 para processamento orientado a eventos em minutos.",
    points: [
      "Pipelines orquestrados em Airflow com transformações em Spark e exploração via Hue.",
      "Migração de parte do fluxo batch para eventos com Kafka e GCP Pub/Sub.",
      "BigQuery e Snowflake como camadas analíticas para consumo por times de risco e produto.",
    ],
    stack: ["Airflow", "Spark", "Kafka", "Pub/Sub", "BigQuery", "Snowflake"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Clouds", items: ["GCP · BigQuery, Cloud Storage, Composer, Pub/Sub, Looker", "AWS · S3, Redshift", "Azure DevOps API"] },
  { label: "Processamento & Orquestração", items: ["Apache Spark", "PySpark", "Apache Airflow", "Apache NiFi", "Kafka"] },
  { label: "Bancos de Dados", items: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Hive", "Impala", "Elasticsearch"] },
  { label: "Linguagens", items: ["Python", "SQL", "Groovy", "JavaScript", "TypeScript"] },
  { label: "Ferramentas & BI", items: ["Metabase", "Looker", "Databricks", "Delta Lake"] },
  { label: "Arquiteturas", items: ["Data Warehouse", "Data Lake", "Data Vault", "Medallion (Bronze/Silver/Gold)"] },
];

export const certifications = [
  {
    title: "Google Cloud Certified — Professional Data Engineer",
    image: "/images/gcp-data-engineer-badge.png",
  },
];

export const courses = [
  "BigQuery for Big Data Engineers — Master BigQuery Internals (Udemy)",
  "PySpark: The Complete Course (Udemy)",
  "Complete Data Science and Machine Learning A-Z with Python (Udemy)",
  "The Ultimate MySQL Bootcamp (Udemy)",
  "Building a Modern Data Warehouse Solution using Snowflake (Data Engineer Academy)",
  "Databricks SQL as a Query Engine for Data Lakehouse — Data Vault & OBTs (Data Engineer Academy)",
  "Modeling and Building Data Pipelines with Delta Live Tables (Data Engineer Academy)",
  "Building a Modern Data Stack with Airbyte, Airflow, DBT & Snowflake (Data Engineer Academy)",
  "Building a Data Vault in the Lakehouse with Databricks & Delta Lake (Data Engineer Academy)",
];

export const education = {
  degree: "Bacharelado em Engenharia de Computação",
  school: "Universidade Federal de Goiás",
  period: "2020 — 2026",
};

export const community = {
  title: "Seja Wild × League of Legends: Wild Rift",
  date: "26 de setembro de 2023",
  partners: ["Riot Games Brasil", "AcadArena", "UFG Eagles Esports", "EMC — UFG"],
  body: [
    "Em março de 2013 criei minha conta no League of Legends. Dez anos depois, ajudei a trazer a Riot Games para dentro da minha própria universidade: a UFG foi uma das seis instituições escolhidas no país para sediar o Seja Wild, ativação oficial de League of Legends: Wild Rift.",
    "O evento reuniu a Riot Games Brasil, a AcadArena, a UFG Eagles Esports e a Escola de Engenharia Elétrica, Mecânica e de Computação da UFG, e transformou um sonho de longa data em algo bem palpável: gente se divertindo, trocando experiências, famílias inteiras jogando juntas.",
    "Foi um lembrete de que metas que parecem distantes só precisam de um primeiro passo — e aquele 26 de setembro foi o meu.",
  ],
  gallery: [
    { src: "/images/wildrift-04.jpg", alt: "Participante do evento Seja Wild segurando ilustração personalizada de campeã do Wild Rift" },
    { src: "/images/wildrift-02.jpg", alt: "Participante do evento Seja Wild em frente ao cenário temático de Piltover/Zaun" },
    { src: "/images/wildrift-03.jpg", alt: "Pai e filho interagindo com totem interativo no evento Seja Wild" },
    { src: "/images/wildrift-01.jpg", alt: "Close de smartphone rodando uma partida de League of Legends: Wild Rift" },
  ],
};
