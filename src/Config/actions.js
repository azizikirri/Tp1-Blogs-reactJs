export const addProductAction =(produit) =>{
    return {type:"ADD_PRODUCT" ,payload:produit}
}
export const updateProductAction =(newproduit) =>{
    return {type:"UPDATE_PRODUCT" ,payload:newproduit}
}
export const deleteProductAction =(id) =>{
    return {type:"DELETE_PRODUCT" ,payload:id}
}