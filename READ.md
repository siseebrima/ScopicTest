## Scopic Software JavaScript Exercise

### Project: Antique Auction Web App

#### Description:

The project aims at building both the frontend and the backend for the application as a _Single Page Application_ (**SPA**).
The Front end uses React JS to render components and Material-UI for styling those components.
React-router-dom@6 was used for navigation between pages. I've implemented protected routing to make sure
certain pages are not accessible to ordinary users. You must be signed in to be able to bid for an item.

I made sure that almost all the important components of the frontend are implemented.
I am aware that I needed images for the items, but because of time constraints (**only able to work on it fully in the weekend**), I use random pictures from *https://source.unsplash.com*.

For the backend, I try to implement the RESTful technique as much as possible. The data is loaded from endpoint
_http://localhost:3001/api/products/_. I used express.

The Frontend is connected to the backend with the help of the **CORS** library.

#### How To Run The App

    1. Clone the git repo
    2. Have two terminals open
        *   Backend
            ```
            cd scopic_backend
            npm install
            npm run dev || npm start
            ```
        * Frontend
            ```
            cd scopic_frontend
            npm install
            npm start
            ```

#### Technologies Used

- ReactJS
- Material-UI
- React-router-dom
- NodeJS
- ExpressJS
- RestAPI
