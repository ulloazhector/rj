import React from 'react'

const ItemListContainer = () => {
    return (
        <div>
            <ul>
                <li style={{listStyle: `none`, margin: 16}}>
                    <div class="card" style={{width: 288}}>
                        <div class="card-body">
                            <h5 class="card-title">Producto #1</h5>
                            <p class="card-text">Precio</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </li>
                <li style={{listStyle: `none`, margin: 16}}>
                    <div class="card" style={{width: 288}}>
                        <div class="card-body">
                            <h5 class="card-title">Producto #2</h5>
                            <p class="card-text">Precio</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </li>
                <li style={{listStyle: `none`, margin: 16}}>
                    <div class="card" style={{width: 288}}>
                        <div class="card-body">
                            <h5 class="card-title">Producto #3</h5>
                            <p class="card-text">Precio</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
