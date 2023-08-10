

const initialState = {
  produits: [
    {
      id: 1,
      title: "T-shirt",
      price: '500 DH',
      pic : '1-removebg-preview.png'
    },
    {
      id: 2,
      title: "T-shirt",
      price: '400 DH',
      pic : '2-removebg-preview.png'
    },
    {
      id: 3,
      title: "T-shirt",
      price: '600 DH',
      pic: '3-removebg-preview.png'
    },
    {
      id: 4,
      title: "T-shirt",
      price: '1000 DH',
      pic: '4-removebg-preview.png'
    },
  ]
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_PRODUCT":
            return {...state, produits:[...state.produits, action.payload]}
        case "UPDATE_PRODUCT":
            const produit = state.produits.find((p)=>p.id===parseInt(action.payload.id))
            if (produit) {
              produit.price = action.payload.price
              produit.pic = action.payload.pic
            }
            return state
        case "DELETE_PRODUCT":
            return {...state, produits:[...state.produits.filter((p)=>p.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer