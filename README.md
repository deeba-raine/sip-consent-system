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

## Tech Stack
**Frontend:** HTML, CSS, JavaScript, React
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL (planned)
**Authentication:** Passport.js (planned)

## Status

🚧 **This project is actively in development. **

    ✅ React project setup (using Vite or Create React App)
    ✅ Created multiple components (StudentInformation, VaccineHistory, Header)
    ✅ Organized files in a components folder
    ✅ Imported/exported components correctly
    ✅ Clean HTML/JSX structure with forms
    ✅ Basic CSS styling
    ✅ Pushed to GitHub
    ✅ Fixed common React gotchas (className, htmlFor, self-closing tags)


    📋 Remaining Tasks
      □ Add state - useState for form data and submission status
      □ Connect inputs - Add value/onChange/checked to all form fields
      □ Handle submit - Submit handler with e.preventDefault() and console.log
      □ Show success - Display submitted data and success message
      □ Add validation - Required fields, phone number, date validation
      □ Show errors - Display error messages inline
      □ API integration - Connect to backend and save data
      □ Deploy - Deploy to Vercel/Netlify or GitHub Pages
      
- [ ] PostgreSQL database connection
- [ ] Nurse portal
- [ ] Admin portal
- [ ] Role-based authentication

## Project Structure

