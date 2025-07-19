export const GetDailyGames = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};
