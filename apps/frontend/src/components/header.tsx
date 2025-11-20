import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Note Convention", path: "/note-convention" },
    { name: "Try Me", path: "/try-me" },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4">Logo</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => {
          return (
            <Link
              color="inherit"
              component="button"
              onClick={() => {
                navigation(item.path);
              }}
            >
              {item.name}
            </Link>
          );
        })}
        <IconButton aria-label="Menu">
          <AppsIcon />
        </IconButton>
      </Box>
    </Container>
  );
}
