import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  return <div>User Detail - {id}</div>;
};

export default UserDetail;
