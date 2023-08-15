# Dev-Connect
This project is undertaken by Vivek Jaiswal as Self-Project.
## Objective
A discussion forum where developers can post their development queries and have discussion with fellow developers for the solution.
## Setup and Build Instructions
Open terminal and check for Node version.

```bash
node --version
```
If node is not installed, then install it using the following command :
```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Now Navigate to the directory containing package.json and run the following command : 
```bash
npm install
```
This will install all the dependencies of the project in node_modules directory.

Now, execute the project by running 
```bash
node app.js
```
---
**NOTE**

If you get any error regarding database, then try to reconnect with different internet connection.
If any other error is encountered then try to delete node_modules directory and rerun the following command in directory containing package.json.
```bash
npm install
```
---

## Features
### Register
User can register in the the platform. 
### Login
User can logged in in the the platform.
### Profile
#### Create
User can create their own profile in the the platform by filling the credentials.
#### Add Education
User can Add Education credentials to their own profile in the the platform by filling the credentials.
#### Add Experience
User can Add Experience credentials to their own profile in the the platform by filling the credentials.
#### Show
User can view all the Profiles in the the platform.
#### Delete
User can delete his/her Profile in the the platform.
### Post
#### Like
User can give likes to the particular Post in the the platform.
#### Create Post
User can create the post in the the platform.
#### Delete
User can delete his/her Post in the the platform.
#### Create Comment
User can create a comment to a posts.
#### Delete Comment
User can delete his/her comment to a posts.
