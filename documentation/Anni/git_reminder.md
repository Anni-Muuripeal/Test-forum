Start:

git checkout main
git pull origin main
git checkout -b name

Add example (descriptive message example): 

git add tests/pageObjects/LoginPage.js
or
git add folder_name/
git commit -m "feat: implement login page object with basic authentication flows"

Before pushing:

git checkout main
git pull origin main
git checkout feature/login-tests
git merge main

Push:
git push origin feature/login-tests

Create pull request

Pull request template:

----
# Test Implementation: Login Functionality

## Changes Overview
Implementation of automated tests for the login functionality using Playwright and Page Object Model.

## Technical Details
- Created LoginPage page object
- Implemented basic authentication test scenarios
- Added error handling for invalid credentials

## Test Coverage
- Successful login
- Invalid credentials handling
- Session management

## Testing Notes
All tests executed successfully in local environment.

## Related Issues
Closes #1
----

Merge

Local clean up:
git checkout main
git pull origin main
git branch -d feature/login-tests



****
----
****

Other useful git commands

Current branch and state:
git status

All local and current branch:
git branch

Local and remote branches:
git branch -a

Commit history:
git log --oneline --graph

Rename current branch:
git branch -m new-branch-name

