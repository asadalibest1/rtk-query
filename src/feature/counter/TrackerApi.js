// A mock function to mimic making an async request for data

export async function fetchApi() {

      const response = await fetch('http://localhost:3001/');
      const data = await response.json();
      return data;

  // return new Promise((resolve) =>

  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
}