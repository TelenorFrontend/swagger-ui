import React from "react"
import PropTypes from "prop-types"

export default class DocsLayout extends React.Component {

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { getComponent, specSelectors } = this.props

    let Container = getComponent("Container")
    let Row = getComponent("Row")
    let Col = getComponent("Col")

    const DocsBaseLayout = getComponent("DocsBaseLayout", true)

    const loadingStatus = specSelectors.loadingStatus()

    return (

      <Container className='swagger-ui'>
        { loadingStatus === "loading" &&
          <div className="info">Loading...</div>
        }
        { loadingStatus === "failed" &&
          <div className="info">Failed to load spec.</div>
        }
        { loadingStatus === "failedConfig" &&
          <div className="info">Failed to load config.</div>
        }
        { !loadingStatus || loadingStatus === "success" && <DocsBaseLayout /> }
      </Container>
    )
  }

}
