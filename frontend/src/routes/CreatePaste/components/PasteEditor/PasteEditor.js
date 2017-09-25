import { Header, TextArea } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  pasteContent: PropTypes.string,
  updatePasteContent: PropTypes.func
}

const PasteEditor = ({ pasteContent, updatePasteContent }) => {
  return (
    <div>
      <Header textAlign="center">Paste Editor</Header>
      <TextArea
        name="pasteContent"
        value={pasteContent}
        onChange={(event, data) => updatePasteContent(event, data)}
        placeholder="Create your paste here"
        style={{ minHeight: 400 }}
        autoHeight
      />
    </div>
  )
}

PasteEditor.propTypes = propTypes

export default PasteEditor