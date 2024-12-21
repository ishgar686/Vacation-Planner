import navigationBar from "@/components/navigationBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}