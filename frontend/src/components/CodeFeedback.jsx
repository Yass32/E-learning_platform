import PropTypes from 'prop-types';

function CodeFeedback({ feedback }) {
  
    if (!Array.isArray(feedback) || feedback.length === 0) {
      return (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Feedback:</h3>
          <pre className="p-4 bg-gray-200 rounded-md text-sm whitespace-pre-wrap">No feedback available.</pre>
        </div>
      );
    }
  
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Feedback:</h3>
        <pre className="p-4 bg-gray-200 rounded-md text-sm whitespace-pre-wrap">
          {feedback.map((item, index) => (
            <div key={index}>
              Test Case {index + 1}:{" "}
              {item.isCorrect ? (
                <span className="text-green-700">Passed</span>
              ) : (
                <span className="text-red-700">Failed</span>
              )}
              <hr />
            </div>
          ))}
        </pre>
      </div>
    );
};

CodeFeedback.propTypes = {
feedback: PropTypes.arrayOf(
    PropTypes.shape({
    isCorrect: PropTypes.bool.isRequired,
    })
).isRequired,
};
  
export default CodeFeedback;  