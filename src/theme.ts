import { extendTheme } from "@chakra-ui/react";

import "@noonnu/pretendard-regular";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: `Pretendard-Regular, Montserrat, Spoqa Han Sans Neo`,
    body: "Pretendard-Regular, Montserrat, Spoqa Han Sans Neo",
  },
});

export default theme;
