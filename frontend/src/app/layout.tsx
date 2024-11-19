import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import { query } from "@/lib/apollo/client";
import { gql } from "@apollo/client";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query({
    query: gql`
      query GetMetadata {
        metadata {
          title
          description
          favicon {
            url
          }
        }
      }
    `,
  });

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    icons: {
      icon: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.metadata.favicon.url}`
    }
  }
}

export default function RootLayout({children}: Readonly<{children: ReactNode}>) 
{
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
