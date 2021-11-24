enum App {
    MainText= 'app-main-text' 
}

enum AddProductListScreen  {
    MainText= 'AddProductListScreen-main-text',
    Save= 'AddProductListScreen-save-button',
    Cancel= 'AddProductListScreen-Cancel-button',
    PriceNotValid= "AddProductListScreen-PriceNotValid",
    PriceRangeNotValid="AddproductListScreen-PriceRangeNotValid",
    Integrated="AddproductListScreen-integrated",
    Peripheral="AddproductListScreen-Peripheral",
    UnknownType="AddproductListScreen-UknownType",
    Delete="AddproductListScreen-Delete",
    ProductType="AddproductListScreen-ProductType",
    Done="AddproductListScreen-Done",
}
enum ProductListScreen {
    MainText = 'ProductListsScreen-MainText',
    Name=  'ProductListsScreen-Name',
    Price=  'ProductListsScreen-Price',
    Type=  'ProductListsScreen-Type',
    SureDelete= "ProductListScreen-SureDelete",
    NoProducts= "ProductListScreen-NoProducts"
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