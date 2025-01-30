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

create and switch to the new branch:
git checkout -b branch-name

Commit history:
git log --oneline --graph

Rename current branch:
git branch -m new-branch-name

