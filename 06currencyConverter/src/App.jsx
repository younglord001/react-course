import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const fromCurrencyData = useCurrencyInfo(fromCurrency);
  const toCurrencyData = useCurrencyInfo(toCurrency);

  const [convertedAmount, setConvertedAmount] = useState(0);
  const fromOptions = Object.keys(fromCurrencyData);
  const ToOptions = Object.keys(toCurrencyData);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => setConvertedAmount(amount * fromCurrencyData[toCurrency]); 
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onCurrencyTypeChange={(fromCurrency)=>setFromCurrency(fromCurrency)}
                            currencyOptions={fromOptions}
                            selectedCurrency={fromCurrency}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onCurrencyTypeChange={(toCurrency)=>setToCurrency(toCurrency)}
                              currencyOptions={ToOptions}
                              selectedCurrency={toCurrency}
                              amountDisabled
                              onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}

                          />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency} to {toCurrency}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
