import Union3 from "assets/Union3";

export default function IconsRightArrow(props: IconsRightArrowProps) {
  return (
    <>
      <div
        className={`absolute transition-all ${
          props.type === "TYPE"
            ? "left-[55.2%] right-[40.53%] top-[56.41%] bottom-[43.38%]"
            : ""
        } ${
          props.type === "TYPE1"
            ? "left-[87.47%] right-[8.27%] top-[83.17%] bottom-[16.62%]"
            : ""
        }`}
      >
        <div className="inset-0 absolute" />
        {props.type === "TYPE" && <Union3 />}
        {props.type === "TYPE1" && <Union3 />}
      </div>
    </>
  );
}

IconsRightArrow.defaultProps = {
  type: "TYPE",
};

interface IconsRightArrowProps {
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
