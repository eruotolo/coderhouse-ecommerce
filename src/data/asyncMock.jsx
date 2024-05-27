export const products = [
    {
        id: 1,
        nombre: 'T-SHIRT UNIFORM TOMEO - ARENA',
        precio: 8500,
        categoria: 'Camisetas',
        stock: 50,
        descripcion: 'Camiseta de algodón 100% en varios colores.',
        img: 'https://f.fcdn.app/imgs/33024e/www.unicajeans.com.uy/uje/3083/webp/catalogo/69847ARENA1/2000-2000/t-shirt-uniform-tomeo-arena.jpg',
    },
    {
        id: 2,
        nombre: 'PANTALÓN UNIFORM ANDINO CARGO - AZUL',
        precio: 9500,
        categoria: 'Pantalones',
        stock: 30,
        descripcion: 'Pantalones vaqueros clásicos de corte recto.',
        img: 'https://f.fcdn.app/imgs/fc2e6c/www.unicajeans.com.uy/uje/2e5e/webp/catalogo/53659AZUL1/2000-2000/pantalon-uniform-andino-cargo-azul.jpg',
    },
    {
        id: 3,
        nombre: 'CAMPERA LEGACY 5491 - AZUL',
        precio: 10500,
        categoria: 'Chaquetas',
        stock: 10,
        descripcion: 'Chaqueta de algodon auténtico, ideal para un look casual.',
        img: 'https://f.fcdn.app/imgs/699b8c/www.unicajeans.com.uy/uje/8909/webp/catalogo/65588AZUL1/2000-2000/campera-legacy-5491-azul.jpg',
    },
    {
        id: 4,
        nombre: 'T-SHIRT UNIFORM CAIN - ARENA',
        precio: 11500,
        categoria: 'Camisetas',
        stock: 50,
        descripcion: 'Camiseta de algodón 100% en varios colores.',
        img: 'https://f.fcdn.app/imgs/ce1b8a/www.unicajeans.com.uy/uje/e111/webp/catalogo/69848ARENA1/2000-2000/t-shirt-uniform-cain-arena.jpg',
    },
    {
        id: 5,
        nombre: 'CAMPERA KRISTOBELGA 70298 - NEGRO',
        precio: 12500,
        categoria: 'Chaquetas',
        stock: 10,
        descripcion: 'Chaqueta de algodon auténtico, ideal para un look casual.',
        img: 'https://f.fcdn.app/imgs/cd922c/www.unicajeans.com.uy/uje/35d4/webp/catalogo/70298NEGRO1/2000-2000/campera-kristobelga-70298-negro.jpg',
    },
    {
        id: 6,
        nombre: 'CAMPERA KRISTOBELGA 5354 - MOST NEG',
        precio: 13500,
        categoria: 'Chaquetas',
        stock: 10,
        descripcion: 'Chaqueta de algodon auténtico, ideal para un look casual.',
        img: 'https://f.fcdn.app/imgs/28992e/www.unicajeans.com.uy/uje/71e9/webp/catalogo/70297MOSTNEG1/2000-2000/campera-kristobelga-5354-most-neg.jpg',
    },
    {
        id: 7,
        nombre: 'CCAMPERA LEGACY 5516 - AZUL',
        precio: 14500,
        categoria: 'Chaquetas',
        stock: 10,
        descripcion: 'Chaqueta de algodon auténtico, ideal para un look casual.',
        img: 'https://f.fcdn.app/imgs/9af2b1/www.unicajeans.com.uy/uje/f9f6/webp/catalogo/70151AZUL1/2000-2000/campera-legacy-5516-azul.jpg',
    },
    {
        id: 8,
        nombre: 'VAQUERO UNIFORM DORENZO - A52',
        precio: 15500,
        categoria: 'Pantalones',
        stock: 30,
        descripcion: 'Pantalones vaqueros clásicos de corte recto.',
        img: 'https://f.fcdn.app/imgs/720b12/www.unicajeans.com.uy/uje/5e57/webp/catalogo/70140A521/2000-2000/vaquero-uniform-dorenzo-a52.jpg',
    },
    {
        id: 9,
        nombre: 'VAQUERO UNIFORM TADRIANO - L604',
        precio: 16500,
        categoria: 'Pantalones',
        stock: 30,
        descripcion: 'Pantalones vaqueros clásicos de corte recto.',
        img: 'https://f.fcdn.app/imgs/2d141b/www.unicajeans.com.uy/uje/8917/webp/catalogo/70139L6041/2000-2000/vaquero-uniform-tadriano-l604.jpg',
    },
    {
        id: 10,
        nombre: 'VAQUERO UNIFORM PORTANDO - A49',
        precio: 17500,
        categoria: 'Pantalones',
        stock: 30,
        descripcion: 'Pantalones vaqueros clásicos de corte recto.',
        img: 'https://f.fcdn.app/imgs/0dc943/www.unicajeans.com.uy/uje/fb6b/webp/catalogo/70138A491/2000-2000/vaquero-uniform-portando-a49.jpg',
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
};
