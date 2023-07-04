const productos = [
    {nombre: "Tazas", precio: 2000, id: "1", img: "../img/tazas.jpg", idCat: "2"},
    {nombre: "Platos", precio: 2500, id: "2", img: "../img/platos.jpg", idCat: "2"},
    {nombre: "Macetas", precio: 1800, id: "3", img: "../img/macetas.jpg", idCat: "3"},
    {nombre: "Jarrones", precio: 3200, id: "4", img: "../img/jarrones.jpg", idCat: "3"},
]

export const getProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve (productos)
        }, 2)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve (producto)
        }, 2)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria)
        }, 2)
    })
}