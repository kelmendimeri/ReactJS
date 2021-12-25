import React from "react";

export default function Footer() {
  return (
    <div id="Footer" style={{ marginBottom: "10px" }}>
      <footer className="bg-dark text-light text-center text-lg-start">
        <div
          className="text-center"
          style={{
            padding: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <a
            className="text-light"
            style={{ textDecoration: "none" }}
            href="https://www.github.com/kelmendimeri"
            target={"_blank"}
            rel="nonreferrer noreferrer"
          >
            © {new Date().getFullYear()} Copyright: Kelmend Imeri
          </a>
        </div>
      </footer>
    </div>
  );
}
