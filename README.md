# Github Globe

![github-globe made by Sharique Akhtar](https://github.com/realshak7781/github_globe/blob/main/src/files/banner.png)



## Inspiration

This project was inspired by [Github's homepage](https://github.com/home), where they display real-time Github activity on a globe map.

## Implementation

The globe is constructed with [three-globe](https://github.com/vasturiano/three-globe), a ThreeJS data-visualization project made by [@vasturiano](https://github.com/vasturiano). Then, the scene is shaded with a dim ambient light and multiple directional lights to resemble a dreamy space environment. The globe's `MeshPhongMaterial` is also adjusted to fit the environment.


## [Live demo](realshak7781.github.io/github_globe/)

All the hackathons and countries and  flights (2026) are displayed on the globe. If you try to follow one arc, that would be the sequence of my travel destinations.

## Documentation

Please visit [three-globe](https://github.com/vasturiano/three-globe) for detailed documentation if you want to edit the `Globe` object to add data visualization. Speaking of the Glow, `three-globe` does not let you access the glow mesh object yet, so the default glow was turned off and a separate `three-glow-mesh` is added to the scene instead.

## Usage

This project is bundled with [Webpack](https://webpack.js.org/):

```json
"build": "webpack --config=webpack.prod.js",
"build-dev": "webpack --config=webpack.dev.js",
"start": "webpack serve webpack-dev-server --open --config=webpack.dev.js"
```

Details:

```bash
npm start        # development build in ./dist
npm run build    # static production build in ./
```

## License

[MIT](https://choosealicense.com/licenses/mit/)