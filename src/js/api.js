// GET


export function getData() {
    return fetch(`https://portfolio-js.b.goit.study/api/reviews`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }