import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/textile/textile'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function CodeEditor(props) {
  const { language, value, onChange, theme } = props

  function handleEditorChange(editor, data, value) {
    onChange(value)
  }

  return (
    <ControlledEditor
      onBeforeChange={handleEditorChange}
      value={value}
      style={{ height: 'inherit' }}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: theme,
        lineNumbers: true,
      }}
    />)
}

