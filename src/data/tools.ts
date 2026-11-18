// Every tool of the app. A tool not out yet would have its release set to "soon".

export type Lang = "en" | "ro";
type T = Record<Lang, string>;
type L = Record<Lang, string[]>;

export type Category = "pdf" | "image" | "video" | "audio" | "document" | "other";

export interface Tool {
  id: string;
  slug: T;
  category: Category;
  /** "available" in the app today, "soon" when it is still to come. */
  release: "available" | "soon";
  name: T;
  short: T;
  description: T;
  points: L;
  formats: string;
}

const t = (en: string, ro: string): T => ({ en, ro });
const l = (en: string[], ro: string[]): L => ({ en, ro });

export const TOOLS: Tool[] = [
  // ------------------------------------------------------------ 1.0
  {
    id: "pdf-compress", category: "pdf", release: "available",
    slug: t("compress-pdf", "comprimare-pdf"),
    name: t("Compress PDF", "Comprimare PDF"),
    short: t("Make it smaller", "Fă-l mai mic"),
    description: t(
      "Shrink PDFs for email or upload. Pictures are recompressed and scaled down, while text and drawings stay sharp and untouched.",
      "Micșorează PDF-urile pentru e-mail sau pentru încărcat pe site-uri. Imaginile se recomprimă și se micșorează, iar textul și desenele rămân clare și neatinse."),
    points: l(
      ["Presets: for email, balanced, smallest, for print", "Under a size you choose, like 10 MB or 2 MB", "Grayscale, page thumbnails and document info removed on request", "Shows the size before and after, and never writes a bigger file"],
      ["Presetări: pentru e-mail, echilibrat, cât mai mic, pentru tipar", "Sub o mărime aleasă, de exemplu 10 MB sau 2 MB", "Alb-negru, fără miniaturi, fără informațiile documentului, la cerere", "Arată mărimea înainte și după și nu scrie niciodată un fișier mai mare"]),
    formats: "PDF",
  },
  {
    id: "pdf-to-word", category: "document", release: "available",
    slug: t("pdf-to-word", "pdf-in-word"),
    name: t("PDF to Word", "PDF în Word"),
    short: t("So you can edit the text", "Ca să poți modifica textul"),
    description: t(
      "Turn a PDF into a Word document you can edit. With Microsoft Word installed it uses Word; without it, a free engine downloaded once. Presentations and designs keep their exact look.",
      "Transformă un PDF într-un document Word pe care îl poți modifica. Dacă ai Microsoft Word, îl folosește; altfel, un program gratuit descărcat o singură dată. Prezentările și designurile își păstrează aspectul exact."),
    points: l(
      ["Editable text, or the exact look for slides and designs", "Works without Microsoft Word too", "Pages to convert, password-protected PDFs", "DOCX, and RTF or ODT through Word"],
      ["Text editabil sau aspect identic, pentru prezentări și designuri", "Merge și fără Microsoft Word", "Alegi paginile, merge și cu PDF-uri cu parolă", "DOCX, plus RTF sau ODT prin Word"]),
    formats: "PDF → DOCX, RTF, ODT",
  },
  {
    id: "pdf-merge", category: "pdf", release: "available",
    slug: t("merge-pdf", "unire-pdf"),
    name: t("Merge PDF", "Unire PDF"),
    short: t("Many into one", "Mai multe în unul"),
    description: t(
      "Put several PDFs into one, in the order you choose, with only the pages you want from each.",
      "Pune mai multe PDF-uri într-unul singur, în ordinea aleasă de tine, cu doar paginile pe care le vrei din fiecare."),
    points: l(
      ["Drag to reorder, pages per file (1-3, 5, last)", "A bookmark for each file, and their own bookmarks kept", "Password-protected PDFs unlocked on the spot", "No limit on files or pages"],
      ["Ordinea o alegi tu, paginile per fișier (1-3, 5, ultima)", "Un semn de carte pentru fiecare fișier, plus semnele lor de carte", "PDF-urile cu parolă se deblochează pe loc", "Fără limită de fișiere sau pagini"]),
    formats: "PDF",
  },
  {
    id: "images-to-pdf", category: "pdf", release: "available",
    slug: t("jpg-to-pdf", "jpg-in-pdf"),
    name: t("Images to PDF", "Imagini în PDF"),
    short: t("Photos and scans into a PDF", "Poze și scanări într-un PDF"),
    description: t(
      "Make one PDF from photos and scans. JPGs go in without losing quality, and phone photos come out the right way up.",
      "Fă un singur PDF din poze și scanări. JPG-urile intră fără să-și piardă calitatea, iar pozele de pe telefon ies drept."),
    points: l(
      ["A4, Letter or the size of each image", "Portrait, landscape or following each image", "Margins, and one PDF per image if you want", "JPG, PNG, WebP, HEIC, TIFF, BMP, GIF"],
      ["A4, Letter sau cât fiecare imagine", "Portret, peisaj sau după imagine", "Margini, și câte un PDF pentru fiecare imagine, la nevoie", "JPG, PNG, WebP, HEIC, TIFF, BMP, GIF"]),
    formats: "JPG, PNG, HEIC… → PDF",
  },
  {
    id: "word-to-pdf", category: "document", release: "available",
    slug: t("word-to-pdf", "word-in-pdf"),
    name: t("Word to PDF", "Word în PDF"),
    short: t("Ready to send", "Gata de trimis"),
    description: t(
      "Save Word documents as PDF. With Microsoft Word the result is identical to Word's own; without it, LibreOffice is downloaded once and does the job.",
      "Salvează documentele Word ca PDF. Cu Microsoft Word, rezultatul e identic cu al lui Word; fără el, LibreOffice se descarcă o singură dată și face treaba."),
    points: l(
      ["For print or for screen (smaller file)", "Clickable outline from the headings", "Comments and tracked changes shown or hidden", "PDF/A for archiving"],
      ["Pentru tipar sau pentru ecran (fișier mai mic)", "Cuprins clicabil din titluri", "Comentariile și modificările arătate sau ascunse", "PDF/A pentru arhivare"]),
    formats: "DOCX, DOC, RTF, ODT, TXT → PDF",
  },
  {
    id: "pdf-to-images", category: "pdf", release: "available",
    slug: t("pdf-to-jpg", "pdf-in-jpg"),
    name: t("PDF to images", "PDF în imagini"),
    short: t("Each page an image", "Fiecare pagină o poză"),
    description: t(
      "Save PDF pages as pictures, for a post, a message or a presentation.",
      "Salvează paginile unui PDF ca imagini, pentru o postare, un mesaj sau o prezentare."),
    points: l(
      ["JPG, PNG or WebP", "Screen, good or print resolution", "Only the pages you choose", "Transparent background for PNG"],
      ["JPG, PNG sau WebP", "Rezoluție de ecran, bună sau de tipar", "Doar paginile alese", "Fundal transparent la PNG"]),
    formats: "PDF → JPG, PNG, WebP",
  },
  {
    id: "image-compress", category: "image", release: "available",
    slug: t("compress-images", "comprimare-imagini"),
    name: t("Compress images", "Comprimare imagini"),
    short: t("JPG, PNG, WebP", "JPG, PNG, WebP"),
    description: t(
      "Make photos and pictures much smaller with differences hard to see. Compare before and after at 100% before you start.",
      "Fă pozele și imaginile mult mai mici, cu diferențe greu de văzut. Compari înainte și după, la 100%, înainte să pornești."),
    points: l(
      ["Before and after preview, with the size it will have", "Under a size you choose, like 500 KB", "Longest side to 4K, Full HD or your size", "Location and camera data removed, or kept"],
      ["Previzualizare înainte și după, cu mărimea pe care o va avea", "Sub o mărime aleasă, de exemplu 500 KB", "Latura cea mai lungă la 4K, Full HD sau cât vrei", "Locația și datele camerei șterse sau păstrate"]),
    formats: "JPG, PNG, WebP",
  },
  {
    id: "image-convert", category: "image", release: "available",
    slug: t("convert-images", "conversie-imagini"),
    name: t("Convert images", "Conversie imagini"),
    short: t("Change the format", "Schimbă formatul"),
    description: t(
      "Change images from one format to another. Animated GIFs and WebPs stay animated.",
      "Schimbă formatul imaginilor. GIF-urile și WebP-urile animate rămân animate."),
    points: l(
      ["JPG, PNG, WebP, GIF, BMP, TIFF, ICO", "A background colour where transparency can't stay", "Date, camera and location kept for JPG and WebP", "Reads HEIC and AVIF too"],
      ["JPG, PNG, WebP, GIF, BMP, TIFF, ICO", "O culoare de fundal unde transparența nu se poate păstra", "Data, camera și locația păstrate la JPG și WebP", "Citește și HEIC și AVIF"]),
    formats: "JPG, PNG, WebP, GIF, BMP, TIFF, ICO, HEIC, AVIF",
  },
  {
    id: "heic-to-jpg", category: "image", release: "available",
    slug: t("heic-to-jpg", "heic-in-jpg"),
    name: t("HEIC to JPG", "HEIC în JPG"),
    short: t("iPhone photos", "Poze de pe iPhone"),
    description: t(
      "Open iPhone photos anywhere: HEIC to JPG or PNG, the right way up, with the date and place kept.",
      "Deschide pozele de pe iPhone oriunde: HEIC în JPG sau PNG, drept, cu data și locul păstrate."),
    points: l(
      ["Works without Microsoft's HEIF extension", "Date, camera and location kept", "Every picture of a burst, if you want", "Quality you choose"],
      ["Merge și fără extensia HEIF de la Microsoft", "Data, camera și locația păstrate", "Toate pozele dintr-o rafală, dacă vrei", "Calitatea o alegi tu"]),
    formats: "HEIC, HEIF → JPG, PNG",
  },
  {
    id: "video-to-mp3", category: "audio", release: "available",
    slug: t("video-to-mp3", "video-in-mp3"),
    name: t("Video to MP3", "Video în MP3"),
    short: t("Extract the sound", "Scoate sunetul"),
    description: t(
      "Take the sound out of a video: a song, a talk, a recording. Only a part of it, at an even volume, if you want.",
      "Scoate sunetul dintr-un video: o melodie, o prezentare, o înregistrare. Doar o parte din el, la volum egal, dacă vrei."),
    points: l(
      ["MP3, M4A, WAV, FLAC, OGG, Opus", "From and to a moment you choose", "The audio track you want, for videos with several", "Even volume and mono on request"],
      ["MP3, M4A, WAV, FLAC, OGG, Opus", "De la și până la momentul ales", "Pista audio dorită, la videourile cu mai multe", "Volum egal și mono, la cerere"]),
    formats: "MP4, MKV, MOV, AVI, WEBM… → MP3, M4A, WAV, FLAC",
  },

  // ------------------------------------------------------------
  {
    id: "pdf-split", category: "pdf", release: "available",
    slug: t("split-pdf", "impartire-pdf"),
    name: t("Split PDF", "Împărțire PDF"),
    short: t("One into many", "Unul în mai multe"),
    description: t("Cut a PDF into several: by page ranges, every few pages, one per page or by its chapters.", "Taie un PDF în mai multe: după intervale de pagini, la fiecare câteva pagini, câte o pagină sau după capitole."),
    points: l(["By ranges, like 1-3; 4-10", "Every N pages", "By the table of contents"], ["După intervale, de exemplu 1-3; 4-10", "La fiecare N pagini", "După cuprins"]),
    formats: "PDF",
  },
  {
    id: "image-resize", category: "image", release: "available",
    slug: t("resize-images", "redimensionare-imagini"),
    name: t("Resize images", "Redimensionare imagini"),
    short: t("Width, height, crop", "Lățime, înălțime, decupare"),
    description: t("Change the size of many images at once, in pixels or percent, and crop them to a shape like square or 16:9.", "Schimbă mărimea multor imagini deodată, în pixeli sau procente, și decupează-le la o formă, de exemplu pătrat sau 16:9."),
    points: l(["Pixels, percent or longest side", "Crop to 1:1, 4:3, 16:9", "Small images never enlarged"], ["Pixeli, procente sau latura cea mai lungă", "Decupare la 1:1, 4:3, 16:9", "Imaginile mici nu se măresc"]),
    formats: "JPG, PNG, WebP…",
  },
  {
    id: "pdf-password", category: "pdf", release: "available",
    slug: t("pdf-password", "parola-pdf"),
    name: t("PDF password", "Parolă PDF"),
    short: t("Lock or unlock", "Pune sau scoate parola"),
    description: t("Protect a PDF with a password, or remove the password from one you can open.", "Protejează un PDF cu parolă sau scoate parola de la unul pe care îl poți deschide."),
    points: l(["Strong encryption", "Allow or block printing and copying", "Remove a known password"], ["Criptare puternică", "Permite sau blochează tipărirea și copierea", "Scoate o parolă pe care o știi"]),
    formats: "PDF",
  },
  {
    id: "icons", category: "image", release: "available",
    slug: t("icon-favicon-maker", "iconite-favicon"),
    name: t("Icons", "Iconițe"),
    short: t("ICO and favicons", "ICO și favicon"),
    description: t("Turn an image into a Windows icon or a full favicon set for a website.", "Transformă o imagine într-o iconiță Windows sau într-un set complet de favicon pentru un site."),
    points: l(["ICO with every size", "Favicon pack with web manifest", "Padding and background"], ["ICO cu toate mărimile", "Pachet favicon cu web manifest", "Spațiu și fundal"]),
    formats: "PNG, JPG, SVG → ICO, PNG",
  },

  {
    id: "video-compress", category: "video", release: "available",
    slug: t("compress-video", "comprimare-video"),
    name: t("Compress video", "Comprimare video"),
    short: t("Under a size you choose", "Sub o mărime aleasă"),
    description: t("Make videos smaller to send them by message or email, by quality or under a size, using the graphics card when there is one.", "Fă videourile mai mici, ca să le trimiți pe mesaje sau pe e-mail, după calitate sau sub o mărime, folosind placa video când există."),
    points: l(["Presets for email and messaging", "1080p, 720p, 480p", "H.264, H.265, AV1"], ["Presetări pentru e-mail și mesagerie", "1080p, 720p, 480p", "H.264, H.265, AV1"]),
    formats: "MP4, MOV, MKV…",
  },
  {
    id: "video-convert", category: "video", release: "available",
    slug: t("convert-video", "conversie-video"),
    name: t("Convert video", "Conversie video"),
    short: t("MP4, MKV, WEBM, MOV", "MP4, MKV, WEBM, MOV"),
    description: t("Change a video's format, instantly when no re-encoding is needed, keeping subtitles and the audio track you want.", "Schimbă formatul unui video, instant când nu e nevoie de recodare, cu subtitrările și pista audio dorită."),
    points: l(["Fast mode without re-encoding", "Subtitles kept", "Resolution and quality"], ["Mod rapid, fără recodare", "Subtitrări păstrate", "Rezoluție și calitate"]),
    formats: "MP4, MKV, WEBM, MOV, AVI",
  },
  {
    id: "audio-convert", category: "audio", release: "available",
    slug: t("convert-audio", "conversie-audio"),
    name: t("Convert audio", "Conversie audio"),
    short: t("MP3, WAV, FLAC, M4A", "MP3, WAV, FLAC, M4A"),
    description: t("Convert music and recordings between formats, keeping their tags, with even volume if you want.", "Convertește muzica și înregistrările între formate, cu etichetele păstrate și volum egal, dacă vrei."),
    points: l(["MP3, WAV, FLAC, M4A, OGG, Opus", "Tags and cover kept", "Even volume"], ["MP3, WAV, FLAC, M4A, OGG, Opus", "Etichete și copertă păstrate", "Volum egal"]),
    formats: "MP3, WAV, FLAC, M4A, OGG, Opus",
  },

  {
    id: "pdf-pages", category: "pdf", release: "available",
    slug: t("rotate-reorder-pdf", "rotire-reordonare-pdf"),
    name: t("Rotate and reorder PDF", "Rotire și reordonare PDF"),
    short: t("Pages in order", "Paginile în ordine"),
    description: t("See every page, then turn, move or delete them by dragging.", "Vezi toate paginile, apoi le rotești, le muți sau le ștergi trăgând de ele."),
    points: l(["Thumbnails of every page", "Rotate one or many", "Delete pages"], ["Miniaturi pentru fiecare pagină", "Rotești una sau mai multe", "Ștergi pagini"]),
    formats: "PDF",
  },
  {
    id: "media-trim", category: "video", release: "available",
    slug: t("trim-video-audio", "taiere-video-audio"),
    name: t("Trim video and audio", "Tăiere video și audio"),
    short: t("Keep only a part", "Păstrează doar o parte"),
    description: t("Cut the start, the end or the middle of a video or a recording, instantly or to the exact frame.", "Taie începutul, sfârșitul sau mijlocul unui video sau al unei înregistrări, instant sau la cadru exact."),
    points: l(["Visual timeline", "Several parts at once", "Instant or exact cut"], ["Cronologie vizuală", "Mai multe bucăți deodată", "Tăiere instantă sau exactă"]),
    formats: "MP4, MKV, MOV, MP3…",
  },
  {
    id: "video-gif", category: "video", release: "available",
    slug: t("video-to-gif", "video-in-gif"),
    name: t("Video to GIF", "Video în GIF"),
    short: t("A clip that loops", "Un clip care se repetă"),
    description: t("Turn a moment of a video into a GIF, or a GIF into a small MP4.", "Transformă un moment dintr-un video într-un GIF sau un GIF într-un MP4 mic."),
    points: l(["Start and end you choose", "10, 15 or 24 frames per second", "GIF to MP4 too"], ["Început și sfârșit alese de tine", "10, 15 sau 24 de cadre pe secundă", "Și GIF în MP4"]),
    formats: "MP4, MOV… ↔ GIF",
  },
  {
    id: "media-join", category: "video", release: "available",
    slug: t("merge-video-audio", "unire-video-audio"),
    name: t("Merge video and audio", "Unire video și audio"),
    short: t("Clips into one", "Clipuri într-unul singur"),
    description: t("Join videos or recordings one after another into a single file.", "Lipește videouri sau înregistrări unul după altul, într-un singur fișier."),
    points: l(["Order you choose", "Fast join when formats match", "Trim each part"], ["Ordinea o alegi tu", "Unire rapidă când formatele se potrivesc", "Tai fiecare bucată"]),
    formats: "MP4, MKV, MP3…",
  },

  {
    id: "office-to-pdf", category: "document", release: "available",
    slug: t("excel-powerpoint-to-pdf", "excel-powerpoint-in-pdf"),
    name: t("Excel and PowerPoint to PDF", "Excel și PowerPoint în PDF"),
    short: t("Sheets and slides", "Foi și prezentări"),
    description: t("Save spreadsheets and presentations as PDF, with Office or without it.", "Salvează foile de calcul și prezentările ca PDF, cu sau fără Office."),
    points: l(["Sheets you choose, fit to page", "Slides with notes", "Works without Office"], ["Foile alese, încadrate în pagină", "Diapozitive cu note", "Merge și fără Office"]),
    formats: "XLSX, XLS, PPTX, PPT, ODS, ODP → PDF",
  },
  {
    id: "tabular", category: "document", release: "available",
    slug: t("csv-excel-json", "date-tabelare"),
    name: t("Spreadsheet data", "Date tabelare"),
    short: t("CSV, Excel, JSON, XML", "CSV, Excel, JSON, XML"),
    description: t("Move tables between Excel, CSV, JSON and XML, with the separators your Excel expects and every letter intact.", "Mută tabele între Excel, CSV, JSON și XML, cu separatorii pe care îi așteaptă Excel-ul tău și toate literele intacte."),
    points: l(["Comma, semicolon or tab", "UTF-8 or Windows encodings", "One sheet or all"], ["Virgulă, punct și virgulă sau tab", "UTF-8 sau codificările Windows", "O foaie sau toate"]),
    formats: "XLSX, CSV, JSON, XML",
  },
  {
    id: "markdown", category: "document", release: "available",
    slug: t("markdown-text", "markdown-text"),
    name: t("Markdown and text", "Markdown și text"),
    short: t("To PDF, Word, HTML", "În PDF, Word, HTML"),
    description: t("Turn Markdown and text files into good-looking PDFs, Word documents, web pages or e-books.", "Transformă fișierele Markdown și text în PDF-uri arătoase, documente Word, pagini web sau cărți electronice."),
    points: l(["Themes for PDF and HTML", "Table of contents", "Code highlighting", "From a file, or text you paste"], ["Teme pentru PDF și HTML", "Cuprins", "Cod evidențiat", "Dintr-un fișier sau din text lipit"]),
    formats: "MD, TXT → PDF, DOCX, HTML, EPUB",
  },
  {
    id: "html-to-pdf", category: "document", release: "available",
    slug: t("html-to-pdf", "html-in-pdf"),
    name: t("HTML to PDF", "HTML în PDF"),
    short: t("Web pages to keep", "Pagini web de păstrat"),
    description: t("Save an HTML file or a web page as a clean PDF.", "Salvează un fișier HTML sau o pagină web ca PDF curat."),
    points: l(["A4, Letter, A3", "Margins and backgrounds", "From a file or an address"], ["A4, Letter, A3", "Margini și fundaluri", "Dintr-un fișier sau de la o adresă"]),
    formats: "HTML → PDF",
  },

  {
    id: "remove-background", category: "image", release: "available",
    slug: t("remove-background", "eliminare-fundal"),
    name: t("Remove background", "Eliminare fundal"),
    short: t("On your PC, with AI", "Pe calculatorul tău, cu AI"),
    description: t("Cut out people and products from their background, with an AI model that runs on your computer.", "Decupează oameni și produse din fundal, cu un model AI care rulează pe calculatorul tău."),
    points: l(["Transparent, a colour, or the background blurred", "Fast, or finest hair and edges", "On your graphics card or processor; nothing is uploaded"], ["Fundal transparent, o culoare sau fundalul încețoșat", "Rapid sau cel mai fin la păr și margini", "Pe placa video sau pe procesor; nimic nu se încarcă pe internet"]),
    formats: "JPG, PNG, WebP, HEIC → PNG, WebP, JPG",
  },
  {
    id: "ai-upscale", category: "image", release: "available",
    slug: t("ai-image-upscaler", "marire-imagine-ai"),
    name: t("AI image upscale", "Mărire imagine cu AI"),
    short: t("2×, 3× or 4×, sharp", "De 2×, 3× sau 4×, clar"),
    description: t("Enlarge small or old pictures and keep them sharp, with AI that runs on your computer.", "Mărește pozele mici sau vechi și păstrează-le clare, cu AI care rulează pe calculatorul tău."),
    points: l(["2×, 3× or 4×", "Fast, or more detail", "On your graphics card or processor; nothing is uploaded"], ["2×, 3× sau 4×", "Rapid sau cu mai multe detalii", "Pe placa video sau pe procesor; nimic nu se încarcă pe internet"]),
    formats: "JPG, PNG, WebP, HEIC",
  },
  {
    id: "transcribe", category: "audio", release: "available",
    slug: t("transcribe-audio", "transcriere"),
    name: t("Transcription", "Transcriere"),
    short: t("Speech to text", "Vorbirea în text"),
    description: t("Turn recordings and videos into text or subtitles, in many languages, without uploading anything.", "Transformă înregistrările și videourile în text sau subtitrări, în multe limbi, fără să încarci nimic."),
    points: l(["TXT, DOCX, SRT, VTT", "Almost 100 languages, detected or chosen", "On your PC; nothing is uploaded"], ["TXT, DOCX, SRT, VTT", "Aproape 100 de limbi, detectate sau alese", "Pe calculatorul tău; nimic nu se încarcă pe internet"]),
    formats: "MP3, WAV, M4A, MP4… → TXT, DOCX, SRT, VTT",
  },

  {
    id: "ocr", category: "pdf", release: "available",
    slug: t("ocr", "ocr"),
    name: t("OCR", "OCR"),
    short: t("Text from scans", "Text din scanări"),
    description: t("Make scanned PDFs and photos of documents searchable and copyable, or take their text out.", "Fă PDF-urile scanate și pozele de documente căutabile și copiabile sau scoate textul din ele."),
    points: l(["Searchable PDF, text or Word", "Many languages at once", "Crooked pages straightened"], ["PDF căutabil, text sau Word", "Mai multe limbi deodată", "Paginile strâmbe îndreptate"]),
    formats: "PDF, JPG, PNG → PDF, TXT, DOCX",
  },
  {
    id: "pdf-to-excel", category: "document", release: "available",
    slug: t("pdf-to-excel", "pdf-in-excel"),
    name: t("PDF to Excel", "PDF în Excel"),
    short: t("Tables you can use", "Tabele pe care le poți folosi"),
    description: t("Take the tables out of PDFs, like statements and invoices, into Excel or CSV.", "Scoate tabelele din PDF-uri, cum ar fi extrasele și facturile, în Excel sau CSV."),
    points: l(["Tables with or without lines", "Joined across pages", "Amounts and dates you can add up and sort", "XLSX or CSV"], ["Tabele cu sau fără linii", "Unite peste pagini", "Sume și date pe care le poți aduna și sorta", "XLSX sau CSV"]),
    formats: "PDF → XLSX, CSV",
  },
  {
    id: "pdf-to-powerpoint", category: "document", release: "available",
    slug: t("pdf-to-powerpoint", "pdf-in-powerpoint"),
    name: t("PDF to PowerPoint", "PDF în PowerPoint"),
    short: t("Slides from a PDF", "Diapozitive dintr-un PDF"),
    description: t("Turn a PDF into a presentation, one slide per page.", "Transformă un PDF într-o prezentare, câte un diapozitiv pe pagină."),
    points: l(["16:9, 4:3 or the page's shape", "Pages you choose", "Editable mode in testing"], ["16:9, 4:3 sau forma paginii", "Paginile alese", "Mod editabil, în testare"]),
    formats: "PDF → PPTX",
  },
  {
    id: "pdf-watermark", category: "pdf", release: "available",
    slug: t("watermark-page-numbers-pdf", "filigran-numerotare-pdf"),
    name: t("Watermark and page numbers", "Filigran și numerotare PDF"),
    short: t("Mark every page", "Marchează fiecare pagină"),
    description: t("Add a text or image watermark, or page numbers, to the pages you choose.", "Adaugă un filigran text sau imagine ori numere de pagină, pe paginile alese."),
    points: l(["Text or image", "Position and transparency", "Numbers like 3 / 12"], ["Text sau imagine", "Poziție și transparență", "Numere de forma 3 / 12"]),
    formats: "PDF",
  },

  {
    id: "svg", category: "image", release: "available",
    slug: t("svg-vectorize", "svg-vectorizare"),
    name: t("SVG and vectorize", "SVG și vectorizare"),
    short: t("Vectors both ways", "Vectori în ambele sensuri"),
    description: t("Turn SVG, EMF, WMF and Illustrator files into images or PDF, or trace images into scalable SVG drawings.", "Transformă fișierele SVG, EMF, WMF și Illustrator în imagini sau PDF, ori vectorizează imaginile în desene SVG scalabile."),
    points: l(["SVG, EMF, WMF, AI to PNG, JPG, PDF", "Image to SVG tracing", "PDF stays vector"], ["SVG, EMF, WMF, AI în PNG, JPG, PDF", "Imagine vectorizată în SVG", "PDF-ul rămâne vectorial"]),
    formats: "SVG, EMF, WMF, AI ↔ PNG, JPG, PDF",
  },
  {
    id: "avif", category: "image", release: "available",
    slug: t("avif-jxl-converter", "avif-formate-noi"),
    name: t("AVIF and new formats", "AVIF și formate noi"),
    short: t("Smaller than JPG", "Mai mici decât JPG"),
    description: t("Convert to and from AVIF and the newest image formats, much smaller at the same quality.", "Convertește în și din AVIF și cele mai noi formate de imagine, mult mai mici la aceeași calitate."),
    points: l(["AVIF, JPEG XL", "Speed and quality", "HDR kept where possible"], ["AVIF, JPEG XL", "Viteză și calitate", "HDR păstrat unde se poate"]),
    formats: "AVIF, JXL ↔ JPG, PNG",
  },
  {
    id: "raw", category: "image", release: "available",
    slug: t("raw-to-jpg", "poze-raw"),
    name: t("RAW photos", "Poze RAW"),
    short: t("From the camera", "Din aparatul foto"),
    description: t("Turn camera RAW photos into JPG, PNG, WebP or 16-bit TIFF, at full size.", "Transformă pozele RAW din aparat în JPG, PNG, WebP sau TIFF pe 16 biți, la mărime întreagă."),
    points: l(["Canon, Nikon, Sony, Fujifilm, DNG and more", "As the camera made it, or developed", "Full size, 16-bit TIFF too"], ["Canon, Nikon, Sony, Fujifilm, DNG și altele", "Cum a făcut-o aparatul sau developată", "La mărime întreagă, și TIFF pe 16 biți"]),
    formats: "CR3, CR2, NEF, ARW, RAF, ORF, RW2, DNG… → JPG, PNG, TIFF, WebP",
  },
  {
    id: "metadata", category: "other", release: "available",
    slug: t("remove-metadata", "stergere-metadate"),
    name: t("Remove metadata", "Ștergere metadate"),
    short: t("Location, author, camera", "Locație, autor, cameră"),
    description: t("See and remove hidden data from photos, PDFs, videos and documents before you share them.", "Vezi și șterge datele ascunse din poze, PDF-uri, videouri și documente, înainte să le trimiți."),
    points: l(["Everything, or only the GPS location", "Shows what was found", "Photos stay the right way up"], ["Tot sau doar locația GPS", "Arată ce a găsit", "Pozele rămân drepte"]),
    formats: "JPG, PDF, MP4, DOCX…",
  },

  {
    id: "archives", category: "other", release: "available",
    slug: t("zip-7z-archives", "arhive"),
    name: t("Archives", "Arhive"),
    short: t("ZIP, 7Z, RAR", "ZIP, 7Z, RAR"),
    description: t("Unpack, create and convert archives, safely, with passwords and split parts.", "Despachetează, creează și convertește arhive, în siguranță, cu parole și volume împărțite."),
    points: l(["ZIP, 7Z, RAR, TAR.GZ", "Password", "Split into parts"], ["ZIP, 7Z, RAR, TAR.GZ", "Parolă", "Împărțire în volume"]),
    formats: "ZIP, 7Z, RAR, TAR",
  },
  {
    id: "mail", category: "document", release: "available",
    slug: t("pst-msg-eml-converter", "convertor-pst-msg-eml"),
    name: t("E-mail", "E-mailuri"),
    short: t("PST, MSG, EML, MBOX", "PST, MSG, EML, MBOX"),
    description: t("Open Outlook archives and messages without Outlook: save them as PDF, EML or MBOX, attachments included.", "Deschide arhivele și mesajele Outlook fără Outlook: salvează-le ca PDF, EML sau MBOX, cu tot cu atașamente."),
    points: l(["PST and MSG without Outlook", "The archive's folders kept", "Remote pictures and scripts blocked"], ["PST și MSG fără Outlook", "Cu dosarele arhivei", "Imaginile de pe internet și scripturile blocate"]),
    formats: "PST, OST, MSG, EML, MBOX → PDF, EML, MBOX, HTML",
  },
  {
    id: "subtitles", category: "video", release: "available",
    slug: t("subtitles", "subtitrari"),
    name: t("Subtitles", "Subtitrări"),
    short: t("Convert, shift, burn in", "Convertește, decalează, lipește"),
    description: t("Fix subtitles: convert formats, shift timing, fix broken letters, or burn them into the video.", "Repară subtitrările: schimbă formatul, decalează timpul, repară literele stricate sau lipește-le pe video."),
    points: l(["SRT, VTT, ASS", "Shift by milliseconds", "Broken letters fixed, any language"], ["SRT, VTT, ASS", "Decalare la milisecundă", "Litere stricate reparate, în orice limbă"]),
    formats: "SRT, VTT, ASS",
  },
  {
    id: "ebooks", category: "document", release: "available",
    slug: t("ebook-converter", "carti-electronice"),
    name: t("E-books", "Cărți electronice"),
    short: t("EPUB, Kindle", "EPUB, Kindle"),
    description: t("Convert e-books for Kindle, Kobo or any reader, with your cover and font size.", "Convertește cărți electronice pentru Kindle, Kobo sau orice cititor, cu coperta și mărimea literelor dorite."),
    points: l(["Kindle (MOBI, AZW3), EPUB, FB2, Word, Markdown in", "EPUB for any reader and Kindle, PDF sized for e-readers, Word, text out", "Cover, title, author"], ["Intră Kindle (MOBI, AZW3), EPUB, FB2, Word, Markdown", "Ies EPUB pentru orice cititor și Kindle, PDF pe mărimea cititorului, Word, text", "Copertă, titlu, autor"]),
    formats: "EPUB, MOBI, AZW3, FB2, DOCX, MD → EPUB, PDF, DOCX, TXT",
  },
  {
    id: "fonts", category: "other", release: "available",
    slug: t("font-converter", "fonturi"),
    name: t("Fonts", "Fonturi"),
    short: t("TTF, OTF, WOFF2", "TTF, OTF, WOFF2"),
    description: t("Convert fonts for the web or to install, and keep only the letters you need.", "Convertește fonturi pentru web sau de instalat și păstrează doar literele de care ai nevoie."),
    points: l(["TTF, OTF, WOFF, WOFF2, TTC", "Only the writing systems you choose, or your own text", "Web kit: WOFF2, CSS and a page to try it"], ["TTF, OTF, WOFF, WOFF2, TTC", "Doar alfabetele alese sau textul tău", "Pachet web: WOFF2, CSS și o pagină de probă"]),
    formats: "TTF, OTF, WOFF, WOFF2, TTC",
  },

  {
    id: "design-files", category: "image", release: "available",
    slug: t("psd-ai-eps-converter", "psd-design"),
    name: t("PSD and design files", "PSD și formate de design"),
    short: t("Without Photoshop", "Fără Photoshop"),
    description: t("Open and convert Photoshop, Illustrator and EPS files without having those programs.", "Deschide și convertește fișiere Photoshop, Illustrator și EPS fără să ai programele respective."),
    points: l(["PSD, PSB, AI, EPS", "8, 16 and 32 bits; RGB, grey, CMYK", "Transparency kept"], ["PSD, PSB, AI, EPS", "8, 16 și 32 de biți; RGB, gri, CMYK", "Transparența păstrată"]),
    formats: "PSD, PSB, AI, EPS → PNG, JPG, WebP, TIFF",
  },
  {
    id: "cad-3d", category: "other", release: "available",
    slug: t("3d-cad-converter", "3d-cad"),
    name: t("3D models and CAD", "Modele 3D și CAD"),
    short: t("STL, OBJ, GLB, 3MF, FBX, DXF", "STL, OBJ, GLB, 3MF, FBX, DXF"),
    description: t("Convert 3D models between formats for printing or the web, and DXF drawings to PDF, SVG or pictures.", "Convertește modele 3D între formate, pentru imprimare sau web, și desene DXF în PDF, SVG sau imagini."),
    points: l(["STL, OBJ, PLY, GLB, 3MF; FBX in", "DXF to PDF, SVG, PNG", "Units and up axis put right"], ["STL, OBJ, PLY, GLB, 3MF; FBX la intrare", "DXF în PDF, SVG, PNG", "Unități și axa în sus puse corect"]),
    formats: "STL, OBJ, PLY, GLB, 3MF, FBX, DXF",
  },
  {
    id: "tts", category: "audio", release: "available",
    slug: t("text-to-speech", "text-in-voce"),
    name: t("Text to speech", "Text în voce"),
    short: t("Listen to your texts", "Ascultă-ți textele"),
    description: t("Turn texts and documents, or text you type, into natural-sounding audio, with voices that run on your computer.", "Transformă textele și documentele, sau textul pe care îl scrii, în audio cu voci naturale, care rulează pe calculatorul tău."),
    points: l(["Every voice installed in Windows", "Natural AI voices in English, Spanish, French, Italian, Portuguese and Hindi", "Type or paste text, or add files", "MP3 or WAV"], ["Toate vocile instalate în Windows", "Voci AI naturale în engleză, spaniolă, franceză, italiană, portugheză și hindi", "Scrii sau lipești text, ori adaugi fișiere", "MP3 sau WAV"]),
    formats: "TXT, MD, DOCX → MP3, WAV",
  },
];

