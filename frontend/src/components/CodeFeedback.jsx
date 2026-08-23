import PropTypes from 'prop-types';

function CodeFeedback({ feedback }) {
  
    if (!Array.isArray(feedback) || feedback.length === 0) {
      return (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Feedback</h3>
          <div className="p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-400">No feedback available.</div>
        </div>
      );
    }

    return (
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Feedback</h3>
        <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 overflow-hidden">
          {feedback.map((item, index) => (
            <div key={index} className="flex items-center justify-between px-4 py-2.5 text-sm">
              <span className="text-gray-700">Test Case {index + 1}</span>
              {item.isCorrect ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">Passed</span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold">Failed</span>
              )}
            </div>
          ))}
        </div>
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