import { useState } from 'react';

const Logo = () => (
  <header>
    <img src="logo-espaco-mulher.png" alt="Logo Espaço Mulher" />
    <h1>Espaço Mulher</h1>
  </header>
);

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

const ListOfItems = ({ items, orderBy, onClickCheck, onClickRemove }) => {
  const sortedItems =
    orderBy === 'isKept'
      ? items.filter((item) => item.isKept)
      : orderBy === 'alphabetically'
      ? items.toSorted((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
        )
      : items;

  return (
    <div className="items-list">
      <ul className="items-container">
        {sortedItems.map((item) => (
          <li className="item-wrapper" key={item.id}>
            <input
              type="checkbox"
              checked={item.isKept}
              onChange={() => onClickCheck(item.id)}
            />
            <p>{item.quantity}</p>
            <p className={item.isKept ? 'kept' : ''}>{item.name}</p>
            <i
              onClick={() => onClickRemove(item.id)}
              className="far fa-trash-alt delete"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Filters = ({ orderBy, onChangeOrder, onClickClearList }) => (
  <div className="filter">
    <select value={orderBy} onChange={onChangeOrder} name="filter-type">
      <option value="newest">Ordenar por mais recente</option>
      <option value="isKept">Mostrar apenas guardados</option>
      <option value="alphabetically">Ordem alfabética</option>
    </select>
    <button onClick={onClickClearList}>Limpar lista</button>
  </div>
);

const Stats = ({ items }) => {
  const storedItems = items.reduce(
    (acc, item) => (item.isKept ? acc + 1 : acc),
    0,
  );
  const storedPercentage =
    items.length === 0 ? 0 : ((storedItems / items.length) * 100).toFixed(0);
  const singularPlural = items.length === 1 ? 'item' : 'itens';

  return (
    <footer>
      <p>
        {`Você tem ${items.length} ${singularPlural} na lista `}
        {items.length > 0 && (
          <span>
            e já guardou {storedItems} ({storedPercentage}%)
          </span>
        )}
      </p>
    </footer>
  );
};

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

const App = () => {
  const state = useItems();

  return (
    <>
      <Logo />

      <FormAddItem onSubmitItem={state.handleSubmitForm} />

      <ListOfItems
        items={state.items}
        orderBy={state.orderBy}
        onClickCheck={state.handleClickCheck}
        onClickRemove={state.handleClickRemove}
      />

      <Filters
        orderBy={state.orderBy}
        onChangeOrder={state.handleChangeOrder}
        onClickClearList={state.handleClickClearList}
      />

      <Stats items={state.items} />
    </>
  );
};

export { App };
