import { useEffect, useState } from "react";

const usePublish = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const publish = async (FormData) => {
    setIsLoading(true);
    setError(null);

    console.log("publish request made", FormData);
    const response = await fetch(`${apiUrl}/api/book/addBook`, {
      method: "POST",
      body: FormData,
      credentials: "include",
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // update loading state
      console.log("publish request successful");
      setIsLoading(false);
    }
  };

  return { publish, isLoading, error };
};

export default usePublish;
