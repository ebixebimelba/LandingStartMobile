export default function MaskGroup(props: MaskGroupProps) {
  return (
    <div>
      <div
        className="absolute w-[345px] h-[200px] top-[1200px] left-[calc(50%_-_172.5px_+_0px)]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 345 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_2201_146749"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="345"
            height="200"
          >
            <rect width="345" height="200" rx="8" fill="white" />
          </mask>
          <g mask="url(#mask0_2201_146749)">
            <rect
              x="-0.355469"
              y="-12.8574"
              width="345.356"
              height="231.429"
              fill="url(#pattern-2201:146749-0)"
             />
          </g>
          <defs>
            <pattern
              id="pattern-2201:146749-0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2201_146749"
                transform="translate(-0.00215838) scale(0.000245195 0.000365898)"
               />
            </pattern>
            <image
              id="image0_2201_146749"
              width="4096"
              height="2733"
              xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2edf87b0-c883-49ff-b8fd-75f1bba872d3.webp"
             />
          </defs>
        </svg>
      </div>
    </div>
  );
}

MaskGroup.defaultProps = {};

interface MaskGroupProps {}

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
