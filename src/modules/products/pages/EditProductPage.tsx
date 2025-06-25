import { useParams } from "react-router-dom";
import NewEditProduct from "../components/NewEditProduct";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { fetchProductById } from "../store/productSlice";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, activeProduct } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  if (error) return <Error />;
  else if (loading) return <Loading />;
  else if (activeProduct) return <NewEditProduct type="edit" product={activeProduct} />;
  else return false;
};

export default EditProduct;
