import { Editor } from "@monaco-editor/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CodeEditor = ({ code, language, handleRunCode, handleAutoGrade }) => {
    const [editorCode, setEditorCode] = useState(code);

    const handleEditorDidMount = (editor, monaco) => {

    // Define the custom theme
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark", // Inherit from the dark theme
      inherit: true,
      rules: [
        { token: "comment", foreground: "7f9f7f", fontStyle: "italic" },
        { token: "keyword", foreground: "c586c0" },
        { token: "string", foreground: "ce9178" },
      ],
      colors: {
        "editor.background": "#1e1e1e", // Background color of the editor
        "editor.lineHighlightBackground": "#2a2a2a",
      },
    });

    // Apply the custom theme globally
    monaco.editor.setTheme("custom-dark");
  };

  return (
    <div className="flex flex-col h-[60vh] rounded-md flex-1">
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue={editorCode}
        theme="custom-dark" // Set initial theme
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          automaticLayout: true,
        }}
        onChange={(value) => setEditorCode(value)}
        onMount={handleEditorDidMount} // Set custom theme on mount
      />
      <button
        onClick={() => handleRunCode(editorCode)}
        className="mt-4 self-start px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-all duration-200"
      >
        Run Code
      </button>
      <button  onClick={() => handleAutoGrade(editorCode)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200">
          Submit
      </button>
    </div>
  );
};

export default CodeEditor;
