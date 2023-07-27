
  
  # NoSQL: Social Network API

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact](#contact)


  ## Project Description
  This project builds an API for a social network application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

  This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM.
    
  
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
  ### License 

  [![Generic badge](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/.)
  
   

  
  ## Installation 
  Clone the repo, then open the project in VS Code  
  Insomnia was used to test the API routes (if you do not have it, it is highly recommended to download/install it prior to usage).
  Open the project in the terminal and use 'npm install' to install all dependencies


  ## Usage 
  In the terminal use 'npm start' to start the server  
  Use Insomnia to test the API routes.  

  http://localhost:3001/api/users  
  http://localhost:3001/api/thoughts  
  http://localhost:3001/api/users/:id  
  http://localhost:3001/api/thoughts/:id    

  ## Contact
  Please contact [CML120](https://github.com/CML120) at cheelor922@gmail.com with any questions.


https://github.com/CML120/Social-Network-API/assets/126404917/0154c627-9560-4307-85e3-af4503bf0209


