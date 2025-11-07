import { StaticImageData } from "next/image";

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image_?: string | StaticImageData;
    link?: string;
};