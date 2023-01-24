export default function Union(props: UnionProps) {
  return (
    <div className="w-4 left-0 top-0.5 absolute h-[13px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.153 0.431 C 5.305 0.201 5.556 0.075 5.806 0.025 C 6.056 -0.026 6.325 -0.004 6.554 0.15 C 7.011 0.456 7.139 1.096 6.834 1.556 L 3.254 5 H 15 C 15.552 5 16 5.448 16 6 C 16 6.552 15.552 7 15 7 H 3.269 L 6.834 10.431 C 7.139 10.89 7.011 11.531 6.554 11.837 C 6.096 12.144 5.458 12.015 5.153 11.556 L 0.438 6.828 C 0.333 6.756 0.242 6.665 0.171 6.559 L 0.167 6.556 C 0.131 6.501 0.101 6.444 0.076 6.384 C 0.027 6.266 0 6.136 0 6 C 0 5.999 2.044e-06 5.998 6.128e-06 5.996 C-0.001 5.798 0.055 5.6 0.167 5.431 L 0.207 5.391 C 0.259 5.323 0.321 5.261 0.389 5.209 L 5.153 0.431 Z"
          fill="#B3B6C5"
         />
      </svg>
    </div>
  );
}

Union.defaultProps = {};

interface UnionProps {}

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
