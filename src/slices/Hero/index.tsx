import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  console.log(slice)
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-full h-full py-10 text-white font-main flex-col lg:flex-row gap-4"
    >
      <div className="lg:w-1/2 flex flex-col gap-3 justify-center w-full ">
        <h2 className=" font-bold text-bold-home  ">
          <PrismicRichText field={slice.primary.header} />
        </h2>
        <p className="w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="w-full flex gap-3 ">
          <Button className="w-32 h-8 bg-greenprimary">Call</Button>
          <Button className="w-32 h-8 bg-goldprimary">Call</Button>
        </div>
      </div>
      <div className="lg:w-1/2 h-full w-full">
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default Hero;
