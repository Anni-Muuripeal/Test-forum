# Forum application test automation portfolio

## Overview
This repository contains an automated testing framework for a forum application. The forum project is a school project in kood/Jõhvi programming school as a part of a teamwork, project based learning. 

## Forum application
The forum application provides user authentication, post management, and chat functionality. It is built using Go for the backend, with JavaScript handling frontend interactions, WebSocket communication, SQLite3 database and HTML/CSS.

## Technical Stack
- Playwright: Primary testing framework
- JavaScript: Testing language
- Page Object Pattern: Design pattern for test maintainability

## Project Structure
Testing-forum/  
├── backend/  
├── docs/  
├── documantation/Anni # Personal docs  
├── frontend/  
├── node_modules/  
├── playwright-report/  
├── test-results/  
├── tests/  
│   ├── pages/        # Page objects for tests  
│   ├── fixtures/     # Test data  
│   └── *.spec.js     # Test files  
├── main.go           # Main application file  
├── playwright.config.js  
└── package.json  

## Prerequisites

1. Node.js (v14 or newer) installed
2. Go programming language installed (v1.16 or newer)
3. Git for cloning the repository
4. Browser dependencies will be installed during setup

## Setup instructions

- Clone this repository to your local machine:
bash:
git clone https://github.com/Anni-Muuripeal/Test-forum.git

- Navigate to the project directory:
cd Testing-forum

- Install Node.js dependencies:
npm install

- Install Playwright browsers:
npx playwright install



## How run the tests:
- Start the application server in a separate terminal:
go run main.go
The server will start at http://localhost:8080
- Run all tests:

## Tests Author
Anni Müüripeal aka Anni.M

LinkedIn: [\[Anni\]](https://www.linkedin.com/in/anni-muuripeal/)  
Email: anni.myyripeal@gmail.com 

## Original Forum Project Authors
- [@elinat](https://01.kood.tech/git/elinat)
- [@Anni.M](https://01.kood.tech/git/Anni.M)

