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
    version: "1.2.0",
    date: "2026-11-18",
    summary: {
      en: "Nine new tools: fill and sign PDFs, QR codes with your logo, vocal remover, object eraser and more.",
      ro: "Nouă unelte noi: completezi și semnezi PDF-uri, coduri QR cu logo, separare voce, ștergere obiecte și altele.",
    },
    items: {
      en: [
        "Fill and sign PDF: form fields, a signature drawn, typed or from a photo, text, ticks and dates on the page",
        "Redact PDF: names, e-mails, phone numbers, IBANs and ID numbers removed from the file, not just covered",
        "QR codes: rounded or dot styles, gradients, your logo in the middle, each code checked before it is saved",
        "Erase objects from photos: paint over a passer-by or a wire and AI fills the place in, on your PC",
        "Vocals and instrumental: karaoke tracks or vocals alone, with AI on your PC",
        "Tempo and key: BPM, key and Camelot code for your songs, written as tags DJ programs read",
        "Crop video for TikTok, Reels, Shorts and Instagram, with a blurred background if you want; speed and sound too",
        "Voice recorder: record in the app, with noise reduction and an even volume",
        "Animation from pictures (GIF, WebP, MP4) and smaller GIFs",
        "Updates install over the older version without asking to uninstall it first",
      ],
      ro: [
        "Completare și semnare PDF: câmpurile formularului, semnătură desenată, scrisă sau dintr-o poză, text, bife și date pe pagină",
        "Acoperire date în PDF: nume, e-mailuri, telefoane, IBAN-uri și coduri numerice scoase din fișier, nu doar acoperite",
        "Coduri QR: forme rotunjite sau puncte, degradeuri, logoul tău în mijloc, fiecare cod verificat înainte de salvare",
        "Ștergere obiecte din poze: pictezi peste un trecător sau un fir și AI-ul umple locul, pe calculatorul tău",
        "Voce și instrumental: negativ pentru karaoke sau doar vocea, cu AI pe calculatorul tău",
        "Tempo și tonalitate: BPM, tonalitate și cod Camelot pentru melodii, scrise ca etichete pentru programele de DJ",
        "Decupare video pentru TikTok, Reels, Shorts și Instagram, cu fundal estompat dacă vrei; și viteza, și sunetul",
        "Înregistrare voce: înregistrezi în aplicație, cu reducerea zgomotului și volum egal",
        "Animație din poze (GIF, WebP, MP4) și GIF-uri mai mici",
        "Actualizările se instalează peste versiunea veche, fără să mai ceară dezinstalarea ei",
      ],
    },
  },
  {
    version: "1.1.0",
    date: "2026-11-18",
    summary: {
      en: "The app in 12 languages, natural voices for Text to speech, and safer handling of your files.",
      ro: "Aplicația în 12 limbi, voci naturale la Text în voce și grijă mai mare pentru fișierele tale.",
    },
    items: {
      en: [
        "The app in English, Romanian, German, Spanish, French, Italian, Portuguese, Polish, Turkish, Russian, Japanese and Chinese",
        "Text to speech: natural AI voices that run on your PC (English, Spanish, French, Italian, Portuguese, Hindi)",
        "Type or paste text in Text to speech, Markdown to PDF and HTML to PDF",
        "Originals are no longer deleted for good: on a drive without a Recycle Bin they stay where they are",
        "Every file of a selection in Explorer arrives, and the right-click menu is removed completely on uninstall",
        "Very large or damaged files get a clear message instead of stopping the tool",
        "Clearer screens: what the start button needs, why a file was skipped, where the results went",
      ],
      ro: [
        "Aplicația în engleză, română, germană, spaniolă, franceză, italiană, portugheză, poloneză, turcă, rusă, japoneză și chineză",
        "Text în voce: voci AI naturale care rulează pe PC-ul tău (engleză, spaniolă, franceză, italiană, portugheză, hindi)",
        "Scrii sau lipești text la Text în voce, Markdown în PDF și HTML în PDF",
        "Originalele nu se mai șterg definitiv: pe o unitate fără Coș de reciclare rămân pe loc",
        "Toate fișierele selectate în Explorer ajung în aplicație, iar meniul de click dreapta dispare complet la dezinstalare",
        "Fișierele foarte mari sau stricate primesc un mesaj clar, în loc să oprească unealta",
        "Ecrane mai clare: ce îi lipsește butonului de start, de ce s-a sărit un fișier, unde au ajuns rezultatele",
      ],
    },
  },
  {
    version: "1.0.0",
    date: "2026-11-18",
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
