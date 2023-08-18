import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'

const ItemDetail = ({id, nombre, img, marca, descripcion, precio, stock}) => {

    return (
        <article className='CardItem'>

            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className="Info">
                    Marca: ${marca}
                </p>
                <p className='Info'>
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
            </footer>
        </article>

    )
}

export default ItemDetail;