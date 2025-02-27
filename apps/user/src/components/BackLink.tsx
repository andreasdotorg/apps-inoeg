// Kiebitz - Privacy-Friendly Appointments
// Copyright (C) 2021-2021 The Kiebitz Authors
// README.md contains license information.

import { ArrowLeft16 } from "@carbon/icons-react";
import clsx from "clsx";
import { Link, LinkProps } from "./Link";

export const BackLink: React.FC<LinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        "hidden md:inline-flex md:absolute md:top-10 md:left-4 md:gap-8 md:ml-4 md:book",
        className
      )}
      {...props}
    >
      <ArrowLeft16 /> {children}
    </Link>
  );
};
