import Union from "assets/Union";

export default function IconsLeftArrow(props: IconsLeftArrowProps) {
  return (
    <>
      <div
        className={`absolute transition-all ${
          props.type === "TYPE"
            ? "left-[39.2%] right-[56.53%] top-[56.41%] bottom-[43.38%]"
            : ""
        } ${
          props.type === "TYPE1"
            ? "left-[71.47%] right-[24.27%] top-[83.15%] bottom-[16.64%]"
            : ""
        }`}
      >
        <div className="inset-0 absolute" />
        {props.type === "TYPE" && <Union />}
        {props.type === "TYPE1" && <Union />}
      </div>
    </>
  );
}

IconsLeftArrow.defaultProps = {
  type: "TYPE",
};

interface IconsLeftArrowProps {
  type: "TYPE" | "TYPE1";
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
