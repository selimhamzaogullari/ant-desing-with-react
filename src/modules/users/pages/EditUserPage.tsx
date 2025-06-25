import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import NewEditUser from "../components/NewEditUser";
import { fetchUserById } from "../store/userSlice";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, activeUser } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);

  if (error) return <Error />;
  else if (loading) return <Loading />;
  else if (activeUser) return <NewEditUser type="edit" user={activeUser} />;
  else return false;
};

export default EditUser;
