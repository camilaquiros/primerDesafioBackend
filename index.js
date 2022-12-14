class ProductManager {
    products;
    contructor(title, description, price, thumbnail, code, stock) {
        this.products = []
        this.products.title = title;
        this.products.description = description;
        this.products.price = price;
        this.products.thumbnail = thumbnail;
        this.products.code = code;
        this.products.stock = stock;
    }
    addProduct(product) {
        if(this.products.find(product.code === code)) {
            return console.log('Producto ya existente')
        }
        else{
            this.products.code++;
            return this.products.push(product)
        }
    }
    getproducts() {
        return this.products;
    }
    getproductsById(search) {
        return this.products.find(search === code)
    }
}

const nuevoProducto = new ProductManager();

const producto1 = {
    title: 'celular',
    description: 'Lorem Ipsum',
    price: 1000,
    thumbnail: 'thumbnail',
    code: 1,
    stock: 10
}

nuevoProducto.addProduct(producto1);

console.log(producto1.getproducts())