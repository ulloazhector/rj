import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {
    
    const products = [
        { id: 1, nombre: `IPA`, precio: `$100`, alcohol: `4.5%`, info: `Se trata de una cerveza que destaca sobre todo por su amargor, debido a esa carga adicional de lúpulo que ha llevado históricamente, y que no suele bajar de los 40 IBUs y que en algunos casos pueden superar los 100 IBUs.`},
        { id: 2, nombre: `APA`, precio: `$150`, alcohol: `5.1%`, info: `Son cervezas pálidas, de carbonatación media, moderadas en alcohol (4,5-6,2%) y equilibradas en sabor, aunque inclinadas hacia el amargor gracias a unos lúpulos que aportan intensos aromas de pino, cítricos y frutas tropicales.`},
        { id: 3, nombre: `Stout`, precio: `$200`, alcohol: `4.2%`, info: `Son cervezas amargas (aunque no demasiado, ya que oscilan entre 30 y 45 IBUs) y generalmente llevan toques a café y chocolate. Presentan poca o ninguna lupulización y suelen ser en general cervezas bastante secas.`},
    ]

    return (
        <div>
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer
