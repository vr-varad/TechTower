import client from "@/db";
const fetchData = async () => {
  const data = await client.user.findFirst();
  return {
    name: data?.username,
    id: data?.id,
  };
};

export default async function User() {
  const data = await fetchData();

  return (
    <>
      <div>
        <h1>{data.id}</h1>
        <h1>{data.name}</h1>
      </div>
    </>
  );
}