export const AVAILABLE = TOOLS.filter((x) => x.release === "available");
export const UPCOMING = TOOLS.filter((x) => x.release !== "available");

export const CATEGORIES: { id: Category; name: T; color: string }[] = [
  { id: "pdf", name: t("PDF", "PDF"), color: "#d4552c" },
  { id: "image", name: t("Images", "Imagini"), color: "#138a63" },
  { id: "document", name: t("Documents", "Documente"), color: "#2667b0" },
  { id: "video", name: t("Video", "Video"), color: "#7166d6" },
  { id: "audio", name: t("Audio", "Audio"), color: "#9a5bc8" },
  { id: "other", name: t("Other", "Altele"), color: "#5d6b7d" },
];

export const toolUrl = (tool: Tool, lang: Lang) => (lang === "ro" ? `/ro/unelte/${tool.slug.ro}/` : `/tools/${tool.slug.en}/`);

/** Icon of each tool (names in components/Icon.astro). */
export const TOOL_ICONS: Record<string, string> = {
  "pdf-compress": "file-zip", "pdf-to-word": "file-word", "pdf-merge": "files", "images-to-pdf": "file-pdf",
  "word-to-pdf": "file-export", "pdf-to-images": "photo", "image-compress": "photo-down", "image-convert": "exchange",
  "heic-to-jpg": "phone", "video-to-mp3": "music", "pdf-split": "scissors", "image-resize": "resize", "pdf-password": "key",
  icons: "icons", "video-compress": "movie", "video-convert": "movie", "audio-convert": "music", "pdf-pages": "rotate",
  "media-trim": "scissors", "video-gif": "gif", "media-join": "files", "office-to-pdf": "slides", tabular: "table",
  markdown: "code", "html-to-pdf": "code", "remove-background": "wand", "ai-upscale": "zoom", transcribe: "mic",
  ocr: "ocr", "pdf-to-excel": "table", "pdf-to-powerpoint": "slides", "pdf-watermark": "stamp", svg: "vector",
  avif: "sparkles", raw: "camera", metadata: "eraser", archives: "archive", mail: "mail", subtitles: "subtitles", ebooks: "book",
  fonts: "font", "design-files": "layers", "cad-3d": "cube", tts: "speaker",
};

