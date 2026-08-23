import { FaCode } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuLayoutGrid, LuSettings, LuLogOut } from "react-icons/lu";
import { Link, useParams, useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SideBar = ({name, profilePic}) => {

    const { student_id } = useParams(); // Extract student_id from the URL
    const { pathname } = useLocation();

    const navItems = [
        { label: "Courses", to: `/${student_id}/coursespage`, icon: LuLayoutGrid },
        { label: "Profile", to: `/${student_id}/profilepage`, icon: CgProfile },
        { label: "Settings", to: `/${student_id}/settingspage`, icon: LuSettings },
    ];

    // eslint-disable-next-line react/prop-types
    const hasProfilePic = profilePic && !profilePic.endsWith("null");

    return (
        <aside className="w-[22%] h-screen bg-ink-950 text-cloud flex flex-col fixed border-r border-white/5">
            <Link to="/" className="flex items-center gap-2 m-6">
                <FaCode className="text-3xl text-rose-500"/>
                <span className="font-bold text-lg tracking-tight">Code Ed</span>
            </Link>

            {/* Profile */}
            <div className="flex items-center gap-3 mx-6 mb-8 pb-6 border-b border-white/10">
                {hasProfilePic ?
                    <img src={profilePic} alt="profile_picture"
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-rose-600/40"
                    /> :
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                        <CgProfile className="w-7 h-7 text-mist"/>
                    </div>
                }
                <span className="text-sm font-semibold truncate">{name || "Student"}</span>
            </div>

            <nav className="flex-1 flex flex-col gap-1 px-4">
                {navItems.map(({ label, to, icon: Icon }) => {
                    const active = pathname === to;
                    return (
                        <Link key={to} to={to}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                active
                                    ? "bg-rose-600/15 text-rose-400 border border-rose-600/30"
                                    : "text-mist hover:bg-white/5 hover:text-cloud"
                            }`}>
                            <Icon className="text-lg shrink-0" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <div className="px-4 pb-6 pt-2 border-t border-white/10">
                <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-mist hover:bg-white/5 hover:text-rose-400 transition-colors duration-150">
                    <LuLogOut className="text-lg shrink-0" />
                    Logout
                </Link>
            </div>
        </aside>
    )
  }

  export default SideBar
