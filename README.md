# Swagger UI Docs Preset

A barebones layout/preset for SwaggerUi 3.x.

### How to use

Install using npm

```
$ npm install --save https://github.com/TelenorFrontend/swagger-ui-docs-preset.git
```

Include preset found in `node_modules/swagger-ui-docs-preset/dist/swagger-ui-docs-preset.js` and the stylesheet at `node_modules/swagger-ui-docs-preset/dist/swagger-ui-docs-preset.css` on your SwaggerUi page. The layout also requires some rules from [TelenorFrontend/component-library](https://github.com/TelenorFrontend/component-library) so make sure to also link it on the page.

```
<link href="style/TelenorFrontend/component-library.css" rel="stylesheet" />
<link href="style/swagger-ui-docs-preset.css" rel="stylesheet" />
<script src="js/swagger-ui-docs-preset.js"></script>
```

Instantiate the SwaggerUi object as below:

```javascript
  const ui = SwaggerUIBundle({
    url: "{{ url }}",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIDocsPreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "DocsLayout"
  });
```

## Modifying

To set up a development environment, clone this repo and fetch the dist folder from [SwaggerUi](https://github.com/swagger-api/swagger-ui). It should contain everything needed to preview your changes. Modify the `dist/index.html` from [SwaggerUi](https://github.com/swagger-api/swagger-ui) as described in **How to use** and open it in a browser of your choice.

To modify the layout, the react components can be found in `src/docs-preset` folder after cloning and installing the dependencies. The sccs can be found in `style`. After making your changes, run the build script to pack the preset and stylesheet.

```
$ npm run build
```

## License

Original work Copyright 2017 SmartBear Software

Modified layout Copyright 2017 Telenor Digital

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
