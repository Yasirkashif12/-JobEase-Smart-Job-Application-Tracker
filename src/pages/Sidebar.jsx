// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Top Bar with Hamburger — only for small & medium screens */}
//       <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow z-30 md:hidden">
//         <h2 className="text-xl font-bold text-blue-700">Dashboard</h2>
//         <button onClick={() => setIsOpen(true)} aria-label="Open sidebar">
//           <Menu className="w-6 h-6 text-blue-700" />
//         </button>
//       </div>

//       {/* Dark Overlay for mobile/tablet when sidebar open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-20 lg:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-md p-6 space-y-4 z-30 transition-transform duration-200 ease-in-out
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
//       >
//         {/* Close Button on Mobile */}
//         <div className="flex justify-between items-center md:hidden lg:hidden mb-4 ">
//           <h1 className="text-2xl font-bold text-blue-700">My Panel</h1>
//           <button onClick={() => setIsOpen(false)} aria-label="Close sidebar">
//             <X className="w-6 h-6 text-blue-700" />
//           </button>
//         </div>

//         {/* Title for Desktop */}
//         <h1 className="hidden lg:block text-2xl font-bold text-blue-700 mb-4">My Panel</h1>

//         {/* Navigation Links */}
//         <nav className="flex flex-col gap-3">
//           <Link
//             to="/Myapplication"
//             className="px-4 py-2 rounded hover:bg-blue-100"
//             onClick={() => setIsOpen(false)}
//           >
//             📄 My Applications
//           </Link>
//           <Link
//             to="/EditProfile"
//             className="px-4 py-2 rounded hover:bg-blue-100"
//             onClick={() => setIsOpen(false)}
//           >
//             ✏️ Edit Profile
//           </Link>
//         </nav>
//       </div>

//       {/* Desktop Spacer so content isn't hidden behind sidebar */}
//       <div className="lg:pl-64" />
//     </>
//   );
// };

// export default Sidebar;
