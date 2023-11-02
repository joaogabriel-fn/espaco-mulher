const App = () => (
  <>
    <header>
      <img src="logo-espaco-mulher.png" alt="Logo Espaço Mulher" />
      <h1>Espaço Mulher</h1>
    </header>

    <section className="form-container">
      <form className="add-form">
        <label>O que você precisa guardar?</label>
        <select>
          <option value="1">1</option>
        </select>
        <input placeholder="Manda aqui" />
        <button>Adicionar</button>
      </form>
    </section>
  </>
);

export { App };
