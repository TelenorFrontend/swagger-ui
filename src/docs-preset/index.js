import DocsLayout from "./layout"
import DocsBaseLayout from "./components/base"
import DocsInfo from "./components/info"
import ConfigsPlugin from "plugins/configs"

// the Docs preset

let preset = [
  ConfigsPlugin,
  () => {
    return {
      components: { DocsLayout, DocsBaseLayout, DocsInfo }
    }
  }
]

module.exports = preset
