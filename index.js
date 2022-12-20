class ProductManager {
    products = [];
    product = Product;

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.getProducts().find((p) => p.code == product.code)) 
            return console.log(`Producto ${product.title} ya existente`)
        else
            product.id = this.getProducts().length + 1;
            this.products.push(product)

    }

    getProductsById(product) {
        if(this.getProducts().find((search) => search.id == product)){
            return console.log(this.getProducts().find((search) => search.id == product))
        } else{
            return console.log('Producto no encontrado')
        }
    }
}

class Product extends ProductManager {
    contructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const nuevoProducto = new ProductManager();

const product1 = {
    title: 'celular',
    description: 'Lorem Ipsum',
    price: 1000,
    thumbnail: 'thumbnail',
    code: 'abc123',
    stock: 10
}

const product2 = {
    title: 'computadora',
    description: 'Lorem Ipsum',
    price: 5000,
    thumbnail: 'thumbnail',
    code: 'abc124',
    stock: 10
}

const product3 = {
    title: 'tablet',
    description: 'Lorem Ipsum',
    price: 3000,
    thumbnail: 'thumbnail',
    code: 'abc125',
    stock: 10
}

const product3SameCode = {
    title: 'tablet',
    description: 'Lorem Ipsum',
    price: 3000,
    thumbnail: 'thumbnail',
    code: 'abc125',
    stock: 10
}

console.log(nuevoProducto.getProducts())

nuevoProducto.addProduct(product1);
nuevoProducto.addProduct(product2);
nuevoProducto.addProduct(product3);

console.log(nuevoProducto.getProducts())

nuevoProducto.addProduct(product3SameCode);

console.log(nuevoProducto.getProductsById(2))
console.log(nuevoProducto.getProductsById(4))
