import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({id, nombre, precio, image}) => {
   
    return (
        <article
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-slate-50 rounded overflow-hidden shadow-lg hover:shadow-gray-500 flex flex-col items-center mx-auto">
            <header>
                <h2 className="font-bold text-slate-700 text-base my-2">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={image} loading="lazy" className="w-40" alt={nombre}/>
            </picture>
            <section>
                <p className="font-bold text-slate-700 text-base my-4">
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                <div className="mb-6">
                    <Link
                        to={`/item/${id}`}
                        className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded mb-4">Ver detalle</Link>
                </div>
            </footer>
        </article>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    image: PropTypes.string
};

export default Item;