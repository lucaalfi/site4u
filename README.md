# site4u - Team 3
---

## Getting Started:
We are currently using Node for package management. 
So after clonning the repo you must run:`npm run bothInstall`

That command should install the concurrently package, as well as running npm install on both the server and client. 

**Note:**
  - The front and back end have been separated to compartimentalize node packages.
  - Ensure that localhost port 3001 is available as the server will attempt to listen for calls using it.
  - This should get all of the dependencies done which will become increasingly important as we get to back end development.
  - Any issues with the packaged and dependencies will be displayed here and need to be addressed.

After running the bothInstall script you should be able to run the server frontend+backend with: `npm run startAll` 

This script should run both the server and the client in their separate ports and the client will then make calls to the server to fetch the members and projects.  

Node should display in which port of the local host the programs are running at and you should be able to access it from any browser in that machine.
