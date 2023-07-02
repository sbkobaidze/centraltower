import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `LivingRoom`.
 */
export type LivingRoomProps = SliceComponentProps<Content.LivingRoomSlice>;

/**
 * Component for "LivingRoom" Slices.
 */
const LivingRoom = ({ slice }: LivingRoomProps): JSX.Element => {

  const images = slice.items.map(item => {
    return <PrismicNextImage  field={item.image} width={300} height={200} />
  })
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Accordion type="single" collapsible >
  <AccordionItem value="item-1" >
    <AccordionTrigger><h2 className="text-white"> <PrismicRichText field={slice.primary.title} /></h2></AccordionTrigger>
          <AccordionContent >
            <div className="flex flex-wrap gap-5">
              {images}
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </section>
  );
};

export default LivingRoom;
