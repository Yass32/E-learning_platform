import { FaCode } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SideBar = ({name, profilePic}) => {

    const { student_id } = useParams(); // Extract student_id from the URL


    return (
        <aside className="w-[22%] h-screen text-2xl bg-gray-900 text-white flex flex-col transition-all duration-300 ease-in-out fixed">
            <FaCode className="text-4xl m-3 animate-pulse transition"/>
            
            <nav className="space-y-4 transition-opacity duration-300 ease-in-out">
                <Link to={`/${student_id}/coursespage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Courses
                </Link>
                <Link to={`/${student_id}/settingspage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Settings
                </Link>
                <Link to={`/${student_id}/profilepage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Profile
                </Link>
                <Link to="/" className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Logout
                </Link>
                <div className="flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                {profilePic? 
                    <img src={profilePic} alt="profile_picture"
                        className="w-20 h-20 rounded-full mb-4"
                    /> :
                    <CgProfile className="text-2xl"/>
                }
                    
                    <span className="ml-2 overflow-auto text-2xl">{name}</span>
                </div>
            </nav>
            
        </aside>
    )
  }
  
  export default SideBar



  