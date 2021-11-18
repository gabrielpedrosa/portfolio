import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContent from './pagecontent.js';
import Dashboard from '../components/dashboard';
import Section from '../components/Section';


function Home(){
    return(
        <>
            <PageContent>
                <Navbar/>
                <Section/>
                <Footer/>
            </PageContent>
        </>
    )
}

export default Home;