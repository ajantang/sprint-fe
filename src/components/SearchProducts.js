import "../assets/styles/SearchProducts.css";

export function SearchProducts({
  onChange,
  onSubmit,
  inputClassName,
  imgClassName,
  children,
}) {
  const inputChange = (e) => onChange(e);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="flex-row search-frame" onSubmit={submit}>
      <input
        onChange={inputChange}
        className={inputClassName}
        placeholder={children}
      ></input>
      <img className={imgClassName} />
    </form>
  );
}

export default SearchProducts;
