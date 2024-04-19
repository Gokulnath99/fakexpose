"use client";

import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import {
  type DefaultExtensionType,
  FileIcon,
  defaultStyles,
} from "react-file-icon";
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";
import { useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdError } from "react-icons/md";
import Link from "next/link";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];

      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            {...defaultStyles[extension as DefaultExtensionType]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ renderValue, ...props }) => {
      const status = renderValue() as string;

      return (
        <div className="flex">
          {status === "in-progress" && (
            <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-1.5 my-3 inline-block align-middle">
              In Progress 
              <span
                className="animate-spin inline-block align-middle size-4 border-[3px] border-current border-t-transparent text-orange-600 dark:text-white rounded-full mx-1"
                role="status"
                aria-label="loading"
              ></span>
            </p>
          )}
          {status === "done" && (
            <p className="border border-green-500 bg-orange-100 dark:bg-orange-900/20 text-green-600 text-xs rounded-full px-2 py-1.5 my-3 inline-block align-middle">
              Done 
              <MdOutlineDownloadDone className="inline-block align-middle size-4" />
            </p>
          )}
          {status === "error" && (
            <p className="border border-red-500 bg-orange-100 dark:bg-orange-900/20 text-red-600 text-xs rounded-full px-2 py-1.5 my-3 inline-block align-middle">
              Error <MdError className="inline-block align-middle size-4" />
            </p>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "DownloadReport",
    header: "Report",
    cell: ({ renderValue, ...props }) => {
      return (
        <a 
          href={renderValue() as string}
          target="_blank"
          className="underline text-blue-500 hover:text-blue hover:cursor-pointer">
            Download
        </a>
      );
    }
  },
];

