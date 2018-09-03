/**
 * 商品在庫状況
 */

enum ItemAvailability {
    Discontinued = 'Discontinued',
    InStock = 'InStock',
    InStoreOnly = 'InStoreOnly',
    LimitedAvailability = 'LimitedAvailability',
    OnlineOnly = 'OnlineOnly',
    OutOfStock = 'OutOfStock',
    PreOrder = 'PreOrder',
    PreSale = 'PreSale',
    SoldOut = 'SoldOut'
}

export default ItemAvailability;
