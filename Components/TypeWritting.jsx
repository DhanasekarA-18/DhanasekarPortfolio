import Typewriter from "typewriter-effect";
export const TypeWritting=()=>{
    return(
    <Typewriter
    options={{
        strings: ['React Js', 'Next Js',"FrontEnd Developer"],
        autoStart: true,
        loop: true,
      }}
    /> 
    )
}