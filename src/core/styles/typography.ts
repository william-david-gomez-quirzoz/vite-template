import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { FontName } from "core/enum";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
    allVariants: {
      fontFamily: FontName.RobotoRegular,
    },
    h1: {
      fontSize: '1.3rem',
      fontFamily: FontName.RobotoMedium,
      color: '#24A9E2',
    },
    h2: {
      fontSize: '1.1rem',
      fontFamily: FontName.RobotoMedium,
      color: '#24A9E2',
    },
    h3: {
      fontFamily: FontName.RobotoBold,
      color: '#686868',
      textTransform: 'uppercase',
      fontSize: '1rem',
    },
  }