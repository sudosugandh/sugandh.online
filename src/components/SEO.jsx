import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "NeuraStack Solutions - End-to-End Business Technology Services",
  description = "Leading technology company specializing in full-stack development, DevOps, AI/ML integration, and cloud solutions. Transform your business with cutting-edge technology.",
  keywords = "full stack development, DevOps, AI ML integration, cloud solutions, business automation, mobile app development, React, Node.js, AWS, Azure",
  image = "/og-image.jpg",
  url = "https://neurastack.com",
  type = "website",
  author = "NeuraStack Solutions",
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes("NeuraStack Solutions") ? title : `${title} | NeuraStack Solutions`
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NeuraStack Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@neurastack" />
      <meta name="twitter:creator" content="@neurastack" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NeuraStack Solutions" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NeuraStack Solutions",
          "url": "https://neurastack.com",
          "logo": "https://neurastack.com/logo.png",
          "description": description,
          "foundingDate": "2019",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2/139, Sec-7, Amar Shaheed Path, Gomati Nagar Extension",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226002",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-6388337594",
              "contactType": "customer service",
              "email": "neurastack@gmail.com"
            }
          ],
          "sameAs": [
            "https://instagram.com/neurastack",
            "https://linkedin.com/company/neurastack",
            "https://twitter.com/neurastack",
            "https://github.com/neurastack"
          ],
          "offers": [
            {
              "@type": "Offer",
              "name": "Full Stack Development",
              "description": "Modern web and mobile application development using React, Node.js, and cutting-edge technologies."
            },
            {
              "@type": "Offer",
              "name": "DevOps & CI/CD",
              "description": "Automated deployment pipelines and infrastructure management for seamless delivery."
            },
            {
              "@type": "Offer",
              "name": "AI/ML Integration",
              "description": "Intelligent automation and machine learning solutions to enhance business operations."
            },
            {
              "@type": "Offer",
              "name": "Cloud Solutions",
              "description": "Scalable cloud infrastructure and deployment strategies for optimal performance."
            }
          ]
        })}
      </script>
      
      {/* Google Analytics */}
      {import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.VITE_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}', {
                page_title: '${fullTitle}',
                page_location: '${url}',
                custom_map: {
                  'custom_parameter_1': 'service_type',
                  'custom_parameter_2': 'user_engagement'
                }
              });
            `}
          </script>
        </>
      )}
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && <meta property="article:author" content={author} />}
    </Helmet>
  )
}

export default SEO