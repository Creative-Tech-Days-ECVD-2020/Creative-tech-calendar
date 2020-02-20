# o-pen

An application allowging students to confirm their attendance. This application works thanks to RFID scanner link to MQTT broker.
This project use `npm` and `yarn`.

## Commands

Run the project
```bash
yarn start
```

Build the project
```bash
yarn build
```

## Packages

* [aos](https://michalsnik.github.io/aos/)
* [styled-components](https://styled-components.com/)
* [Redux] (https://redux.js.org/)
* [React-router](https://reacttraining.com/react-router/web/guides/quick-start)
* [react-signature-canvas](https://github.com/agilgur5/react-signature-canvas)

## Architecture

```
.
├── public
    ├── images                       # Pictures used by the application
    ├── fonts                        # Font used by the application
├── src
    ├── components                   # Components use by containers or pages
    ├── containers                   # Components that use redux logic
    ├── hocs                         # Here we use HOC for set background-color on each page (either blue or orange)
    ├── pages                        # Application's pages
```

## To do

* Refactor pages and components name
* Add changelog
* Refactor manifest.json (add icon, edit theme-color...)
* Add the page where the sudent can select theme for creative-tech days
* Link the application to the api for store signatures and the datetime when the student has passed his badge
* Remove the component `HomeConnect`