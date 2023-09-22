import Cards from "./Cards";

function Specials() {
    return ( 
        <article className="specials">
            <h1 className='subtitle'>This weeks specials!</h1>

            <div className='cards'>
            <Cards />
            </div>
        </article>
     );
}

export default Specials;