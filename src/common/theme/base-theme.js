import { keyframes } from "@emotion/core";

const skeletonAnimation = keyframes`
    0% {
    background-position:-200px 0;
  }
  100% {
    background-position:calc(200px + 100%) 0;
  }
`;

const BaseTheme = {
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  space: [0, 4, 8, 16, 24, 32, 64, 128],
  radii: [0, 2, 4, 16, 9999, "100%"],
  colors: {
    main: "#ffc544",
    darkenMain15: "#ffb513",
    sec: "#8AC02C",
    white: "#fff",
    gray: "#6c6e72",
    darkGray: "#686768",
    lightGray: "#f6f9fa",
    black: "#333",
    lightBlue: "#93B5C6",
    blue: "#30BCED",
    pink: "#AB4E68",
    green: "#59CD90",
    Bittersweet: "#FE6D73",
    success: "#28a745",
    error: "#dc3545",
    facebook: "#3b5999",
    linkedin: "#0077B5"
  },
  shadows: {
    Modal: "2px 3px 3px #eee"
  },
  variants: {
    mainBlock: {
      background: "linear-gradient(to right, #f7ac06, #ffc544)",
      color: "white"
    },
    whiteBlock: {
      bg: "white",
      color: "black"
    },
    grayBlock: {
      bg: "lightGray",
      color: "black"
    },
    success: {
      color: "success"
    },
    error: {
      color: "error"
    },
    default: {
      color: "black",
      fontSize: [6]
    },
    darkPageHeader: {
      color: "black"
    },
    darkFormField: {
      bg: "lightGray",
      color: "black"
    },
    whiteForm: {
      bg: "white",
      padding: [4],
      boxShadow: "2px 3px 3px #eee"
    },
    primaryButton: {
      height: 40,
      bg: "main",
      color: "white",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "main",
      ":hover, :active": {
        bg: "darkenMain15",
        borderColor: "darkenMain15"
      }
    },
    primaryOutlineButton: {
      height: 40,
      bg: "transparent",
      color: "main",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "main",
      ":hover, :active": {
        bg: "main",
        color: "white",
        borderColor: "main"
      }
    },
    defaultOutlineButton: {
      height: 40,
      bg: "transparent",
      color: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "white",
      ":hover, :active": {
        bg: "white",
        color: "main"
      }
    },
    linkButton: {
      bg: "transparent",
      border: 0,
      height: "16px"
    },
    // Badges
    JobRoleBadge: {
      bg: "blue",
      color: "white"
    },
    jobIndustryBadge: {
      bg: "green",
      color: "white"
    },
    defaultBadge: {
      bg: "main",
      color: "white"
    },
    skeletonBox: {
      border: "1px dashed #ececec",
      borderRadius: 3
    },
    skeletonSquare: {
      animation: `${skeletonAnimation} 1.2s ease-in-out infinite`,
      bg: "#EBF0F3",
      backgroundImage: "linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)",
      backgroundSize: "200px 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: 1
    },
    skeletonCircle: {
      animation: `${skeletonAnimation} 1.2s ease-in-out infinite`,
      bg: "#EBF0F3",
      backgroundImage: "linear-gradient(90deg,#EBF0F3,#f5f5f5,#EBF0F3)",
      backgroundSize: "200px 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: "50%"
    },
    yellowOverlay: {
      bg: "-webkit-linear-gradient(to right,#f7ac06,#ffc544)"
    },
    opacityOverlay: {
      bg: "rgba(0, 0, 0, 0.4)"
    }
  }
};

export default BaseTheme;
