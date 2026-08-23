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
    
    // Helper to partially mask the password
    const getMaskedPassword = (password) => {
        if (!password) return '';
        if (password.length <= 2) return '*'.repeat(password.length);
        return password[0] + '*'.repeat(password.length - 2) + password[password.length - 1];
    };

    return (
        <>
            {loading? (
                <Loading />
            ) : (
                <div className="flex h-screen bg-surface text-ink-900">
                    {/* Sidebar */}
                    <SideBar name={fullName} profilePic={profilePicUrl} />

                    {/* Main Content */}
                    <div className='ml-[22%] flex-1 overflow-y-auto p-10'>
                        <h1 className="text-4xl font-extrabold text-ink-900 mb-8">Settings</h1>

                        {/* Personal Information */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-ink-900">Personal Information</h2>
                                <p className="text-gray-400 text-sm mt-1">Use a permanent address where you can receive mail.</p>
                            </div>

                            {/* Profile Picture Upload */}
                            <div className="flex items-center flex-row mb-8">
                                {/* Display the profile picture or a default icon if not available */}
                                {profilePicUrl !== "https://e-learning-platform-ioqt.onrender.comnull"?
                                    <img src={profilePicUrl} alt="Avatar"
                                    className="w-20 h-20 rounded-full object-cover ring-2 ring-rose-100"/>
                                    :
                                    <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center">
                                        <CgProfile className="w-12 h-12 text-gray-400"/>
                                    </div>
                                }
                                <div className='ml-6 text-sm'>
                                    <input type="file" accept="image/*" onChange={handleProfilePicChange}
                                    className="block text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 file:cursor-pointer cursor-pointer"/>
                                    <button className="mt-3 text-white text-sm bg-rose-600 rounded-lg px-5 py-2 w-fit hover:bg-rose-700 transition-all duration-200 font-semibold" onClick={handleUploadProfilePic}>Upload</button>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">Full name</label>
                                    <input placeholder={fullName}
                                    type="text" onChange={(e) => setNewFullName(e.target.value)}
                                    className="w-full bg-white text-ink-900 placeholder:text-gray-400 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">Email address</label>
                                    <input placeholder={email}
                                    type="email"  onChange={(e) => setNewEmail(e.target.value)}
                                    className="w-full bg-white text-ink-900 placeholder:text-gray-400 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">Current password</label>
                                    <input type="password" disabled
                                    placeholder={getMaskedPassword(password)}
                                    className="w-full bg-gray-50 text-gray-400 border border-gray-200 rounded-lg px-3 py-2.5 cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">New password</label>
                                    <input type="password"
                                    placeholder='Enter your new password'
                                    className="w-full bg-white text-ink-900 placeholder:text-gray-400 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    onClick={handleUpdateInfo}
                                    className="text-white bg-rose-600 rounded-lg px-6 py-2.5 w-fit text-sm font-semibold hover:bg-rose-700 transition-all duration-200"
                                >
                                    Save changes
                                </button>
                            </form>
                        </section>

                        {/* Danger Zone */}
                        <section className="bg-red-50 rounded-2xl border border-red-200 p-8">
                            <h2 className="text-xl font-bold text-red-700">Delete account</h2>
                            <p className="text-red-500/80 text-sm mt-1 mb-5 max-w-lg">No longer want to use our service? You can delete your account here. All information related to this account will be deleted permanently.</p>
                            <button
                                onClick={handleDeleteAccount}
                                className="px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                            >
                                Yes, delete my account
                            </button>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}



export default SettingsPage