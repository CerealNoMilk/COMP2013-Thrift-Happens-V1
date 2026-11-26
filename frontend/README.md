# Thrift Happens V1 - Local Frontend only

This template provides starter code for Thrift Happens V2—Mongo Backend with full CRUD.

Steps to copy this repo to your own account:

- Click Fork that can be found in the top-right area of this page.
- After forking the repo to your account, clone the repo to your local machine.
- Add the changes needed for project 2.
- Add, commit, and push the new updates to your repo.
- Submit your repo's web link.

Read Me:

Initial SetUp

1. Install Node.js (22.19.0), Git and MongoDB Compass.
2. Fork the original GitHub repository.
3. Clone your fork to your computer.
4. Open the project in VS Code.

for Mongo

5.  Create a MongoDB Atlas cluster or use an existing cluster.
6.  Create a database user with admin access to ThriftHappens.
7.  Add 0.0.0.0 IP address under Network Access.
8.  Copy your MongoDB connection string.
9.  Open MongoDB Compass and connect using the connection string.
10. Create a database named ThriftHappens and a Collection named clothesItems
11. Create a collection named clothesItems.

make the .Env file:

12. Open backend/.env and enter your own connection details:

Run the BackEnd

13. do:

cd backend
npm install
npm run dev

it will(should) say:
Connected to DB
Server is listening on port 3000

14. Open http://localhost:3000/data

Then run the FrontEnd (seperate terminal)

cd frontend
npm install
npm run dev

15. open http://localhost:5173
