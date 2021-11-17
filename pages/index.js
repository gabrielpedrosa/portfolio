import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContent from './pagecontent.js';
import Dashboard from '../components/dashboard';


function Home(){
    return(
        <>
            <PageContent>
                <Navbar/>
                <Dashboard/>
                <Footer/>
            </PageContent>
        </>
    )
}

export default Home;