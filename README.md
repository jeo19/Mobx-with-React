# Install mobx module

```sh
> npx create-react-app mobx-with-react
> cd mobx-with-react
> yarn add mobx mobx-react
> yarn start
```

#Using with the Decorator

```sh
> yarn eject
>yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

And then find the babel section in package.json and Let's change

```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
  }
```
