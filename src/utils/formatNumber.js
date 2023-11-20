const formatNumber = (number) => {
  return new Intl.NumberFormat("it-IT", {
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export default formatNumber;
