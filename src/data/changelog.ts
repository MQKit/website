// What each version brought, newest first. The first entry also feeds
// /latest.json, which the app reads once a day to show its "new version" note.
import type { Lang } from "./tools";

export interface Release {
  version: string;
  date: string;
  /** One line, shown in the app's notification too. */
  summary: Record<Lang, string>;
  items: Record<Lang, string[]>;
}

export const RELEASES: Release[] = [
  {
    version: "1.0.0",
    date: "2026-12-01",
    summary: {
      en: "The first version: 44 tools for PDF, images, video, audio, documents and more.",
      ro: "Prima versiune: 44 de unelte pentru PDF, imagini, video, audio, documente și altele.",
    },
    items: {
      en: [
        "PDF: compress, to Word, Excel and PowerPoint, merge, split, pages, password, stamp, OCR, to images",
        "Images: compress, convert, resize, HEIC to JPG, AI upscale, remove background, RAW, AVIF, SVG, icons",
        "Video and audio: compress, convert, GIF, trim, merge, subtitles, to MP3, speech to text, text to speech",
        "Documents: Office, HTML and Markdown to PDF, tables, e-books, mail",
        "Archives, fonts, remove metadata, CAD and 3D",
        "Every tool has a number (ID:1 to ID:44), Explorer right-click menu, light and dark",
      ],
      ro: [
        "PDF: comprimare, în Word, Excel și PowerPoint, unire, împărțire, pagini, parolă, ștampilă, OCR, în imagini",
        "Imagini: comprimare, conversie, redimensionare, HEIC în JPG, mărire AI, eliminare fundal, RAW, AVIF, SVG, iconițe",
        "Video și audio: comprimare, conversie, GIF, tăiere, unire, subtitrări, în MP3, vorbire în text, text în vorbire",
        "Documente: Office, HTML și Markdown în PDF, tabele, cărți electronice, e-mail",
        "Arhive, fonturi, eliminare metadate, CAD și 3D",
        "Fiecare unealtă are un număr (ID:1 până la ID:44), meniu în Explorer la click dreapta, temă luminoasă și întunecată",
      ],
    },
  },
];
