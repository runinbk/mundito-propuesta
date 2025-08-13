import type { SVGProps } from "react";

export const MunditoysLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 20"
    className="h-8 w-auto"
    {...props}
  >
    <text
      x="50"
      y="15"
      fontFamily="Space Grotesk, sans-serif"
      fontSize="16"
      fontWeight="bold"
      fill="hsl(var(--primary))"
      textAnchor="middle"
    >
      MundiToys
    </text>
  </svg>
);

export const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.528 8.003c-.22.282-.42.583-.6 1.253v7.244a4.5 4.5 0 1 0-4.5-4.5h.001c.25.012.5.028.75.05v2.793c-.25-.02-.5-.034-.75-.04a1.75 1.75 0 1 1 1.75 1.75v-6.5a1.59 1.59 0 0 1 .6-1.253c.22-.282.42-.583.6-1.253Z" />
    <path d="M17 3.75a.75.75 0 0 1 .75.75v11.5a4.5 4.5 0 1 1-4.5-4.5h.001c.25.012.5.028.75.05v2.793c-.25-.02-.5-.034-.75-.04a1.75 1.75 0 1 1 1.75 1.75V4.5a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
    </svg>
);
