import { getCredentials } from "@/sanity/sanity-utils";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Credentials = async () => {
  const credentials = await getCredentials();

  credentials.sort((a: any, b: any) => b.issueDate - a.issueDate);

  return (
    <div className="space-y-8 mb-14">
      {credentials.map((credential, index) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={credential?.url || "#"}
          className="grid grid-cols-1 text-sm hover:shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:rounded-md transition duration-300 ease-in-out transform p-2 "
          key={index}
        >
          <div className="space-y-1">
            <h4 className="font-medium text-start text-zinc-800 dark:text-zinc-200 ">
              {credential.credential}
            </h4>
          </div>
          <Separator className="my-2 " />
          <div className="flex h-5 items-center space-x-4 text-muted-foreground">
            <div>{credential.issuer}</div>
            <Separator orientation="vertical" />
            <div className="font-bold text-foreground">
              {credential.issueDate}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Credentials;
