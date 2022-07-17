# [Streaming Platforms Analytics](https://simoniuss.github.io/streaming-platforms-analytics/)

![Deploy Pages](https://github.com/Simoniuss/streaming-platforms-analytics/actions/workflows/node.js.yml/badge.svg)
![MIT](https://img.shields.io/github/license/Simoniuss/streaming-platforms-analytics)


This project is the implementation of a website for the exam of Scientific and Large Data Visualization, at the University of Pisa (a.y. 2021/2022). The website contains different data visualization made with [D3js](https://d3js.org/) to analyze and compare different streaming platforms: Netflix, Prime Video and Disney+.

## Built with
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)


# Project tour
The project is divided in tow folders: `public` contains the index of the site which uploads the main js App stored in `src` which is the main directory. `src` contains the following files:

1. `App.js` - The main file of the project, where the site is built.
2. `index.js` - It generates the root of the site.
3. `css` - It contains the css files of the site.
4. `img` - It contains the images of the site.
5. `Header` - It contains the header of the site. It subdivided in:
    1. `Logo` - The visualization of the title of the site for desktop and mobile.
    2. `Menu` - Different menu options of the site for desktop and mobile.
    3. `Dialog` - It contains the dialog of the site with description of the project.
    4. `Header.js` - The main file of the header, where the header is built.
6. `Footer` - It contains the footer of the site.
7. `Dashboard` - It is the main part of the site where data visualizations are made. In it there are:
    1. `Dashboard.js` - The main file of the dashboard, where the dashboard is built.
    2. `VisualizationComponents` - It contains the different visualization components of the dashboard.
8. `Theme` - It contains the light and dark theme of the site.
9. `data` - It contains the dataset used for the visualization.
10. `notebooks` - It contains the notebooks used to preprocess and integrate the data.
11. `GAEvent.js` - It is the component to produce Google Analytics events.

## Data
A list of movies and tv show from each platform for this project was taken from [Kaggle](https://www.kaggle.com/) ([Netflix](https://www.kaggle.com/datasets/shivamb/netflix-shows), [Prime Video](https://www.kaggle.com/datasets/shivamb/amazon-prime-movies-and-tv-shows), [Disney+](https://www.kaggle.com/datasets/shivamb/disney-movies-and-tv-shows)). Then this list was completed using [OMDb API](http://www.omdbapi.com/) taking more informations like actors, genre, runtime and ratings from IMDb, RottenTomatoes and Metacritic. Data relating to quarterly revenues and number of subscribers were collected from the respective financial site of each platform ([Netflix](https://ir.netflix.net/financials/quarterly-earnings/default.aspx), [Prime Video](https://ir.aboutamazon.com/quarterly-results/default.aspx), [Disney+](https://thewaltdisneycompany.com/investor-relations/#reports)).

# Getting started
This is an example on how to run the project locally.

## Prerequisites
Install Node.js and npm. You can follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Installation
1. Clone the repository.:
    ```
    git clone https://github.com/Simoniuss/streaming-platforms-analytics.git
    ```
2. Install the npm packages:
    ```
    npm install
    ```
3. Run the project:
    ```
    npm start
    ```
    You can reach the site at `localhost:3000`.

### Extra
I you want to make your own site and upload it o [Github Pages](https://pages.github.com/) you can just upload the folder to your own repository, setting the site following the instructions [here](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/). The GitHub action is ready, you just have to setup the homepage in `package.json` and create a new GitHub secret in your repository ([GH Secret](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)) with this name `ACTIONS_DEPLOY_ACCESS_TOKEN`. <br>
Every time you push your code to GitHub, the site will be updated.


# Usage
![usage gif](https://github.com/Simoniuss/streaming-platforms-analytics/blob/main/src/img/usage.gif?raw=true)

# License
Distributed under the MIT License. See [`LICENSE`](https://github.com/Simoniuss/streaming-platforms-analytics/blob/main/LICENSE) for more information.