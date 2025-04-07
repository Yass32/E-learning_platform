import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PageButton = ({url, text}) => {
  return (
    <Link to={url}>
      <button className="text-white bg-rose-600 rounded-md p-2 w-fit text-lg hover:bg-rose-800 transition-all duration-200">
        {text}
      </button>
    </Link>
  );
};

export default PageButton;
