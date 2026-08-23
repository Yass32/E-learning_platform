import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';

// eslint-disable-next-line react/prop-types
const PageButton = ({url, text}) => {
  return (
    <Link to={url}>
      <button className="flex items-center gap-2 text-white bg-rose-600 rounded-lg px-5 py-2.5 w-fit text-base font-semibold shadow-sm hover:bg-rose-700 hover:shadow-md transition-all duration-200">
        {text}
        <LuArrowRight />
      </button>
    </Link>
  );
};

export default PageButton;
