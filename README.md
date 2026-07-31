# Adidas Launch Management

# Project Overview and Goals

Adidas Launch Management is a launch planning platform designed to centralize product launch information and collaboration between two main roles: creator and approver.
This application provides an intuitive dashboard where users can:

    -Create new launches
    -Edit launch information
    -Manage launch status
    -Upload supporting assets
    -Track launch history
    -Filter launches
    -Visualize launches in a calendar
    -Manage permissions according to user role

the main goals of the project are:

    -Centralize Adidas product launch information.
    -Provide different permissions for Creators and Approvers.
    -Track the complete launch workflow.
    -Offer a simple and intuitive user experience.


# Setup Instructions

## Clone the repository

```bash
git clone <https://github.com/JPalacios-8/enGlobe_connect-project.git>
```

## Install Frontend

```bash
cd client
npm install
```

Run the frontend

```bash
npm run dev
```


## Install Backend

Open a second terminal.

```bash
cd server
npm install
```

Run the backend

```bash
npm run dev
```

The API will be available at (there you can find out what is changing in the data base):

```
http://localhost:3000
```

The frontend runs at:

```
http://localhost:5173
```


# Technologies Used

## Frontend

- React (UI)
- Vite (UI environment)
- Axios (communicate with backend API for the http request)
- React Router (navigation between both pages: launch and calendar)
- FullCalendar (library for the calendar)
- React Icons 
- CSS3 (styling)

## Backend

- Node.js
- Express.js

## Database

- SQLite

## File Upload

- Multer

## Version Control

- Git
- GitHub



# Project Structure

```
client/
│
├── assets/
├── components/
├── context/
├── pages/
├── services/
└── ...

server/
│
├── controllers/
├── routes/
├── uploads/
├── data/
├── db.js
└── index.js
```



# Design Artifacts

The design process included:
-Brainstorm
-Adidas Style study
-UX desition making
-Low-fidelity wireframes
-High-fidelity mockups

Overall design process: https://www.figma.com/board/PYTMOf8QN9s7cbGATXmLYN/eGlobe-clasification-dashboard?node-id=17-991&t=yfjQvAnNL1kxd2bh-1

mock ups only: https://www.figma.com/design/lRftKFxQegDqab4VbAaFh1/Wireframes---connect?node-id=0-1&t=yX01k8gSiRXLvUd4-1


# Known Issues or Limitations

- Roles are simulated (no authentication system).
- SQLite is intended for local development only.
- Uploaded assets are stored locally.
- No cloud storage integration


# Authors

Juanita Palacios Vasquez

Engineering in Multimedia

Universidad Militar Nueva Granada


# License

This project was developed exclusively for academic purposes.