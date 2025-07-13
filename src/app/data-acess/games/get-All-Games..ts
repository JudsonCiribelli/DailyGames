export const GetAllGames = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games`
    );
    return response.json();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};
