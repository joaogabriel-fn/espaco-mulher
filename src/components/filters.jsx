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

export { Filters };
