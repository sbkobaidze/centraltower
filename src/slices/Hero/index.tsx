import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Button } from "@/components/ui/button";
import { PrismicNextImage } from "@prismicio/next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { asText } from "@prismicio/client";
import { useToast } from "@/components/ui/use-toast";
import { FlatsDocument, PopupDocument } from "../../../prismicio-types";
import Building from "@/components/Building";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice,[PopupDocument,FlatsDocument[]]>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice,context }: HeroProps): JSX.Element => {
  const [number, setNumber] = useState('')
  const { toast } = useToast()

  

  const submitNumber = () => {
    if (number.length < 9) {
      toast({
        variant: "destructive",
        description:<PrismicRichText  field={context[0].data.toastdestructive}/>
      })
    } else {
      toast({
        variant: "default",
        description:<PrismicRichText  field={context[0].data.toastsucc}/>
      })
      const link = document.createElement("a");
      link.href = "path/to/your/file.pdf"; // Replace with the actual URL of the PDF file
      link.download = `${asText(slice.primary.presentationbutton)}.pdf`; // Replace with the desired filename for the downloaded file
      link.click();
    }
  }
  
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
        <div className="w-2/3">
        <PrismicRichText field={slice.primary.description} />

        </div>
        <div className="w-full flex gap-3 ">
          <Button className="w-32 h-8 bg-greenprimary">Call</Button>
          <AlertDialog>
            <AlertDialogTrigger><h2 className={` ${buttonVariants({ className: 'bg-goldprimary',variant:"default" })} w-32 h-8 `}> <PrismicRichText  field={slice.primary.presentationbutton}/></h2></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle><PrismicRichText  field={context[0].data.header}/></AlertDialogTitle>
      <AlertDialogDescription>
      <PrismicRichText field={context[0].data.description} />

      </AlertDialogDescription>
              </AlertDialogHeader>
              <Input type="number" placeholder={asText(context[0].data.inputplaceholder)} value={number} onChange={(e) => setNumber(e.target.value)} />
    <AlertDialogFooter>
      <AlertDialogCancel>      <PrismicRichText field={context[0].data.cancelbutton} />
</AlertDialogCancel>
      <AlertDialogAction  ><h2 onClick={() => submitNumber()} className={` ${buttonVariants({ className: 'bg-greenprimary w-full hover:bg-slate-800',variant:"default" })} `}> <PrismicRichText field={context[0].data.submitbutton} /></h2></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

          
        </div>
      </div>
      <div className="lg:w-1/2 w-full relative h-auto">
        <Building />
      </div>
    </section>
  );
};

export default Hero;
