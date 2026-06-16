# Application & Screen Preparation Answers: Fullstack Systems (DD Labs)

This document prepares **Archilles Jacob Azameti** for technical screens and potential application questionnaires for the Software Engineer, Fullstack position on the Foundry team at **DoorDash Labs**.

---

### **Q1: Real-Time Telemetry & Fleet Monitoring Dashboard Design**
*Prompt: DoorDash Labs operates autonomous vehicle fleets (like Dot) and drones. How would you design a React frontend and Node.js backend to display real-time robot telemetry (coordinates, speed, battery, diagnostic errors) for hundreds of active robots without degrading browser performance?*

#### **1. Telemetry Stream Architecture:**
*   **Transport Protocol (WebSockets / gRPC-Web):** Telemetry (updates every 500ms) should bypass standard HTTP polling. I would establish a persistent WebSocket connection between the operator's React client and the Node.js/Express server. For highly structured data, wrapping a gRPC stream in a Node.js gateway is ideal.
*   **Backend Aggregator:** The Express backend should act as a lightweight message broker, subscribing to a Redis Pub/Sub channel fed by the robot ingest gateways, and pushing updates only to connected clients interested in specific regions.

#### **2. Frontend Performance Optimization (React):**
*   **State Management (Zustand / Redux):** Standard React state (`useState`) updated 2 times per second for hundreds of items will cause the entire DOM tree to re-render, freezing the browser. I would use **Zustand** with transient updates (subscribing directly to store changes without triggering component re-renders) or keep high-frequency stream coordinates in a mutable ref for map rendering.
*   **UI Throttle / Debounce:** Telemetry metrics (like battery percentage or temperature) can be throttled (e.g., UI updates restricted to once every 2-3 seconds) as they don't require instant frame-rate rendering.
*   **Virtualized Lists & Canvas Map Rendering:** 
    *   To display hundreds of diagnostic events, I would use virtualized lists (e.g., `react-window` or `react-virtualized`) to only render items currently in the viewport.
    *   For the fleet map interface, instead of rendering SVG elements for every robot, I would render them on a HTML5 Canvas or a Mapbox WebGL context to handle thousands of moving coordinates on a single thread.
*   **SWR (Stale-While-Revalidate):** For slow-moving robot metadata (robot model specs, assigned merchant, operator details), I would use **SWR** to fetch, cache, and update this data in the background, preventing redundant DB hits.

---

### **Q2: PostgreSQL Relational Database Design & Query Optimization**
*Prompt: How do you approach designing database schemas for complex tracking systems (e.g., tracking a robot’s history of deliveries, statuses, and coordinates), and how do you debug and optimize a query that is slowing down the application?*

#### **1. Relational Schema Design (PostgreSQL):**
For tracking robot status changes and delivery allocations, a clean, relational structure with explicit foreign keys and historical tracking is crucial:

```sql
-- Represents the autonomous unit
CREATE TABLE robots (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    model_name VARCHAR(50) NOT NULL,
    current_status VARCHAR(20) NOT NULL, -- 'idle', 'delivery', 'maintenance', 'error'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tracks high-frequency locations (could use TimescaleDB extension if volume is high)
CREATE TABLE robot_telemetry (
    id BIGSERIAL PRIMARY KEY,
    robot_id UUID REFERENCES robots(id) ON DELETE CASCADE,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    battery_level INT NOT NULL CHECK (battery_level BETWEEN 0 AND 100),
    logged_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Index telemetry by robot and time for fast path retrieval
CREATE INDEX idx_telemetry_robot_time ON robot_telemetry (robot_id, logged_at DESC);
```

#### **2. Query Debugging & Optimization:**
When an endpoint (like `GET /api/fleet/history`) slows down:
1.  **Analyze using `EXPLAIN ANALYZE`:**
    *   I run the raw SQL statement prefixed with `EXPLAIN (ANALYZE, BUFFERS)` in PostgreSQL. 
    *   I look for **Seq Scan** (Sequential Scan), indicating that PostgreSQL is checking every row in the table, and **Hash Join** costs. I check if the database is using my indexes.
2.  **Add Strategic Indexes:**
    *   Ensure all foreign keys (`robot_id`) have b-tree indexes.
    *   Create compound indexes for queries sorting or filtering by multiple columns (e.g., `CREATE INDEX ON orders (merchant_id, status)`).
3.  **Prevent N+1 Queries in Express:**
    *   A common Node.js ORM bottleneck (like Sequelize or Prisma) occurs when fetching a list of deliveries, and then making a separate SQL query per delivery to fetch the assigned robot.
    *   I resolve this by using eager loading (e.g., `.findAll({ include: [Robot] })` in Sequelize) or writing raw SQL `INNER JOIN` queries to compile the dataset in a single database round-trip.
4.  **Database Connection Pooling:**
    *   Ensure the Node.js pg-pool is configured correctly with appropriate `max` connections and idle timeouts so the server doesn't exhaust DB connection limits under spike loads.

---

### **Q3: Cross-Functional Prototyping & Building Internal Tools**
*Prompt: The Foundry team is responsible for quickly prototyping web applications to support new Labs product use cases. Tell us about a time you had to build a tool to solve an internal operational bottleneck, and how you turned a rough idea into a stable product.*

#### **Jake's Experience & Approach:**
*   **The Problem:** In my consulting work, a medical client’s staff spent hours manually onboarding new clients—re-entering details from Jotform sheets into multiple portals, creating monday.com records, and drafting welcome emails. It was a major bottleneck that stalled operations.
*   **Prototyping the Solution:** I worked closely with the operations team (our "internal customers") to map out their exact 12-step path. I quickly drafted a working pipeline using **n8n** and **Playwright** browser automation scripts to prove the flow was possible.
*   **Building the Product:** 
    *   **Frontend Admin Panel:** I built a clean admin dashboard in React where staff could monitor the onboarding status of every client in real time, view execution logs, and manually trigger retries if an external API failed.
    *   **Backend & Security:** I backed this with a FastAPI server that logged operations in a secure database. Because this handled patient data, I verified HIPPA compliance, ensuring logged data was encrypted and access control was strictly audited.
*   **The Result:** The manual onboarding delay was reduced from several hours to near-zero. Staff went from dreading data-entry to relying on a dashboard they could monitor in a few clicks. This is the exact mindset I will bring to DD Labs: understanding the operators' problems, building a fast prototype to validate the solution, and then hardening it with a robust React/Node.js stack.
