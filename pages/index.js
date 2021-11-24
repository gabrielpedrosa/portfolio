import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContent from './pagecontent.js';
import Dashboard from '../components/dashboard';
import Section from '../components/Section';
import data from '../public/test.js';

function Home(){
    return(
        <>
            <PageContent>
                <Navbar/>
                <Section values={data}/>
                <Footer/>
            </PageContent>
        </>
    )
}

export default Home;