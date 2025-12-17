import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useCartStore } from "./store/cartStore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function App() {
  const items = useCartStore((state) => state.items);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            Shop Explorer
          </Typography>

          <Button color="inherit" component={Link} to="/cart">
            <IconButton>
              <ShoppingCartIcon fontSize="small" sx={{color: "#fff"}} />
              <CartBadge
                badgeContent={items.length}
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                }}
              />
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>

      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </>
  );
}
