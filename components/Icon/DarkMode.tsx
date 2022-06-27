import { SvgProps } from '.';

export const DarkModeSvg: React.FC<SvgProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    focusable={false}
    role={props.title ? 'img' : undefined}
    aria-hidden={!props.title ? 'true' : 'false'}
    className={props.className}
    width={props.size ?? 24}
    height={props.size ?? 24}
    style={props.style}
  >
    {props.title ? <title>{props.title}</title> : undefined}
    <rect fill="none"></rect>
    <path d="M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
  </svg>
);
