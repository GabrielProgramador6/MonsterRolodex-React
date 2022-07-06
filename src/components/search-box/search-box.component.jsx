import './search-box.styles.css';

const SearchBox = ({className, type, placeholder, onSearchHandler}) => (
            <input
                className={`search-box ${className}`}
                type={type}
                placeholder={placeholder}
                onChange={onSearchHandler}
            />
    );

export default SearchBox;
