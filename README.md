## Miro addon for CPT project

### How to start locally

- Run `npm install` to install dependencies.
- Run `npm start` to start developing. \
  Your URL should be similar to this example:
  ```
  http://localhost:3000
  ```
- Paste the URL under **App URL** in your [app settings](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-your-app-in-miro).
- Open a board; you should see your app in the app toolbar or in the **Apps** panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### Folder structure

```
.
├── src
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains structure for the sidebar when launched. This file also contains logic for fetching images from [The Noun Project](https://thenounproject.com/).
│      main.tsx <-- Initializes app, and contains logic for dropping image onto the board.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'
└── index.html <-- The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```
