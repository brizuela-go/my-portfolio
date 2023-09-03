import { getAwards } from "@/sanity/sanity-utils";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Awards = async () => {
  const awards = await getAwards();

  awards.sort((a: any, b: any) => b.year - a.year);

  return (
    <div className="space-y-8 mb-14">
      {awards.map((award, index) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={award?.url || "#"}
          className="grid lg:grid-cols-1 grid-cols-1 md:grid-cols-3 text-sm hover:shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:rounded-md transition duration-300 ease-in-out transform p-2 "
          key={index}
        >
          <div className="space-y-1">
            <h4 className="font-medium text-start text-zinc-800 dark:text-zinc-200 ">
              {award.award}
            </h4>
          </div>
          <Separator className="my-2 " />
          <div className="flex h-5 items-center space-x-4 text-muted-foreground">
            <div>{award.place}</div>
            <Separator orientation="vertical" />
            <div className="font-bold text-foreground">{award.year}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Awards;
