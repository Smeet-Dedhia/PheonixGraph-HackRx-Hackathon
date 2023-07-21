const ProductDetails = (product) => {
  //   const { id, pic, title, price } = props.product;
  console.log(product);
  return (
    <div>
      <div>
        <img src={product.pic} alt="" />
        <h1>{product.title}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
