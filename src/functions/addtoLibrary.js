const AddtoLibrary = async (id) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const queryParams = new URLSearchParams();
    queryParams.append("book_id", id);
    const response = await fetch(
      `${apiUrl}/api/user/addToLibrary?${queryParams.toString()}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error(`response was not ok. Status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default AddtoLibrary;
