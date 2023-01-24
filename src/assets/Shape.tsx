export default function Shape(props: ShapeProps) {
  return (
    <div>
      <div className="h-4 absolute w-[13px] top-[1292.66px] right-[180.91px]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 0.095 2.663 C 0.095 1.081 1.845 0.125 3.176 0.981 L 11.478 6.318 C 12.702 7.105 12.702 8.895 11.478 9.682 L 3.176 15.019 C 1.845 15.875 0.095 14.919 0.095 13.337 V 2.663 Z"
            fill="white"
           />
        </svg>
      </div>
    </div>
  );
}

Shape.defaultProps = {};

interface ShapeProps {}

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
