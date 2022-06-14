import React from "react";
import Link, { LinkProps } from "next/link";
import { HTMLProps, PropsWithChildren } from "react";
import { className } from "../../utils/various";
import styles from "./Button.module.scss";

interface Props {
  small?: boolean;
  pill?: boolean;
  primary?: boolean;
  fill?: boolean;
}

interface ButtonProps extends Props, HTMLProps<HTMLButtonElement> {}
interface LinkButtonProps extends Props, PropsWithChildren<LinkProps> {
  download?: boolean;
}

function Button({
  small,
  pill,
  primary,
  fill,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={className(
        styles.Button,
        small && styles.small,
        pill && styles.pill,
        primary && styles.primary,
        fill && styles.fill
      )}
      {...rest}
      type="button"
    >
      {children}
    </button>
  );
}

export function LinkButton({
  small,
  pill,
  href,
  primary,
  download,
  fill,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} passHref>
      <a
        className={className(
          styles.Button,
          small && styles.small,
          pill && styles.pill,
          primary && styles.primary,
          fill && styles.fill
        )}
        download={download}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
}

export default Button;
