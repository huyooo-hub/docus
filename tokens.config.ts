import { defineTheme } from "pinceau";

export default defineTheme({
  huyooo: {
    color: {
      black: "#0B0A0A",
      // Primary is modified lightblue
      primary: {
        50: "#F1FCFF",
        100: "#DCF7FF",
        200: "#C5F2FF",
        300: "#82E3FF",
        400: "#55E1FF",
        500: "#1AD6FF",
        600: "#09A0C1",
        700: "#024757",
        800: "#00232B",
        900: "#001A1F",
      },
      gray: {
        50: "#FBFBFB",
        100: "#F6F5F4",
        200: "#ECEBE8",
        300: "#DBD9D3",
        400: "#ADA9A4",
        500: "#97948F",
        600: "#67635D",
        700: "#36332E",
        800: "#201E1B",
        900: "#121110",
      },
      red: {
        50: "#FFF9F8",
        100: "#FFF3F0",
        200: "#FFDED7",
        300: "#FFA692",
        400: "#FF7353",
        500: "#FF3B10",
        600: "#BB2402",
        700: "#701704",
        800: "#340A01",
        900: "#1C0301",
      },
      blue: {
        50: "#F2FAFF",
        100: "#DFF3FF",
        200: "#C6EAFF",
        300: "#A1DDFF",
        400: "#64C7FF",
        500: "#1AADFF",
        600: "#0069A6",
        700: "#014267",
        800: "#002235",
        900: "#00131D",
      },
      green: {
        50: "#ECFFF7",
        100: "#DEFFF1",
        200: "#C3FFE6",
        300: "#86FBCB",
        400: "#3CEEA5",
        500: "#0DD885",
        600: "#00B467",
        700: "#006037",
        800: "#002817",
        900: "#00190F",
      },
      yellow: {
        50: "#FFFCEE",
        100: "#FFF6D3",
        200: "#FFF0B1",
        300: "#FFE372",
        400: "#FFDC4E",
        500: "#FBCA05",
        600: "#CBA408",
        700: "#614E02",
        800: "#292100",
        900: "#1B1500",
      },
      shadow: {
        initial: "{huyooo.color.gray.400}",
        dark: "{huyooo.color.gray.800}",
      },
    },
    shadow: {
      xs: "0px 1px 2px 0px {huyooo.color.shadow}",
      sm: "0px 1px 3px 0px {huyooo.color.shadow}, 0px 1px 2px -1px {huyooo.color.shadow}",
      md: "0px 4px 6px -1px {huyooo.color.shadow}, 0px 2px 4px -2px {huyooo.color.shadow}",
      lg: "0px 10px 15px -3px {huyooo.color.shadow}, 0px 4px 6px -4px {huyooo.color.shadow}",
      xl: "0px 20px 25px -5px {huyooo.color.shadow}, 0px 8px 10px -6px {huyooo.color.shadow}",
      "2xl": "0px 25px 50px -12px {huyooo.color.shadow}",
      none: "0px 0px 0px 0px transparent",
    },
  },
  docus: {
    $schema: {
      title: "All the configurable tokens from Docus.",
      tags: ["@studioIcon material-symbols:docs"],
    },
    body: {
      backgroundColor: {
        initial: "{huyooo.color.white}",
        dark: "{huyooo.color.black}",
      },
      color: {
        initial: "{huyooo.color.gray.800}",
        dark: "{huyooo.color.gray.200}",
      },
      fontFamily: "{huyooo.font.sans}",
    },
    header: {
      height: "64px",
      logo: {
        height: {
          initial: "{huyooo.space.6}",
          sm: "{huyooo.space.7}",
        },
      },
      title: {
        fontSize: "{huyooo.fontSize.2xl}",
        fontWeight: "{huyooo.fontWeight.bold}",
        color: {
          static: {
            initial: "{huyooo.color.gray.900}",
            dark: "{huyooo.color.gray.100}",
          },
          hover: "{huyooo.color.primary.500}",
        },
      },
    },
    footer: {
      height: { initial: "145px", sm: "100px" },
      padding: "{huyooo.space.4} 0",
    },
    readableLine: "78ch",
    loadingBar: {
      height: "3px",
      gradientColorStop1: "#00dc82",
      gradientColorStop2: "#34cdfe",
      gradientColorStop3: "#0047e1",
    },
    search: {
      backdropFilter: "blur(24px)",
      input: {
        borderRadius: "{huyooo.radii2xs}",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: {
          initial: "{huyooo.color.gray.200}",
          dark: "transparent",
        },
        fontSize: "{huyooo.fontSize.sm}",
        gap: "{huyooo.space.2}",
        padding: "{huyooo.space.2} {huyooo.space.4}",
        backgroundColor: {
          initial: "{huyooo.color.gray.200}",
          dark: "{huyooo.color.gray.800}",
        },
      },
      results: {
        window: {
          marginX: {
            initial: "0",
            sm: "{huyooo.space.4}",
          },
          borderRadius: {
            initial: "none",
            sm: "{huyooo.radiixs}",
          },
          marginTop: {
            initial: "0",
            sm: "20vh",
          },
          maxWidth: "640px",
          maxHeight: {
            initial: "100%",
            sm: "320px",
          },
        },
        selected: {
          backgroundColor: {
            initial: "{huyooo.color.gray.300}",
            dark: "{huyooo.color.gray.700}",
          },
        },
        highlight: {
          color: "white",
          backgroundColor: "{huyooo.color.primary.500}",
        },
      },
    },
  },
  typography: {
    color: {
      primary: {
        50: "{huyooo.color.primary.50}",
        100: "{huyooo.color.primary.100}",
        200: "{huyooo.color.primary.200}",
        300: "{huyooo.color.primary.300}",
        400: "{huyooo.color.primary.400}",
        500: "{huyooo.color.primary.500}",
        600: "{huyooo.color.primary.600}",
        700: "{huyooo.color.primary.700}",
        800: "{huyooo.color.primary.800}",
        900: "{huyooo.color.primary.900}",
      },
      secondary: {
        50: "{huyooo.color.gray.50}",
        100: "{huyooo.color.gray.100}",
        200: "{huyooo.color.gray.200}",
        300: "{huyooo.color.gray.300}",
        400: "{huyooo.color.gray.400}",
        500: "{huyooo.color.gray.500}",
        600: "{huyooo.color.gray.600}",
        700: "{huyooo.color.gray.700}",
        800: "{huyooo.color.gray.800}",
        900: "{huyooo.color.gray.900}",
      },
    },
  },
});
