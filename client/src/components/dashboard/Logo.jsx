import logo from "../../assets/app.png";

const Logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <img src={logo} alt="" className="h-10 w-10" />

      <p>Bajaj</p>
    </div>
  );
};

export default Logo;
