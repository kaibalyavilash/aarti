const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RawSection({ html }) {
  const processedHtml = BASE_PATH
    ? html.replace(/(href|src)="\/(?!\/)/g, `$1="${BASE_PATH}/`)
    : html;
  return <div dangerouslySetInnerHTML={{ __html: processedHtml }} />;
}
