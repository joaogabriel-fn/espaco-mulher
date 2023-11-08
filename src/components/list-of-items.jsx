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

export { ListOfItems };
