// Questions and answers, grouped by topic: /faq/ shows the groups, the home page the first few.
export const FAQ_GROUPS: { title: string; items: [string, string][] }[] = [
  {
    title: "The basics",
    items: [
      ["Is it really free?", "Yes, forever. There's no paid version, no trial, no watermark, no limit on files or pages, and no account. The app shows no ads."],
      ["Are my files uploaded anywhere?", "No. Every conversion runs on your computer. The app doesn't even need the internet, apart from downloading a few large programs once, the first time a tool needs them, and only when you click to allow it."],
      ["Does it run on Mac or Linux?", "No, only on Windows 10 and 11, 64-bit."],
      ["My antivirus complains. Is it safe?", "The installer and every program in it are digitally signed by Software Hive S.R.L. You can check the file against the SHA-256 on the download page, and the source code is public."],
    ],
  },
  {
    title: "Converting",
    items: [
      ["Do I need Microsoft Word?", "No. If you have Word, PDF to Word and Word to PDF use it, because it gives the best result. Without it, the app downloads LibreOffice or pdf2docx once, both free."],
      ["Why does my PDF lose its backgrounds in Word?", "Presentations and designs (coloured backgrounds, very large pages) can't become editable text without losing their look. Pick “Exact look” for them: each page becomes a picture in Word, exactly like the PDF. The app picks it by itself when it recognises such a PDF."],
      ["My iPhone photos won't open. Can it help?", "Yes. HEIC to JPG converts them the right way up, with their date and place kept. It works even on PCs without Microsoft's HEIF extension."],
      ["Can I add a whole folder, or files from a link?", "Yes. Under “Add or drop files” there are two more ways. “From a folder, by a pattern” finds, for example, every PDF in a folder and its subfolders. “From a link” downloads the files you paste links to into your Downloads folder, then adds them; Google Drive, Dropbox and GitHub share links work too."],
      ["Where do the results go?", "Next to the original files, as new files. The originals are never changed. You can pick another folder, a subfolder or another name."],
    ],
  },
  {
    title: "Updates",
    items: [
      ["Why doesn't the app update itself?", "So that nothing changes on your PC without you. There is no updater running in the background, nothing installs while you work, and a version that works well for you stays exactly as it is. Once a day the app checks whether a new version is out and shows a short note. Whether and when to install it is up to you."],
      ["Why does the update note send me to this website?", "Because this is where each version is published: the signed installer, its SHA-256 checksum and what changed, so you can read before you install. It's also how the app stays free. This website may show ads in the future; the app never will."],
    ],
  },
];

export const FAQ: [string, string][] = FAQ_GROUPS.flatMap((g) => g.items);
