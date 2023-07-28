const Result = ({ result }) => {
    return (
        <p>
            {result && (
                <>
                    {result.sourceAmount.toFixed(2)} PLN =&nbsp;
                    <strong>
                        {result.targetAmount.toFixed(2)} {result.currency}
                    </strong>
                </>
            )}
        </p>
    );
};

export default Result;