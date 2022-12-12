import { useState, useEffect } from "react";
import React from "react";

export default function Main() { 

  const [fromstate, setfromState] = useState('USD')
  const [tostate, settoState] = useState('TJS')
  const [amount, setamount] = useState()
  const [results, setresults] = useState()
  const [state2, setstate2] = useState('')
  const [bool, setbool] = useState(true)

  const fromChange = (e) =>{
    setfromState(e.target.value)
  }

  const ToChange = (e) =>{
    settoState(e.target.value)
   
  }

  const amountFunc = (e) =>{
    setamount(e.target.value)
    setstate2(e.target.value.slice(0,9))
    setbool(false)
  }
  useEffect(() =>{
    btnClick();
    
  }, [amount, fromstate, tostate])
  const btnClick = () =>{
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${fromstate}`)
    .then(res => res.json())
    .then(data => {      
      console.log(data);
      const rate = data.rates[tostate]
      const convert = () => {
          return amount * rate
      }
      setresults(convert().toLocaleString())
    })
  }
 
  const resultremover = () =>{
    if(state2 === ''){
      setbool(true)
    }else{
      setbool(false)
    }
  }
  

  return (
    <div className="main">
      <div className="stats">
        <div className="amount">
          <h3 className="h6text">Amount</h3>
          <input type="number"  value = {state2} onKeyUp={resultremover} onChange={amountFunc} id="input" placeholder="Enter the amount" />
        </div>
        <div className="from">
          <h3 className="h6text">From</h3>
          <select  value = { fromstate }name="select_from" id="select_from" className="select" onChange = {fromChange}>
            <option value="USD">USD - US Dollar</option>
            <option value="AED">AED - Emirati Dirham</option>
            <option value="AFN">AFN - Afghan Afghani</option>
            <option value="ALL">ALL - Albanian Lek</option>
            <option value="AMD">AMD - Armenian Dram</option>
            <option value="ANG">ANG - Dutch Guilder</option>
            <option value="AOA">AOA - Angolan Kwanza</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="AWG">AWG - Aruban or Dutch Guilder</option>
            <option value="AZN">AZN - Azerbaijan Manat</option>
            <option value="BAM">BAM - Bosnian Convertible Mark</option>
            <option value="BBD">BBD - Barbadian or Bajan Dollar</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="BGN">BGN - Bulgarian Lev</option>
            <option value="BHD">BHD - Bahraini Dinar</option>
            <option value="BIF">BIF - Burundian Franc</option>
            <option value="BMD">BMD - Bermudian Dollar</option>
            <option value="BND">BND - Bruneian Dollar</option>
            <option value="BOB">BOB - Bolivian Boliviano</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="BSD">BSD - Bahamian Dollar</option>
            <option value="BTC">BTC - Bitcoin</option>
            <option value="BTN">BTN - Bhutanese Ngultrum</option>
            <option value="BWP">BWP - Botswana Pula</option>
            <option value="BYN">BYN - Belarusian Ruble</option>
            <option value="BZD">BZD - Belizean Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CDF">CDF - Congolese Franc</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CLF">CLF - Central African Franc</option>
            <option value="CLP">CLP - Chilean Peso</option>
            <option value="CNH">CNH - Chinese Yuan Renminbi</option>
            <option value="CNY">CNY - Chinese Yuan Renminbi</option>
            <option value="COP">COP - Colombian Peso</option>
            <option value="CRC">CRC - Costa Rican Colon</option>
            <option value="CUC">CUC - Cuban Convertible Peso</option>
            <option value="CUP">CUP - Cuban Peso</option>
            <option value="CVE">CVE - Cape Verdean Escudo</option>
            <option value="CZK">CZK - Czesh Koruna</option>
            <option value="DJF">DJF - Djiboutian Franc</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="DOP">DOP - Dominican Peso</option>
            <option value="DZD">DZD - Algerian Dinar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="ERN">ERN - Eritrean Nakfa</option>
            <option value="ETB">ETB - Ethiopian Birr</option>
            <option value="EUR">EUR - Euro</option>
            <option value="FJD">FJD - Fijian Dollar</option>
            <option value="FKP">FKP - Falkland Island Pound</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="GEL">GEL - Georgian Lari</option>
            <option value="GGP">GGP - Guernsey Pound</option>
            <option value="GHS">GHS - Ghanaian Cedi</option>
            <option value="GIP">GIP - Gibraltar Pound</option>
            <option value="GMD">GMD - Gambian Dalasi</option>
            <option value="GNF">GNF - Guinean Franc</option>
            <option value="GTQ">GTQ - Guatemalan Quetzal</option>
            <option value="GYD">GYD - Guyanese Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="HNL">HNL - Honduran Lempira</option>
            <option value="HRK">HRK - Croatian Kuna</option>
            <option value="HTG">HTG - Haitian Gourde</option>
            <option value="HUF">HUF - Hungarian Forint</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="ILS">ILS - Israel Shekel</option>
            <option value="IMP">IMP - Isle of Man Pound</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="IQD">IQD - Iraqi Dinar</option>
            <option value="IRR">IRR - Iranian Rial</option>
            <option value="ISK">ISK - Icelandic Krona</option>
            <option value="JEP">JEP - Jersey Pound</option>
            <option value="JMD">JMD - Jamaican Dollar</option>
            <option value="JOD">JOD - Jordanian Dinar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="KES">KES - Kenyan Shilling</option>
            <option value="KGS">KGS - Krygyzstani Som</option>
            <option value="KHR">KHR - Cambodian Riel</option>
            <option value="KMF">KMF - Comorian Franc</option>
            <option value="KPW">KPW - North Korean Won</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="KWD">KWD - Kuwaiti Dinar</option>
            <option value="KYD">KYD - Caymanian Dollar</option>
            <option value="KZT">KZT - Kazakhstani Tenge</option>
            <option value="LAK">LAK - Lao Kip</option>
            <option value="LBP">LBP - Lebanese Pound</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="LRD">LRD - Liberian Dollar</option>
            <option value="LSL">LSL - Basotho Loti</option>
            <option value="LYD">LYD - Libyan Dinar</option>
            <option value="MAD">MAD - Moroccan Dirham</option>
            <option value="MDL">MDL - Moldovan Leu</option>
            <option value="MGA">MGA - Malagasy Ariary</option>
            <option value="MKD">MKD - Macedonian Denar</option>
            <option value="MMK">MMK - Burmese Kyat</option>
            <option value="MNT">MNT - Mongolian Tughrik</option>
            <option value="MOP">MOP - Macau Pataca</option>
            <option value="MRO">MRO - Mauritanian Ouguiya</option>
            <option value="MRU">MRU - Mauritanian Ouguiya</option>
            <option value="MUR">MUR - Mauritian Rupee</option>
            <option value="MVR">MVR - Maldivian Rufiyaa</option>
            <option value="MWK">MWK - Malawian Kwacha</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="MZN">MZN - Mozambican Metical</option>
            <option value="NAD">NAD - Namibian Dollar</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="NIO">NIO - Nicaraguan Cordoba</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="NPR">NPR - Nepalese Rupee</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="OMR">OMR - Oman Rial</option>
            <option value="PAB">PAB - Panamanian Balboa</option>
            <option value="PEN">PEN - Peruvian Sol</option>
            <option value="PGK">PGK - Papua New Guinean Kina</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="PYG">PYG - Paraguayan Guarani</option>
            <option value="QAR">QAR - Qatari Riyal</option>
            <option value="RON">RON - Romanian Leu</option>
            <option value="RSD">RSD - Serbian Dollar</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="RWF">RWF - Rwandan Franc</option>
            <option value="SAR">SAR - Saudi Arabian Riyal</option>
            <option value="SBD">SBD - Solomon Islander Dollar</option>
            <option value="SCR">SCR - Seychellois Rupee</option>
            <option value="SDG">SDG - Sudanese Pound</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="SHP">SHP - Saint Helenian Pound</option>
            <option value="SLL">SLL - Sierra Leonean Leone</option>
            <option value="SOS">SOS - Somali Shilling</option>
            <option value="SRD">SRD - Surinamese Dollar</option>
            <option value="SSP">SSP - South Sudanese Pound</option>
            <option value="STD">STD - Sao Tomean Dobra</option>
            <option value="STN">STN - Sao Tomean Dobra</option>
            <option value="SVC">SVC - Salvodoran Colon</option>
            <option value="SYP">SYP - Syrian Pound</option>
            <option value="SZL">SZL - Swazi Lilangeni</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="TJS">TJS - Tajikistani Somoni</option>
            <option value="TMT">TMT - Turmenistani Manat</option>
            <option value="TND">TND - Tunisian Dollar</option>
            <option value="TOP">TOP - Tongan Pa'anga</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="TTD">TTD - Trinidadian Dollar</option>
            <option value="TWD">TWD - Taiwan New Dollar</option>
            <option value="TZS">TZS - Tanzanian Shilling</option>
            <option value="UAH">UAH - Ukranian Hryvnia</option>
            <option value="UGX">UGX - Ugandan Shilling</option>
            <option value="UYU">UYU - Uruguayian Peso</option>
            <option value="UZS">UZS - Uzbekistani Som</option>
            <option value="VES">VES - Venezuelan Bolivar</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="VUV">VUV - Ni-Vanuatu Vatu</option>
            <option value="WST">WST - Samoan Tala</option>
            <option value="XAF">XAF - Central African Franc</option>
            <option value="XAG">XAG - Silver Ounce</option>
            <option value="XAU">XAU - Gold Ounce</option>
            <option value="XCD">XCD - East Caribbean Dollar</option>
            <option value="XDR">XDR - IMR Special Drawing Rights</option>
            <option value="XOF">XOF - CFA Franc</option>
            <option value="XPD">XPD - Palladium Ounce</option>
            <option value="XPF">XPF - CFP Franc</option>
            <option value="XPT">XPT - Platinum Ounce</option>
            <option value="YER">YER - Yemeni Rial</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="ZMW">ZMW - Zambian Kwacha</option>
            <option value="ZWL">ZWL - Zimbabwean Dollar</option>
          </select>
        </div>
        <div className="to">
          <h3 className="h6text">To</h3>
          <select value = {tostate} name="select_to" id="select_to" className="select" onChange = {ToChange}>
            <option value="TJS">TJS - Tajikistani Somoni</option>
            <option value="AED">AED - Emirati Dirham</option>
            <option value="AFN">AFN - Afghan Afghani</option>
            <option value="ALL">ALL - Albanian Lek</option>
            <option value="AMD">AMD - Armenian Dram</option>
            <option value="ANG">ANG - Dutch Guilder</option>
            <option value="AOA">AOA - Angolan Kwanza</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="AWG">AWG - Aruban or Dutch Guilder</option>
            <option value="AZN">AZN - Azerbaijan Manat</option>
            <option value="BAM">BAM - Bosnian Convertible Mark</option>
            <option value="BBD">BBD - Barbadian or Bajan Dollar</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="BGN">BGN - Bulgarian Lev</option>
            <option value="BHD">BHD - Bahraini Dinar</option>
            <option value="BIF">BIF - Burundian Franc</option>
            <option value="BMD">BMD - Bermudian Dollar</option>
            <option value="BND">BND - Bruneian Dollar</option>
            <option value="BOB">BOB - Bolivian Boliviano</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="BSD">BSD - Bahamian Dollar</option>
            <option value="BTC">BTC - Bitcoin</option>
            <option value="BTN">BTN - Bhutanese Ngultrum</option>
            <option value="BWP">BWP - Botswana Pula</option>
            <option value="BYN">BYN - Belarusian Ruble</option>
            <option value="BZD">BZD - Belizean Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CDF">CDF - Congolese Franc</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CLF">CLF - Central African Franc</option>
            <option value="CLP">CLP - Chilean Peso</option>
            <option value="CNH">CNH - Chinese Yuan Renminbi</option>
            <option value="CNY">CNY - Chinese Yuan Renminbi</option>
            <option value="COP">COP - Colombian Peso</option>
            <option value="CRC">CRC - Costa Rican Colon</option>
            <option value="CUC">CUC - Cuban Convertible Peso</option>
            <option value="CUP">CUP - Cuban Peso</option>
            <option value="CVE">CVE - Cape Verdean Escudo</option>
            <option value="CZK">CZK - Czesh Koruna</option>
            <option value="DJF">DJF - Djiboutian Franc</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="DOP">DOP - Dominican Peso</option>
            <option value="DZD">DZD - Algerian Dinar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="ERN">ERN - Eritrean Nakfa</option>
            <option value="ETB">ETB - Ethiopian Birr</option>
            <option value="EUR">EUR - Euro</option>
            <option value="FJD">FJD - Fijian Dollar</option>
            <option value="FKP">FKP - Falkland Island Pound</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="GEL">GEL - Georgian Lari</option>
            <option value="GGP">GGP - Guernsey Pound</option>
            <option value="GHS">GHS - Ghanaian Cedi</option>
            <option value="GIP">GIP - Gibraltar Pound</option>
            <option value="GMD">GMD - Gambian Dalasi</option>
            <option value="GNF">GNF - Guinean Franc</option>
            <option value="GTQ">GTQ - Guatemalan Quetzal</option>
            <option value="GYD">GYD - Guyanese Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="HNL">HNL - Honduran Lempira</option>
            <option value="HRK">HRK - Croatian Kuna</option>
            <option value="HTG">HTG - Haitian Gourde</option>
            <option value="HUF">HUF - Hungarian Forint</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="ILS">ILS - Israel Shekel</option>
            <option value="IMP">IMP - Isle of Man Pound</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="IQD">IQD - Iraqi Dinar</option>
            <option value="IRR">IRR - Iranian Rial</option>
            <option value="ISK">ISK - Icelandic Krona</option>
            <option value="JEP">JEP - Jersey Pound</option>
            <option value="JMD">JMD - Jamaican Dollar</option>
            <option value="JOD">JOD - Jordanian Dinar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="KES">KES - Kenyan Shilling</option>
            <option value="KGS">KGS - Krygyzstani Som</option>
            <option value="KHR">KHR - Cambodian Riel</option>
            <option value="KMF">KMF - Comorian Franc</option>
            <option value="KPW">KPW - North Korean Won</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="KWD">KWD - Kuwaiti Dinar</option>
            <option value="KYD">KYD - Caymanian Dollar</option>
            <option value="KZT">KZT - Kazakhstani Tenge</option>
            <option value="LAK">LAK - Lao Kip</option>
            <option value="LBP">LBP - Lebanese Pound</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="LRD">LRD - Liberian Dollar</option>
            <option value="LSL">LSL - Basotho Loti</option>
            <option value="LYD">LYD - Libyan Dinar</option>
            <option value="MAD">MAD - Moroccan Dirham</option>
            <option value="MDL">MDL - Moldovan Leu</option>
            <option value="MGA">MGA - Malagasy Ariary</option>
            <option value="MKD">MKD - Macedonian Denar</option>
            <option value="MMK">MMK - Burmese Kyat</option>
            <option value="MNT">MNT - Mongolian Tughrik</option>
            <option value="MOP">MOP - Macau Pataca</option>
            <option value="MRO">MRO - Mauritanian Ouguiya</option>
            <option value="MRU">MRU - Mauritanian Ouguiya</option>
            <option value="MUR">MUR - Mauritian Rupee</option>
            <option value="MVR">MVR - Maldivian Rufiyaa</option>
            <option value="MWK">MWK - Malawian Kwacha</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="MZN">MZN - Mozambican Metical</option>
            <option value="NAD">NAD - Namibian Dollar</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="NIO">NIO - Nicaraguan Cordoba</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="NPR">NPR - Nepalese Rupee</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="OMR">OMR - Oman Rial</option>
            <option value="PAB">PAB - Panamanian Balboa</option>
            <option value="PEN">PEN - Peruvian Sol</option>
            <option value="PGK">PGK - Papua New Guinean Kina</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="PYG">PYG - Paraguayan Guarani</option>
            <option value="QAR">QAR - Qatari Riyal</option>
            <option value="RON">RON - Romanian Leu</option>
            <option value="RSD">RSD - Serbian Dollar</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="RWF">RWF - Rwandan Franc</option>
            <option value="SAR">SAR - Saudi Arabian Riyal</option>
            <option value="SBD">SBD - Solomon Islander Dollar</option>
            <option value="SCR">SCR - Seychellois Rupee</option>
            <option value="SDG">SDG - Sudanese Pound</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="SHP">SHP - Saint Helenian Pound</option>
            <option value="SLL">SLL - Sierra Leonean Leone</option>
            <option value="SOS">SOS - Somali Shilling</option>
            <option value="SRD">SRD - Surinamese Dollar</option>
            <option value="SSP">SSP - South Sudanese Pound</option>
            <option value="STD">STD - Sao Tomean Dobra</option>
            <option value="STN">STN - Sao Tomean Dobra</option>
            <option value="SVC">SVC - Salvodoran Colon</option>
            <option value="SYP">SYP - Syrian Pound</option>
            <option value="SZL">SZL - Swazi Lilangeni</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="TMT">TMT - Turmenistani Manat</option>
            <option value="TND">TND - Tunisian Dollar</option>
            <option value="TOP">TOP - Tongan Pa'anga</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="TTD">TTD - Trinidadian Dollar</option>
            <option value="TWD">TWD - Taiwan New Dollar</option>
            <option value="TZS">TZS - Tanzanian Shilling</option>
            <option value="UAH">UAH - Ukranian Hryvnia</option>
            <option value="UGX">UGX - Ugandan Shilling</option>
            <option value="USD">USD - US Dollar</option>
            <option value="UYU">UYU - Uruguayian Peso</option>
            <option value="UZS">UZS - Uzbekistani Som</option>
            <option value="VES">VES - Venezuelan Bolivar</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="VUV">VUV - Ni-Vanuatu Vatu</option>
            <option value="WST">WST - Samoan Tala</option>
            <option value="XAF">XAF - Central African Franc</option>
            <option value="XAG">XAG - Silver Ounce</option>
            <option value="XAU">XAU - Gold Ounce</option>
            <option value="XCD">XCD - East Caribbean Dollar</option>
            <option value="XDR">XDR - IMR Special Drawing Rights</option>
            <option value="XOF">XOF - CFA Franc</option>
            <option value="XPD">XPD - Palladium Ounce</option>
            <option value="XPF">XPF - CFP Franc</option>
            <option value="XPT">XPT - Platinum Ounce</option>
            <option value="YER">YER - Yemeni Rial</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="ZMW">ZMW - Zambian Kwacha</option>
            <option value="ZWL">ZWL - Zimbabwean Dollar</option>
          </select>
        </div>
      </div>
      <div className="buttons">
        <button onClick = {btnClick} className="btn">Convert</button>
        {bool ? <p className="result">Assalam </p> : <p className="result"><span className="span">{amount} {fromstate}</span> ===&gt; <br></br> <span className="span2">{results} {tostate}</span></p>}
        
      </div>
      <footer>
        <h3> &copy; 2022 | <a href="https://asliddin.com">Asliddin Amirov</a></h3>
      </footer>
    </div>
  );
}
