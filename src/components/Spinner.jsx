import "./Spinner.css"
const Spinner = () => {
  return (
    <>
      <div className="spinner-border spinner" style={{width:"130px",height:"130px"}} role="status">
        <span className="visually-hidden"></span>
      </div>
    </>
  );
};
export default Spinner;
