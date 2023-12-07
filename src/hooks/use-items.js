import localforage from 'localforage';
import { useState, useEffect } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('newest');

  useEffect(() => {
    localforage
      .setItem('guardaCoisas', items)
      .catch((err) => alert(err.message));
  }, [items]);

  useEffect(() => {
    localforage
      .getItem('guardaCoisas')
      .then((value) => {
        if (value) {
          setItems(value);
        }
      })
      .catch((err) => alert(err.message));
  }, []);

  const handleSubmitForm = (newItem) => setItems((prev) => [...prev, newItem]);
  const handleChangeOrder = (e) => setOrderBy(e.target.value);
  const handleClickRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
  };
  const handleClickClearList = () => setItems([]);

  const handleClickCheck = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isKept: !item.isKept } : item
      )
    );
  };

  return {
    items,
    orderBy,
    handleSubmitForm,
    handleChangeOrder,
    handleClickRemove,
    handleClickClearList,
    handleClickCheck
  };
};

export { useItems };