/**
 * Every tool's permanent number, the same as in the app (ui/src/lib/numbers.ts), so people
 * can name a tool in any language ("ID:12"). Never change a number and never reuse one:
 * a new tool takes the next free number.
 */
const NUMBERS: Record<string, number> = {
  "pdf-compress": 1, "pdf-to-word": 2, "pdf-merge": 3, "images-to-pdf": 4, "word-to-pdf": 5,
  "pdf-to-images": 6, "image-compress": 7, "image-convert": 8, "heic-to-jpg": 9, "video-to-mp3": 10,
  "pdf-split": 11, "pdf-pages": 12, "pdf-password": 13, "pdf-watermark": 14, ocr: 15,
  "pdf-to-excel": 16, "pdf-to-powerpoint": 17,
  "image-resize": 18, "ai-upscale": 19, "remove-background": 20, raw: 21, avif: 22, svg: 23,
  icons: 24, "design-files": 25,
  "video-compress": 26, "video-convert": 27, "video-gif": 28, "media-trim": 29, "media-join": 30,
  subtitles: 31,
  "audio-convert": 32, transcribe: 33, tts: 34,
  "office-to-pdf": 35, "html-to-pdf": 36, markdown: 37, tabular: 38, ebooks: 39, mail: 40,
  archives: 41, fonts: 42, metadata: 43, "cad-3d": 44,
};

/** The tool's number ("ID:12" in the app). */
export const toolNum = (t: Tool): number => NUMBERS[t.id] ?? 999;
