const qs = [
  {
    q: "What is the collection of programs that allows users to interact with hardware and perform tasks such as calculations and data processing?",
    a: ["Application", "Software", "Operating System", "Database"],
    c: 1,
  },
  {
    q: "Which part of application development handles data processing and business logic?",
    a: ["Front-end", "Back-end", "User Interface", "Database"],
    c: 1,
  },
  {
    q: "What term refers to the progress or improvement of a system?",
    a: ["Innovation", "Development", "Integration", "Maintenance"],
    c: 1,
  },
  {
    q: "What is a structured collection of data stored in a computer and accessible in various ways?",
    a: ["Spreadsheet", "Database", "Query", "Software"],
    c: 1,
  },
  {
    q: "What is the process of designing and building applications across different platforms?",
    a: [
      "Database Management",
      "Application Development",
      "System Analysis",
      "Software Testing",
    ],
    c: 1,
  },
  {
    q: "What is a software program designed to perform specific tasks for end users?",
    a: ["Operating System", "Application", "Database", "Compiler"],
    c: 1,
  },
  {
    q: "What covers the processes and technologies used to store, organize, access, and maintain data?",
    a: ["Database", "SQL", "Database Management", "Application Development"],
    c: 2,
  },
  {
    q: "Which SDLC stage focuses on identifying and resolving defects before software is released?",
    a: ["Planning", "Testing", "Maintenance", "Deployment"],
    c: 1,
  },
  {
    q: "Which development methodology emphasizes short sprints, adapting to change, and continuous feedback?",
    a: ["Waterfall", "DevOps", "Agile", "RAD"],
    c: 2,
  },
  {
    q: "Which SDLC stage keeps software operational and efficient after it has been released?",
    a: ["Testing", "Deployment", "Maintenance", "Planning"],
    c: 2,
  },
  {
    q: "Which framework manages the entire software development process from planning to maintenance?",
    a: ["Agile", "DevOps", "SDLC", "Waterfall"],
    c: 2,
  },
  {
    q: "Which approach emphasizes collaboration, communication, and automation to speed software delivery?",
    a: ["Waterfall", "DevOps", "RAD", "Spiral"],
    c: 1,
  },
  {
    q: "Which stage focuses on preventing unauthorized access, data breaches, and code manipulation?",
    a: ["Planning", "Testing", "Security", "Maintenance"],
    c: 2,
  },
  {
    q: "Which is the first stage where the project's scope, objectives, and feasibility are established?",
    a: ["Planning", "Design", "Coding", "Testing"],
    c: 0,
  },
  {
    q: "Which soft skill involves organizing and planning how to divide your time between activities?",
    a: ["Communication", "Time Management", "Problem Solving", "Adaptability"],
    c: 1,
  },
  {
    q: "What term refers to connecting independently built software systems so they can work together?",
    a: ["Integration", "Synchronization", "Deployment", "Migration"],
    c: 0,
  },
  {
    q: "Which skill involves identifying a problem, finding its cause, implementing a solution, and evaluating the result?",
    a: ["Communication", "Problem Solving", "Leadership", "Time Management"],
    c: 1,
  },
  {
    q: "What is the quality of being able to adjust to new conditions and be modified for a new purpose?",
    a: ["Flexibility", "Adaptability", "Innovation", "Creativity"],
    c: 1,
  },
  {
    q: "Which skill is considered crucial for project alignment, collaboration, and stakeholder management?",
    a: ["Programming", "Communication", "Debugging", "Testing"],
    c: 1,
  },
  {
    q: "Which diagram uses standardized symbols to show where data originates, how it is processed, stored, and output?",
    a: [
      "Entity Relationship Diagram",
      "Flowchart",
      "Data Flow Diagram",
      "State Diagram",
    ],
    c: 2,
  },
  {
    q: "Which attribute uniquely identifies each record in a database table?",
    a: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"],
    c: 1,
  },
  {
    q: "Which diagram shows the relationships between entities and their attributes?",
    a: [
      "Flowchart",
      "Data Flow Diagram",
      "Entity Relationship Diagram",
      "Sequence Diagram",
    ],
    c: 2,
  },
  {
    q: "Which key connects one table to another and enforces referential integrity?",
    a: ["Primary Key", "Unique Key", "Foreign Key", "Candidate Key"],
    c: 2,
  },
  {
    q: "What is the general practice of creating simplified representations of a system or concept?",
    a: ["Data Processing", "Modeling Design", "Normalization", "Compilation"],
    c: 1,
  },
  {
    q: "Which diagram illustrates the different states of an object and the transitions between them?",
    a: [
      "Sequence Diagram",
      "Entity Relationship Diagram",
      "State Transition Diagram",
      "Data Flow Diagram",
    ],
    c: 2,
  },
  {
    q: "What is the primary purpose of a State Transition Diagram?",
    a: [
      "To represent object states and transitions",
      "To show database relationships",
      "To illustrate network topology",
      "To display source code",
    ],
    c: 0,
  },
  {
    q: "In a State Transition Diagram, what do the arrows represent?",
    a: [
      "Database records",
      "Class attributes",
      "Transitions between states",
      "Relationships between tables",
    ],
    c: 2,
  },
  {
    q: "Which UML diagram shows the sequence of messages exchanged between objects to accomplish a task?",
    a: ["ERD", "Sequence Diagram", "DFD", "Flowchart"],
    c: 1,
  },
  {
    q: "State diagrams are especially useful during which phase of development?",
    a: ["Deployment", "Testing", "Requirements and Planning", "Maintenance"],
    c: 2,
  },
  {
    q: "What is the process of creating abstract representations of a system's structure, data, and procedures?",
    a: [
      "Application Development",
      "Data Modeling",
      "Programming",
      "Software Testing",
    ],
    c: 1,
  },
  {
    q: "What is the ability of a computing process to be used across a range of capabilities?",
    a: ["Adaptability", "Scalability", "Availability", "Portability"],
    c: 1,
  },
  {
    q: "Which design approach divides a complex system into smaller, independent, interchangeable units?",
    a: [
      "Separation of Concern",
      "Modular Design",
      "Microservices",
      "Layered Design",
    ],
    c: 1,
  },
  {
    q: "Which design principle divides a software system into distinct sections, each handling one specific responsibility?",
    a: [
      "Modular Design",
      "Object-Oriented Design",
      "Separation of Concern",
      "SOLID",
    ],
    c: 2,
  },
  {
    q: "What is Vertical Scaling?",
    a: [
      "Adding more servers",
      "Increasing the resources of a single computer",
      "Splitting an application into services",
      "Using cloud storage",
    ],
    c: 1,
  },
  {
    q: "What is Horizontal Scaling?",
    a: [
      "Upgrading a single server",
      "Adding more machines to distribute the workload",
      "Compressing databases",
      "Improving internet speed",
    ],
    c: 1,
  },
  {
    q: "Which architecture builds an application as a collection of small, independent, loosely coupled services?",
    a: [
      "Client-Server",
      "Monolithic",
      "Micro-service Architecture",
      "Peer-to-Peer",
    ],
    c: 2,
  },
  {
    q: "What distributes workloads across multiple servers to improve performance?",
    a: ["Caching", "Load Balancing", "Mirroring", "Virtualization"],
    c: 1,
  },
  {
    q: "Which principle aims to make software more understandable, flexible, and maintainable?",
    a: ["Agile", "SOLID Principle", "DevOps", "SDLC"],
    c: 1,
  },
  {
    q: "Which design pattern category focuses on how objects are created and initialized?",
    a: [
      "Behavioral Design Pattern",
      "Structural Design Pattern",
      "Creational Design Pattern",
      "Architectural Pattern",
    ],
    c: 2,
  },
  {
    q: "Which design pattern category focuses on how objects interact and communicate?",
    a: [
      "Behavioral Design Pattern",
      "Creational Design Pattern",
      "Structural Design Pattern",
      "Modular Pattern",
    ],
    c: 0,
  },
  {
    q: "Who introduced the SOLID principles to help software developers?",
    a: ["Bill Gates", "Steve Jobs", "Robert C. Martin", "James Gosling"],
    c: 2,
  },
  {
    q: "What is the process of creating an early, simplified version of a product to test ideas and gather feedback?",
    a: ["Testing", "Prototype", "Deployment", "Simulation"],
    c: 1,
  },
  {
    q: "Which benefit of prototyping ensures the final product matches stakeholder needs through early input?",
    a: ["Risk Reduction", "Cost Efficiency", "Feedback Loop", "Scalability"],
    c: 2,
  },
  {
    q: "Which prototyping benefit involves identifying potential problems early and minimizing their impact?",
    a: ["Feedback Loop", "Risk Reduction", "Maintenance", "Integration"],
    c: 1,
  },
  {
    q: "Which type of prototype focuses on core functionality and user flow rather than visual design?",
    a: [
      "High-Fidelity Prototype",
      "Interactive Prototype",
      "Low-Fidelity Prototype",
      "Final Prototype",
    ],
    c: 2,
  },
  {
    q: "Which benefit saves time and resources by catching issues early instead of reworking later?",
    a: ["Cost Efficiency", "Availability", "Reliability", "Maintainability"],
    c: 0,
  },
  {
    q: "Which type of prototype provides a detailed, interactive version with real content, colors, images, and realistic interactions?",
    a: [
      "Low-Fidelity Prototype",
      "Paper Prototype",
      "Wireframe",
      "High-Fidelity Prototype",
    ],
    c: 3,
  },
  {
    q: "Which practice ensures software meets both functional and non-functional requirements?",
    a: ["Debugging", "Testing", "Quality Assurance", "Maintenance"],
    c: 2,
  },
  {
    q: "Which prototyping benefit allows developers to gather stakeholder suggestions before the final product is released?",
    a: [
      "Feedback Loop",
      "Load Balancing",
      "Vertical Scaling",
      "Modular Design",
    ],
    c: 0,
  },
  {
    q: "Which of the following best describes Quality Assurance (QA)?",
    a: [
      "Writing program code",
      "Creating database tables",
      "Ensuring software meets required quality standards",
      "Installing operating systems",
    ],
    c: 2,
  },
  {
    q: "Which of the following is NOT a goal of Information Security (InfoSec)?",
    a: ["Confidentiality", "Integrity", "Entertainment", "Availability"],
    c: 2,
  },
  {
    q: "What is the primary purpose of Information Security (InfoSec)?",
    a: [
      "To increase internet speed",
      "To protect all kinds of data",
      "To repair hardware",
      "To build websites",
    ],
    c: 1,
  },
  {
    q: "Which assets are protected by Information Security?",
    a: [
      "Information only",
      "Computers only",
      "Information and Systems",
      "Networks only",
    ],
    c: 2,
  },
  {
    q: "Which best defines Information Security?",
    a: [
      "Installing operating systems",
      "Protecting information and systems",
      "Programming software",
      "Repairing computers",
    ],
    c: 1,
  },
  {
    q: "InfoSec protects data while it is...",
    a: [
      "Stored only",
      "Processed only",
      "Transmitted only",
      "Stored, Processed, or Transmitted",
    ],
    c: 3,
  },
  {
    q: "Which best summarizes Information Assurance?",
    a: [
      "Repairing hardware",
      "Ensuring information remains secure, reliable, and available",
      "Building games",
      "Creating websites",
    ],
    c: 1,
  },
  {
    q: "What does the CIA Triad stand for?",
    a: [
      "Control, Integrity, Access",
      "Confidentiality, Integrity, Availability",
      "Communication, Internet, Access",
      "Central Intelligence Agency",
    ],
    c: 1,
  },
  {
    q: "Which CIA principle ensures that information is accurate and complete?",
    a: ["Availability", "Confidentiality", "Integrity", "Authentication"],
    c: 2,
  },
  {
    q: "Which CIA principle ensures that only authorized people can access information?",
    a: ["Availability", "Integrity", "Confidentiality", "Authorization"],
    c: 2,
  },
  {
    q: "Which CIA principle ensures systems and data are accessible when needed?",
    a: ["Integrity", "Availability", "Confidentiality", "Authentication"],
    c: 1,
  },
  {
    q: "Which action best supports the Availability principle of the CIA Triad?",
    a: [
      "Sharing passwords",
      "Creating regular backups",
      "Disabling updates",
      "Removing user accounts",
    ],
    c: 1,
  },
  {
    q: "Backing up data mainly supports which CIA principle?",
    a: ["Confidentiality", "Integrity", "Availability", "Authentication"],
    c: 2,
  },
  {
    q: "Which is an example of protecting Confidentiality?",
    a: [
      "Updating antivirus",
      "Adding more RAM",
      "Encrypting sensitive information",
      "Backing up files",
    ],
    c: 2,
  },
  {
    q: "Encrypting sensitive files primarily supports which CIA principle?",
    a: ["Integrity", "Availability", "Confidentiality", "Accountability"],
    c: 2,
  },
  {
    q: "Which practice helps maintain data Integrity?",
    a: [
      "Deleting logs",
      "Sharing passwords",
      "Hashing files to detect changes",
      "Disabling firewalls",
    ],
    c: 2,
  },
  {
    q: "Digital signatures primarily help ensure:",
    a: ["Availability", "Integrity", "Confidentiality", "Authentication"],
    c: 1,
  },
  {
    q: "What is malware?",
    a: [
      "Computer hardware",
      "Malicious software",
      "Cloud storage",
      "Network cable",
    ],
    c: 1,
  },
  {
    q: "Which malware encrypts files and demands payment from the victim?",
    a: ["Virus", "Trojan Horse", "Ransomware", "Adware"],
    c: 2,
  },
  {
    q: "Which malware spreads by attaching itself to legitimate files?",
    a: ["Worm", "Virus", "Spyware", "Ransomware"],
    c: 1,
  },
  {
    q: "Which malware spreads across networks without user interaction?",
    a: ["Trojan Horse", "Worm", "Virus", "Adware"],
    c: 1,
  },
  {
    q: "A Trojan Horse is best described as:",
    a: [
      "Software that appears legitimate to trick users",
      "Malware that spreads by itself",
      "Software that displays advertisements",
      "A hardware security device",
    ],
    c: 0,
  },
  {
    q: "Which malware secretly records every key you type on the keyboard?",
    a: ["Adware", "Keylogger", "Worm", "Virus"],
    c: 1,
  },
  {
    q: "Which malware mainly displays unwanted advertisements?",
    a: ["Trojan Horse", "Ransomware", "Adware", "Spyware"],
    c: 2,
  },
  {
    q: "Which software helps prevent malware infections?",
    a: ["Microsoft Word", "Antivirus Software", "Web Browser", "Media Player"],
    c: 1,
  },
  {
    q: "Which cybersecurity domain focuses on protecting network infrastructure?",
    a: [
      "Cloud Security",
      "Application Security",
      "Network Security",
      "Endpoint Security",
    ],
    c: 2,
  },
  {
    q: "Which cybersecurity domain protects software applications from vulnerabilities?",
    a: [
      "Application Security",
      "Physical Security",
      "Cloud Security",
      "Database Security",
    ],
    c: 0,
  },
  {
    q: "Which cybersecurity domain focuses on securing cloud-based resources?",
    a: [
      "Network Security",
      "Cloud Security",
      "Endpoint Security",
      "Physical Security",
    ],
    c: 1,
  },
  {
    q: "Which cybersecurity domain protects laptops, desktops, and mobile devices?",
    a: [
      "Application Security",
      "Physical Security",
      "Endpoint Security",
      "Cloud Security",
    ],
    c: 2,
  },
  {
    q: "Which cybersecurity domain protects physical facilities and equipment?",
    a: [
      "Network Security",
      "Cloud Security",
      "Physical Security",
      "Application Security",
    ],
    c: 2,
  },
  {
    q: "A vulnerability is best defined as:",
    a: [
      "A security policy",
      "A weakness in a system",
      "A firewall",
      "A type of malware",
    ],
    c: 1,
  },
  {
    q: "A threat is best defined as:",
    a: [
      "A security policy",
      "A weakness in a system",
      "Anything capable of causing harm",
      "A type of firewall",
    ],
    c: 2,
  },
  {
    q: "Which of the following is an example of a vulnerability?",
    a: [
      "Strong encryption",
      "Weak passwords",
      "Multi-Factor Authentication",
      "Firewall rules",
    ],
    c: 1,
  },
  {
    q: "Risk is best defined as:",
    a: [
      "A computer virus",
      "The damage when a threat exploits a weakness",
      "A security patch",
      "A type of malware",
    ],
    c: 1,
  },
  {
    q: "Which scenario represents a security risk?",
    a: [
      "A powered-off computer",
      "A hacker exploiting an unpatched server to steal data",
      "Installing antivirus software",
      "Attending security awareness training",
    ],
    c: 1,
  },
  {
    q: "Which practice helps reduce security risks?",
    a: [
      "Ignoring software updates",
      "Sharing passwords",
      "Applying security patches regularly",
      "Disabling antivirus software",
    ],
    c: 2,
  },
  {
    q: "Which type of attack monitors information without changing it?",
    a: ["Active Attack", "Passive Attack", "Insider Attack", "DoS Attack"],
    c: 1,
  },
  {
    q: "Which type of attack modifies or destroys information?",
    a: ["Passive Attack", "Active Attack", "Eavesdropping", "Reconnaissance"],
    c: 1,
  },
  {
    q: "An employee stealing confidential company data is an example of:",
    a: ["Outsider Attack", "Passive Attack", "Insider Attack", "DoS Attack"],
    c: 2,
  },
  {
    q: "A hacker breaking into a company's network from outside is an example of:",
    a: [
      "Insider Attack",
      "Outsider Attack",
      "Passive Attack",
      "Authorized Access",
    ],
    c: 1,
  },
  {
    q: "Eavesdropping on confidential communications is classified as:",
    a: [
      "Active Attack",
      "Passive Attack",
      "Insider Attack",
      "Ransomware Attack",
    ],
    c: 1,
  },
  {
    q: "A Denial-of-Service (DoS) attack is classified as:",
    a: [
      "Passive Attack",
      "Active Attack",
      "Insider Attack",
      "Social Engineering",
    ],
    c: 1,
  },
  {
    q: "Authentication is the process of:",
    a: [
      "Assigning user permissions",
      "Verifying the identity of a user",
      "Encrypting files",
      "Backing up data",
    ],
    c: 1,
  },
  {
    q: "Which of the following is an example of authentication?",
    a: [
      "Opening a folder",
      "Printing a document",
      "Entering a username and password",
      "Sending an email",
    ],
    c: 2,
  },
  {
    q: "Which technology is commonly used to strengthen authentication?",
    a: [
      "Disk Cleanup",
      "Compression Software",
      "Multi-Factor Authentication (MFA)",
      "Firewall Rules",
    ],
    c: 2,
  },
  {
    q: "Authorization determines:",
    a: [
      "Who the user is",
      "What actions a user is allowed to perform",
      "How fast the network is",
      "Whether data is encrypted",
    ],
    c: 1,
  },
  {
    q: "Which principle ensures users only access resources they are permitted to use?",
    a: ["Confidentiality", "Integrity", "Authorization", "Availability"],
    c: 2,
  },
  {
    q: "Non-repudiation ensures that:",
    a: [
      "Users cannot deny specific actions they performed",
      "Data is always available",
      "Viruses are removed automatically",
      "Passwords never expire",
    ],
    c: 0,
  },
  {
    q: "Which technology helps provide non-repudiation?",
    a: ["Firewall", "Antivirus", "Digital Signature", "VPN"],
    c: 2,
  },
  {
    q: "Accountability means:",
    a: [
      "Every user has administrator access",
      "A user's actions can be traced back to them",
      "Passwords are shared",
      "Files are automatically encrypted",
    ],
    c: 1,
  },
  {
    q: "Security logs are mainly used to support:",
    a: ["Availability", "Integrity", "Accountability", "Confidentiality"],
    c: 2,
  },
  {
    q: "Risk management in project management is the process of:",
    a: [
      "Developing software applications",
      "Identifying, assessing, and responding to project risks",
      "Hiring project team members",
      "Managing company finances",
    ],
    c: 1,
  },
  {
    q: "Which role ensures the project aligns with the organization's strategic goals?",
    a: ["Project Manager", "Sponsor", "Stakeholder", "Scrum Master"],
    c: 1,
  },
  {
    q: "Project management is best defined as:",
    a: [
      "The process of repairing software",
      "The systematic process of planning, organizing, executing, and controlling project aspects to achieve goals",
      "The creation of databases",
      "The installation of computer hardware",
    ],
    c: 1,
  },
  {
    q: "Who is responsible for planning, executing, and closing projects while meeting time, scope, and budget?",
    a: [
      "Project Sponsor",
      "Project Manager",
      "Business Analyst",
      "System Administrator",
    ],
    c: 1,
  },
  {
    q: "Which role leads software development, infrastructure upgrades, and system implementation projects?",
    a: [
      "IT Project Manager",
      "Database Administrator",
      "Network Engineer",
      "Quality Assurance Engineer",
    ],
    c: 0,
  },
  {
    q: "A project is best described as:",
    a: [
      "A permanent business operation",
      "A temporary and unique endeavor to achieve specific goals",
      "A software application",
      "A company department",
    ],
    c: 1,
  },
  {
    q: "Who is typically responsible for managing project risks?",
    a: ["Project Manager", "Sponsor", "Client", "Developer"],
    c: 0,
  },
  {
    q: "What is the primary goal of project management?",
    a: [
      "Increase employee salaries",
      "Complete the project on time and within budget",
      "Sell more products",
      "Expand the company",
    ],
    c: 1,
  },
  {
    q: "Which of the following is NOT part of the PMBOK Knowledge Areas?",
    a: [
      "Project Risk Management",
      "Project Integration Management",
      "Sales Management",
      "Project Cost Management",
    ],
    c: 2,
  },
  {
    q: "Which PMBOK knowledge area focuses on coordinating various project activities and processes?",
    a: [
      "Project Resource Management",
      "Project Integration Management",
      "Project Quality Management",
      "Project Schedule Management",
    ],
    c: 1,
  },
  {
    q: "Which PMBOK knowledge area focuses on defining and maintaining quality standards for project deliverables?",
    a: [
      "Project Schedule Management",
      "Project Quality Management",
      "Project Resource Management",
      "Project Integration Management",
    ],
    c: 1,
  },
  {
    q: "Which PMBOK knowledge area includes identifying, analyzing, and responding to potential risks?",
    a: [
      "Project Cost Management",
      "Project Risk Management",
      "Project Scope Management",
      "Project Procurement Management",
    ],
    c: 1,
  },
  {
    q: "Which knowledge area involves identifying, acquiring, and managing necessary project resources?",
    a: [
      "Project Quality Management",
      "Project Resource Management",
      "Project Schedule Management",
      "Project Communications Management",
    ],
    c: 1,
  },
  {
    q: "Which PMBOK knowledge area is responsible for estimating, budgeting, and controlling project costs?",
    a: [
      "Project Cost Management",
      "Project Resource Management",
      "Project Risk Management",
      "Project Integration Management",
    ],
    c: 0,
  },
  {
    q: "Which knowledge area includes defining activities, sequencing tasks, estimating durations, and creating the project timeline?",
    a: [
      "Project Schedule Management",
      "Project Scope Management",
      "Project Quality Management",
      "Project Procurement Management",
    ],
    c: 0,
  },
  {
    q: "Which PMBOK knowledge area aims to minimize negative impacts while maximizing project opportunities?",
    a: [
      "Project Scope Management",
      "Project Risk Management",
      "Project Resource Management",
      "Project Communications Management",
    ],
    c: 1,
  },
  {
    q: "Which concept ensures all project phases and processes work together toward project success?",
    a: ["Integration", "Scope", "Schedule", "Quality"],
    c: 0,
  },
  {
    q: "Which knowledge area ensures the project stays within its defined boundaries?",
    a: [
      "Project Integration Management",
      "Project Scope Management",
      "Project Cost Management",
      "Project Quality Management",
    ],
    c: 1,
  },
  {
    q: "What is the first phase of the Project Life Cycle?",
    a: ["Planning", "Execution", "Initiation", "Monitoring and Controlling"],
    c: 2,
  },
  {
    q: "During which phase are the project objectives, scope, stakeholders, and initial constraints identified?",
    a: ["Execution", "Planning", "Initiation", "Closing"],
    c: 2,
  },
  {
    q: "Throughout the project, progress is monitored against the project plan during which phase?",
    a: ["Execution", "Planning", "Monitoring and Controlling", "Closing"],
    c: 2,
  },
  {
    q: "Which phase ensures the project stays on track and issues are addressed promptly?",
    a: ["Planning", "Execution", "Monitoring and Controlling", "Initiation"],
    c: 2,
  },
  {
    q: "In which phase is a detailed project plan developed?",
    a: ["Execution", "Planning", "Initiation", "Closing"],
    c: 1,
  },
  {
    q: "Which project life cycle phase includes defining scope, schedule, cost estimates, resources, and risks?",
    a: ["Initiation", "Execution", "Planning", "Monitoring and Controlling"],
    c: 2,
  },
  {
    q: "During which phase does the actual work of the project take place?",
    a: ["Planning", "Execution", "Closing", "Initiation"],
    c: 1,
  },
  {
    q: "In which phase is a potential project idea or need first identified?",
    a: ["Execution", "Planning", "Initiation", "Monitoring and Controlling"],
    c: 2,
  },
  {
    q: "Before committing resources, time, and effort, what is assessed during the Initiation phase?",
    a: ["Quality Standards", "Feasibility", "Procurement", "Performance"],
    c: 1,
  },
  {
    q: "The Work Breakdown Structure (WBS) is created during which phase?",
    a: ["Planning", "Execution", "Closing", "Monitoring and Controlling"],
    c: 0,
  },
  {
    q: "Which of the following is NOT a phase in the Project Life Cycle?",
    a: ["Planning", "Execution", "Risk Assessment", "Initiation"],
    c: 2,
  },
  {
    q: "The WBS is best described as:",
    a: [
      "A communication tool",
      "A hierarchical breakdown of project scope into work packages",
      "A financial report",
      "A risk assessment document",
    ],
    c: 1,
  },
  {
    q: "A project with a defined start and end date is considered:",
    a: ["Permanent", "Temporary", "Ongoing", "Continuous"],
    c: 1,
  },
  {
    q: "Which project characteristic means every project is distinct and one-of-a-kind?",
    a: ["Temporary", "Unique", "Scalable", "Repeatable"],
    c: 1,
  },
  {
    q: "What is a project baseline?",
    a: [
      "A list of project team members",
      "A snapshot of the project's status at a specific point in time",
      "A project budget",
      "A project schedule",
    ],
    c: 1,
  },
  {
    q: "According to your reviewer, the Project Management Triangle consists of:",
    a: [
      "Scope, Cost, Time",
      "Scope, Quality, Schedule",
      "Quality, Budget, Risk",
      "Time, Cost, Resources",
    ],
    c: 1,
  },
  {
    q: "Which plan addresses how changes to scope, schedule, or other project aspects are managed?",
    a: [
      "Communication Plan",
      "Procurement Plan",
      "Change Management Plan",
      "Stakeholder Engagement Plan",
    ],
    c: 2,
  },
  {
    q: "Which plan ensures stakeholders are informed, expectations are managed, and input is considered?",
    a: [
      "Communication Plan",
      "Stakeholder Engagement Plan",
      "Risk Management Plan",
      "Quality Management Plan",
    ],
    c: 1,
  },
  {
    q: "Which plan outlines the frequency, methods, and content of project communication?",
    a: [
      "Project Planning",
      "Communication Plan",
      "Procurement Plan",
      "Resource Plan",
    ],
    c: 1,
  },
  {
    q: "Which plan outlines the process for selecting vendors and negotiating contracts?",
    a: [
      "Communication Plan",
      "Stakeholder Engagement Plan",
      "Procurement Plan",
      "Risk Management Plan",
    ],
    c: 2,
  },
  {
    q: "Which plan serves as the roadmap for the project's execution?",
    a: [
      "Project Planning",
      "Project Charter",
      "Quality Plan",
      "Schedule Baseline",
    ],
    c: 0,
  },
  {
    q: "Which project management methodology focuses on adaptability and iterative development?",
    a: ["Waterfall", "Agile", "PRINCE2", "Critical Path Method"],
    c: 1,
  },
  {
    q: "Which Agile component enables the team to focus on delivering the highest customer value?",
    a: [
      "Sprint Backlog",
      "User Stories and Product Backlog",
      "Gantt Chart",
      "Risk Register",
    ],
    c: 1,
  },
  {
    q: "Who is responsible for facilitating Scrum, removing obstacles, and ensuring Scrum practices are followed?",
    a: ["Project Sponsor", "Project Manager", "Scrum Master", "Product Owner"],
    c: 2,
  },
  {
    q: "During which Scrum event do the team and Product Owner select user stories before each sprint?",
    a: [
      "Sprint Review",
      "Daily Scrum",
      "Sprint Planning",
      "Sprint Retrospective",
    ],
    c: 2,
  },
  {
    q: "What is crucial for validating that the product meets stakeholder needs?",
    a: [
      "Risk Assessment",
      "Customer Feedback",
      "Project Baseline",
      "Quality Audit",
    ],
    c: 1,
  },
  {
    q: "Which chart visually shows the amount of work remaining versus time during a sprint?",
    a: ["PERT Chart", "Gantt Chart", "Burndown Chart", "Flowchart"],
    c: 2,
  },
  {
    q: "What is the primary purpose of a Gantt Chart?",
    a: [
      "To track software bugs",
      "To visualize project tasks and their timelines",
      "To create database relationships",
      "To identify project risks",
    ],
    c: 1,
  },
  {
    q: "What does WBS stand for?",
    a: [
      "Work Breakdown Structure",
      "Workflow Business System",
      "Work Balance Sheet",
      "Web-Based Solution",
    ],
    c: 0,
  },
  {
    q: "Which project environment factor includes relationships, interactions, and power dynamics among stakeholders?",
    a: [
      "Cultural Environment",
      "Physical Environment",
      "Social Environment",
      "International Environment",
    ],
    c: 2,
  },
  {
    q: "Which environment affects team motivation, morale, and productivity and requires leadership and conflict management skills?",
    a: [
      "Physical Environment",
      "Cultural Environment",
      "Social Environment",
      "Economic Environment",
    ],
    c: 0,
  },
  {
    q: "Which environment considers differences in market conditions, customer preferences, and regulations across countries?",
    a: [
      "Cultural Environment",
      "International Environment",
      "Political Environment",
      "Technical Environment",
    ],
    c: 1,
  },
  {
    q: "Claiming the words or ideas of another person as your own is called:",
    a: ["Citation", "Paraphrasing", "Plagiarism", "Analysis"],
    c: 2,
  },
  {
    q: "What lets readers know when you borrow information from a source by naming its author?",
    a: ["Bibliography", "Citation", "Summary", "Footnote"],
    c: 1,
  },
  {
    q: "Which writing technique classifies the major issues of a study and provides detailed analysis of each?",
    a: ["Discussion", "Analysis", "Interpretation", "Evaluation"],
    c: 1,
  },
  {
    q: "Which writing technique provides well-reasoned propositions supported by facts and documented evidence?",
    a: ["Narration", "Discussion", "Description", "Definition"],
    c: 1,
  },
  {
    q: "When you paraphrase information from a source, what should you provide?",
    a: [
      "A quotation mark",
      "A citation",
      "A title page",
      "A table of contents",
    ],
    c: 1,
  },
  {
    q: "What is the complete bibliography entry provided for every source used at the end of a paper?",
    a: ["Reference Note", "Appendix", "Work Cited", "Footnote"],
    c: 2,
  },
  {
    q: "Which figurative comparison draws several parallels of similarity?",
    a: ["Definition", "Analogy", "Interpretation", "Evaluation"],
    c: 1,
  },
  {
    q: "A well-established convention or custom used in judicial decisions is called:",
    a: ["Precedence", "Hypothesis", "Thesis", "Proposal"],
    c: 0,
  },
  {
    q: "Which prewriting technique focuses on a topic and writes whatever comes to mind?",
    a: ["Listing Keyword", "Free Writing", "Clustering", "Brainstorming"],
    c: 1,
  },
  {
    q: "Which prewriting technique uses fundamental terms in literature to help focus your research destination?",
    a: ["Free Writing", "Clustering", "Listing Keyword", "Mind Mapping"],
    c: 2,
  },
  {
    q: "Which prewriting technique organizes the main topic and related ideas using branches or diagrams?",
    a: ["Free Writing", "Clustering", "Listing Keyword", "Outlining"],
    c: 1,
  },
  {
    q: "What is the primary purpose of a rough outline?",
    a: [
      "To finalize the research paper",
      "To organize ideas before writing",
      "To check grammar",
      "To cite references",
    ],
    c: 1,
  },
  {
    q: "Which search tool is a human-edited web directory that categorizes websites by topic?",
    a: ["Google Scholar", "Yahoo Directory", "Google Search", "Bing"],
    c: 1,
  },
  {
    q: "Which search engine is specifically designed for scholarly literature and academic publications?",
    a: ["Yahoo", "Google Scholar", "Wikipedia", "DuckDuckGo"],
    c: 1,
  },
  {
    q: "A Boolean expression is primarily used to:",
    a: [
      "Create charts",
      "Improve search results using logical operators",
      "Format documents",
      "Design databases",
    ],
    c: 1,
  },
  {
    q: "Which Boolean operator excludes unwanted search terms?",
    a: ["AND", "OR", "NOT", "XOR"],
    c: 2,
  },
  {
    q: "Which Boolean operator narrows search results by requiring all specified terms?",
    a: ["AND", "OR", "NOT", "NEAR"],
    c: 0,
  },
  {
    q: "Which Boolean operator broadens search results by accepting any of the specified terms?",
    a: ["AND", "NOT", "OR", "ONLY"],
    c: 2,
  },
  {
    q: "A thesis statement primarily serves to:",
    a: [
      "List all references",
      "State the main argument or central idea of the paper",
      "Summarize every paragraph",
      "Provide definitions",
    ],
    c: 1,
  },
  {
    q: "An enthymeme is best described as:",
    a: [
      "A complete bibliography",
      "An argument with one premise implied rather than stated",
      "A type of outline",
      "A citation format",
    ],
    c: 1,
  },
  {
    q: "An educated guess or tentative answer to a research question is called:",
    a: ["Thesis", "Hypothesis", "Enthymeme", "Conclusion"],
    c: 1,
  },
  {
    q: "The primary mission of a thesis is to:",
    a: [
      "List all references",
      "Advance a conclusion the writer will defend",
      "Summarize the research",
      "State the methodology",
    ],
    c: 1,
  },
  {
    q: "The mission of a hypothesis is to:",
    a: [
      "State an opinion",
      "Present a theory that must be tested",
      "Summarize the literature",
      "Explain the results",
    ],
    c: 1,
  },
  {
    q: "An enthymeme mainly uses what kind of clause to support a claim?",
    a: ["If clause", "When clause", "Because clause", "Although clause"],
    c: 2,
  },
  {
    q: "Which type of hypothesis requires that a certain condition be met?",
    a: [
      "Relational Hypothesis",
      "Conditional Hypothesis",
      "Null Hypothesis",
      "Alternative Hypothesis",
    ],
    c: 1,
  },
  {
    q: "A hypothesis stating that one factor causes another is called a:",
    a: [
      "Relational Hypothesis",
      "Conditional Hypothesis",
      "Causal Hypothesis",
      "Null Hypothesis",
    ],
    c: 2,
  },
  {
    q: "Which hypothesis claims that something is more or less than another?",
    a: [
      "Causal Hypothesis",
      "Conditional Hypothesis",
      "Relational Hypothesis",
      "Descriptive Hypothesis",
    ],
    c: 2,
  },
  {
    q: "Which proposal element explains your experience and qualifications for conducting the research?",
    a: [
      "Review of Literature",
      "Statement of Qualification",
      "Cover Page",
      "Research Methods",
    ],
    c: 1,
  },
  {
    q: "Which proposal element surveys the books and articles examined during preliminary research?",
    a: [
      "Statement of Qualification",
      "Review of Literature",
      "Appendix",
      "Abstract",
    ],
    c: 1,
  },
  {
    q: "Which proposal section includes the design, timetable, and budget of the study?",
    a: [
      "Description of Research Methods",
      "Cover Page",
      "Work Cited",
      "Introduction",
    ],
    c: 0,
  },
  {
    q: "Which part of a research proposal identifies the title, researcher, and other basic information about the study?",
    a: ["Abstract", "Cover Page", "Review of Literature", "Methodology"],
    c: 1,
  },
  {
    q: "Which section of a proposal explains why the research is being conducted?",
    a: ["Purpose of the Paper", "Appendix", "References", "Budget Plan"],
    c: 0,
  },
  {
    q: "A short proposal is primarily written to:",
    a: [
      "Present a brief overview of a proposed study",
      "Replace the final research paper",
      "Summarize research findings",
      "List all references",
    ],
    c: 0,
  },
  {
    q: "An online group discussion is mainly used to:",
    a: [
      "Exchange ideas and collaborate through the internet",
      "Publish research papers",
      "Print documents",
      "Create presentations",
    ],
    c: 0,
  },
  {
    q: "A personal essay is best described as:",
    a: [
      "A factual laboratory report",
      "A piece of writing that expresses the writer's personal experiences and reflections",
      "A business proposal",
      "A technical manual",
    ],
    c: 1,
  },
  {
    q: "Quotation marks are used when:",
    a: [
      "Writing your own opinion",
      "Using the exact words from a source",
      "Creating a bibliography",
      "Making an outline",
    ],
    c: 1,
  },
  {
    q: "Paraphrasing means:",
    a: [
      "Copying a source word-for-word",
      "Restating information in your own words while giving credit",
      "Summarizing without understanding",
      "Removing citations",
    ],
    c: 1,
  },
  {
    q: "Evaluation in academic writing refers to:",
    a: [
      "Judging the value or quality of ideas using evidence",
      "Copying information",
      "Creating a bibliography",
      "Listing keywords",
    ],
    c: 0,
  },
  {
    q: "Interpretation involves:",
    a: [
      "Explaining the meaning or significance of information",
      "Listing references",
      "Formatting a paper",
      "Checking grammar only",
    ],
    c: 0,
  },
  {
    q: "A definition explains:",
    a: [
      "The meaning of a word, concept, or idea",
      "The author's biography",
      "The references used",
      "The research budget",
    ],
    c: 0,
  },
  {
    q: "Which writing technique explains the meaning of a concept, term, or idea?",
    a: ["Interpretation", "Definition", "Evaluation", "Discussion"],
    c: 1,
  },
  {
    q: "Which writing technique explains the significance or meaning of information?",
    a: ["Analysis", "Interpretation", "Description", "Narration"],
    c: 1,
  },
  {
    q: "Which writing technique examines ideas by breaking them into smaller parts?",
    a: ["Analysis", "Definition", "Quotation", "Summary"],
    c: 0,
  },
  {
    q: "Which writing technique assesses the quality or value of information using evidence?",
    a: ["Interpretation", "Evaluation", "Discussion", "Description"],
    c: 1,
  },
  {
    q: "When using another author's exact words, you should:",
    a: [
      "Rewrite them without credit",
      "Place them in quotation marks and provide a citation",
      "Only include the author's name",
      "Use italics instead of quotation marks",
    ],
    c: 1,
  },
  {
    q: "What is the purpose of a bibliography or Works Cited page?",
    a: [
      "To summarize the paper",
      "To list all sources used in the research",
      "To explain the research methods",
      "To provide the conclusion",
    ],
    c: 1,
  },
  {
    q: "Which practice best avoids plagiarism?",
    a: [
      "Copying text without citation",
      "Giving proper credit to original sources",
      "Removing quotation marks",
      "Using anonymous sources only",
    ],
    c: 1,
  },
  {
    q: "Which is considered the best source for scholarly and peer-reviewed research?",
    a: [
      "Personal Blogs",
      "Google Scholar",
      "Social Media Posts",
      "Discussion Forums",
    ],
    c: 1,
  },
  {
    q: "Which Boolean operator would you use to broaden your search by accepting either of two keywords?",
    a: ["AND", "NOT", "OR", "EXCEPT"],
    c: 2,
  },
  {
    q: "What is the overall purpose of academic research writing?",
    a: [
      "To entertain readers only",
      "To communicate ideas using evidence, logic, and credible sources",
      "To advertise products",
      "To create fictional stories",
    ],
    c: 1,
  },
  {
    q: "Which of the following best describes Management Information Systems (MIS)?",
    a: [
      "A programming language",
      "A system that collects, processes, stores, and distributes information to support decision-making",
      "A computer network",
      "A database only",
    ],
    c: 1,
  },
  {
    q: "What is the primary purpose of a Management Information System?",
    a: [
      "To play multimedia files",
      "To support planning, controlling, and decision-making",
      "To repair computer hardware",
      "To browse the internet",
    ],
    c: 1,
  },
  {
    q: "Which component of an information system consists of physical devices such as computers, printers, and servers?",
    a: ["Software", "Hardware", "Database", "People"],
    c: 1,
  },
  {
    q: "Which component includes programs and applications that tell the computer what to do?",
    a: ["Hardware", "Software", "People", "Procedures"],
    c: 1,
  },
  {
    q: "Which information system component refers to raw facts that are processed into meaningful information?",
    a: ["Procedures", "Data", "People", "Networks"],
    c: 1,
  },
  {
    q: "Who are responsible for developing, managing, and using information systems?",
    a: ["Software", "People", "Hardware", "Networks"],
    c: 1,
  },
  {
    q: "Which component contains the rules and instructions for operating an information system?",
    a: ["Procedures", "Hardware", "Software", "Database"],
    c: 0,
  },
  {
    q: "What is information?",
    a: [
      "Unorganized facts",
      "Processed data that is meaningful and useful",
      "Computer hardware",
      "Network devices",
    ],
    c: 1,
  },
  {
    q: "Which type of information system supports day-to-day business transactions?",
    a: [
      "Executive Support System",
      "Transaction Processing System",
      "Decision Support System",
      "Expert System",
    ],
    c: 1,
  },
  {
    q: "Which information system helps managers make semi-structured decisions?",
    a: [
      "Transaction Processing System",
      "Decision Support System",
      "Office Automation System",
      "Accounting Information System",
    ],
    c: 1,
  },
  {
    q: "Who is credited with creating the relational database model?",
    a: ["Charles Babbage", "Edgar F. Codd", "Bill Gates", "Dennis Ritchie"],
    c: 1,
  },
  {
    q: "What is the primary purpose of a database?",
    a: [
      "To create websites",
      "To manage and retrieve data efficiently",
      "To browse the internet",
      "To design graphics",
    ],
    c: 1,
  },
  {
    q: "In a relational database, data is primarily stored in:",
    a: ["Files", "Objects", "Tables", "Graphs"],
    c: 2,
  },
  {
    q: "Which database model is best suited for handling complex relationships and network structures?",
    a: [
      "Hierarchical Model",
      "Relational Model",
      "Network Model",
      "Object-Oriented Model",
    ],
    c: 2,
  },
  {
    q: "Which is a core component of a relational database?",
    a: ["Class", "Table", "Object", "Package"],
    c: 1,
  },
  {
    q: "In a relational database, a tuple refers to:",
    a: ["A column", "A database", "A single row in a table", "A relationship"],
    c: 2,
  },
  {
    q: "When a table's primary key is used as a foreign key in another table, it commonly represents what relationship?",
    a: ["Many-to-Many", "One-to-One", "One-to-Many", "Zero-to-One"],
    c: 2,
  },
  {
    q: "A foreign key is:",
    a: [
      "A field that stores passwords",
      "A field that uniquely identifies records in another table",
      "A duplicate primary key",
      "A temporary field",
    ],
    c: 1,
  },
  {
    q: "Which of the following is a valid database relationship?",
    a: ["One-to-One", "Table-to-Column", "Entity-to-Field", "Row-to-Database"],
    c: 0,
  },
  {
    q: "Which key uniquely identifies each record in a table?",
    a: ["Foreign Key", "Primary Key", "Composite Key", "Alternate Key"],
    c: 1,
  },
  {
    q: "What is a database schema?",
    a: [
      "A backup copy of a database",
      "The logical structure or blueprint of a database",
      "A programming language",
      "A type of database software",
    ],
    c: 1,
  },
  {
    q: "What does an Entity-Relationship Diagram (ERD) primarily illustrate?",
    a: [
      "Program execution",
      "Relationships between entities in a database",
      "Computer networks",
      "Website layouts",
    ],
    c: 1,
  },
  {
    q: "In database design, an entity is:",
    a: [
      "A programming function",
      "A real-world object or concept about which data is stored",
      "A database command",
      "A software application",
    ],
    c: 1,
  },
  {
    q: "What is an attribute in an ER diagram?",
    a: [
      "A relationship between two tables",
      "A property or characteristic of an entity",
      "A database administrator",
      "A type of key",
    ],
    c: 1,
  },
  {
    q: "Which attribute can be divided into smaller subparts?",
    a: [
      "Simple Attribute",
      "Composite Attribute",
      "Derived Attribute",
      "Single-Valued Attribute",
    ],
    c: 1,
  },
  {
    q: "Which ACID property ensures that a transaction is completed entirely or not at all?",
    a: ["Consistency", "Isolation", "Durability", "Atomicity"],
    c: 3,
  },
  {
    q: "Which ACID property ensures that a transaction brings the database from one valid state to another?",
    a: ["Consistency", "Atomicity", "Isolation", "Durability"],
    c: 0,
  },
  {
    q: "What is the main purpose of normalization?",
    a: [
      "To increase file size",
      "To reduce data redundancy and improve data integrity",
      "To speed up the internet",
      "To create backups",
    ],
    c: 1,
  },
  {
    q: "A table is in Third Normal Form (3NF) when:",
    a: [
      "It contains only one column",
      "It has no transitive dependencies",
      "It has duplicate records",
      "It has no primary key",
    ],
    c: 1,
  },
  {
    q: "Who is primarily responsible for managing and maintaining a database system?",
    a: [
      "Database Administrator (DBA)",
      "Network Technician",
      "Web Designer",
      "End User",
    ],
    c: 0,
  },
  {
    q: "What does SQL stand for?",
    a: [
      "Structured Query Language",
      "Simple Query Logic",
      "System Query Language",
      "Structured Question List",
    ],
    c: 0,
  },
  {
    q: "Which SQL category is used to define and modify the structure of database objects?",
    a: [
      "DML (Data Manipulation Language)",
      "DDL (Data Definition Language)",
      "DCL (Data Control Language)",
      "TCL (Transaction Control Language)",
    ],
    c: 1,
  },
  {
    q: "Which SQL category is used to retrieve, insert, update, and delete data?",
    a: ["DDL", "DML", "DCL", "TCL"],
    c: 1,
  },
  {
    q: "Which SQL command is used to retrieve data from a table?",
    a: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    c: 2,
  },
  {
    q: "Which SQL command adds new records into a table?",
    a: ["CREATE", "INSERT", "ALTER", "UPDATE"],
    c: 1,
  },
  {
    q: "Which SQL command modifies existing records in a table?",
    a: ["UPDATE", "INSERT", "DELETE", "SELECT"],
    c: 0,
  },
  {
    q: "Which SQL command removes records from a table without deleting the table itself?",
    a: ["DROP", "DELETE", "REMOVE", "ALTER"],
    c: 1,
  },
  {
    q: "Which SQL command is used to create a new table?",
    a: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"],
    c: 0,
  },
  {
    q: "Which SQL command is used to modify the structure of an existing table?",
    a: ["UPDATE TABLE", "ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE"],
    c: 1,
  },
  {
    q: "Which SQL command permanently removes a table and all of its data?",
    a: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"],
    c: 1,
  },
  {
    q: "Which SQL clause is used to filter records based on a specified condition?",
    a: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    c: 2,
  },
  {
    q: "Which SQL clause sorts the result set in ascending or descending order?",
    a: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
    c: 1,
  },
  {
    q: "Which SQL clause groups rows that have the same values in specified columns?",
    a: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    c: 2,
  },
  {
    q: "Which SQL clause is used to filter grouped records after the GROUP BY clause?",
    a: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
    c: 1,
  },
  {
    q: "Which SQL operation combines rows from two or more tables based on a related column?",
    a: ["MERGE", "JOIN", "UNION", "GROUP BY"],
    c: 1,
  },
  {
    q: "Which type of JOIN returns only the rows with matching values in both tables?",
    a: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
    c: 3,
  },
  {
    q: "Which JOIN returns all rows from the left table and the matching rows from the right table?",
    a: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
    c: 2,
  },
  {
    q: "Which JOIN returns all rows from the right table and the matching rows from the left table?",
    a: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    c: 1,
  },
  {
    q: "Which SQL function returns the total number of records in a table?",
    a: ["SUM()", "COUNT()", "AVG()", "MAX()"],
    c: 1,
  },
  {
    q: "Which SQL constraint ensures that each value in a column is unique and cannot be NULL?",
    a: ["FOREIGN KEY", "CHECK", "PRIMARY KEY", "DEFAULT"],
    c: 2,
  },
];
const subjects = ["CC106", "IAS101", "PM101", "ITE3", "IM101"];

