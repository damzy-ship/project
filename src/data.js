import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";

export const ACCOUNT_DATA = [{
    id: 1,
    title: "My Accounts",
    icon: < PersonOutlineOutlinedIcon style = {
      {
        height: 30,
        width: 28
      }
    }
    />,
    location: "/user1/account",
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
    location: "/userid/saved",
  },
  {
    id: 3,
    title: "Sell @ Bhu Store",
    icon: < SellOutlinedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/",
  },
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
    location: "/",
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
    location: "/",
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
    location: "/",
  },
  {
    id: 4,
    title: "Food",
    icon: < FastfoodOutlinedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/",
  },
  {
    id: 5,
    title: "Gadgets",
    icon: < DevicesOtherOutlinedIcon style = {
      {
        fontSize: 24,
        width: 28
      }
    }
    />,
    location: "/",
  }
];

export const USER_DATA = [{
    id: 1,
    dataTitle: "user name",
    userValue: "Aguda Damilola",
  },
  {
    id: 2,
    dataTitle: "email address",
    userValue: "agudadamilola28@gmail.com",
  },
  {
    id: 3,
    dataTitle: "phone number",
    userValue: "09082753819",
  },
  {
    id: 4,
    dataTitle: "password",
    userValue: "**********",
  },
]