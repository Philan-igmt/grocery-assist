export interface GroceryItem {
    bookId: Date,
    groceryItems: [
        {
            id: string,
            image: string,
            name: string,
            item: number,
            priceEstimate: number,
            actualPrice: number,
            diffInPrice: number,
            storeId: number,
            quantity: number
        }
    ]
}


