import { useState } from 'react';

const Item = ({ item }) => {
  const [isKept, setIsKept] = useState(false);
  console.log(isKept);

  const handleCheckbox = () => {
    setIsKept((i) => !i);
  };

  return (
    <li className="item-wrapper" key={item.id}>
      <input type="checkbox" value={isKept} onChange={handleCheckbox} />
      <p>{item.quantity}</p>
      <p className={isKept ? 'kept' : ''}>{item.name}</p>
      <i
        onClick={(e) => e.target.parentNode.remove()}
        className="far fa-trash-alt delete"
      ></i>
    </li>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { quantity, itemName } = e.target.elements;

    setItems((i) => [
      ...i,
      {
        quantity: quantity.value,
        name: itemName.value,
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <>
      <header>
        <img src="logo-espaco-mulher.png" alt="Logo Espaço Mulher" />
        <h1>Espaço Mulher</h1>
      </header>

      <section className="form-container">
        <form onSubmit={handleSubmit} className="add-form">
          <label>O que você precisa guardar?</label>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option>10+</option>
          </select>
          <input placeholder="Manda aqui" name="itemName" />
          <button>Adicionar</button>
        </form>
      </section>

      <section className="items-list">
        <ul className="items-container">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </section>

      <footer>
        <p>Você tem {items.length} itens na lista</p>
      </footer>
    </>
  );
};

export { App };
