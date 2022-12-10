import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import LaptopIcon from '@mui/icons-material/Laptop';

const userdata = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = userdata && JSON.parse(userdata).currentUser;
const user = currentUser?.data?.user;

export const ACCOUNT_DATA = [{
    id: 1,
    title: "My Account",
    icon: < PersonOutlineOutlinedIcon style = {
      {
        height: 30,
        width: 28
      }
    }
    />,
    location: `/${user?._id}/account`,
  },
  {
    id: 2,
    title: "Saved Items",
    icon: < FavoriteBorderRoundedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: `/${user?._id}/saved`,
  }
];

export const CATEGORY_DATA = [{
    id: 1,
    title: "Shirts",
    icon: < PersonOutlineOutlinedIcon style = {
      {
        height: 30,
        width: 28
      }
    }
    />,
    location: "/category/shirts",
  },
  {
    id: 2,
    title: "Shoes",
    icon: < FavoriteBorderRoundedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/category/shoes",
  },
  {
    id: 3,
    title: "Bags",
    icon: < BusinessCenterOutlinedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/category/bags",
  },
  {
    id: 4,
    title: "Phones",
    icon: < PhoneIphoneIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/category/phones",
  },
  {
    id: 5,
    title: "Laptops",
    icon: <LaptopIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/category/laptops",
  }
];

export const USER_DATA = [{
    id: 1,
    dataTitle: "user name",
    userValue: user?.name,
  },
  {
    id: 2,
    dataTitle: "email address",
    userValue: user?.email,
  },
  {
    id: 3,
    dataTitle: "phone number",
    userValue: user?.number ? user.number : "- - - - - - - ",
  },
  {
    id: 4,
    dataTitle: "password",
    userValue: "**********",
  },
]