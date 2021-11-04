import Link from 'next/link'
function Home(){
    return(
        <div>
            Hello World
            <Link href="/home">
                <a>Home</a>
            </Link>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        
        </div>
    )
}

export default Home;