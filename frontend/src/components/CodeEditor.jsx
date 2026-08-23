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
    <div className="flex flex-col h-[60vh] rounded-xl overflow-hidden flex-1 shadow-lg border border-black/20">
      <div className="flex items-center gap-1.5 bg-[#1e1e1e] px-4 py-2.5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        <span className="ml-3 text-xs text-gray-400 font-mono capitalize">{language}</span>
      </div>
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
      <div className="flex items-center gap-3 bg-[#1e1e1e] px-4 py-3 border-t border-white/10">
        <button
          onClick={() => handleRunCode(editorCode)}
          className="px-4 py-2 bg-rose-600 text-white text-sm font-semibold rounded-lg hover:bg-rose-700 transition-all duration-200"
        >
          Run Code
        </button>
        <button onClick={() => handleAutoGrade(editorCode)}
          className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200">
            Submit
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
