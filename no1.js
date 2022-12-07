//Nomor 1

function discount(foodsAmmount, foodPrice) {
  let summary = foodsAmmount * foodPrice;
  if (summary >= 60000) {
    discount = (summary * 35) / 100;
    if (discount > 50000) {
      subTotal = summary - 50000;
      console.log(
        "Total Price : " +
          summary +
          "\n" +
          "Discount : 50000 " +
          "\n" +
          "Sub Total : " +
          subTotal
      );
    } else if (discount < 50000) {
      subTotal = summary - discount;
      console.log(
        "Total Price : " +
          summary +
          "\n" +
          "Discount : " +
          discount +
          "\n" +
          "Sub Total : " +
          subTotal
      );
    }
  } else if (summary < 60000) {
    discount = 0;
    subTotal = summary;
    console.log(
      "Total Price : " +
        summary +
        "\n" +
        "Discount : " +
        discount +
        "\n" +
        "Sub Total : " +
        subTotal
    );
  }
}
discount(4, 60000);
