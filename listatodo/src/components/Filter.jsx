import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = () => {
  return (
    <div className = "filter mb-4 pb-4 border-bottom">
        <h2> Filtrar: </h2>
        <div className = "filter-options">
            <div>
                <p className= "mb-1"> Status: </p>
                <select>
                    <option value = "All"> Todas</option>
                    <option value = "Completed"> Completas</option>
                    <option value = "Incompleted"> Incompletas</option>
                </select>
            </div>

            <br/>
            
            <div> 
                <p className= "mb-1"> Ordem Alfabética: </p>
                <button> Asc </button>
                <button> Desc </button>
            </div>
        </div>
    </div>
  )
}

export default Filter