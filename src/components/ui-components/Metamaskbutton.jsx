import { Button } from "@mui/material";
const Web3 = require("web3");

function Metamaskbutton({ children, className, mmAccount, setMmAccount }) {
  const web3 = new Web3(window.ethereum);

  function metamask() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      window.ethereum.on("accountsChanged", function(accounts) {
        setMmAccount(accounts[0]);
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Download Metamask using google chrome extension");
    }
  }

  return (
    <Button
      className={className}
      sx={{
        color: "white",
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: 23,
        px: 5,
        py: 1,
        backgroundColor: "rgba(252, 124, 197, 0.8)",
        borderColor: "#FFADDE",
        borderRadius: 40,
        borderWidth: 2,
        borderStyle: "solid",
        "&:hover": {
          borderColor: "white",
          backgroundColor: "rgba(252, 124, 197, 0.8)",
        },
      }}
      onClick={metamask}
    >
      {children}
    </Button>
  );
}

export default Metamaskbutton;
