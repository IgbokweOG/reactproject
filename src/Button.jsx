import Style from "./button.module.css"
function Button(props) {
  return (

    <button className= "bg-[orangered] text-white px-3 py-1 rounded-md shadow-lg">
      
      {props.ButtonText}

    </button>
      

  
  );
}

export default Button;
