[![Codacy grade](https://img.shields.io/codacy/grade/5eb4488e336245dcbf803135531bc3ad.svg?maxAge=2592000)](https://github.com/RyanCCollins/corporate-dashboard)
![Code Ship Badge](https://codeship.com/projects/940a8cf0-626f-0134-d657-165525e8bcef/status?branch=master)

# Corporate Data Analytic Dashboard
A corporate dashboard web application, built with a focus on component oriented design, UI / UX and performance.

The app is deployed to [heroku](https://corporate-dashboard-client.herokuapp.com/), serving production optimized bundle chunks.

## Background
A performance oriented single page web application built using cutting edge techniques and technologies, including the Flux Unidirectional Data Flow, and Component Oriented Design. Written in cutting-edge JavaScript transpiled via Babel and Webpack.

Runs a GraphQL-based backend and serves data from JSON and CSV files.  Uses accessibility and UX best practices to provide a reactive mobile-first web user interface.  Loading a complex data model via Apollo Client, the application handles all of the data flow through the Flux pattern, while still allowing for colocated component oriented design.  It loads data in realtime, polling the server at regular intervals.

Using complex chart components from the Grommet UX library, the application provides an interactive GUI for exploring data.

The application includes the following views:
1. A geospatial view, identifying the number of employees at various company locations.
2. A “key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.
3. A “data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.
  - The data view uses polling to load data from the server at a set interval.
  - The components are built to be extremely, reactive.

## Getting Started
The project started as a fork of the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) project.  Please reference the repository for details on the features and conventions of the boilerplate.


## Installing
The package.json file includes over a dozen npm scripts to make most tasks a breeze.

Installation can be achieved by running
```
npm run setup
```

Also install webpack and webpack dev server globally.
```
npm install -g webpack-dev-server webpack
```

To get the development server running, please run
```
npm run start
```

### Scripts
Scripts can be referenced from the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) Project repo.

If you just want to serve the minified and chunked bundles, which might be faster, you can run
```
npm run serve:bundle
```

# Built With
- [GraphQL](http://graphql.org/learn/)
- [ApolloClient](https://github.com/apollostack/apollo-client)
- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Grommet UX](https://github.com/RyanCCollins/grommet)
- [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Troubleshooting
When working with a team on a project that uses Node, it is important that everyone use the same version of node and npm.
In the case of this project, we are using Node version 4.2.4.

Instructions for installing NVM and setting your node version for the project can be [found here](https://gist.github.com/RyanCCollins/1a5686ff9dd51b72eb2d4dc70aa6c1f4).

If you get an error message, such as "Unexpected token import", that means that your Babel installation is not working right.  Please see [here](https://github.com/babel/babel/issues) for potential troubleshooting steps.

## Acknowledgments
Many thanks to the Grommet UX teams and the teams building React, Redux, GraphQL and Apollo.

## Screen Shots
![Home View](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/home-main.png?raw=true)
![Geospatial](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/geospatialview-main.png?raw=true)
![Data View](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/dataview-main.png?raw=true)
![Key Metrics](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/keymetricsview-main.png?raw=true)
