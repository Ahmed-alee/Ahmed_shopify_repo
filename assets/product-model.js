class ProductModel extends HTMLElement { 
    constructor() {
        super();
        this.openModelModal();
    }

    openModelModal() {
        console.log("the modal is working");
    } 
}

const productModel = customElements.define('product-model', ProductModel);