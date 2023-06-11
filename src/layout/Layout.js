import Header from "../components/templet/Header";
import Footer from "../components/templet/footer";


const Layout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;