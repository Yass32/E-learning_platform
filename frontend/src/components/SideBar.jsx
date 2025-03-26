import { FaCode } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SideBar = ({name, profilePic}) => {

    const { student_id } = useParams(); // Extract student_id from the URL


    return (
        <aside className="w-[22%] h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ease-in-out fixed">
            <FaCode className=" m-2 bg-gray-700 rounded hover:bg-gray-600 transition"/>
            
            <nav className="space-y-4 transition-opacity duration-300 ease-in-out">
                <a href={`/${student_id}/coursespage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Courses
                </a>
                <a href={`/${student_id}/settingspage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Settings
                </a>
                <a href={`/${student_id}/profilepage`} className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Profile
                </a>
                <a href="/" className="block mx-2 hover:bg-gray-700 p-2 rounded">
                    Logout
                </a>
                <div className="flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                {profilePic? 
                    <img src={profilePic} alt="profile_picture"
                        className="w-10 h-10 rounded-full mb-4"
                    /> :
                    <CgProfile className="text-3xl"/>
                }
                    
                    <span className="ml-2 overflow-auto">{name}</span>
                </div>
            </nav>
            
        </aside>
    )
  }
  
  export default SideBar



  