import inquirer from "inquirer";
import isURL from "validator/lib/isURL";
import colors from "colors";
import type { ProxyTarget } from "./interface";

const queryQuestions = async (): Promise<ProxyTarget> => {
  const answer = await inquirer.prompt({
    type: "input",
    message: "Please enter the URL of the proxy target: ",
    validate: (value) => {
      if (isURL(value)) {
        return true;
      }
      return "Invalid url format, please correct your input.";
    },
    name: "url",
  });

  console.log(""); // Add empty line after question

  return {
    url: answer.url,
  };
};

const getProxyTarget = async (): Promise<ProxyTarget> => {
  let proxyTarget: ProxyTarget = {
    url: "",
  };

  if (process.argv.length < 3) {
    proxyTarget = await queryQuestions();
  } else {
    proxyTarget.url = process.argv[2];

    if (!isURL(proxyTarget.url)) {
      console.error(
        colors.red(
          `Invalid URL format: ${process.argv[2]}, please correct your input.`
        )
      );
      process.exit(0);
    }
  }

  return proxyTarget;
};

function showProxyInfo(target: ProxyTarget) {
  console.log(``);
  console.log(colors.yellow(`Proxy target URL: ${target.url}`));
  console.log(``);
  console.log(`Start listening on port 80 ...`);
}

export { getProxyTarget, showProxyInfo };
