# RiggerHub iOS

🏗️ **A ChaseWhiteRabbit NGO Initiative**

## 📍 Repository Location \u0026 Structure\n\n**Current Location**: `/Users/tiaastor/Github/tiation-repos/RiggerHub-ios/`\n\nThis repository is part of the **Tiation Enterprise Repository Structure**, specifically designed to house **ChaseWhiteRabbit NGO's** technology initiatives following enterprise-grade development practices.\n\n### 🏗️ Enterprise Ecosystem\n- **Repository Collection**: [Enterprise Repository Index](../ENTERPRISE_REPOSITORY_INDEX.md)\n- **Web Platform**: [RiggerHub-web](../RiggerHub-web/)\n- **Android Companion**: [RiggerHub-android](../RiggerHub-android/)\n- **Connect Platform**: [RiggerConnect-web](../RiggerConnect-web/), [RiggerConnect-android](../RiggerConnect-android/), [RiggerConnect-ios](../RiggerConnect-ios/)\n- **Backend Services**: [RiggerBackend](../RiggerBackend/)\n- **Shared Libraries**: [RiggerShared](../RiggerShared/)\n\n### 🌟 NGO Integration\nAs a **ChaseWhiteRabbit NGO Initiative**, this project adheres to:\n- ✅ **Enterprise-grade development practices**\n- ✅ **Ethical technology standards**\n- ✅ **Worker empowerment focus**\n- ✅ **DevOps best practices with CI/CD**\n- ✅ **Open development transparency**\n\n## 🎯 Application Overview\n\nRiggerHub iOS is a comprehensive mobile solution designed for the management and coordination of rigger operations across various sectors, including construction, oil & gas, and heavy machinery industries in Western Australia. Our iOS app empowers operators and teams to efficiently execute strategic plans with real-time management tools.

## 🎯 Project Purpose

Aligned with ChaseWhiteRabbit NGO's mission to harness technology for greater good, RiggerHub iOS encapsulates our commitment to: 

- **Facilitating** seamless project tasks 6 employee collaboration
- **Enhancing** operational safety and compliance
- **Empowering** users with robust analytics and performance monitoring tools

## 🔗 Related Repositories

### Core Platform Components

| Repository | Platform | Description | GitHub SSH URL |
|------------|----------|-------------|----------------|
| **RiggerConnect-web** | Web | Business-focused recruitment platform | `git@github.com:tiation/RiggerConnect-web.git` |
| **RiggerConnect-android** | Android | Mobile business management app | `git@github.com:tiation/RiggerConnect-android.git` |
| **RiggerConnect-ios** | iOS | Mobile business management app | `git@github.com:tiation/RiggerConnect-ios.git` |
| **RiggerConnect-capacitor** | Cross-platform | Cross-platform mobile framework | `git@github.com:tiation/RiggerConnect-capacitor.git` |
| **RiggerHub-web** | Web | Worker-focused job search platform | `git@github.com:tiation/RiggerHub-web.git` |
| **RiggerHub-android** | Android | Mobile worker app | `git@github.com:tiation/RiggerHub-android.git` |
| **RiggerHub-ios** | iOS | Mobile worker app | `git@github.com:tiation/RiggerHub-ios.git` |
| **RiggerBackend** | API/Backend | Core backend services and APIs | `git@github.com:tiation/RiggerBackend.git` |
| **RiggerShared** | Multi-platform | Shared libraries and components | `git@github.com:tiation/RiggerShared.git` |

### Enterprise Integration Architecture

```mermaid
graph TB
    RB[RiggerBackend<br/>Core API Services] --> RCW[RiggerConnect-web]
    RB --> RCA[RiggerConnect-android]
    RB --> RCI[RiggerConnect-ios]
    RB --> RHW[RiggerHub-web]
    RB --> RHA[RiggerHub-android]
    RB --> RHI[RiggerHub-ios]
    RS[RiggerShared<br/>Common Libraries] --> RCW
    RS --> RCA
    RS --> RCI
    RS --> RHW
    RS --> RHA
    RS --> RHI
    
    style RHI fill:#00FFFF,color:#000
    style RB fill:#FF00FF,color:#000
    style RS fill:#00FF00,color:#000
```

