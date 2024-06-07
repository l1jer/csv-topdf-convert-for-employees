import "./App.css";
import Upload from "./Upload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Results from "./Results";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [palletList, setPalletList] = useState([]);
  const [palletTotal, setPalletTotal] = useState("");
  const [productTotal, setProductTotal] = useState("");
  const [packingDetails, setPackingDetails] = useState("");
  const [palletCarton, setPalletCarton] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [disclaimerText, setDisclaimerText] = useState("Value for Customs purposes only.");
  const [selectedCompany, setSelectedCompany] = useState("TSAOutdoors");

  const importData = (results) => {
    setAllData(results);
  };

  const products = (results) => {
    Object.values(results).map(function (key) {
      if (key[0] === "productList") {
        setProductList((productList) => [...productList, key]);
      }
    });
  };

  const pallets = (results) => {
    Object.values(results).map(function (key) {
      if (key[0] === "pallet" || key[0] === "carton") {
        setPalletList((palletList) => [...palletList, key]);
      }
    });
  };

  const determinePalletCarton = (results) => {
    Object.values(results).map(function (key) {
      if (key[0] === "pallet") {
        setPalletCarton("Pallets");
      } else if (key[0] === "carton") {
        setPalletCarton("Carton");
      }
    });
  };

  const arrayContains = (lookingFor, array, category) => {
    return array.map((item) => {
      if (item.indexOf(lookingFor) > -1) {
        if (category === "pallet") {
          setPalletTotal(item[1]);
        }
        if (category === "product") {
          setProductTotal(item[1]);
        }
        if (category === "packing") {
          setPackingDetails(item[1]);
        }
      }
    });
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Upload
                importData={importData}
                productList={productList}
                products={products}
                pallets={pallets}
                arrayContains={arrayContains}
                determinePalletCarton={determinePalletCarton}
                currency={currency}
                setCurrency={setCurrency}
                setDisclaimerText={setDisclaimerText}
                setSelectedCompany={setSelectedCompany}
              />
            }
          />
          {allData.length > 0 ? (
            <Route
              path="/results"
              element={
                <Results
                  allData={allData}
                  productList={productList}
                  palletList={palletList}
                  palletTotal={palletTotal}
                  productTotal={productTotal}
                  packingDetails={packingDetails}
                  palletCarton={palletCarton}
                  currency={currency}
                  disclaimerText={disclaimerText}
                  selectedCompany={selectedCompany}
                />
              }
            />
          ) : (
            <Route
              path="/results"
              element={
                <Upload
                  importData={importData}
                  productList={productList}
                  products={products}
                  pallets={pallets}
                  arrayContains={arrayContains}
                  determinePalletCarton={determinePalletCarton}
                  currency={currency}
                  setCurrency={setCurrency}
                  setSelectedCompany={setSelectedCompany}
                />
              }
            />
          )}
          <Route
            path="*"
            element={
              <Upload
                importData={importData}
                productList={productList}
                products={products}
                pallets={pallets}
                arrayContains={arrayContains}
                determinePalletCarton={determinePalletCarton}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;