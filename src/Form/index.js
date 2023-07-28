import React, { useState } from "react";
import "./style.css";
import currencyBoard from "./currencyBoard";
import Result from "./Result";

const Form = () => {
    const [result, setResult] = useState(null);
    const [currency, setCurrency] = useState(currencyBoard[0].short);
    const [amount, setAmount] = useState("");

    const calculateResult = (currency, amount) => {
        const rate = currencyBoard.find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span className="form__label-text"><strong>Waluta</strong></span>
                        <select className="form__field form__input"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencyBoard.map((currency => (
                                <option
                                    key={currency.key}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))
                            }

                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__label-text"><strong>PLN*</strong></span>
                        <input type="number" className="form__input " min="1" step="any"
                            placeholder="Proszę podać kwotę PLN"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)} />
                    </label>
                </p>
                <p><b>Kwota po przewalutowaniu:</b><strong className="result"> <Result result={result} /> </strong></p>
            </fieldset>
            <button className="form__button">Przelicz</button>
            <p><i>*-pole wymagane</i></p>
        </form>
    );
};

export default Form;