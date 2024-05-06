
    document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items : [
                {id : 1, name: 'robusta brazil', img: '11.jpg', price: 20000 },
                {id : 2, name: 'robusta amerika', img: '2.jpg', price: 21000 },
                {id : 3, name: 'robusta inggris', img: '31.jpg', price: 22000 },
                {id : 4, name: 'robusta malaysia', img: '41.jpg', price: 23000 },
                {id : 5, name: 'robusta indonesia', img: '51.jpg', price: 24000 }

            ]
        }));
    });

