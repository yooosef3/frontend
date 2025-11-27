import spinner from "../assets/images/loader/Blocks-1s-200px.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <img src={spinner} alt="loader" className="z-50" />
    </div>
  );
};

export default Loader;
