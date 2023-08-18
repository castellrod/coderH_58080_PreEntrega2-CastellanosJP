import "./styles.css"
import CartWidget from "./CartWidget";
import LogoWigdet from "./LogoWidget";

function Navbar (){
    return (<nav className="navbar">
        <LogoWigdet />

        <div>
            <button>Inicio</button>
            <button>Drones</button>
            <button>Repuestos</button>
            <button>Contactenos</button>
        </div>

        <CartWidget />

    </nav>);
}

export default Navbar;