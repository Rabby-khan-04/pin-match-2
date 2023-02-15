const getTheOTP = () => {
  const OTP = Math.round(Math.random() * 10000);
  const otpStr = OTP + "";
  if (otpStr.length === 4) {
    return OTP;
  } else {
    return getTheOTP();
  }
};

document.querySelector(".generate-btn").addEventListener("click", () => {
  const otp = getTheOTP();
  document.getElementById("otp-box").value = otp;
  document.querySelector(".generate-btn").setAttribute("disabled", true);
  document.querySelector(".generate-btn").style.background = "#39458C";
});

document.getElementById("key-pad").addEventListener("click", (e) => {
  const typedKeys = e.target.innerText;
  const myDisplay = document.getElementById("my-screen");
  const oldInput = myDisplay.value;

  if (!isNaN(typedKeys)) {
    const myPin = oldInput + typedKeys;
    myDisplay.value = myPin;
  } else if (typedKeys == "C") {
    myDisplay.value = "";
  } else if (typedKeys == "<") {
    const pinArr = oldInput.split("");
    pinArr.pop();
    const pinStr = pinArr.join("");
    myDisplay.value = pinStr;
  }
});

document.getElementById("pin-sumbit").addEventListener("click", () => {
  const theOTP = document.getElementById("otp-box").value;
  const myPin = document.getElementById("my-screen").value;
  const error = document.getElementById("error");
  const success = document.getElementById("success");
  if (theOTP == myPin) {
    error.style.display = "none";
    success.style.display = "block";
    document.getElementById("otp-box").value = "";
    document.getElementById("my-screen").value = "";
    document.querySelector(".generate-btn").removeAttribute("disabled");
    document.querySelector(".generate-btn").style.background = "#495bc3";
  } else {
    let chance = Number(document.getElementById("chance").innerText);
    console.log(chance);
    chance--;
    document.getElementById("chance").innerText = chance;
    if (chance == 0) {
      document.getElementById("pin-sumbit").setAttribute("disabled", true);
      document.getElementById("pin-sumbit").style.backgroundColor = "#212b62";
    }
    success.style.display = "none";
    error.style.display = "block";
  }
});
