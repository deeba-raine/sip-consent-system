# School Immunization Consent System (SIP-APP)

## About
SIP-APP is a full-stack electronic consent management system. 
The goal of this project is to transition the School Immunization Program (SIP) from a paper-based vaccine consent process to an electronic consent (eConsent) approach in order to streamline consent management, improve SIP vaccination rates among students, reduce resource consumption, and align with the increased adoption of e-health solutions.

This project is being built incrementally: starting with core consent form 
functionality (MVP), then expanding to include role-based staff portals for 
nurses and admins, authentication, and full database integration. See the  
**Status** section below for current progress.

## Problem

The current paper-based consent process for SIP is resource-intensive: 
staff spend significant time distributing, collecting, 
organizing, and storing forms — diverting time from clinical work.

- Forms are often incomplete or incorrect, requiring follow-up and 
  re-collection cycles
- No real-time visibility into consent status — tracking relies on manual 
  logs/spreadsheets
- Physical form return delays consent confirmation before clinics
- Storing sensitive health records on paper increases risk of loss or 
  unauthorized access

## Solution

SIP-APP digitizes this process with an electronic consent (eConsent) system. 
Unlike paper forms, required fields are validated before submission — 
eliminating incomplete submissions entirely. Consent status is tracked in 
real time as Pending or Submitted, removing the need for manual logs, 
follow-up calls, or redistribution cycles, and 
giving school health staff a centralized portal to manage submissions, 
track consent status, and reduce manual follow-up.

Tech Stack

Frontend:

React
JavaScript
HTML5
CSS3
Vite

Backend:

Node.js
Express.js
RESTful API
CORS
JSON middleware

Database:

MySQL
mysql2 connection pool

Development Tools:

Git & GitHub
Postman
VS Code

Authentication:

Role-based authentication (planned)
Passport.js (planned)
Status

🚧 This project is actively in development.

Completed Features

✅ React project setup using Vite
✅ Built reusable React components:

StudentInformation
VaccineHistory
HealthHistory
ConsentForVaccination
ConsentDeclaration
Header
SubmitButton

✅ Implemented controlled React components with state management
✅ Built multi-step consent form structure
✅ Added form handling and validation logic
✅ Connected React frontend with Express backend API
✅ Created REST API endpoint for consent submission
✅ Implemented MySQL database integration
✅ Designed database tables for:

Students
Vaccine history
Health history
Vaccine consent
Parent declarations

✅ Implemented backend modular architecture:

Routes
Controllers
Database configuration

✅ Tested API requests using Postman
✅ Organized project files and pushed updates to GitHub