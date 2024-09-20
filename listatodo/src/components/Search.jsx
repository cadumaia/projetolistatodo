import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({search, setSearch}) => {
  return (
    <div className ="border-bottom search mb-4">

        <h3> Pesquisar: </h3>
        <input className = "w-100 rounded mb-4"
        value = {search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder = "Digite para Pesquisar..."
        />

    </div>
  );
};

export default Search 