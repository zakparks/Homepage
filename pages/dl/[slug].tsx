import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { track } from "@vercel/analytics";

const DESTS: Record<string, { url: string; event: string; label: string }> = {
  "resume-pdf": {
    url: "https://1drv.ms/b/c/858037905fcd6f03/EcIpWWbk6ulIpb00J8mNTAMBDq8zNGfMxaIxHXjOkguh3A?e=9ZJA1f",
    event: "download_resume_pdf",
    label: "Resume PDF",
  },
  "resume-doc": {
    url: "https://1drv.ms/w/s!AgNvzV-QN4CFgbhELYVD8rmgE1Zbdw?e=wKo9Su",
    event: "download_resume_doc",
    label: "Resume DOC",
  },
};

// use a redirect instead of direct links to make vercel track the link click as a page view
export default function DownloadRedirect() {
  const router = useRouter();

  const dest = useMemo(() => {
    const slug = String(router.query.slug || "");
    return DESTS[slug];
  }, [router.query.slug]);

  useEffect(() => {
    if (!dest) return;

    // Fire a custom analytics event
    track(dest.event, { ts: Date.now() });

    // Let the page mount (so the page view is recorded) then redirect
    const id = setTimeout(() => {
      window.location.href = dest.url;
    }, 100); 

    return () => clearTimeout(id);
  }, [dest]);

  if (!dest) {
    return (
      <main style={{ padding: "2rem", color: "#eaeaea", background: "#1e1e1e", minHeight: "100vh" }}>
        <h1>Invalid download link</h1>
        <p>That download route doesn&apos;t exist.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", color: "#eaeaea", background: "#1e1e1e", minHeight: "100vh" }}>
      <h1>Preparing document...</h1>
      <p>
        Redirecting to OneDrive. If nothing happens,{" "}
        <a href={dest.url} style={{ color: "#9cdcfe", textDecoration: "underline" }}>
          click here
        </a>.
      </p>
    </main>
  );
}
