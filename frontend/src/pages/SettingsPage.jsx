import { useEffect, useState } from 'react'; // Import hooks from React
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS for styling
import SideBar from '../components/SideBar'; // Import the Sidebar component
import Loading from '../components/Loading'; // Import the Loading component
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate, useParams } from 'react-router-dom'; // Import hooks for navigation and getting URL parameters
import { CgProfile } from "react-icons/cg";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;



const SettingsPage = () => {
    // State variables for storing user details
    const [fullName, setFullName] = useState(""); // Stores the user's current full name
    const [newFullName, setNewFullName] = useState(""); // Stores the new full name input
    const [email, setEmail] = useState(""); // Stores the user's current email
    const [newEmail, setNewEmail] = useState(""); // Stores the new email input
    const [password, setPassword] = useState(""); // Stores the user's current password (hashed)
    const [newPassword, setNewPassword] = useState(''); // Stores the new password input
    const [loading, setLoading] = useState(false); // Controls the loading screen
    const [profilePic, setProfilePic] = useState(null); // Stores the selected profile picture file
    const [profilePicUrl, setProfilePicUrl] = useState(""); // Default profile picture URL

    const { student_id } = useParams(); // Get student ID from the URL
    const navigate = useNavigate(); // Hook for navigation

    // Fetch student data when the component loads or student_id changes
    useEffect(() => {
        setLoading(true); // Show loading screen
        setTimeout(() => setLoading(false), 2000); // Hide loading after 2 seconds

        const fetchStudent = async () => {
            try {
                const response = await axios.get(`${VITE_BACKEND_URL}/students/${student_id}`);
                setFullName(response.data.full_name); // Set full name
                setEmail(response.data.email); // Set email
                setPassword(response.data.password_hash); // Set password (hashed)
                setProfilePicUrl(`${VITE_BACKEND_URL}` + response.data.profile_picture || profilePicUrl);
            } catch (error) {
                console.log(error); // Log error if request fails
            }
        };
        fetchStudent();
    }, [student_id, profilePicUrl]); // Dependency array to re-fetch data when student_id changes

    // Function to handle account deletion
    const handleDeleteAccount = async () => {
        if (!window.confirm("Are you sure you want to delete your account? This action is irreversible.")) return;
        try {
            await axios.delete(`${VITE_BACKEND_URL}/students/${student_id}`);
            navigate('/'); // Redirect to homepage after deletion
        } catch (error) {
            console.error("Delete error:", error.response?.data || error.message);
        }
    };

    // Function to update user information
    const handleUpdateInfo = async () => {
        try {
            await axios.put(`${VITE_BACKEND_URL}/students/${student_id}`, {
                full_name: newFullName,
                email: newEmail,
                password_hash: newPassword,
            });
            setNewFullName(''); // Clear input fields
            setNewEmail('');
            setNewPassword('');
        } catch (error) {
            console.error("Update error:", error.response?.data || error.message);
        }
    };

    // Function to handle when a user selects a new profile picture from their device
    const handleProfilePicChange = (e) => {
        // Get the selected file from the input element
        const file = e.target.files[0];

        // Check if a file is selected
        if (file) {
            // Update the profilePic state with the selected file
            setProfilePic(file);

            // Generate a temporary URL for the selected image and update profilePicUrl
            // This allows the user to preview the image before uploading
            setProfilePicUrl(URL.createObjectURL(file));
        }
    };

    // Function to handle uploading the selected profile picture to the server
    const handleUploadProfilePic = async () => {
        // If no file is selected, alert the user and stop execution
        if (!profilePic) return alert("Please select an image first.");

        // Create a new FormData object to send the file as multipart/form-data
        const formData = new FormData();
        formData.append("profile_picture", profilePic); // Attach the selected image file

        try {
            // Send an HTTP PUT request to upload the image to the server
            const response = await axios.put(
                `${VITE_BACKEND_URL}/students/${student_id}/upload`, // API endpoint for image upload
                formData, // Form data containing the image file
                {
                    headers: { "Content-Type": "multipart/form-data" }, // Ensure proper request headers
                }
            );

            // Log the server response to debug if needed
            console.log("Upload response:", response.data);

            // Notify the user that the upload was successful
            alert("Profile picture updated!");
        } catch (error) {
            // Handle errors, such as network issues or server errors
            console.error("Upload error:", error.response?.data || error.message);
        }
    };
    

    return (
        <>
            {loading? (
                <Loading />
            ) : (
                <div>
                    <div className="flex h-screen bg-gray-100 text-black">
                        {/* Sidebar */}
                        <SideBar name={fullName} profilePic={profilePicUrl} />
                        

                        {/* Main Content */}
                        <div className='ml-[22%] flex-1 overflow-y-auto p-6 flex flex-col h-full'>
                            <main className="grid grid-cols-3 my-auto">
                                {/* Personal Information Form */}
                                <section className='col-span-1 flex flex-col my-auto text-center'>
                                    <h2 className="text-4xl font-bold text-gray-800">Personal Information</h2>
                                    <p className="text-gray-400 text-lg">Use a permanent address where you can receive mail.</p>
                                </section>

                                <section className='col-span-2 flex flex-col my-auto text-2xl '>
                                    <div className="mx-auto w-[80%]">
                                        {/* Profile Picture Upload */}
                                        <div className="flex items-center flex-row">
                                            {/* Display the profile picture or a default icon if not available */}
                                            {profilePic !== "https://e-learning-platform-ioqt.onrender.comnull"? 
                                                <img src={profilePicUrl} alt="Avatar"
                                                className="w-24 h-24 rounded-full mb-4"/> 
                                                :
                                                <CgProfile className="w-20 h-20 text-gray-800"/>
                                            }                                            
                                            <div className='ml-6 text-lg'>
                                                <input type="file" accept="image/*" onChange={handleProfilePicChange} /> <br/>
                                                <button className="mt-2 text-white  bg-rose-600 rounded-md px-6 py-2 w-fit hover:bg-rose-800 transition-all duration-200" onClick={handleUploadProfilePic}>Upload</button>
                                                {/*<p className="text-sm text-gray-500 mt-2">JPG, GIF, or PNG. 1MB max.</p>*/ }
                                            </div>
                                        </div>

                                        {/* Form */}
                                        <form className="flex-1 space-y-4" >
                                            <div>
                                                <label className="block text-gray-500 mb-1">Full name</label>
                                                <input placeholder={fullName} 
                                                type="text" onChange={(e) => setNewFullName(e.target.value)}
                                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded px-3 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-500 mb-1">Email address</label>
                                                <input placeholder={email}
                                                type="email"  onChange={(e) => setNewEmail(e.target.value)}
                                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded px-3 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-500 mb-1">Current password</label>
                                                <input type="password" disabled
                                                placeholder={password}
                                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded px-3 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-500 mb-1">New password</label>
                                                <input type="password" 
                                                placeholder='Enter your new password'
                                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded px-3 py-2"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                            </div>
                                            <button
                                                onClick={handleUpdateInfo}
                                                className="text-white bg-rose-600 rounded-md px-6 py-2 w-fit text-lg hover:bg-rose-800 transition-all duration-200"
                                            >
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>




                    <div className="flex h-screen bg-gray-100 text-black justify-center items-center">
                        <div className='ml-[22%] flex-1 w-full max-w-screen-xl mx-auto p-6'>
                                        
                            {/* Main Content */}
                            <main className=" grid grid-cols-3 ">

                                {/* Personal Information Form */}
                                <section className='col-span-1 flex flex-col my-auto text-center '>
                                    <h2 className="text-4xl font-bold text-gray-800">Delete account</h2>
                                    <p className="text-gray-400 text-lg"> No longer want to use our service? You can delete your account here.  All information related to this account will be deleted permanently.</p>
                                </section>

                                <section className='col-span-2 flex flex-col my-auto'>
                                    <div className=" mx-auto  w-[80%]">

                                        {/* Form */}
                                        <form className="flex-1 space-y-4 text-2xl" onSubmit={(e) => e.preventDefault()}>
                                            <button
                                                onClick={handleDeleteAccount}
                                                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-800"
                                            >
                                                Yes, delete my account
                                            </button>
                                        </form>
                                    </div>
                                </section>
                            </main>
                        </div>             
                    </div>
                </div>
            )}            
        </>
    );
}



export default SettingsPage