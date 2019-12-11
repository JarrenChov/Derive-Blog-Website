# DÉRIVE Blog Website
A project built solely using express and no frameworks

# Table of Contents
- [General](#general)
  - [Directory Structure](#directory-structure)
- [Usage](#usage)
  - [Important Notes Before Execution](#important-notes-before-execution)
    - [System Environment](#system-environment)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Website](#running-the-website)
- [Recognitions](#recognitions)

# General
## Directory Structure
Initial directory structure without any make-shift changes or modifications are as specified:
```bash
Derive-Blog-Website
├── bin
│   └── www
├── public
│   ├── fonts
│   ├── images
│   ├── javascript
│   └── stylesheets
├── routes
│   ├── blog.html
│   ├── home.html
│   ├── index.html
│   ├── index.js
│   ├── places-visited.html
│   └── users.js
├── views
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
├── .gitignore
├── 404.html
├── app.js
├── package-lock.json
├── package.json
├── Places_Visited.json
├── README.md
└── test.js
```
Please take note that:
- A Server instance is started using `/bin/www` and not the conventional placement in `app.js`.
- All fonts used are located in `/public/fonts`
- All referenced images used are located in `/public/images`
- All executed client scripts are located in `/public/javascript`
- All referenced styling for `.html`are located in `/public/stylesheets`
- All instances of navigable uri, as both dynamic `.js` and static `.html` files are placed in `/routes`.
- Default instance generations are located in `views`
- A database replica of a client blog entry are stored in `Places_Visited.json`

# Usage
The project comes bundled with a pre-existing execution file and can be run without any need for compiling. However, if you wish to make any changes to the source code itself, the `Makefile` will need to be run to create a new executable with applied changes.

## Compiling
To generate a new executable, save any made changes to the files located in `/include` or `/src` and navigate to the root directory: `A-Star-Pathfinding`.
Run the command:
```bash
 make
```

## Important Notes Before Execution
Please read carefully the following notes, as unexpected behavior and failure to start may be encountered. Although, there is should not really anything that should stop the website from running in your environment, some issues may be encountered which may be out .

### System Enviroment
Since the website was built with node v8 it should be compatible with any versions of node higher than 8. As the website was solely created using `express` and node and does not rely on any specific outside packages, there should not be a major issues. However, if the server fails to start, please try any release of node v8 or v10.

## Installing Dependencies
If running a clean version of the website (generally most cases), you will need to ensure all correct versioned packages and dependencies required are installed. This can be done simply by running the following command:
```bash
npm install
```

## Running the Program
Since the project simulates a server environment handling requests and responding to those requests, the only command that needs to be run is as follows:
```bash
npm start
```
Once the server instance has started, the following output should be displayed on your terminal
```bash
> WebsiteServer@0.0.0 start ${URL-Path}/Derieve-Blog-Website
> node ./bin/www
```
To see the website and start receiving responses from the running server, enter in your favorite browser the following:
```bash
localhost:3000
```

# Recognitions
This project was created in partake with Pongsakorn (last name removed for anonymous reasons). All work which has not been referenced for open source use or third-party, is solely the work of myself and Pongsakorn built from the ground up.

All sourced usages of third-party and open source implementations if used, go out to their respective creators. In the need you wish to reproduce any components, all work is free to use and can be adopted to the needs that you require. However, please give appropriate references to the original author, whether it be adopted from the original sourced location or directly a partake of our implementations.

