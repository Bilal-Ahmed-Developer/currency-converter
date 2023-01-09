import inquirer from "inquirer"

const usdTopkr = 227.25;
const pkrTousd = 0.0044;
const pkrtoeuro = 242.33;
const eurotopkr = 0.0041;
const eurotousd = 1.07;
const usdtoeuro = 0.94;


async function Converter() {
      const answer: { SelectCurrency: string, tocurency: string, amount: number } = await inquirer.prompt([{
            name: "SelectCurrency",
            type: "list",
            choices: ["Pkr", "Usd", "Euro"],
            message: "please select currency you want to convert"
      },
      {
            name: "tocurency",
            type: "list",
            choices: ["Pkr", "Usd", "Euro"],
            message: "select to which currency you want to convert in"
      },
      {
            name: "amount",
            type: "number",
            message: "Enter the amount"
      }
      ]);
      switch (answer.SelectCurrency) {
            case "Usd":
                  if (answer.tocurency === "Pkr") {
                        let amount = answer.amount * usdTopkr;
                        console.log(amount)
                  }
                  else if (answer.tocurency === "Euro") {
                        let amount = answer.amount * usdtoeuro;
                        console.log(amount)
                  } else {
                        console.log(answer.amount)
                  }
                  break
            case "Euro":
                  if (answer.tocurency === "Pkr") {
                        let amount = answer.amount * eurotopkr;
                        console.log(amount)
                  }
                  else if (answer.tocurency === "Usd") {
                        let amount = answer.amount * eurotousd
                        console.log(amount)
                  } else {
                        console.log(answer.amount)
                  }
                  break;

            case "Pkr":
                  if (answer.tocurency === "Usd") {
                        let amount = answer.amount * pkrTousd;
                        console.log(amount)
                  }
                  else if (answer.tocurency === "Euro") {
                        let amount = answer.amount * pkrtoeuro
                        console.log(amount)
                  } else {
                        console.log(answer.amount)
                  }
                  break
      }
}
async function again(){
      do {
            await Converter()
      var playagain =await inquirer.prompt([{
            name:'playA',
            type:"list",
            choices:["YES","NO"],
            message:"Do you want to convert more/ Yes : No"
      }])
} while (playagain.choices ==="Yes" ||playagain.playA ==="yes" ||playagain.playA ==="y" ||playagain.playA ==="YES" );
}
again()