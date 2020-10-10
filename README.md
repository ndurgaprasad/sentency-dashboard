[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=walterjgsp_sentency-dashboard&metric=alert_status)](https://sonarcloud.io/dashboard?id=walterjgsp_sentency-dashboard)

<div align="center">
    <h1 align="center">
    Sentency Dashboard
    </h1>
</div>

Dashboard to manage the quotes created using React and Typescript.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Third-Party frameworks

The list of all the third party frameworks used in this project:

* [Semantic UI](https://react.semantic-ui.com/): React components for faster and easier web development using Semantic UI framework.
* [React-Router-DOM](https://github.com/ReactTraining/react-router): Declarative routing for React
* [MobX](https://mobx.js.org/): a battle tested library that makes state management simple and scalable
* [SuperAgent](https://visionmedia.github.io/superagent/): light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve
* [Fontawesome](https://fontawesome.com/): the web's most popular icon set and toolkit.

## Docker

The project will generate a container with the dashboard implementation. Before running the container it's necessary to build it. This can be accomplished
running the command:

```bash
docker build -t sentency_dashboard -f Dockerfile.prod .
```

After the container finishes building you can run with docker-compose.