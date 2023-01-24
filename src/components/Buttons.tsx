export default function Buttons(props: ButtonsProps) {
  return (
    <>
      <div className={`text-white text-center font-medium font-['Poppins']`}>
        <div
          className={`h-12 absolute transition-all ${
            props.type === "BLUE_TYPE"
              ? "w-[345px] top-[389px] right-[14.91px]"
              : ""
          } ${
            props.type === "GREEN_TYPE"
              ? "w-[345px] top-[453px] right-[14.91px]"
              : ""
          } ${
            props.type === "GREEN_TYPE1"
              ? "w-[313px] top-[5711px] right-[31px]"
              : ""
          } ${
            props.type === "BLUE_TYPE1"
              ? "w-[313px] top-[6097px] right-[31px]"
              : ""
          }`}
        >
          <div
            className={`inset-0 absolute rounded transition-all ${
              props.type === "BLUE_TYPE" ? "bg-[rgba(0,158,247,1)]" : ""
            } ${props.type === "BLUE_TYPE1" ? "bg-[rgba(0,158,247,1)]" : ""} ${
              props.type === "GREEN_TYPE" ? "bg-[rgba(71,190,125,1)]" : ""
            } ${props.type === "GREEN_TYPE1" ? "bg-[rgba(71,190,125,1)]" : ""}`}
           />
          <p
            className={`inset-x-2 h-6 absolute text-sm inline m-0 top-[calc(50%_-_12px_+_0px)] leading-[normal] transition-all ${
              props.type === "BLUE_TYPE" ? "w-[329px]" : ""
            } ${props.type === "GREEN_TYPE" ? "w-[329px]" : ""} ${
              props.type === "GREEN_TYPE1" ? "w-[297px]" : ""
            } ${props.type === "BLUE_TYPE1" ? "w-[297px]" : ""}`}
          >
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}

Buttons.defaultProps = {
  type: "BLUE_TYPE",
  text: "I’m a Notary",
};

interface ButtonsProps {
  type: "BLUE_TYPE" | "GREEN_TYPE" | "GREEN_TYPE1" | "BLUE_TYPE1";
  text: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
