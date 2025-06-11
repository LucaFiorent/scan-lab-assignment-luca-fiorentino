# Scan-Lab-Luca-Fiorentino

This project is a modern web application built with React, TypeScript, and Vite.

## 🚀 Getting Started

Follow these steps to get your development environment up and running.

## Overview

This app enables users to view a list of stations, each of which provides sensor data. The stations are displayed on an interactive map, allowing users to locate and select a station. Once a station is selected, real-time sensor data for that station is available.
</br>
</br>
</br>

## Setup

### 🛠️ Step 1: Clone the repository

If you haven't already cloned the repository, use the following command to clone it locally:

git clone 🔗 [https://github.com/LucaFiorent/scan-lab-luca-fiorentino.git](https://github.com/LucaFiorent/scan-lab-luca-fiorentino.git)
Then navigate to the project folder:

### 📤 `cd ./scan-lab-luca-fiorentino/`

### 📦 Step 2: Install dependencies

After you've navigated to the project folder, run the following command to install all the required dependencies:

### 📤 `npm install`

This will install the dependencies listed in package.json to make sure your project is ready to run.

### Step 3: Add the .env variables File to the Project Directory

Add the `.env.locale` file, which contains the BaseURL, to the project folder next to the `package.json` file. (The `.env.locale file` is provided in the ZIP archive.)

### 🌐 Step 4: Start the development server

Once the dependencies are installed, you can start the development server with:

### 📤 `npm run dev`

This will start the Vite development server, and you can access your project at:

🔗 [http://localhost:5173/](http://localhost:5173/)

You should see the app running in your browser!
</br>
</br>
</br>

## 📁 Project Structure Overview

Here's a quick overview of the main directories and files in this project:

`src/`: Contains all the source code of the project, including React components, pages, and assets.</br></br>
`public/`: Static files, such as images, icons, and index.html.</br></br>
`vite.config.ts`: Configuration file for Vite.</br></br>
`package.json`: Manages project dependencies, scripts, and metadata such as the project name and version.
`dist`: ONLY LOCAL AFTER BUILD - This is the build output folder generated after running the production build.It contains the final compiled and optimized files ready for deployment.

after adding the .env variables

`.env.local`: Environment variables file used to define values like the BaseURL. These variables are accessible during the build and runtime, depending on their prefix (e.g., VITE\_).

For a deeper look at the folder structure, open the dropdown below:

<details><summary><span style="font-size: 1.2em;">📁 Project Folder Structure</span></summary>
<pre>
src/
├── api/  -  // api calls orgnanized by service / route
│   ├── sensors/
│   │   └── sensors.api.ts
│   ├── stations/
│   │   └── station.api.ts 
│   └── api.ts  -  // aggregator
│
├── app/
│   ├── App.tsx
│   └── PageLayout.tsx
│
├── assets/  -  // all the assets used by the app
│   ├── images/
│   │    └── ...  -  // space for images
│   └── ...  -  // space for other assets 
│ 
├── axiosInstance/  -  // axios configuration
│   ├── index.ts
│   └── constants.ts
│
├── components/ 
│   └── ui/ 
│       └── ...  -  // reusable ui elements used across multiple parts of the app
│
├── features/
│   ├── map/
│   │   ├── components/  -  // here are the components used from the map feature
│   │   ├── hooks/  -  // here are the custom hooks of the map feature defined
│   │   ├── pages/
│   │   │   ├── MapPage/ 
│   │   │   └── ...  -  // space for other pages
│   │   │ 
│   │   ├── types/  -  // here are the map feature types defined
│   │   └── utils/  -  // here are the utils functions of the map feature defined
│   │ 
│   └── sensorDetailsPage/
│       ├── components/  -  // here are the components used from the sensorDetailsPage feature
│       ├── hooks/  -  // here are the custom hooks of the sensorDetailsPage feature defined
│       ├── pages/
│       │   ├── SensorsDetailsPage/
│       │   └── ...  -  // space for other pages
│       │ 
│       ├── types/  -  // here are the sensorDetailsPage feature types defined
│       └── utils/  -  // here are the utils functions of the sensorDetailsPage feature defined
│
├── react-query/  -  // react query configuration & setup
│   └── queryClient.ts 
│
├── stores/
│   ├── types/  -  // here are the types of the stores defined
│   ├── stationStore.ts
│   ├── toastStore.ts 
│   └── windowRefStore.ts 
│ 
└── types/  -  // here are the global types defined 
    └── global.types.ts

</pre>
</details>
</br>
</br>

## Components | Features

### Map | MapPage

#### Stations Menu

The Stations Menu component is a clickable list of stations. When one is clicked, the map automatically navigates to the selected station and opens a corresponding popup with additional information. Additionally, if not already open, an extra window opens to display the sensor details, which are fetched every 5 seconds using the `useRealTimeSensorDetails` custom hook (located under `./features -> map -> hooks -> queries`)

#### Map | MapWrapper

The `MapWrapper` is essentially the map display. It renders the stations initially loaded by the custom hook `useStation`.
Clicking on the station or sensor icons opens a `Popup` that shows further information.

### SensorDetails | SensorsDetailsPage

#### SensorDetails

This component is a list of `SensorDetailElement` items that essentially displays a collection of sensor details from the stations selected either from the `StationsMenu` or the `Map` features.

---

### 💻 Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework.
- **Tailwind Merge:** A tool to resolve and merge conflicting Tailwind classes.
- **TanStack Query:** A robust solution for data fetching and caching.
- **Axios:** A promise-based HTTP client for making requests.
- **React Router Dom:** A library for routing in React apps.
- **Leaflet:** A library for creating interactive maps.
- **Zustand:** A lightweight state management library for React.
- **Lucide:** A collection of customizable SVG icons.
