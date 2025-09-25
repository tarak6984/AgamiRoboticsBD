import React from 'react';

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agami Robotics BD",
    "alternateName": "আগামী রোবটিক্স বিডি",
    "description": "Empowering Bangladeshi students with affordable robotics kits and Bengali tutorials for hands-on STEM education.",
    "url": "https://agamiroboticsbd.com",
    "logo": "https://agamiroboticsbd.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1XXX-XXXXXX",
      "contactType": "Customer Service",
      "availableLanguage": ["Bengali", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD",
      "addressRegion": "Dhaka",
      "addressLocality": "Dhaka"
    },
    "sameAs": [
      "https://facebook.com/agamiroboticsbd",
      "https://youtube.com/@agamiroboticsbd",
      "https://linkedin.com/company/agamiroboticsbd"
    ],
    "foundingDate": "2024",
    "industry": "Educational Technology",
    "slogan": "Inspiring Youth to Innovate - Building the Future of STEM Education in Bangladesh",
    "founder": {
      "@type": "Person",
      "name": "Tarak Md Shabbir",
      "jobTitle": "Founder & CEO",
      "description": "Passionate entrepreneur dedicated to democratizing STEM education in Bangladesh"
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Agami Robotics Kits",
    "description": "Affordable robotics education kits with Bengali tutorials designed for Bangladeshi students",
    "brand": {
      "@type": "Brand",
      "name": "Agami Robotics BD"
    },
    "category": "Educational Technology",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BDT",
      "lowPrice": "2500",
      "highPrice": "35000",
      "availability": "https://schema.org/PreOrder"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Agami Robotics BD",
    "url": "https://agamiroboticsbd.com",
    "description": "Official website of Agami Robotics BD - Affordable robotics education for Bangladeshi students",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://agamiroboticsbd.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const founderData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tarak Md Shabbir",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Agami Robotics BD"
    },
    "description": "Passionate entrepreneur and founder of Agami Robotics BD, dedicated to democratizing STEM education in Bangladesh through affordable robotics kits and Bengali learning content.",
    "nationality": "Bangladeshi",
    "alumniOf": "Bangladesh",
    "knowsAbout": ["Robotics", "STEM Education", "Entrepreneurship", "Educational Technology", "Bangladesh"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderData) }}
      />
    </>
  );
};

export default StructuredData;