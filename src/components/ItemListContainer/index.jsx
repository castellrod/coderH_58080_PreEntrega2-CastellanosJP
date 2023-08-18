import "./styles.css";
import avion from "../../assets/icons/moveDrony.gif";
import {useState, useEffect} from 'react';
import Button from "../Button";
/*import { products } from "../../mocks/data";*/
import Items from "../Items";
import { getProducts } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx'

const ItemListContainer = ({ saludoscompa }) => {

    const[products, setProducts]= useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

   

    


    /*const [chocales, setChocales] = useState(saludoscompa)

    useEffect(() => {
        console.log("Hola munndo desde el useEffect");
    }, [chocales]);


   function cambioSaludo(){
        setChocales(<p className="newCho">" SALUDOS TERRICOLA!! " <img src={avion} alt="drony" className="drony-icon"/></p> )
    }

    return(
        <div className="item-l-c">
            <div>{chocales}</div>
            <Button onClick={cambioSaludo}>
                Texto de prueba
            </Button>
        </div>
    );*/

    /*const [productos, setProductos] = useState([]);

  useEffect(() => {
        const result = new Promise((resolve) =>
            setTimeout(() => resolve(products), 2000)
        );

        result
        .then((data) => setProductos(data))
        .catch((error) => console.log(error));
    }, []);*/

     /*   <Items productos={productos} /> */
  return (
        <div className="item-list-container">
            <h1>{saludoscompa}</h1>
     
        <ItemList products={products}/>
        </div>
  );    

}

export default ItemListContainer;