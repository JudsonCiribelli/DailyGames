export const GetData = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    );
    return response.json();
  } catch (err) {
    console.log(err);
    throw new Error("failed to loading game!");
  }
};
