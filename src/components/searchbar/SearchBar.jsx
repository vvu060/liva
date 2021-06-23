import style from './SearchBar.module.scss';
const SearchBar = () =>{
    return(
        <div className={style.search}>
            <input type="text" className={`form-control ${style.search__form}`}/>
            <button type="button" aria-label="click for submit search" className={`btn btn-primary ${style.search__btn}`}>
                Search
            </button>
        </div>
    )
}

export default SearchBar