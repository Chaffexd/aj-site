import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      return <h1 className="font-bold text-5xl my-4 dark:text-white">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return <h2 className="font-bold text-2xl my-4 dark:text-white">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      return <h3 className="font-bold text-xl my-4 dark:text-white">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node: any, children: any) => {
      return <h4 className="font-bold text-lg my-4 dark:text-white">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node: any, children: any) => {
      return <h5 className="font-bold text-lg my-4 dark:text-white">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node: any, children: any) => {
      return <h6 className="font-bold text-lg my-4 dark:text-white">{children}</h6>;
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return <ul className="list-disc dark:text-slate-200 list-inside">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      return <li className="my-4">{children}</li>;
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return <ol className="my-4 dark:text-slate-200 list-inside">{children}</ol>;
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className="mb-2 text-slate-700 dark:text-slate-200 inline">{children}</p>;
    },
    [BLOCKS.TABLE]: (node: any, children: any) => {
      return (
        <table>
          <tbody>{children}</tbody>
        </table>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          width={500}
          height={500}
          className="sm:w-1/4 md:w-2/4 lg:w-3/4 my-12 rounded-lg shadow-lg"
        />
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <Link
          target="_blank"
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          style={{ wordWrap: "break-word" }}
        >
          {children}
        </Link>
      );
    },
  },
};
