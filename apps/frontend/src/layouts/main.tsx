import Stack from "@mui/material/Stack";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
