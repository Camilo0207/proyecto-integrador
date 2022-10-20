import { useEffect, useState } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getInfoAxios = async () => {
      try {
        const res = await axios.get(url);
        setDb(res.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      getInfoAxios();
    } else {
      setDb(null);
    }
  }, [url]);

  const createData = async (data) => {
    data.id = Date.now();
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        setDb([...db, res.data]);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`${url}/${id}`, id);
      if (res.status === 200) {
        let newData = db.filter((el) => el.id !== id);
        console.log(newData);
        setDb(newData);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const updateData = async (data) => {
    let endpoint = `${url}/${data.id}`;
    try {
      const result = await axios.put(endpoint, data);
      if (result.status === 200) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    db,
    createData,
    updateData,
    deleteData,
    error,
    loading,
  };
};
