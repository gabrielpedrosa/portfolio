import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContent from './pagecontent.js'


function Home(){
    return(
        <>
            <PageContent>
                <Navbar/>
                <Footer/>
            </PageContent>
        </>
    )
}

export default Home;