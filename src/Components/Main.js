import Specials from "./Specials";

function Main() {
    return ( 
        <main> 
            <div class="image-container">
                <img src="chefs.jpg" alt="chef"/>
                <div class="text-overlay">
                    <p class="main-header">Little Lemon</p>
                    <p class="chicago">Chicago</p>
                </div>
                
            </div> 
            <p className="intro-info">Welcome to our family-owned Mediterranean restaurant, where we take pride in preserving the rich culinary traditions of the Mediterranean while adding our own modern twist. Our establishment is not just a restaurant; it's a celebration of flavors, culture, and community.</p>
            <Specials />
        </main>
        
        
     );
}

export default Main;

