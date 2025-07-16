export const GetGameByTitle = async (title: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );
    return response.json();
  } catch (err) {
    console.log(err);
    throw new Error("Can't find that game!");
  }
};
