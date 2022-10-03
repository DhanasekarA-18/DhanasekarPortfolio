import Typewriter from "typewriter-effect";

export const WhyChooseMe = (props) => {
  return (
    <Typewriter
      options={{
        strings: [props.title],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
