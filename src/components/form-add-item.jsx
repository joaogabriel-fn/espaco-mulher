import { useState } from 'react';

const FormAddItem = ({ onSubmitItem }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('1');

  const handleChangeInput = (e) => setInputValue(e.target.value);
  const handleChangeSelect = (e) => setSelectValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitItem({
      id: crypto.randomUUID(),
      quantity: +selectValue,
      name: inputValue,
      isKept: false,
    });

    setInputValue('');
    setSelectValue('1');
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} className="add-form">
        <label>O que você precisa guardar?</label>
        <select value={selectValue} onChange={handleChangeSelect}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10+</option>
        </select>
        <input
          value={inputValue}
          onChange={handleChangeInput}
          autoComplete="off"
          placeholder="Manda aqui"
        />
        <button>Adicionar</button>
      </form>
    </section>
  );
};

export { FormAddItem };
