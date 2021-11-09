import Head from 'next/head';
import GlobalStyle from '../css/styles.js';


function PageContent(props){
    return(
        <>
            <Head>
                <title>Home - Gabriel Pedrosa</title>
                <meta name='description' content='WebSite Portfolio'/>
                <meta name='author' content='Gabriel Pedrosa'/>
            </Head>
            <GlobalStyle/>
            {props.children}
        </>
    )
}

export default PageContent;