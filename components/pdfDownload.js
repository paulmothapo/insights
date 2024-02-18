import React, { useState } from 'react';

const PdfDownloadButton = ({ content }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true); 


    const { PDFDownloadLink, Page, Text, Document } = await import('@react-pdf/renderer');


    const PdfDocument = ({ content }) => (
      <Document>
        <Page>
          <Text>{content}</Text>
        </Page>
      </Document>
    );

    const downloadLink = (
      <PDFDownloadLink document={<PdfDocument content={content} />} fileName="article.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    );

    setLoading(true); 
  };

  return (
    <button className='text-mildgreen md:ml-52 ml-6 font-light' onClick={handleClick}>
      Download
    </button>
  );
};

export default PdfDownloadButton;
