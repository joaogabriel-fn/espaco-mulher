import { useState } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('newest');

  const handleSubmitForm = (newItem) => setItems((prev) => [...prev, newItem]);
  const handleChangeOrder = (e) => setOrderBy(e.target.value);
  const handleClickRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
  };
  const handleClickClearList = () => setItems([]);

  const handleClickCheck = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isKept: !item.isKept } : item,
      ),
    );
  };

  return {
    items,
    orderBy,
    handleSubmitForm,
    handleChangeOrder,
    handleClickRemove,
    handleClickClearList,
    handleClickCheck,
  };
};

export { useItems };