// Load saved progress
let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;
let subjectScores = JSON.parse(localStorage.getItem("subjectScores")) || {};

// HTML elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

// Load question
function loadQuestion() {
  feedbackEl.innerHTML = "";
  nextBtn.style.display = "none";

  const q = qs[currentQuestion];

  questionEl.textContent = `Question ${currentQuestion + 1}: ${q.q}`;

  choicesEl.innerHTML = "";

  q.a.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
    btn.classList.add("choice");

    btn.onclick = () => selectAnswer(index);

    choicesEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score}/${qs.length}`;
}

// Select answer
function selectAnswer(index) {
  const q = qs[currentQuestion];
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.c) {
    buttons[index].classList.add("correct");
    feedbackEl.innerHTML = "<p class='correct'>GALING AH KUPALOGS!</p>";
    score++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.c].classList.add("correct");

    feedbackEl.innerHTML = `<p class='wrong'> BOBO MALI WHAHAHAHA! ETO TAMANG SAGOT ENGOT:
             ${String.fromCharCode(65 + q.c)}. ${q.a[q.c]}</p>`;
  }

  // Save score
  localStorage.setItem("score", score);

  scoreEl.textContent = `Score: ${score}/${qs.length}`;
  nextBtn.style.display = "inline-block";
}

// Next button
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  // Save current question
  localStorage.setItem("currentQuestion", currentQuestion);

  // Every 50 questions, show subject score
  if (currentQuestion % 50 === 0) {
    const subjectIndex = currentQuestion / 50 - 1;
    const subjectName = subjects[subjectIndex];

    // Calculate this subject's score
    let previousTotal = 0;

    for (let i = 0; i < subjectIndex; i++) {
      previousTotal += subjectScores[subjects[i]] || 0;
    }

    const subjectScore = score - previousTotal;

    // Save subject score
    subjectScores[subjectName] = subjectScore;
    localStorage.setItem("subjectScores", JSON.stringify(subjectScores));

    // Last subject (IM101)
    if (currentQuestion === 250) {
      localStorage.removeItem("currentQuestion");
      localStorage.removeItem("score");
      localStorage.removeItem("subjectScores");

      document.querySelector(".quiz").innerHTML = `
                <h2>Subject: ${subjectName}</h2>
                <h3>Score: ${subjectScore}/50</h3>
                <hr>
                <h2>Final Score: ${score}/250</h2>
            `;
    } else {
      document.querySelector(".quiz").innerHTML = `
    <h2>Subject: ${subjectName}</h2>
    <h3>Score: ${subjectScore}/50</h3>

    <button id="continueBtn">
        Continue to ${subjects[subjectIndex + 1]}
    </button>

    <button id="restartBtn">
        Wanna Start Again
    </button>
`;

      document.getElementById("continueBtn").onclick = () => {
        location.reload();
      };

      document.getElementById("restartBtn").onclick = () => {
        localStorage.clear();
        location.reload();
      };
    }

    return;
  }

  loadQuestion();
});

// Start quiz
loadQuestion();
