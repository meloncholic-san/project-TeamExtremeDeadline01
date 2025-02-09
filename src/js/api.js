// GET
export async function getData() {
  try {
      const response = await fetch(`https://portfolio-js.b.goit.study/api/reviews`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
  }
}
