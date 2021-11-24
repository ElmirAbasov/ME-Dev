

enum App {
    MainText= 'app-main-text' 
}

enum AddProductListScreen  {
    MainText= 'AddProductListScreen-main-text',
    Save= 'AddProductListScreen-save-button',
    Cancel= 'AddProductListScreen-Cancel-button'
}
enum ProductListScreen {
    MainText = 'ProductListsScreen-MainText',
    Name=  'ProductListsScreen-Name',
    Price=  'ProductListsScreen-Price',
    Type=  'ProductListsScreen-Type'
}
enum List {
    Integrated = "ProductItem-Integrated",
    Peripheral = "ProductItem-Peripheral",
    UnknownType = "ProductItem-UnknownType",

}

export const tokens = {
    screens: {
        app: App, 
        addProductListScreen: AddProductListScreen,
        productListScreen: ProductListScreen,
        list: List,
    }
}