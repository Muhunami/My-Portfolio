declare module "react-simple-maps" {
  import type { CSSProperties, ReactElement, ReactNode } from "react";

  export function ComposableMap(props: {
    children?: ReactNode;
    projection?: string;
    projectionConfig?: { scale?: number; center?: [number, number] };
    width?: number;
    height?: number;
    className?: string;
  }): ReactElement;

  export function Geographies(props: {
    geography: string | object;
    children: (arg: {
      geographies: Array<{ rsmKey: string; [key: string]: unknown }>;
    }) => ReactNode;
  }): ReactElement;

  export function Geography(props: {
    geography: { rsmKey: string; [key: string]: unknown };
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
  }): ReactElement;

  export function Marker(props: {
    coordinates: [number, number];
    children?: ReactNode;
  }): ReactElement;
}
