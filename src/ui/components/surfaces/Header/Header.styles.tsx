import { experimentalStyled as styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.85);
  height: 100px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToobar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToobar-root {
      display: flex;
      justify-content: center;
    }
  }
`;
export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 45px;
  }
`;
