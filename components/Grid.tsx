import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            id,
            title,
            className,
            description,
            titleClassName,
            spareImg,
            img,
            imgClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
