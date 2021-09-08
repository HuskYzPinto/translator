import { Box, Input, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {}

const thaiLower = "ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ";
const thaiUpper: string = '+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';
const thai: string =
  'ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';
const eng: string =
  "1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?";

const Translator: React.FC<Props> = (props: Props) => {
  
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<string>("แสดงผลตรงนี้ (Results here)");
  const [mode, setMode] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [dest, setDest] = useState<string>("");

  const translate = () => {
    let text = message;
    if (mode === "cap") {
      setResult(capSwitch(text));
    } else if (mode === "lang") {
      setResult(langSwitch(text));
    }
    //check for language and case
  };

  const capSwitch = (string: string) => {
    let output = "";
    //check if Thai
    if (thai.includes(string[0])) {
      for (var i = 0; i < string.length; i++) {
        let char = string[i];
        if (thaiLower.indexOf(char) === -1 && thaiUpper.indexOf(char) === -1) {
          output += char;
        } else if (thaiLower.indexOf(char) !== -1) {
          output += thaiUpper[thaiLower.indexOf(char)];
        } else if (thaiUpper.indexOf(char) !== -1) {
          output += thaiLower[thaiUpper.indexOf(char)];
        }
      }
    } else {
      output = "This function only works in Thai, sorry for the inconvenience.";
    }
    return output;
  };

  const langSwitch = (string: string) => {
    let output = "";
    if (thai.includes(string[0])) {
      setSource(thai);
      setDest(eng);
    } else {
      setSource(eng);
      setDest(thai);
    }

    for (var i = 0; i < string.length; i++) {
      console.log("char" + string[i]);
      console.log("output" + output);
      if (!thai.includes(string[i]) && !eng.includes(string[i])) {
        output += string[i];
      } else {
        output += dest[source.indexOf(string[i])];
      }
    }
    console.log(output);
    return output;
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    console.log(message);
    translate();
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin="auto">
          <Box display="flex" flexDirection="row" padding="2rem">
            <Input
              type="text"
              name="message"
              value={message}
              placeholder="type your message here..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              sx={{ width: "50%", borderStyle: "solid", borderRadius: "0.5rem", borderColor: "primary.dark", borderWidth: "0.1rem" }}
            />
            <Select
              value={mode}
              label="Mode"
              onChange={(e) => {
                setMode(e.target.value);
              }}
              sx={{ height: "2rem", width: "20%", marginX: "1rem" }}>
              <MenuItem value="cap"> Capitalisation </MenuItem>
              <MenuItem value="lang"> Language</MenuItem>
            </Select>
          </Box>
          <Input
            type="submit"
            sx={{
              marginTop: "1rem",
              width: "25%",
              alignItems: "center",
              marginX: "auto",
              borderStyle: "solid",
              borderWidth: "0.2rem",
              bgcolor: "primary.dark",
              borderColor: "primary.dark",
              ":hover": { bgcolor: "primary.light" },
            }}
            disableUnderline
          />
        </Box>
      </form>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: "primary.light",
          width: "500px",
          height: "50px",
          borderStyle: "solid",
          borderColor: "primary.dark",
          borderWidth: "0.10rem",
          marginTop: "2rem",
          marginX: "auto",
        }}>
        <Typography fontWeight="bold"> {result} </Typography>
      </Box>
    </Box>
  );
};

export default Translator;
