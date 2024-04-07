import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const product = useParams();
  return (
    <>
      <p>Product Details</p>
      <p>{product.productId}</p>
    </>
  );
};

export default ProductDetailsPage;
