import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ filter, setFilter, setSort} ) => {
  return (
    <div className = "filter mb-4 pb-4 border-bottom">
        <h2> Filtrar: </h2>
        <div className = "filter-options d-flex justify-content-between">
            <div>
                <p className = "mb-2"> Status: </p>
                <select value = {filter} onChange = {(e) => setFilter(e.target.value)}
                className = "rounded">
                    <option value = "All"> Todas</option>
                    <option value = "Completed"> Completas</option>
                    <option value = "Incompleted"> Incompletas</option>
                </select>
            </div>

            <br/>
            
            <div> 
                <p className= "mb-1"> Ordem Alfabética: </p>
                <button onClick = {() => setSort("Asc")}
                className = "rounded"> Asc </button>

                <button onClick = {() => setSort("Desc")}
                className = "rounded"> Desc </button>
            </div>
        </div>
    </div>
  )
}

export default Filter