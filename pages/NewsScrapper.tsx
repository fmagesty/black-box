import Link from "next/link";
import { useState } from "react";
import scrappePage from "./api/scrappePage";
import styles from "../styles/newsScrapper.module.css";

export default function NewsScrapper() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    scrappePage();
  };

  const handleSubmit = () => {
    console.log("inputValue:", inputValue);
  };

  return (
    <>
      <h1>This is News Scrapper</h1>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <input
          type={"text"}
          placeholder={"Enter text here"}
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        <button
          className={styles.scrappePageBtn}
          onClick={() => handleClick()}
          type={"submit"}>
          Submit
        </button>
      </form>

      <div>
        <button>
          <Link href="/">Back to Homepage</Link>
        </button>
      </div>
    </>
  );
}
