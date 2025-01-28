Page object pattern
CI/CD - GitHub Actions

Core test scenarious:
- User authentication (registration, login, logout)
- Basic forum functionality (viewing posts, creating posts, commenting)
- Critical user interactions (navigation, error handling)
- Chat function (messaging, notifying, user interaction)
- Error handling (error messages, recovery)

Documentation:
- README
- Basic test reporting
- 

Expanded testing:
- Performance testing
- Data management tests
- API testing (backend endpoints, data integrity)
- Session and/or state management
- Visual testing
- Add cross-browser testing


Example organisation:
tests/
  ├── config/
  │   └── playwright.config.js
  ├── pageObjects/
  │   ├── LoginPage.js
  │   ├── ForumPage.js
  │   └── ChatPage.js
  ├── utils/
  │   ├── testHelpers.js
  │   └── testData.js
  ├── specs/
  │   ├── auth.spec.js
  │   ├── forum.spec.js
  │   └── chat.spec.js
  └── README.md

  Test Coverage overview example:
  ## Test Coverage

### Authentication
- User registration validation
- Login functionality
- Session management
- Error handling for invalid credentials

### Forum Functionality
- Post creation and viewing
- Category management
- Comment functionality
- User permissions

### Real-time Communication
- WebSocket connection testing
- Message delivery verification
- Chat history management
- Online status updates



