// Upload.js
import React, { useState } from "react";
import { useCSVReader } from "react-papaparse";
import { useNavigate } from "react-router-dom";


export default function CSVReader({
  importData,
  products,
  productList,
  pallets,
  arrayContains,
  determinePalletCarton,
  setCurrency,
  currency,
  setDisclaimerText,
  setSelectedCompany,
}) {
  const { CSVReader } = useCSVReader();
  const navigate = useNavigate();

  const initialize = async (results, productList) => {
    await importData(results.data);
    await products(results.data);
    await pallets(results.data);
    await determinePalletCarton(results.data);

    await arrayContains("total-pallet", results.data, "pallet");
    await arrayContains("product-total", results.data, "product");
    await arrayContains("packing-details", results.data, "packing");
    await navigate("/results");
  };

  return (
    <div className="loginContainer">
      <CSVReader
        onUploadAccepted={(results) => {
          initialize(results, productList);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <div id="uploadForm">
              <div className="uploadInner">
                <img src="/images/tsa-black-logo.png" alt="TSA Logo" />

                <div>
                  <select onChange={(e) => { setCurrency(e.target.value) }}>
                    <option value="USD">USD</option>
                    <option value="AUD">AUD</option>
                    <option value="NZD">NZD</option>
                  </select>
                  {/* <span>Current Currency in Upload: {currency}</span> */}
                </div>
                <select onChange={(e) => setSelectedCompany(e.target.value)}>
                  <option value="TSAOutdoors">TSAOutdoors</option>
                  <option value="ZeroTech">ZeroTech</option>
                </select>
                <select onChange={(e) => setDisclaimerText(e.target.value)}>
                  <option value="Value for Customs purposes only.">Value for Customs purposes only.</option>
                  <option value="These items are for demonstration purposes.">These items are for demonstration purposes.</option>
                </select>
                <button type="button" {...getRootProps()}>
                  Browse file
                </button>
                <div id="instructionContainer">
                  <p>Upload a CSV file to generate a PDF invoice.</p>
                  <p>
                    You can download the template&nbsp;
                    <a href="/template/invoiceTemplate.csv">here.</a>
                  </p>
                  <p>Once uploaded, press ctrl+P to print.</p>
                </div>
              </div>
            </div>
            <ProgressBar />
          </>
        )}
      </CSVReader>
    </div>
  );
}
