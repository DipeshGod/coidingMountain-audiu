import { UserButton } from "@clerk/nextjs";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Typography variant="h2">Welcome To Auidu</Typography>
        <UserButton afterSignOutUrl="/" />
      </Container>
    </main>
  );
}
