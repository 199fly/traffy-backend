import { Editable } from "@/cms/editor/Editable";

export default function Pricing({ block }: { block: any }) {
  const props = block.props || {};
  const tiers: any[] = Array.isArray(props.tiers) ? props.tiers : [];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            <Editable blockId={block.id} path="props.title" value={props.title} />
          </h2>
          <p className="mt-3 text-gray-600">
            <Editable blockId={block.id} path="props.subtitle" value={props.subtitle} type="textarea" />
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-sm bg-white">
              <h3 className="text-xl font-medium">
                <Editable blockId={block.id} path={`props.tiers.${idx}.name`} value={tier?.name} />
              </h3>
              <div className="mt-4 text-4xl font-bold">
                <Editable blockId={block.id} path={`props.tiers.${idx}.price`} value={tier?.price} />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                <Editable
                  blockId={block.id}
                  path={`props.tiers.${idx}.description`}
                  value={tier?.description}
                  type="textarea"
                />
              </p>
              <a className="mt-4 inline-block text-blue-600 underline" href={tier?.cta?.href ?? "#"}>
                <Editable
                  blockId={block.id}
                  path={`props.tiers.${idx}.cta.label`}
                  value={tier?.cta?.label ?? "Select"}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
