# Swagger UI Docs Preset

A barebones layout/preset for SwaggerUi 3.x.

### How to use

Install using npm

```
$ npm install --save https://github.com/TelenorFrontend/swagger-ui-docs-preset.git
```

Include file found in `node_modules/swagger-ui-docs-preset/dist/swagger-ui-docs-preset.js` on your SwaggerUi page

```
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

To modify the layout, a good place to start would be the `src/docs-preset` folder after cloning and installing the dependencies. After making your changes, run the following command to pack the preset.

```
$ npm run build-docs-preset
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
