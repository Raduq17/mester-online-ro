
import * as React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  return (
    <Carousel className={className}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="h-full rounded-md overflow-hidden">
              <img 
                src={image}
                alt={`Lucrare ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 bg-white" />
      <CarouselNext className="-right-4 bg-white" />
    </Carousel>
  );
};

export default ImageCarousel;
