import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const socialIcons = [
    {
      name: "Facebook",
      icon: <Facebook />,
      path: "https://www.facebook.com/ybunhonggg/",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      path: "https://twitter.com/ybunhonggg",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      path: "https://www.instagram.com/ybunhongg_/",
    },
    {
      name: "Linkedin",
      icon: <LinkedIn />,
      path: "https://www.linkedin.com/in/ybunhonggg/",
    },
  ];

  return (
    <footer style={{ background: "black" }}>
      <Container sx={{ display: "flex", gap: "2rem", py: "3rem" }}>
        {/* Left Section */}
        <Box sx={{ width: "30%" }}>
          <Typography variant="h4" color="white">
            Logo
          </Typography>
          <Typography variant="subtitle1" color="#969696" sx={{ mt: "1rem" }}>
            Made With Care By ybunhong
          </Typography>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography variant="h6" fontWeight={600} color="white">
            This project was designed and built end-to-end by Hieii as part of a
            personal journey to grow as a full-stack developer. Every feature,
            design choice, and line of code reflects a commitment to clarity,
            usability, and continuous learning.
          </Typography>

          {/* Three Columns */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            {/* Column 1 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <Typography variant="subtitle1" color="#969696">
                Start conversation
              </Typography>

              <Typography variant="subtitle1" color="#969696">
                ybunhong12@gmail.com <br /> +855 14 820 296
              </Typography>

              <Typography variant="subtitle1" color="#969696">
                Term & Condition
              </Typography>
            </Box>

            {/* Column 2 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <Typography variant="subtitle1" color="#969696">
                Find us here:
              </Typography>

              <Typography variant="subtitle1" color="#969696">
                Mean Chey, Phnom Penh <br />
                Cambodia
              </Typography>

              <Typography variant="subtitle1" color="#969696">
                Privacy Policy
              </Typography>
            </Box>

            {/* Column 3 */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <Typography variant="subtitle1" color="#969696">
                Follow us on:
              </Typography>

              <Box>
                {socialIcons.map((item) => (
                  <IconButton
                    key={item.name}
                    component="a"
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#969696" }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>

              <Typography variant="subtitle1" color="#969696">
                © 2025. All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
