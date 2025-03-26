import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// eslint-disable-next-line react/prop-types
const CodeSnippet = ({codeString, language}) => {
  //const codeString = `print("Hello, World!")`;

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 my-4">
      <h2 className="text-lg font-semibold text-white mb-2"></h2>
      <SyntaxHighlighter
        language={language? language : "python"}
        style={darcula}
        customStyle={{
          background: "transparent", // Let the Tailwind `bg-gray-800` style apply
          padding: "0",
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
