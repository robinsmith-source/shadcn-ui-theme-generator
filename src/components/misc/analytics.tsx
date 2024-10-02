export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <script
      async
      data-website-id={import.meta.env.VITE_PUBLIC_UMAMI_URL}
      src={`${import.meta.env.VITE_PUBLIC_UMAMI_WEBSITE_ID}/script.js`}
    />
  );
}
