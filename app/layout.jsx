import { Header } from "../components/Header";

export const metadata = {
  title: "Next test prod",
  description: "Next test description"
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <body>
    <Header />
    {children}
    
    </body>
    </html>
  );
}