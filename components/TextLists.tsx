import type { TextList } from "@/content/types";
import { RichText } from "./RichText";

/** Labelled lists under a text block (conferences, productions, memberships). */
export function TextLists({ lists }: { lists?: TextList[] }) {
  if (!lists || lists.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {lists.map((list) => (
        <div key={list.label} className="flex flex-col gap-2">
          <h4 className="text-[15px] font-medium text-muted lg:text-base">
            {list.label}
          </h4>
          <ul className="flex flex-col gap-1">
            {list.items.map((item) => (
              <li
                key={item}
                className="relative pl-5 before:absolute before:left-0 before:text-muted before:content-['–']"
              >
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}