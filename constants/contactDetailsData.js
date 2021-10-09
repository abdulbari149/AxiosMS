import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoMdLocate,
  IoIosCall,
  IoIosMail,
} from "react-icons/io";
export const contactDetails = [
  {
    id: 1,
    icon: <IoMdLocate />,
    title: "Address",
    text: "North Nazimabad, karachi",
    color: "white",
  },
  {
    id: 2,
    title: "Contact Number",
    text: "+92 333-333-333",
    color: "white",
    icon: <IoIosCall />,
  },
  {
    id: 3,
    color: "white",
    title: "Email",
    text: "axiosms@hotmail.com",

    icon: <IoIosMail />,
  },
];

export const socialMediaIcons = [
  {
    id: 1,
    color: "white",
    icon: <IoLogoFacebook />,
  },
  {
    id: 2,
    color: "white",
    icon: <IoLogoInstagram />,
  },
];
