import { Editable } from "@/cms/editor/Editable";
import ImageEditable from "@/cms/editor/ImageEditable";

export default function Hero({ block, canEdit }: { block: any; canEdit: boolean }) {
  const props = block.props || {};
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          <Editable blockId={block.id} path="props.headline" value={props.headline} />
        </h1>
        <p className="mt-3 text-lg">
          <Editable blockId={block.id} path="props.subheadline" value={props.subheadline} type="textarea" />
        </p>
        <a className="mt-5 inline-block underline" href={props.cta?.href ?? "#"}>
          <Editable blockId={block.id} path="props.cta.label" value={props.cta?.label ?? "Learn more"} />
        </a>
        <div className="mt-8">
          <ImageEditable
            blockId={block.id}
            path="props.image"
            fileId={props.image?.file}
            alt={props.image?.alt}
            transformKey="heroLg"
          />
        </div>
      </div>
    </section>
  );
}