### ChaseWhiteRabbit NGO License Framework

All repositories in the Rigger ecosystem are licensed under **GPL v3**, ensuring:
- ✅ **Open Source Transparency**: Complete code visibility and community auditing
- ✅ **Ethical Technology Standards**: Algorithmic fairness and bias prevention
- ✅ **Worker Empowerment Focus**: Technology serving users, not corporate profits
- ✅ **Community Ownership**: Improvements benefit the entire rigger community
- ✅ **Corporate Responsibility**: Commercial use must remain open and accessible

## 🚀 Technology Stack

- **Language**: Swift 5.9+
- **UI Framework**: SwiftUI
- **Architecture**: MVVM with Combine
- **Minimum iOS Version**: iOS 15

## Overview
![License](https://img.shields.io/badge/license-proprietary-red)
![WorkSafe WA](https://img.shields.io/badge/compliance-WorkSafe%20WA-green)
![Mobile Ready](https://img.shields.io/badge/platform-iOS%20%7C%20Android%20%7C%20Web-purple)
![WCAG 2.1](https://img.shields.io/badge/accessibility-WCAG%202.1-brightgreen)

## 🏗️ Overview

RiggerHireApp is an enterprise-grade B2B platform revolutionizing recruitment in Western Australia's construction and mining industries. Our platform seamlessly connects businesses with certified riggers, doggers, and crane operators while ensuring strict compliance with WorkSafe WA standards.

## 🎯 Key Benefits

- **Safety First**: Automated WorkSafe WA compliance verification
- **Efficiency**: AI-powered matching system
- **Reliability**: Real-time worker availability tracking
- **Security**: Enterprise-grade data protection
- **Compliance**: Automated certification verification
- **Accessibility**: WCAG 2.1 compliant interface

## 🚀 Features

### Core Capabilities
- Enterprise-grade safety compliance system
- AI-powered worker-job matching
- Real-time availability tracking
- Secure payment processing (Stripe & Supabase)
- Mobile-first responsive design
- Automated certification verification

### Business Features
- Comprehensive worker verification
- Automated compliance checking
- Real-time availability updates
- Secure payment processing
- Analytics dashboard
- Automated reporting

### Worker Features
- Digital certification management
- Real-time job notifications
- Secure document storage
- Payment tracking
- Professional profile builder
- Skills verification

## 🏢 Repository Structure

```
RiggerHireApp/
├── android/           # Android mobile app
├── ios/              # iOS mobile app
├── B2B-web/          # Business client web interface
├── Staff-web/        # Staff management portal
├── backend/          # Core backend services
├── services/         # Microservices
├── docs/             # Documentation
├── testing/          # Test suites
└── infrastructure/   # DevOps and deployment
```

## 🛠️ Tech Stack

- Mobile: Swift (iOS), Kotlin (Android)
- Web: TypeScript, React
- Backend: Node.js, TypeScript
- Database: PostgreSQL, Redis
- Infrastructure: Docker, Kubernetes
- Payment Processing: Stripe, Supabase

## 📱 Screenshots

### Mobile-Responsive Design

Our enterprise-grade platform features a dark neon theme with cyan/magenta gradients, optimized for all screen sizes:

#### Business Dashboard
![Business Dashboard - Mobile](./screenshots/responsive/business-dashboard-mobile.png)
![Business Dashboard - Tablet](./screenshots/responsive/business-dashboard-tablet.png)
![Business Dashboard - Desktop](./screenshots/responsive/business-dashboard-desktop.png)

#### Worker Profile
![Worker Profile - Mobile](./screenshots/responsive/worker-profile-mobile.png)
![Worker Profile - Tablet](./screenshots/responsive/worker-profile-tablet.png)
![Worker Profile - Desktop](./screenshots/responsive/worker-profile-desktop.png)

#### Job Listings
![Job Listings - Mobile](./screenshots/responsive/job-listings-mobile.png)
![Job Listings - Tablet](./screenshots/responsive/job-listings-tablet.png)
![Job Listings - Desktop](./screenshots/responsive/job-listings-desktop.png)

## 🔧 Development Setup

[Documentation in Progress]

## 📄 Documentation

- [API Documentation](./docs/api/README.md)
- [Architecture Overview](./docs/architecture/README.md)
- [Deployment Guide](./docs/deployment/README.md)

## 🤝 Contributing

[Guidelines in Progress]

## 🤝 Project Team & Purpose

This project is part of a broader suite of repositories aimed at supporting the **transient rigging and heavy lifting industry** in Western Australia and beyond.

🔗 **Related Repositories**:

* [`RiggerConnect-web`](https://github.com/ChaseWhiteRabbit/RiggerConnect-web) - Professional networking platform for construction workers
* [`RiggerConnect-android`](https://github.com/ChaseWhiteRabbit/RiggerConnect-android) - Native Android mobile networking application
* [`RiggerConnect-ios`](https://github.com/ChaseWhiteRabbit/RiggerConnect-ios) - Native iOS mobile networking application
* [`RiggerConnect-capacitor`](https://github.com/ChaseWhiteRabbit/RiggerConnect-capacitor) - Cross-platform mobile app built with Ionic Capacitor
* [`RiggerHub-web`](https://github.com/ChaseWhiteRabbit/RiggerHub-web) - Operations management hub for business users
* [`RiggerHub-android`](https://github.com/ChaseWhiteRabbit/RiggerHub-android) - Native Android operations management application
* [`RiggerHub-ios`](https://github.com/ChaseWhiteRabbit/RiggerHub-ios) - Native iOS operations management application
* [`RiggerShared`](https://github.com/ChaseWhiteRabbit/RiggerShared) - Shared libraries, components, and utilities
* [`RiggerBackend`](https://github.com/ChaseWhiteRabbit/RiggerBackend) - Core backend services and APIs for the Rigger ecosystem

📬 **Contact**:
For questions, ideas, or collaboration inquiries, please reach out to:

* **Jack Jonas** – [jackjonas95@gmail.com](mailto:jackjonas95@gmail.com)
* **Tia** – [tiatheone@protonmail.com](mailto:tiatheone@protonmail.com)

---

### 🙌 About the Founders

**Jack Jonas** is a seasoned rigger, crane operator, and heavy vehicle mechanic based in Karratha, Western Australia. His firsthand experience in the field shapes the practical backbone of this platform.

**Tia** is a Swedish software developer and founder of the NGO **ChaseWhiteRabbit**, which is dedicated to building inclusive, systemic solutions to complex challenges.

Together, they created this SaaS platform to:

* Help connect riggers, doggers, and crane operators to real work opportunities.
* Support better logistics, transparency, and compliance in the field.
* Fund and sustain the good work being done by **ChaseWhiteRabbit** in disadvantaged communities.

## 👥 Contact & Team

### Project Leaders

**Jack Jonas** - Karratha Crane Operator & Industry Expert  
📧 [jackjonas95@gmail.com](mailto:jackjonas95@gmail.com)  
🏗️ **Industry Expertise**: Seasoned rigger, crane operator, and heavy vehicle mechanic based in Karratha, Western Australia. Jack's comprehensive understanding of rigger operations across various sectors ensures this iOS application provides the real-time management tools and strategic planning capabilities needed for efficient execution of complex industrial projects.

**Tia** - ChaseWhiteRabbit NGO Technical Leadership  
📧 [tiatheone@protonmail.com](mailto:tiatheone@protonmail.com)  
🌟 **NGO Mission-Driven Leadership**: Swedish software developer and founder of ChaseWhiteRabbit NGO, aligned with the mission to harness technology for greater good. Tia's commitment to facilitating seamless project tasks and enhancing operational safety drives the development of robust analytics and performance monitoring tools that empower rigger teams.

### Primary Maintainers

For inquiries related to the Rigger ecosystem, please contact our primary maintainers:

- **Jack Jonas**: [jackjonas95@gmail.com](mailto:jackjonas95@gmail.com)
- **Tia Astor**: [tiatheone@protonmail.com](mailto:tiatheone@protonmail.com)

These maintainers oversee the development and coordination of the entire Rigger platform ecosystem, including RiggerConnect, RiggerHub, RiggerBackend, and RiggerShared repositories.
