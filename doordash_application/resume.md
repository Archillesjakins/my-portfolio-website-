# Archilles Jacob Azameti
**Software Engineer — Backend & Platform Systems**  
[jake@portfolio-placeholder.com](mailto:jake@portfolio-placeholder.com) | [github.com/Archillesjakins](https://github.com/Archillesjakins) | [portfolio-website](file:///Users/jake/Workspace/my-portfolio-website-/index.html)

---

## Technical Summary
Production-grade Software Engineer with 5+ years of experience designing, building, and operating resilient backend services, developer tools, and autonomous agent pipelines. Proven track record of reducing operational toil by automating complex, multi-system workflows. Deep expertise in platform APIs, cloud architecture (AWS), and AI integrations, including Model Context Protocol (MCP) concepts and multi-agent orchestration. Pragmatic SWE who designs for scale, maintainability, and security.

* **Languages:** Python, Go (comparable backend development), JavaScript/TypeScript, SQL
* **Backend Frameworks:** FastAPI, Node.js (Express), RESTful APIs, gRPC
* **Cloud & Infrastructure:** AWS (ECS, RDS, S3, IAM), Docker, Terraform (IaC), CI/CD pipelines
* **Databases & Caching:** PostgreSQL, Redis, SQLite, vector search indices
* **AI & Orchestration:** Model Context Protocol (MCP), LLM Tool-Calling, n8n, Playwright automation

---

## Professional Experience

### **Sono Health** | *Founder & Principal Engineer* | Remote | Jan 2024 — Present
*AI-first clinical documentation and telemetry analysis platform reducing report writing times from hours to minutes.*
* **Platform Architecture:** Architected and deployed a Voice-to-Narrative pipeline using **FastAPI** and **Google Gemini** that automates the extraction of clinical measurements and peer-reviewed literature in real time.
* **Resilience & Security:** Designed a **FHIR-compliant** and HIPAA-aware backend on **AWS (ECS, RDS, S3)**, implementing role-based access control (RBAC), KMS encryption, and secure network routing.
* **Developer Tooling & PDF Generation:** Built an automated LaTeX PDF generation engine that structures raw diagnostic telemetry into formatted clinical reports, completely eliminating manual transcription.
* **Observability:** Configured end-to-end logging and error tracing to monitor pipeline performance, ensuring 99.9% uptime for critical medical document processing workflows.

### **UmukoziHR** | *Founding Software Engineer* | Remote | Mar 2023 — Dec 2024
*Autonomous talent acquisition platform utilizing multi-agent orchestration.*
* **Multi-Agent Systems Design:** Designed and shipped a hierarchical multi-agent framework featuring a `SupervisorAgent` delegating to specialized `Research`, `Aggregation`, and `Analysis` agents, reducing candidate shortlisting times from weeks to minutes.
* **Production-Grade Codebase:** Authored and maintained over **100,000 lines of production code** across microservices using FastAPI, Python, and PostgreSQL.
* **System Resilience:** Implemented Redis caching strategies, rate limiting, and **circuit breaker patterns** to handle flaky third-party scraping APIs and ensure high availability under heavy loads.
* **Reliability Engineering:** Developed automated integration test suites and LLM-as-a-judge quality monitoring to proactively detect and prevent API contract drift.

### **Independent Platform & AI Consultant** | Remote | Aug 2022 — Feb 2024
*Designing cloud backend services, integrations, and automation systems for global clients.*
* **Developer Workflow Automation:** Designed and implemented a 12-step client onboarding automation pipeline using **n8n**, **Claude (via AWS Bedrock)**, and **Playwright**, saving internal operations teams dozens of manual hours per week.
* **API Design & Integration:** Built and secured an admin authentication panel and a Spanish-language document Q&A RAG engine using FastAPI, SQLite, and OpenAI.
* **Legacy Modernization:** Migrated manual, error-prone carrier activation processes to a fully automated API-driven fulfillment platform (**iUnlockSIM**), reducing processing delays by 80%.

---

## Selected Projects

* **SRE AI Agent / MCP Server PoC:** Developed a custom MCP server backend that exposes local system diagnostics, service logs, and Kubernetes cluster metrics as typed tools, allowing AI agents to diagnose staging environment faults autonomously.
* **Dwello (Real Estate Financial Modeling Portal):** Created an interactive financial analysis web app with real-time ROI calculations and automated data aggregation, accelerating property assessment workflows.

---

## Education & Certifications

* **BSc in Computer Science** — University of the People
* **Certification: Network & Application Security**
* **Certification: Advanced RAG Agents**
