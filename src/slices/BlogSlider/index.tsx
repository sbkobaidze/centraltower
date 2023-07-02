import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import { useMotionValue, useAnimate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `BlogSlider`.
 */
export type BlogSliderProps = SliceComponentProps<Content.BlogSliderSlice>;

/**
 * Component for "BlogSlider" Slices.
 */
const BlogSlider = ({ slice }: BlogSliderProps): JSX.Element => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);
  const [shouldRenderScrollRight, setShouldRenderScrollRight] = useState(false);

  console.log(slice.items);
  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(
        carouselRef?.current?.scrollWidth - carouselRef?.current?.offsetWidth
      );
    }
  }, [carouselRef]);

  useEffect(() => {
    const checkWindowWidth = () => {
      if (
        carouselRef.current &&
        window.innerWidth < carouselRef.current.scrollWidth
      ) {
        setShouldRenderScrollRight(true);
      } else {
        setShouldRenderScrollRight(false);
      }
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const handleScrollRight = () => {
    if (window.innerWidth < 800) {
      if (scrollPosition! >= -carouselWidth) {
        animate(scope.current, {
          x: scrollPosition - 300,
          transition: { damping: 100 },
        });
      }
      setScrollPosition(scrollPosition - 300);
    } else {
      setScrollPosition(-carouselWidth);

      animate(scope.current, {
        x: -carouselWidth,
        transition: { damping: 100 },
      });
    }
  };

  const cards = slice?.items?.map((item, index) => {
    return (
      <Card
        className={`min-w-[300px] h-[300px] ${
          dragging ? "pointer-events-none" : "cursor-pointer"
        }  `}
      >
        <CardHeader>
          <h2 className="text-xl font-bold"><PrismicRichText field={item.title} /></h2> 
          <PrismicRichText field={item.description} />
        </CardHeader>
        <Link href={`/blog/${asText(item.bloguid)}`}>
          <CardContent className="h-2/3 w-full flex justify-center">
            <PrismicNextImage field={item.blogimage} />
          </CardContent>
        </Link>
        <CardFooter></CardFooter>
      </Card>
    );
  });

  const handleScrollLeft = () => {
    if (window.innerWidth < 800) {
      if (scrollPosition! <= 0) {
        animate(scope.current, {
          x: scrollPosition + 300,
          transition: { damping: 100 },
        });
      }
      setScrollPosition(scrollPosition + 300);
    } else {
      setScrollPosition(0);

      animate(scope.current, {
        x: 0,
        transition: { damping: 100 },
      });
    }
  };

  return (
    <div className="py-8">
      <div className="py-8">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-white">
          Blogs
        </h2>
      </div>
      <div>
        <motion.div
          className="carousel relative  w-[100%] cursor-grab overflow-hidden"
          ref={carouselRef}
        >
          {1 ? (
            <>
              {" "}
              {shouldRenderScrollRight ? (
                <div className="absolute right-[-20px] top-[50%] z-30 flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-main-gray">
                  <ChevronRight className="" onClick={handleScrollRight} />
                </div>
              ) : null}
              {scrollPosition < -200 ? (
                <div className="absolute left-5 top-[50%] z-30 flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-main-gray">
                  <ChevronLeft className="" onClick={handleScrollLeft} />
                </div>
              ) : null}
            </>
          ) : null}
          <motion.div
            drag={"x"}
            style={{ x: x }}
            ref={scope}
            onDrag={(e, info) => {
              setScrollPosition(x.get());
              setDragging(true);
            }}
            onDragEnd={() => {
              setDragging(false);
            }}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            className="inner-carosuel  flex  gap-5 "
          >
            {/* {props.cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className={` ${dragging ? "pointer-events-none" : ""}`}
                >
                  {card}
                </div>
              )
            })} */}
            {cards}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSlider;
