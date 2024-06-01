import React, { useEffect, useMemo } from "react";
import {
  useGetAllUsersQuery,
  useGetUsersByIdQuery,
  useDeleteUsersMutation,
} from "../app/service/dummyData";
const Movies = () => {
  const [dataID, setDataID] = React.useState(null);
  const [show, setShow] = React.useState(null);
  const {data, isLoading, isError} = useGetAllUsersQuery()
  useEffect(()=>{
    setShow(data?.users)
  },[data])
  const { data: singleData } = useGetUsersByIdQuery(dataID);
  let [deleteUsers, { data: deletedData }] = useDeleteUsersMutation();
  const handleExpand = (e) => {
    const id = e.target.id;
    setDataID(id);
  };
  const handleDelete = async (e) => {
    const id = e.target.id;
    await deleteUsers(id);
    setShow(show.filter(user => user.id != id))
    const userDeleted = show.filter((user) => user.id == id);
    alert(`User ${userDeleted[0].firstName} ${userDeleted[0].lastName} will be deleted`);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <div className="flex flex-row justify-around items-top">
        <div>
          {show &&
            show.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-2 items-center m-3"
              >
                <h2>
                  {item.firstName} {item.lastName}
                </h2>
                <button
                  id={item.id}
                  onClick={handleExpand}
                  className="bg-black text-white rounded-lg p-1"
                >
                  Expand
                </button>
                <button
                  id={item.id}
                  onClick={handleDelete}
                  className="bg-black text-white rounded-lg p-1"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div>
          {singleData && (
            <>
              <h1 className="font-bold">
                Name: {singleData.firstName} {singleData.lastName}
              </h1>
              <h2>Username: {singleData.username}</h2>
              <h2>Age: {singleData.age}</h2>
              <h2>
                Address: {singleData.address.address}, {singleData.address.city}
              </h2>
              <h2>Email: {singleData.email}</h2>
              <h2>Phone: {singleData.phone}</h2>
              <h2>Company: {singleData.company.name}</h2>
              <h2>Gender: {singleData.gender}</h2>
              <h2>University: {singleData.university}</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
