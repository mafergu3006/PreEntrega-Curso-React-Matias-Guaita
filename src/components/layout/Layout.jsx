import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      
      <main style={{ minHeight: "70vh", padding: "20px" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;