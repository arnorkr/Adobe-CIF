class ProductData {
    constructor(rawData) {
        this.id = rawData.id;
        this.name = rawData.name.en;
        this.description = rawData.description.en;
        this.price = rawData.price.value;
    }

}

module.exports = ProductData;
