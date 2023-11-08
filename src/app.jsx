import { useItems } from './hooks/use-items';
import { Logo } from './components/logo';
import { FormAddItem } from './components/form-add-item';
import { ListOfItems } from './components/list-of-items';
import { Filters } from './components/filters';
import { Stats } from './components/stats';

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
