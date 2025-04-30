import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";
const DropDown = ({ navItems, handleLogout,  setIsDropDownOpen }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const { currentUser } = useAuth()


    
  const dropdownRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropDownOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       setIsDropDownOpen(false);
//     };

//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         setIsDropDownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     window.addEventListener('scroll', handleScroll, true); // 'true' captures scroll from all ancestors
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       window.removeEventListener('scroll', handleScroll, true);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);
  return (
    <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
      <ul   className="py-2">
        {navItems.map((item) =>{
              if (
                item.name === "Checkout" &&
                (!currentUser || cartItems.length === 0)
              ) {
                return null;
              }
          return   (
            //show checkout option only if user is logged in and cart in not empty
            


          <li
           
            key={item.name}
            onClick={() => setIsDropDownOpen(false)}
          >
            <Link
              to={item.href}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {item.name}
            </Link>
          </li>
        )})}
        <li>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
