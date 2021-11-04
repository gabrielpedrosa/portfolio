import Link from 'next/link'
function Sobre(){
    return(
        <div>
            Hello World 2
            <Link href="/home">
                <a>Home</a>
            </Link>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
        
        </div>
    )
}

export default Sobre;